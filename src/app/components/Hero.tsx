import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 }, // Efek stagger per huruf
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 }, // Mulai dari bawah
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.3 } },
};

const Hero = () => {
  const teks1 = "Front-End Developer".split("");
  return (
    <div id="home" className="h-[100vh] grid grid-cols-1 lg:grid-cols-3 w-[90%]  m-auto gap-4 p-4 font-primary bg-black lg:mt-0 mt-12">
      <div className="m-auto  lg:col-span-2 col-span-1 text-white order-2 lg:order-1 ">
        <div className="text-3xl">
          <span className="inline-block">
           MUHAMMAD SYAHRIAL
          
          </span>
        </div>

        <motion.p
          className="text text-7xl my-6 font-bold w-[360px]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {teks1.map((char, index) => (
            <motion.span
              className="inline-block"
              key={index}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", stiffness: 100, damping: 8 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="text text-lg text-justify lg:w-fit w-80"
        >
          A junior frontend developer who currently focused on Web Development.
          Other than that, I also interested in Mobile Development. I love to learn new things and always open to new
          opportunities.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -120 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 8 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex gap-3 my-6 "
        >
          <button className="button cursor-pointer bg-primary px-6 py-3 rounded-3xl hover:bg-transparent border-transparent hover:border-primary border-2 ">
            Download CV
          </button>
          <button className="button cursor-pointer  border-2 border-primary  px-6 py-3 rounded-3xl hover:bg-primary">
            Contact Me
          </button>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 8 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center order-1 lg:order-2"
      >
        <Image
          src="/images/hero.jpg"
          alt="hero"
          width={250}
          height={250}
          className=" w-[200px] h-[200px]   lg:w-96 lg:h-96  object-cover rounded-full border-4 border-white p-2 flex justify-center items-center"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
