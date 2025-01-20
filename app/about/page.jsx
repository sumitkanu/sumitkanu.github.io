import React from 'react';

const About = () => {
  return (
    <section className="bg-primary text-white py-12 px-6">
      <div className="container mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Hello! I'm Sumit Kanu, a passionate and driven software engineer and data scientist currently pursuing my 
          Master of Science in Computer Science at Northeastern University, Boston. With a strong foundation in software 
          development and data engineering, my journey has been marked by a constant quest for knowledge and excellence.
        </p>
        <h2 className="h2 mt-10 mb-4 text-accent">Motivation</h2>
        <p className="text-lg leading-relaxed mb-6">
          Technology has always been my inspiration, offering limitless possibilities to solve real-world problems. 
          My experiences at leading institutions like Citigroup and my research internships at IIT Guwahati and IIT Gandhinagar 
          have reinforced my belief in the power of innovative solutions.
        </p>
        <h2 className="h2 mt-10 mb-4 text-accent">Goals</h2>
        <p className="text-lg leading-relaxed mb-6">
          My goal is to contribute to transformative technologies, whether it be through cutting-edge deep learning architectures 
          like CloudX-net, or scalable web applications like Binge Vault. I aspire to lead projects that impact lives, 
          leveraging my expertise in AI, IoT, and full-stack development.
        </p>
        <h2 className="h2 mt-10 mb-4 text-accent">Skills</h2>
        <p className="text-lg leading-relaxed mb-6">
          Proficient in languages like Python, JavaScript, and Java, I have expertise in frameworks such as React.js, Angular, 
          and TensorFlow. My tech stack includes PySpark, Docker, Kubernetes, and a range of other tools. These enable me to 
          design efficient and scalable solutions for diverse challenges.
        </p>
        <h2 className="h2 mt-10 mb-4 text-accent">Achievements</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
          <li>Recipient of Gold, Silver, and Copper awards at Citigroup for outstanding contributions.</li>
          <li>Published research papers on deep learning and IoT in prestigious journals.</li>
          <li>Leader and mentor in academic and professional settings, including roles in astronomy clubs and Agile teams.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
