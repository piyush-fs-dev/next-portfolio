'use client'

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles } from '@/ui';
import { Image } from '@/ui';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [`I create stuff sometimes`, 'Guy-who-loves-Development', '<BelievesInPracticalThings/>', 'Creator,Developer,Innovator'],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div style={{ position: "relative", width: "100px", height: "200px", marginTop: "-4em" }}>
        <Image
          src="/assets/images/profile_image_primary.jpg"
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
        <h2 className='text-xl lowercase text-[#ccd6f6] font-bold'>hi <span className='text-xl lowercase lg:text-2xl text-[#64ffda] font-bold'>ayush</span> here</h2>
        <h1 className='text-xl lg:text-3xl font-semibold px-10 mb-4 mt-4 text-[#ccd6f6]'>
          {text}
          <Cursor cursorColor='#64ffda' />
        </h1>

        <div className='mt-4'>
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