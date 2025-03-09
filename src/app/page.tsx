'use client'
import About from "./components/About";
import CursorBlur from "./components/CursorBlur";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useEffect } from "react";


const LoadingOverlay = ({ setLoading }) => {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplit(true);
      setTimeout(() => setLoading(false), 1000); // Setelah animasi selesai, hilangkan overlay
    }, 1500); // Durasi sebelum gerbang terbuka
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: split ? 0 : 1 }}
      transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-full bg-blue-500 flex flex-col items-center justify-center z-50"
    >
      {/* Text Loading */}
      <motion.p
        initial={{ opacity: 1 }}
        animate={{ opacity: split ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12 font-primary font-bold text-3xl"
      >
        Loading...
      </motion.p>

      {/* Garis Tengah */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black h-[10px] absolute"
      />

      {/* Gerbang Atas */}
      <motion.div
        initial={{ top: "50%", height: "5px", width: "100%", opacity: 0 }}
        animate={split ? { top: "0%", height: "50vh", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black absolute"
      />

      {/* Gerbang Bawah */}
      <motion.div
        initial={{ bottom: "50%", height: "5px", width: "100%", opacity: 0 }}
        animate={split ? { bottom: "0%", height: "50vh", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black absolute"
      />
    </motion.div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     alert("Welcome to my portfolio");
  //   }, 3000);

  //   return () => clearTimeout(timer); // Bersihkan timer kalau komponen unmount
  // }, []); // Dependency array kosong biar jalan sekali saat pertama render
  return (
    <div className="bg-black no-scrollbar overflow-y-scroll h-screen">
      {loading ? <LoadingOverlay setLoading={setLoading} />:(<div>

      <CursorBlur/>
      <Navbar />
      
      <Hero />
      <div className="lg:my-12 my-24">
      <About/>
      </div>
      <Project/>
      <Footer/>
      </div>)}
    </div>
  );
}
