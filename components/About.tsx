'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row justify-evenly h-screen px-10 max-w-7xl items-center mx-auto'>
       <h3 className='absolute top-24 uppercase tracking-[17px] text-gray-500 text-2xl'>About</h3>

       <motion.img
       initial={{
        x: -200,
        opacity: 0
       }}
       transition={{
        duration: 1.2
       }}
       whileInView={{ opacity: 1,x: 0 }}
       viewport={{ once: true }}
       src='https://i.postimg.cc/V6MKyhsb/2nd.jpg'
       className='-mb-20 flex-shrink-0 w-56 h-56 mt-28 rounded-full object-cover md:rounded-lg md:w-84 md:h-64 md:mb-10 xl:h-[380px] xl:w-[300px] xl:mt-20'
       />

       <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl font-semibold mt-16'>
          Here is a <span className='underline decoration-[#64ffda]'>small</span> background
        </h4>
        <p className='text-sm'>
        My name is Ayush Raj. I am a 4th year student pursuing Batchelor of Computer Science and Engineering from Lovely Professional University.
        I have a keen interest in development i.e Frontend Development and love to know how things work in website or apps and how the website is looking so awesome of some apps.
        Coming towards my technical skills, I have explored more on HTML, CSS, JavaScript, ReactJs, and Java. I have also done projects in development site using these languages.
        You can see them below in the projects part.
        </p>
       </div>

    </div>
  )
}

export default About;