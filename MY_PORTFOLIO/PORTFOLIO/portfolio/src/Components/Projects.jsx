import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'DonaMart',
      description:
        'An e-commerce website for eco-friendly disposable products such as Dona, Pattal, Areca Leaf Plates and Bowls.',
      tech: 'PHP, MySQL, Bootstrap, JavaScript',
      github: 'https://github.com/Vaibhaw2003/DonaMart',
    },
    {
      title: 'DonaMart.INV',
      description:
        'A PHP-based inventory and GST billing system designed to manage products, inventory and billing operations.',
      tech: 'PHP, MySQL, Bootstrap, JavaScript',
      github: 'https://github.com/Vaibhaw2003/DonaMart.INV',
    },
    {
      title: 'Hospital Information Management System',
      description:
        'A web-based system designed to manage and automate different hospital operations and information.',
      tech: 'React.js, Node.js, Express.js, MySQL, JWT',
      github:
        'https://github.com/Vaibhaw2003/Hospital-Information-Management-System.',
    },
    {
      title: 'Currency Converter App',
      description:
        'A Flutter application that converts currencies using live exchange-rate data with a clean mobile interface.',
      tech: 'Flutter, Dart, REST API, AdMob, GetX',
      github: 'https://github.com/Vaibhaw2003',
    },
    {
      title: 'Color Detection App',
      description:
        'A Flutter application that detects dominant and average RGB colors from images.',
      tech: 'Flutter, Dart, Image Processing',
      github: 'https://github.com/Vaibhaw2003',
    },
  ];

  return (
    <section
      style={{
        minHeight: '500px',
        padding: '60px 20px',
        backgroundColor: '#f5f7fa',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
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
          My Projects
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '40px',
          }}
        >
          Here are some of the projects I have worked on.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
              }}
            >
              <h2
                style={{
                  color: '#222',
                  marginBottom: '12px',
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: '#666',
                  lineHeight: '1.6',
                  minHeight: '80px',
                }}
              >
                {project.description}
              </p>

              <p
                style={{
                  color: '#2563eb',
                  fontWeight: '600',
                  lineHeight: '1.5',
                }}
              >
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '10px 18px',
                  backgroundColor: '#222',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                }}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;