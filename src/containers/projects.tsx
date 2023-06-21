"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/ui";
import { useQuery } from "react-query";
import { Loading, Error } from "@/ui";


const fetchData = async () => {
  const res = await fetch(
    "https://portfolio-api-159j.onrender.com/user_details"
  );
  const resultData = (await res.json()) as any;
  return resultData;
};

type Props = {};


const Projects = (props: Props) => {
  const { data, isLoading, isFetching, error, isError } = useQuery(
    "project-data",
    fetchData
  );

  const project: any = data ?? [];

  const skillImages = [
    "/assets/images/css.png",
    "/assets/images/html.png",
    "/assets/images/javascript.png",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col 
     max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 text-2xl font-bold  text-[#ccd6f6]">
        {" "}
        / projects
      </h3>

      {isLoading || isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#0f1c2e] scrollbar-thumb-[#64ffda]/80">
          {project.length > 0
            ? project.map((item: any, index: number) => (
                <div
                  key={item._id + index.toString()}
                  className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center mt-16  p-20 md:p-44 h-screen"
                >
                  <Image
                    initial={{
                      y: -300,
                      opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={item.src}
                    alt="none"
                    className="sm:h-[200px] h-[185px]"
                  />

                  <div className="flex gap-5 items-center">
                    {skillImages.map((src, index) => (
                      <img
                        src={src}
                        key={index}
                        className="h-8"
                        alt="skill-images"
                      />
                    ))}
                  </div>
                  <div className="flex gap-10 items-center">
                    <a
                      target="_blank"
                      href={item.dlink}
                      className="text-xl  text-[#64ffda] flex items-center hover:bg-[#64ffda] hover:px-2 hover:text-black transition-colors duration-200"
                    >
                      Demo
                    </a>
                    <a
                      target="_blank"
                      href={item.clink}
                      className="text-xl  text-[#64ffda] flex items-center hover:bg-[#64ffda] hover:text-black  hover:px-2 transition-colors duration-200"
                    >
                      Code
                    </a>
                  </div>

                  <div className="space-y-10 px-0 max-w-6xl">
                    <h4 className="text-xl sm:text-2xl xl:text-3xl font-semibold text-center mb-[-1em] xl:mb-[-20px] text-[#ccd6f6]">
                      <span className="underline decoration-[#64ffda]/50 text-[#ccd6f6]">
                        {`Case Study ${0 + 1} of ${project.length}:`}
                      </span>
                      {` ${item.name}`}
                    </h4>

                    <p className="text-sm md:text-left xl:text-[16.5px] text-[#8892b0]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      <div className="w-full absolute top-[30%] bg-[#64ffda]/20 left-0 h-[340px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
