import React from 'react'
import { motion } from 'framer-motion'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { IoMailSharp } from 'react-icons/io5'
import { IconType } from 'react-icons'


type sosmedVariant = {
    icon: IconType,
    link: string
}

const sosmedVariants:sosmedVariant[] = [
    {
        icon: BsInstagram,
        link: '#'
    },
    {
        icon: BsLinkedin,
        link: '#'
    },
    {
        icon: IoMailSharp,
        link: '#'
    },
    {
        icon:BsGithub,
        link: '#'
    }
]



const Footer = () => {
  return (
    <div className='text-white w-[90vw] m-auto p-4 mt-24 text-center font-primary'>
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
        className="text text-7xl font-bold">Get In Touch</motion.p>
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
            className="w-42 h-1 bg-white rounded-full m-auto mb-2"
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
            className=" w-30 h-1 bg-white rounded-full m-auto"
          ></motion.div>
          </div>
          <p className='text-2xl text-white mt-6'>Let&apos;s Connect</p>
          <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
          {sosmedVariants.map((sosmed, index) => {
    const Icon = sosmed.icon; // Ambil icon sebagai komponen
    return (
        <a 
            key={index} 
            href={sosmed.link} 
            className="text-2xl font-bold text-white transform-transition bg-blue-500 p-4 rounded-full duration-300 hover:scale-125 hover:text-white"
        >
            <Icon /> {/* Panggil icon sebagai komponen */}
        </a>
    );
})}

            

          </div>
    </div>
  )
}

export default Footer
