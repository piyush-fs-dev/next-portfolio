import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
      duration:2.5
    }}
    className='relative flex justify-center items-center mt-52'>
        <div className='absolute border border-gray-400 rounded-full h-[160px] w-[160px] mt-28 animate-ping'/>
        <div className='absolute border border-gray-800 rounded-full h-[320px] w-[320px] mt-28'/>
        <div className='absolute border border-[#3f6897] rounded-full h-[440px] w-[440px] mt-28 animate-pulse'/>
        <div className='absolute border border-gray-800 rounded-full sm:h-[560px] sm:w-[560px] mt-28'/>
    </motion.div>
  )
};

export default BackgroundCircles;