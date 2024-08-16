import React from 'react';
import './Loading.css'; // Ensure to create this CSS file and define styles

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
