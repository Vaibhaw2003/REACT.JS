import React from 'react';

const Skills = () => {
  return (
    <section
      style={{
        minHeight: '500px',
        padding: '60px 20px',
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
          backgroundColor: 'white',
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
            marginBottom: '15px',
          }}
        >
          My Skills
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '30px',
          }}
        >
          Here are some of my technical skills:
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
          }}
        >
          <li style={skillStyle}>HTML</li>
          <li style={skillStyle}>CSS</li>
          <li style={skillStyle}>JavaScript</li>
          <li style={skillStyle}>React</li>
          <li style={skillStyle}>Node.js</li>
          <li style={skillStyle}>Express.js</li>
          <li style={skillStyle}>MongoDB</li>
          <li style={skillStyle}>Java</li>
          <li style={skillStyle}>Python</li>
        </ul>
      </div>
    </section>
  );
};

const skillStyle = {
  padding: '12px 22px',
  backgroundColor: '#e8f0fe',
  color: '#2563eb',
  borderRadius: '25px',
  fontSize: '16px',
  fontWeight: '600',
};

export default Skills;