"use client";
import About from "./components/About";
import CursorBlur from "./components/CursorBlur";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import { useState, useEffect,useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
// import { useEffect } from "react";

type LoadingOverlayProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ setLoading }) => {
  const [split, setSplit] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setSplit(true);
      setTimeout(() => setLoading(false), 1000); // Setelah animasi selesai, hilangkan overlay
    }, 1500); // Durasi sebelum gerbang terbuka
  }, []);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
      },
      {
        duration: 0.8,
        opacity: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        ease: "back.out(1.7)",
        stagger: 0.01,
      }
    );
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
      ref={boxRef}
        initial={{ opacity: 1 }}
        animate={{ opacity: split ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12 font-primary font-bold text-4xl"
      >
        Loading...
      </motion.p>

      {/* Garis Tengah */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black h-[5px] absolute"
      />

      {/* Gerbang Atas */}
      <motion.div
        initial={{ scaleX: 0, height: "5px", top: "50%", originX: 0.5 }}
        animate={
          split
            ? { top: "0%", height: "50vh", scaleX: 1 } // Naik ke atas & tinggi bertambah
            : { scaleX: 1 } // Melebar dulu
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black absolute w-full"
      />

      {/* Gerbang Bawah */}
      <motion.div
        initial={{ scaleX: 0, height: "5px", top: "50%", originX: 0.5 }}
        animate={
          split
            ? { top: "0%", height: "100vh", scaleX: 1 } // Naik ke atas & tinggi bertambah
            : { scaleX: 1 } // Melebar dulu
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-black absolute w-full"
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
      {loading ? (
        <LoadingOverlay setLoading={setLoading} />
      ) : (
        <div className="">
          <CursorBlur />
          <Navbar />

          <Hero />
          <div className="lg:my-12 my-24">
            <About />
          </div>
          <Project />
          <Footer />
        </div>
      )}
    </div>
  );
}
