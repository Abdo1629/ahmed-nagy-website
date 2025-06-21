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
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';


ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function DashboardPage() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/");
    }else{
      setIsAuthorized(true);
    }
  }, [router]);

  const [dataRows, setDataRows] = useState([]);
  const [stats, setStats] = useState({
    weeklyUsers: 0,
    topCourse: '',
    paidConsultations: 0,
    ratios: {},
  });


  useEffect(() => {
  async function fetchData() {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTxmUZ43QG_Vy9RbrCas1yALvO0J_nnklthTJ-8p0b-dEhbZqWAYuTsMexYBi_VjPMT11gCSFdC4gKb/pub?gid=0&single=true&output=csv');
    const text = await res.text();

    const rows = text.split('\n').slice(1);
    const data = rows.map((row) => {
      const [date, name, email, phone, type, option, course, notes, paymentStatus] = row.split(',');
      return {
        date: date?.trim(),
        name: name?.trim(),
        email: email?.trim(),
        phone: phone?.trim(),
        type: type?.trim(),
        option: option?.trim() || course?.trim(),
        notes: notes?.trim(),
        paymentStatus: paymentStatus?.trim() || 'UNPAID'
      };
    }).filter(r => r.date);

    setDataRows(data);
    calculateStats(data);
  }

  fetchData();
}, []);


  function calculateStats(rows) {
    const oneWeekAgo = moment().subtract(7, 'days');
    const thisWeek = rows.filter(r => moment(r.date).isAfter(oneWeekAgo)).length;

    const courseCounts = {};
    let paidConsult = 0;

    rows.forEach(r => {
      if (r.type === 'Course') {
        courseCounts[r.option] = (courseCounts[r.option]||0)+1;
      } else {
        if (r.type === 'Consultation' && r.paymentStatus === "PAID"){
          paidConsult++;
        }
      }
    });

    const topCourse = Object.entries(courseCounts).sort((a,b)=>b[1]-a[1])[0]?.[0] || '-';
    const total = rows.length;
    const courseRatio = ((rows.filter(r => r.type==='Course').length/total)*100).toFixed(1);
    const consultRatio = ((rows.filter(r => r.type==='Consultation').length/total)*100).toFixed(1);

    setStats({
      weeklyUsers: thisWeek,
      topCourse,
      paidConsultations: paidConsult,
      ratios: { courseRatio, consultRatio },
    });
  }
if (isAuthorized === null) {
  return null;
}else {
  return (
    <>
    
    <Header />
    <div className="margin-top"></div>
    <div className="p-12 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5">
    <div className="bg-[#0056D2] text-white p-3 rounded-full">
      <FaCalendarWeek size={24} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">New This Week</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-1">{stats.weeklyUsers}</p>
    </div>
  </div>

  <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5">
    <div className="bg-[#0056D2] text-white p-3 rounded-full">
      <FaChartLine size={24} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">Top Course</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-1">{stats.topCourse}</p>
    </div>
  </div>

  <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5">
    <div className="bg-[#0056D2] text-white p-3 rounded-full">
      <FaUserTie size={24} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">Paid Consultations</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-1">{stats.paidConsultations}</p>
    </div>
  </div>

  <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-5">
    <div className="bg-[#0056D2] text-white p-3 rounded-full">
      <FaPercentage size={24} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">Ratios</h3>
      <p className="text-base text-gray-800 mt-1">
        Courses {stats.ratios.courseRatio}% <br /> Consult {stats.ratios.consultRatio}%
      </p>
    </div>
  </div>
</div>

<div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-12">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement Breakdown</h3>
  <Bar
    data={{
      labels: ['Courses', 'Consultations'],
      datasets: [
        {
          data: [
            stats.ratios.courseRatio,
            stats.ratios.consultRatio
          ],
          backgroundColor: ['#0056D2', '#72C6FF'],
          borderRadius: 5
        }
      ]
    }}
    options={{
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + "%";
            }
          },
          beginAtZero: true,
          max: 100
        }
      }
    }}
  />
</div>


      <div className="bg-white rounded-lg shadow-md p-6 mt-12">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">All Submissions</h3>
  <div className="overflow-auto">
    <table className="min-w-full table-auto border-collapse text-sm text-left text-gray-700">
      <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
        <tr>
          <th className="px-4 py-3">Date</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Type</th>
          <th className="px-4 py-3">Option</th>
          <th className="px-4 py-3">Notes</th>
          <th className="px-4 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {dataRows.map((r, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">{r.date}</td>
            <td className="px-4 py-2">{r.name}</td>
            <td className="px-4 py-2">{r.email}</td>
            <td className="px-4 py-2">{r.type}</td>
            <td className="px-4 py-2">{r.option}</td>
            <td className="px-4 py-2">{r.notes}</td>
            <td className={`px-4 py-2 font-medium ${r.paymentStatus.toLowerCase()==="paid" ? "text-green-600" : "text-red-500"}`}>
              {r.paymentStatus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
          <ScrollToTop />
          <Footer/>
    </>
  );
}
}
