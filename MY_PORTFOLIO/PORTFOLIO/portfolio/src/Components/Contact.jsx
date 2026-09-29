import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    alert('Thank you! Your message has been submitted.');

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

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
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '36px',
            color: '#222',
            marginBottom: '15px',
          }}
        >
          Contact Me
        </h1>

        <p
          style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '18px',
            marginBottom: '30px',
          }}
        >
          Feel free to contact me for any project or collaboration.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '8px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '8px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '8px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;