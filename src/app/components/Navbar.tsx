"use client";
import { Files, Mail, TvMinimal, UserRound } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";





const NavItems = () => {
  return (
    <motion.div
      animate={{
        scale: [0, 1.2, 0.9, 1, 1],
        rotate: [0, 0, 0, 0],
        boxShadow: [
          "0px 0px 10px rgba(0,0,0,0.2)",
          "0px 0px 20px rgba(0,0,0,0.4)",
        ],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.75, 1],
      }}
      className="h-[90vh] w-[100vw] m-auto bg-white/20 backdrop-blur-lg z-50 lg:top-20 top-15 fixed"
    >
      <div className="flex flex-col h-full m-auto justify-center items-center space-y-4">
        <a
          href="#"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white"
        >
          Home
        </a>
        <a
          href="#"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white"
        >
          About
        </a>
        <a
          href="#"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white"
        >
          Contact
        </a>
      </div>
    </motion.div>
  );
};

const BottomBar = () => {
  return (
    <motion.div
      // animate={{
      //   scale: [0, 1.2, 0.9, 1, 1],
      //   rotate: [0, 0, 0, 0],
      //   boxShadow: [
      //     "0px 0px 10px rgba(0,0,0,0.2)",
      //     "0px 0px 20px rgba(0,0,0,0.4)",
      //   ],
      // }}
      // transition={{
      //   duration: 1,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.75, 1],
      // }}
      className="h-[10vh] w-[100vw] m-auto bg-black backdrop-blur-lg  z-50 fixed bottom-0"
    >
      <div className="flex flex-row h-full m-auto justify-center items-center space-x-16">
        <a
          href="#home"
          className="text-2xl font-bold text-white transform-transition duration-300  hover:text-white  hover:-translate-y-5 hover:rounded-full hover:bg-blue-500 hover:p-4 hover:border-4 border-transparent"
        >
          <TvMinimal />
        </a>
        <a
          href="#"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white hover:-translate-y-5 hover:rounded-full hover:bg-blue-500 hover:p-4 hover:border-4 border-transparent"
        >
          <UserRound />
        </a>
        <a
          href="#"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white hover:-translate-y-5 hover:rounded-full hover:bg-blue-500 hover:p-4 hover:border-4 border-transparent"
        >
          <Files />
        </a>
        <a
       
          href="#footer"
          className="text-2xl font-bold text-white transform-transition duration-300 hover:scale-125 hover:text-white hover:-translate-y-5 hover:rounded-full hover:bg-blue-500 hover:p-4 hover:border-4 border-transparent"
        >
          <Mail />
        </a>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <div className="lg:hidden md:hidden">
        <BottomBar/>
      </div>
      <div className="hidden lg:block md:block">
        <div className="grid grid-cols-2 gap-4 p-4 bg-transparent backdrop-blur backdrop-lg fixed w-full z-40">
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 76 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
            </svg>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleNav}
              className="button cursor-pointer burger text-white p-2 space-y-1"
            >
              <div
                className={`w-10 h-1 bg-white rounded-full transition-all ease duration-300 ${
                  navOpen ? "rotate-45 translate-y-2 " : ""
                }`}
              ></div>

              <div
                className={`w-10 h-1 bg-white rounded-full transition-all ease duration-300 ${
                  navOpen ? " -rotate-45 translate-y-[1px]  " : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
        {navOpen ? <NavItems /> : null}
      </div>
    </div>
  );
};

export default Navbar;
