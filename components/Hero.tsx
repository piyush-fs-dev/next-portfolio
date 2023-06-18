'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
    const [text,count] = useTypewriter({
      words: [`Hi, My name's Ayush Raj`,'Guy-who-loves-Development','<BelievesInPracticalThings/>','Creator,Developer,Innovator'],
      loop: true,
      delaySpeed: 2000
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div style={{ position: "relative", width: "100px", height: "200px", marginTop: "-4em" }}>
      <motion.img
        src="https://i.postimg.cc/8cmwcr6p/1st.jpg"
        alt="Your Image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          willChange: "transform",
        }}
        animate={{
          borderRadius: ["10%", "40%", "8%"], // Curve the corners back and forth
          boxShadow: "0 0 3px 2px rgba(255, 255, 255, 0.2)", // Add a subtle shadow effect
          scale: [1, 1.1, 1], // Slightly scale the image to simulate movement
          
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
    
       <div className='z-20'>
        <h2 className='lg:text-lg text-[16px] uppercase text-gray-300 tracking-[14px]'>software engineer</h2>
        <h1 className='text-3xl lg:text-5xl font-semibold px-10 mb-4'>
            {text}
            <Cursor />
        </h1>

        <div>
          <a href='#home'>
          <button className='heroBtn'>Home</button>
          </a>
          <a href="#about">
          <button className='heroBtn'>About</button>
          </a>
          <a href="#skills">
          <button className='heroBtn'>Skills</button>
          </a>
          <a href="#projects">
          <button className='heroBtn'>Projects</button>
          </a>
          <a href="#contact">
          <button className='heroBtn'>Contact</button>
          </a>
        </div>
       </div> 
    </div>
  )
};

export default Hero;