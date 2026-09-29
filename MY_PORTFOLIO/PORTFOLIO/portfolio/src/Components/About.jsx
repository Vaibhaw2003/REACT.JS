import React from 'react';

const About = () => {
  return (
    <section
      style={{
        height: "800px",
        padding: '20px',
        backgroundColor: '#f5f7fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            color: '#222',
            marginBottom: '20px',
          }}
        >
          About Me
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '20px',
          }}
        >
          Hello! I am a passionate Full-Stack Developer who enjoys
          building modern, responsive, and user-friendly web applications.
          I love working with React, JavaScript, Node.js, Express.js,
          MongoDB, and other modern technologies.
        </p>

        <p
          style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#666',
          }}
        >
          I am continuously improving my development and problem-solving
          skills by working on real-world projects and learning new
          technologies.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
            marginTop: '30px',
          }}
        >
          <span style={skillStyle}>React</span>
          <span style={skillStyle}>JavaScript</span>
          <span style={skillStyle}>Node.js</span>
          <span style={skillStyle}>MongoDB</span>
          <span style={skillStyle}>Express.js</span>
        </div>
      </div>
    </section>
  );
};

const skillStyle = {
  padding: '10px 18px',
  backgroundColor: '#e8f0fe',
  color: '#2563eb',
  borderRadius: '20px',
  fontWeight: '600',
};

export default About;