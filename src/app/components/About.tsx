import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoLaravel } from "react-icons/io5";
import {
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="grid  lg:grid-cols-2 min-h-screen bg-black w-[90vw] m-auto p-4 text-white">
      <div className="lg:order-1 order-2 lg:mt-0 lg:pt-0 pt-24 mt-96">
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -120 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 8,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text lg:text-7xl text-6xl font-bold"
        >
          About Me
        </motion.p>
        <div className="container space-y-4 pt-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100, damping: 8 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-30 h-1 bg-white rounded-full"
          ></motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                  delay: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="ml-6 w-30 h-1 bg-white rounded-full"
          ></motion.div>
          <div className="lg:my-12 my-6 lg:ml-6">
            <p className="text text pr-4 text-justify">
              Halo, Saya Muhammad Syahrial, seorang front-end developer yang
              berdedikasi dengan HTML, CSS, dan JavaScript. Saya memiliki
              kesempatan untuk bekerja pada proyek-proyek yang menantang saya
              dan membantu saya untuk berkembang sebagai developer.
            </p>
          </div>
          <div className="w-full grid grid-cols-4 gap-8">
            <div>
              <IoLogoJavascript size={50} />
            </div>
            <div>
              <IoLogoLaravel size={50} />
            </div>
            <div>
              <SiNextdotjs size={50} />
            </div>
            <div>
              <SiTailwindcss size={50} />
            </div>
            <div>
              <SiExpress size={50} />
            </div>
            <div>
              <SiTypescript size={50} />
            </div>
            <div>
              <SiMysql size={50} />
            </div>
            <div>
              <FaGithub size={50} />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:order-2 order-1">
        <div className="relative">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/hero2.jpeg"
              alt="hero"
              width={300}
              height={400}
              className="image bg-cover absolute z-40 lg:left-36 left-12  lg:w-72 w-48 h-auto transition-all duration-500 ease-in-out hover:scale-125 grayscale hover:grayscale-0 border-5 border-white"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                  delay: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/hero3.jpeg"
              alt="hero"
              width={300}
              height={400}
              className="image bg-cover absolute z-30 lg:left-80 left-40 lg:top-10 top-16 lg:w-72 w-48 h-auto transition-all duration-500 ease-in-out hover:scale-125 grayscale hover:grayscale-0 border-5 border-white"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                  delay: 0.4,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/hero4.jpeg"
              alt="hero"
              width={300}
              height={400}
              className="image bg-cover absolute z-20 top-42 lg:w-72 w-48 h-auto transition-all duration-500 ease-in-out hover:scale-125 grayscale hover:grayscale-0 border-5 border-white"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
