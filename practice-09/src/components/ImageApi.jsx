import React, { useState } from 'react';

const ImageApi = () => {
  const [image, setImage] = useState('');

  const fetchImage = async () => {
    try {
      const response = await fetch(
        'https://dummyjson.com/icon/abc123/150'
      );

      const blob = await response.blob();

      const imageUrl = URL.createObjectURL(blob);

      setImage(imageUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'lightblue',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: '10px' }}>Image API</h2>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: 'darkblue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={fetchImage}
      >
        Fetch Image
      </button>

      {image && (
        <img
          src={image}
          alt="Fetched"
          style={{ marginTop: '15px', maxWidth: '150px', borderRadius: '5px' }}
        />
      )}
    </div>
  );
};

export default ImageApi;