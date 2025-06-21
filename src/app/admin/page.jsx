"use client";

import { FaCalendarWeek, FaChartLine, FaUserTie, FaPercentage } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const removeUnsupportedColors = (element) => {
  element.querySelectorAll("*").forEach((el) => {
    const style = getComputedStyle(el);
    if (style.backgroundColor.includes("oklch") || style.color.includes("oklch")) {
      el.style.backgroundColor = "#fff";
      el.style.color = "#000";
    }
  });
};


const generatePDF = async () => {
  try {
    const { jsPDF } = await import("jspdf");
    const html2canvas = (await import("html2canvas")).default;
    const element = document.getElementById("submissions-table");
    removeUnsupportedColors(element);
    const canvas = await html2canvas(element, { scale: 2 });

    const imgData = canvas.toDataURL("image/jpeg", 0.98);
   const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
const pdfWidth = pdf.internal.pageSize.getWidth();
const pdfHeight = pdf.internal.pageSize.getHeight();

const imgHeight = (canvas.height * pdfWidth) / canvas.width;
const imgY = 140;

const finalImgHeight = imgY + imgHeight > pdfHeight
  ? pdfHeight - imgY - 20
  : imgHeight;

pdf.addImage(imgData, "JPEG", 0, imgY, pdfWidth, finalImgHeight);

    const logo = await loadImage("/images/HRinsEgyptBlue.png"); 
    pdf.addImage(logo, 'PNG', 40, 20, 50, 80);
    pdf.setFontSize(18);
    pdf.text("Ahmed Nagy - Submissions Report", 160, 70);
    pdf.setFontSize(12);
    pdf.text(`Date: ${new Date().toISOString().split("T")[0]}`, 160, 90);
    pdf.addImage(imgData, "JPEG", 0, 140, pdfWidth, imgHeight);

    pdf.save(`Submissions-${new Date().toISOString().split("T")[0]}.pdf`);
  } catch (err) {
    console.error("PDF Generation Error:", err);
  }
};

async function loadImage(src) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; 
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      res(canvas.toDataURL("image/png"));
    };
    img.onerror = rej;
    img.src = src;
  });
}


export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [dataRows, setDataRows] = useState([]);
  const [stats, setStats] = useState({
    weeklyUsers: 0,
    topCourse: "",
    paidConsultations: 0,
    ratios: {},
  });

  const [searchTerm, setSearchTerm] = useState("");

const filteredRows = dataRows.filter((row) =>
  Object.values(row).some((val) =>
    val?.toLowerCase().includes(searchTerm.toLowerCase())
  )
);
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxmUZ43QG_Vy9RbrCas1yALvO0J_nnklthTJ-8p0b-dEhbZqWAYuTsMexYBi_VjPMT11gCSFdC4gKb/pub?gid=0&single=true&output=csv"
      );
      const text = await res.text();
      const rows = text.split("\n").slice(1);
      const data = rows
        .map((row) => {
          const [date, name, email, phone, type, option, course, notes, paymentStatus] = row.split(",");
          return {
            date: date?.trim(),
            name: name?.trim(),
            email: email?.trim(),
            phone: phone?.trim(),
            type: type?.trim(),
            option: option?.trim() || course?.trim(),
            notes: notes?.trim(),
            paymentStatus: paymentStatus?.trim() || "UNPAID",
          };
        })
        .filter((r) => r.date);

      setDataRows(data);
      calculateStats(data);
    }
    fetchData();
  }, []);

  function calculateStats(rows) {
    const oneWeekAgo = moment().subtract(7, "days");
    const thisWeek = rows.filter((r) => moment(r.date).isAfter(oneWeekAgo)).length;

    const courseCounts = {};
    let paidConsult = 0;

    rows.forEach((r) => {
      if (r.type === "Course") {
        courseCounts[r.option] = (courseCounts[r.option] || 0) + 1;
      } else {
        if (r.type === "Consultation" && r.paymentStatus === "PAID") {
          paidConsult++;
        }
      }
    });

    const topCourse = Object.entries(courseCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
    const total = rows.length;
    const courseRatio = ((rows.filter((r) => r.type === "Course").length / total) * 100).toFixed(1);
    const consultRatio = ((rows.filter((r) => r.type === "Consultation").length / total) * 100).toFixed(1);

    setStats({
      weeklyUsers: thisWeek,
      topCourse,
      paidConsultations: paidConsult,
      ratios: { courseRatio, consultRatio },
    });
  }

  if (isAuthorized === null) return null;

  return (
    <>  
      <Header />
      <div className="margin-top"></div>
      <div className="p-12 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Weekly Users */}
          <Card icon={<FaCalendarWeek size={24} />} label="New This Week" value={stats.weeklyUsers} />
          <Card icon={<FaChartLine size={24} />} label="Top Course" value={stats.topCourse} />
          <Card icon={<FaUserTie size={24} />} label="Paid Consultations" value={stats.paidConsultations} />
          <Card
            icon={<FaPercentage size={24} />}
            label="Ratios"
            value={
              <>
                Courses {stats.ratios.courseRatio}% <br /> Consult {stats.ratios.consultRatio}%
              </>
            }
          />
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement Breakdown</h3>
          <Bar
            data={{
              labels: ["Courses", "Consultations"],
              datasets: [
                {
                  data: [stats.ratios.courseRatio, stats.ratios.consultRatio],
                  backgroundColor: ["#0056D2", "#72C6FF"],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  ticks: {
                    callback: (value) => value + "%",
                  },
                  beginAtZero: true,
                  max: 100,
                },
              },
            }}
          />
        </div>

        {/* Submissions Table */}
        <div className=" printable-table bg-white text-black rounded-lg shadow-md p-6 mt-6" id="submissions-table">
          <h2 className="text-xl font-bold mb-4">
  Ahmed Nagy - All Submissions ({dataRows.length})
</h2>
<input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="px-4 py-2 border rounded w-full max-w-xs mb-4"
/>

          <table className="min-w-full table-auto border-collapse text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Option</th>
                <th className="px-4 py-3">Notes</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((r, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">{r.date}</td>
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{r.email}</td>
                  <td className="px-4 py-2">{r.phone}</td>
                  <td className="px-4 py-2">{r.type}</td>
                  <td className="px-4 py-2">{r.option}</td>
                  <td className="px-4 py-2">{r.notes}</td>
                  <td className={`px-4 py-2 font-medium ${r.paymentStatus.toLowerCase() === "paid" ? "green" : "red"}`}>
                    {r.paymentStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                {/* PDF Button */}
        <div className="flex justify-end">
          <button
            onClick={generatePDF}
            className="bg-[#0056D2] hover:bg-[#003f9e] text-white font-semibold px-4 py-2 rounded shadow"
          >
            Save as PDF
          </button>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

const Card = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5">
    <div className="bg-[#0056D2] text-white p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
    </div>
  </div>
);
