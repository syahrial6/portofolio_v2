import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "../../project.json";


const Project = () => {
    console.log(data);
  return (
    <div className="w-[90vw] m-auto p-4 text-white font-primary">
      {/* Title */}
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-7xl font-bold"
      >
        My Projects
      </motion.p>

      {/* Decoration Lines */}
      <div className="space-y-4 pt-4">
        {[
          { delay: 0, extraClass: "" },
          { delay: 0.3, extraClass: "ml-6" },
        ].map(({ delay, extraClass }, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                  delay,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`w-32 h-1 bg-white rounded-full ${extraClass}`}
          />
        ))}
      </div>
      <div className="container my-12 grid lg:grid-cols-2 gap-4 font-primary">
        {data.map((project, index) => (
            <motion.div className="relative" key={index}
            variants={{
                hidden: { opacity: 0, x: index%2 !==0 ? 200 : -200 },
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
            src={project.image}
            alt="project"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
          <motion.div
            whileHover={{ opacity: 0 }}
            className=" inset-0 w-full h-full items-center  absolute bg-blue-500/80"
          >
            <div className="text-white text-center p-4 m-auto lg:mt-12">
              <h1 className="text-2xl font-bold mb-3">{project.title}</h1>
             
              
              <div className="w-full flex space-y-1 flex-wrap items-center justify-center space-x-2">
                {project.tags.map((tag, index) => (<div key={index}>
                <p className="lg:text text-sm bg-slate-500 px-4 py-2 rounded-full">
                  {tag}
                </p>
               
                </div>))}
              
              </div>
            </div>
          </motion.div>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
