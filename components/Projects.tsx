'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fetchData = async () => {
  const res = await fetch('https://portfolio-api-159j.onrender.com/user_details', {
    cache: 'no-cache'
  });
  return res.json();
}

type Props = {};

const Projects = async(props: Props) => {
  
// const [ project, setProject ] = useState([]);
// const [isLoading, setIsLoading] = useState(true);

// useEffect(()=>{
//   const getProjectsData = async() => {
//     const res = fetch("https://portfolio-api-159j.onrender.com/user_details");
//     const r =(await res).json();
//     const data = await r;
//     setProject(data);
//     setIsLoading(false); // Set isLoading to false when data is fetched
//   }
//   getProjectsData();
// },[])

  const project = await fetchData();

  const skills = [
    "https://i.postimg.cc/fRxpXJQ9/css.png",
    "https://i.postimg.cc/CKSt4Sw6/html.png",
    "https://i.postimg.cc/52cD68TJ/javascript.png"
  ];  

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col 
     max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[17px] text-gray-500 text-2xl'>
            Projects
        </h3>

         {/* {isLoading ? ( 
        <div className='flex justify-center items-center h-screen'>
          <p className='font-semibold text-xl text-gray-200 animate-pulse'>Loading...</p>
        </div>
       ) : (  */}
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#0f1c2e] scrollbar-thumb-[#64ffda]/80'>
          {project.map((item: any) => (
            <div
              key={item._id}
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center mt-16  p-20 md:p-44 h-screen'
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={item.src}
                alt='none'
                className='sm:h-[200px] h-[185px]'
              />
              <span className='flex gap-5 items-center'>
                <a href={item.dlink} className='text-xl text-gray-400'>
                  Demo
                </a>
                {skills.map((src) => (
                  <img src={src} className='h-8' alt="" />
                ))}
                <a href={item.clink} className='text-xl text-gray-400'>
                  Code
                </a>
              </span>
              <div className='space-y-10 px-0 max-w-6xl'>
                <h4 className='text-xl sm:text-2xl xl:text-3xl font-semibold text-center mb-[-1em] xl:mb-[-20px]'>
                  <span className='underline decoration-[#64ffda]/50'>
                    {`Case Study ${0 + 1} of ${project.length}:`}
                  </span>
                  {` ${item.name}`}
                </h4>

                <p className='text-sm md:text-left xl:text-[16.5px]'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      {/* )} */}

        <div className='w-full absolute top-[30%] bg-[#64ffda]/20 left-0 h-[340px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects;