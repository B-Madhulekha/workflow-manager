import React from 'react';
import { useLocation } from 'react-router-dom';

const DownloadClip = () => {
  const location = useLocation();
  const { videoUrl } = location.state || {};

  if (!videoUrl) {
    return <div>No video available to download.</div>;
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Your recording is ready!</h2>
      <video controls style={{ width: '100%', maxHeight: '400px', margin: '0 auto' }}>
        <source src={videoUrl} type="video/webm" />
      </video>
      <div className="mt-6">
        <a
          href={videoUrl}
          download="recording.webm"
          className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Download Video
        </a>
      </div>
    </div>
  );
};

export default DownloadClip;
