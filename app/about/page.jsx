import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>About Me</h1>
      <p style={{ fontSize: '18px' }}>
        Hello! I'm Sumit Kanu, a passionate and driven software engineer and data scientist currently pursuing my 
        Master of Science in Computer Science at Northeastern University, Boston. With a strong foundation in software 
        development and data engineering, my journey has been marked by a constant quest for knowledge and excellence.
      </p>
      <h2 style={{ color: '#555', marginTop: '20px' }}>Motivation</h2>
      <p style={{ fontSize: '16px' }}>
        Technology has always been my inspiration, offering limitless possibilities to solve real-world problems. 
        My experiences at leading institutions like Citigroup and my research internships at IIT Guwahati and IIT Gandhinagar 
        have reinforced my belief in the power of innovative solutions.
      </p>
      <h2 style={{ color: '#555', marginTop: '20px' }}>Goals</h2>
      <p style={{ fontSize: '16px' }}>
        My goal is to contribute to transformative technologies, whether it be through cutting-edge deep learning architectures 
        like CloudX-net, or scalable web applications like Binge Vault. I aspire to lead projects that impact lives, 
        leveraging my expertise in AI, IoT, and full-stack development.
      </p>
      <h2 style={{ color: '#555', marginTop: '20px' }}>Skills</h2>
      <p style={{ fontSize: '16px' }}>
        Proficient in languages like Python, JavaScript, and Java, I have expertise in frameworks such as React.js, Angular, 
        and TensorFlow. My tech stack includes PySpark, Docker, Kubernetes, and a range of other tools. These enable me to 
        design efficient and scalable solutions for diverse challenges.
      </p>
      <h2 style={{ color: '#555', marginTop: '20px' }}>Achievements</h2>
      <ul style={{ fontSize: '16px', listStyleType: 'disc', marginLeft: '20px' }}>
        <li>Recipient of Gold, Silver, and Copper awards at Citigroup for outstanding contributions.</li>
        <li>Published research papers on deep learning and IoT in prestigious journals.</li>
        <li>Leader and mentor in academic and professional settings, including roles in astronomy clubs and Agile teams.</li>
      </ul>
      <h2 style={{ color: '#555', marginTop: '20px' }}>Contact</h2>
      <p style={{ fontSize: '16px' }}>
        Feel free to connect with me on <a href="https://www.linkedin.com/in/sk131" target="_blank" rel="noopener noreferrer" style={{ color: '#0073b1' }}>LinkedIn</a> or explore my projects on <a href="https://github.com/sumitkanu" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>GitHub</a>.
      </p>
    </div>
  );
};

export default About;
