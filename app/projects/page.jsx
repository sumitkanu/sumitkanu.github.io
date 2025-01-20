"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Binge Vault",
    stack: "React, Node.js, MongoDB, Redux, Material-UI, Redis, Bull.js, Docker",
    details: [
      "Developed a media tracker with React.js, Node.js, and MongoDB, featuring user authentication, personalized recommendations, and an OpenAI-powered chatbot for enhanced user interaction. Deployed via Docker and CI/CD pipelines.",
      "Optimized performance with Bull.js for queuing and Redis for caching, ensuring efficient API usage and scalability.",
    ],
  },
  {
    title: "CloudX-net",
    stack: "Python, TensorFlow, Keras, Numpy, Pandas",
    details: [
      "Developed a novel architecture for cloud segmentation from satellite imagery, incorporating Atrous Spatial Pyramid Pooling (ASPP) and Separable Convolutions to improve accuracy by 2% over existing benchmarks.",
      "Experimented with multiple deep learning architectures, including RS-Net, CloudSegNet, CloudNet, and Deep Pyramid Networks, before innovating CloudX-net, which reduced the number of trainable parameters to half.",
    ],
  },
  {
    title: "Trade Winds",
    stack: "Spring Boot, Angular, Kerberos, AWS, Amazon S3, RDS",
    details: [
      "Built a stock trading platform with a Spring Boot backend, Angular frontend, and RESTful APIs for stock tracking and transactions.",
      "Integrated AuthO SSO authentication using the SPNEGO protocol, providing secure, single sign-on capabilities.",
      "Hosted the application using AWS: Amazon S3, and RDS for DB, ensuring high availability, and scalability.",
    ],
  },
  {
    title: "PixelCraft",
    stack: "Java, Java Swing",
    details: [
      "Developed an image processing tool, applying design patterns to make the application scalable, secure, and efficient.",
      "Designed a GUI in Swing, following UI design principles to offer users optimal user experience.",
      "The tool allows users to extract components, compress, rotate, and transform images while offering split previews.",
    ],
  },
  {
    title: "Indoor Navigator",
    stack: "Python, ESP8266, Raspberry Pi",
    details: [
      "Implemented a precise indoor geofencing solution using WiFi signal strength and fingerprinting algorithms.",
      "Achieved location accuracy within one meter, further refined positioning with the K-Nearest Neighbor algorithm.",
    ],
  },
  {
    title: "Testbench for UAVs",
    stack: "Python, Raspberry Pi, Gyroscopes, NAZE 32",
    details: [
      "Designed a UAV test bench to measure thrust, pitch, roll, and yaw using gyroscopes and encoders integrated with a Raspberry Pi.",
      "Developed a quadcopter equipped with a NAZE 32 flight controller and validated its performance using controlled Python scripts.",
    ],
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-12">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16"
          style={{
            gridAutoRows: "min-content",
          }}
        >
          {projects.map((proj, index) => (
            <div
              key={index}
              className="flex flex-col sm:gap-4 gap-6"
            >
              {/* Project Card */}
              <button
                onClick={() => toggleDetails(index)}
                className="flex flex-col items-start gap-4 group"
              >
                <h2 className={`text-[42px] text-left font-bold group-hover:text-accent transition-all duration-500 ${activeIndex === index ? "text-accent" : "text-white"}`}>
                  {proj.title}
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div className="justify-start items-start text-left">
                    <p className="text-white/60">{proj.stack}</p>
                  </div>
                  <div
                    className={`w-[70px] h-[70px] rounded-full group-hover:bg-accent transition-all duration-500 flex items-center justify-center group-hover:rotate-45 ${activeIndex === index ? "bg-accent rotate-45" : "bg-white"}`}
                    style={{aspectRatio: "1 / 1", }}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                </div>
                <hr className="border-t border-white/20 w-full mt-2" />
              </button>

              {/* Description on mobile */}
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg text-white sm:hidden"
                >
                  <ul className="list-disc pl-6 text-white/80">
                    {proj.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}

          {/* Render Description Row for Desktop */}
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg text-white hidden sm:block"
              style={{
                gridColumn: "1 / span 2",
                gridRow: Math.ceil((activeIndex + 1) / 2) + 1,
              }}
            >
              <ul className="list-disc pl-6 text-white/80">
                {projects[activeIndex]?.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
