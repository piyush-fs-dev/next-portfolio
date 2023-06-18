'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

const Skills = (props: Props) => {

  const skills = [

    {
      id: 1,
      src:"https://i.postimg.cc/fRxpXJQ9/css.png",
      title:"HTML",
      style: "shadow-blue-500"
    },

    {
      id: 2,
      src:"https://i.postimg.cc/CKSt4Sw6/html.png",
      title:"CSS",
      style:"shadow-orange-500"
    },

    {
      id: 3,
      src:"https://i.postimg.cc/52cD68TJ/javascript.png",
      title:"JavaScript",
      style:"shadow-yellow-400"
    },

    {
      id: 4, 
      src:"https://i.postimg.cc/MTDzY9k1/react.png",
      title:"React",
      style:"shadow-cyan-600"
    },

    {
      id: 5,
      src:"https://i.postimg.cc/y8bgmYh7/node.png",
      title:"NodeJs",
      style:"shadow-[#9ACD32]"
    },

    {
      id: 6,
      src:"https://i.postimg.cc/YLNt7Chq/tailwind.png",
      title:"Tailwind",
      style:"shadow-sky-400"
    },

    {
      id: 7,
      src:"https://i.postimg.cc/02QPkpBh/ads.png",
      title:"Next Js",
      style:"shadow-gray-200"
    },

    {
      id: 8,
      src:"https://i.postimg.cc/1tFGknpd/java.png",
      title:"Java",
      style:"shadow-orange-400"
    },

    {
      id: 9,
      src:"https://i.postimg.cc/qMNbkL8t/afefas.png",
      title:"MongoDb",
      style:"shadow-green-500 hidden sm:block"
    }

  ]

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className='flex relative flex-col md:text-left xl:flex-row min-h-screen
    max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[17px] text-gray-500 text-2xl'>
          Skills
       </h3> 
       <div>
        <Skill skills={skills}/>
       </div>
    </motion.div>
  )
}

export default Skills;