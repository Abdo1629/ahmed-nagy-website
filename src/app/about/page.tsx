"use client";

import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";
import { motion , useInView} from "framer-motion";
import Footer from "../components/Footer";
import Image from "next/image";
import { MdSlideshow } from "react-icons/md";


export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);
  return (
    <>
      <Header />
      <div className="margin-top"></div>

      <motion.section
        className="bg-gradient-to-b from-[#0056D2] to-[#0073E6] text-white min-h-90 flex items-center justify-center text-center px-6 pb-0 pt-10" ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col max-w-4xl justify-center items-center">
          <Image className="justify-center items-center" src="/images/AhmedNagyWhite.png" width={250} height={250} alt="Ahmed Nagy Logo"></Image>
          <p className="text-xl text-blue-100 mb-3">
            HR Strategist | Founder of HRins Egypt | HR Director @ Odin Investments
          </p>
          <p className="text-md text-blue-200">
            Building real HR systems. Empowering thousands. Shaping the future of people in business.
          </p>
        </div>
      </motion.section>
      <section className="bg-[#0073E6] text-white py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
        <div>
          <h3 className="text-4xl font-bold">
            {startCount && <CountUp end={6000} duration={2} separator="," />}+
          </h3>
          <p className="text-lg mt-2">Trained Professionals</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">
            {startCount && <CountUp end={4000} duration={2} separator="," />}+
          </h3>
          <p className="text-lg mt-2">CV & LinkedIn Consultations</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">
            {startCount && <CountUp end={70} duration={2} />}+
          </h3>
          <p className="text-lg mt-2">Leaders Developed</p>
        </div>
      </div>
    </section>

          <section className="py-8 mb-8 bg-gray-100 text-center">
        <h3 className="text-xl mb-6 font-semibold text-[#0056D2]">Trusted by</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-80">
          <Image src="/images/logo-1.png" alt="Xceed" width={120} height={120} />
          <Image src="/images/logo-2.png" alt="Al Arosa" width={120} height={120} />
          <Image src="/images/logo-3.png" alt="Hawa Pasta" width={120} height={120} />
          <Image src="/images/logo-4.png" alt="Odin Investments" width={120} height={120} />
          <Image src="/images/logo-5.png" alt="Hawa Pasta" width={120} height={120} />
          <Image src="/images/logo-6.png" alt="Odin Investments" width={120} height={120} />
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Mission
          </motion.h2>
          <p className="text-lg leading-8 text-gray-700">
            Transforming HR into a strategic engine for business growth. I help organizations shift from chaos to
            clarity by building systems that empower people and align performance with purpose.
          </p>
        </div>
      </section>

<section className="py-20 bg-white px-6 md:px-20 text-black">
  <div className="courses-heading mb-12">
<MdSlideshow className="heading-icon"/>
  <h2 className="text-3xl font-bold text-center">Media Presence</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {/* MBC Masr 2 - Episode 1 */}
    <motion.div 
      className="bg-gray-100 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className="flex items-center gap-4 mb-4">
        <Image src="/images/mbc-2.png" alt="mbc 2 logo" width={60} height={60} className="rounded-xl"/>
        <div>
          <h4 className="font-bold text-lg">MBC Masr 2</h4>
          <p className="text-sm text-gray-600">“Sabahak Masry”</p>
        </div>
      </div>
      <p className="font-semibold mb-2">“When Should You Resign?”</p>
      <div className="aspect-w-12 aspect-h-10">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MBCMasr/videos/1094396469161703/"
          allowFullScreen
          className="rounded-lg w-full h-full"
        ></iframe>
      </div>
    </motion.div>

    {/* MBC Masr 2 - Episode 2 */}
        <motion.div 
      className="bg-gray-100 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className="flex items-center gap-4 mb-4">
        <Image src="/images/mbc-2.png" alt="mbc 2 logo" width={60} height={60} className="rounded-xl"/>
        <div>
          <h4 className="font-bold text-lg">MBC Masr 2</h4>
          <p className="text-sm text-gray-600">“Sabahak Masry”</p>
        </div>
      </div>
      <p className="font-semibold mb-2">“Can Gen Z Handle Pressure?”</p>
      <div className="aspect-w-12 aspect-h-10">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MBCMASR2/videos/561979840196964/"
          allowFullScreen
          className="rounded-lg w-full h-full"
        ></iframe>
      </div>
    </motion.div>

    {/* MBC Masr 2 - Episode 3 */}
        <motion.div 
      className="bg-gray-100 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className="flex items-center gap-4 mb-4">
        <Image src="/images/mbc-2.png" alt="mbc 2 logo" width={60} height={60} className="rounded-xl"/>
        <div>
          <h4 className="font-bold text-lg">MBC Masr 2</h4>
          <p className="text-sm text-gray-600">“Sabahak Masry”</p>
        </div>
      </div>
      <p className="font-semibold mb-2">“The One Question You Must Answer”</p>
      <div className="aspect-w-12 aspect-h-10">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/MBCMASR2/videos/431350496724758/"
          allowFullScreen
          className="rounded-lg w-full h-full"
        ></iframe>
      </div>
    </motion.div>

    {/* Al Mehwar */}
        <motion.div 
      className="bg-gray-100 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className="flex items-center gap-4 mb-4">
        <Image src="/images/mehwar-logo.png" alt="mehwar logo" width={70} height={70} className="rounded-xl"/>
        <div>
          <h4 className="font-bold text-lg">Al Mehwar</h4>
          <p className="text-sm text-gray-600">“Cairo Today”</p>
        </div>
      </div>
      <p className="font-semibold mb-2">“How to Build a Strong Resume”</p>
      <div className="aspect-w-12 aspect-h-10">
        <iframe
          src="https://www.youtube.com/embed/delb9D4XY9U"
          allowFullScreen
          className="rounded-lg w-full h-full"
        ></iframe>
      </div>
    </motion.div>

    {/* Radio */}
        <motion.div 
      className="bg-gray-100 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <h4 className="font-bold text-lg mb-2">📻 Radio Appearances</h4>
      <p className="text-gray-700">
        Featured on <strong>9090 FM</strong>, <strong>Mega FM</strong>, and <strong>Shaabi FM</strong> discussing HR trends, Gen Z challenges, and upskilling in the digital age.
      </p>
    </motion.div>

    {/* Press */}
        <motion.div 
      className="bg-gray-100 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <h4 className="font-bold text-lg mb-2">📰 Press Coverage</h4>
      <p className="text-gray-700">
        Recognized by leading newspapers such as <i>Al Masry Al Youm</i>, <i>Youm7</i>, and <i>Al Dostor</i> for expertise in people development and career strategy.
      </p>
    </motion.div>

  </div>
</section>


      <section className="bg-[#001F4D] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Want to Work With Me?</h2>
        <p className="text-lg mb-6">Let’s build something meaningful. Book a consultation or training now.</p>
        <a
          href="/booking"
          className="inline-block bg-white text-[#001F4D] font-bold px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Book a Session
        </a>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
}
