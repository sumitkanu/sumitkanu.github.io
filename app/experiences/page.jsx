"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Citigroup",
    date: "2022 - 2024",
    details: [
      "Developed highly modular web applications for data reconciliation, monitoring, and reporting, impacting 5000+ users.",
      "Led the integration of a design system to standardize UI/UX. Facilitated the retirement of Power BI and EUCs by developing end-to-end features for bulk record editing, live data synchronization, report creation with formulas, and report sharing.",
      "Drove Agile development and mentored new team members, contributing to growth and cross-functional collaboration."
    ],
  },
  {
    title: "Data Engineer",
    company: "Citigroup",
    date: "2021 - 2024",
    details: [
      "Developed a PySpark model to detect unfair market practices, iteratively refining features in collaboration with data scientists.",
      "Utilized Hadoop, Spark, and Hive to efficiently manage large trading-activity data, ensuring scalable and robust data processing.",
      "Built a Flask UI with Redis for database management, integrating Plotly for visualizing model results and enhancing user insights."
    ],
  },
  {
    title: "Research Intern",
    company: "IIT Guwahati",
    date: "Summer 2020",
    details: [
      "Simulated beamforming optimization with passive Intelligent Reflecting Surfaces (IRS) in MATLAB, achieving an 8dBm signal boost through convex optimization of IRS reflective phases."
    ],
  },
  {
    title: "Research Intern",
    company: "IIT Gandhinagar",
    date: "Summer 2021",
    details: [
      "Optimized a LoRa-based IoT network for campus-wide air quality monitoring.",
      "Developed wearable posture detectors and parking availability dashboards for enhanced environment and health monitoring."
    ],
  },
];

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 1.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => toggleDetails(index)}
              className="flex flex-col items-start gap-4 group"
            >
              <h2 className="text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500">
                {exp.title}
              </h2>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-start">
                  <p className="text-white/60 text-[30px]">{exp.company}</p>
                  <p className="text-white/60">{exp.date}</p>
                </div>
                <div
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                    transition-all duration-500 flex items-center justify-center group-hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </div>
              </div>
              <hr className="border-white/20 w-full" />
            </button>
          ))}

          {activeIndex !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg text-white md:col-span-2"
              style={{
                gridColumn: activeIndex % 2 === 0 ? "1 / span 2" : "1 / span 2",
              }}
            >
              <ul className="list-disc pl-6 text-white/80">
                {experiences[activeIndex]?.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
