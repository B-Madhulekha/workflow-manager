
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import async from '../components/async.png';
// import record from '../components/record clip.png';
// import watch from '../components/watch,share.png';

// const Clips = () => {
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [recordedChunks, setRecordedChunks] = useState([]);

//   // Start recording screen and audio
//   const handleStartRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: true,
//       });

//       const recorder = new MediaRecorder(stream);
//       setMediaRecorder(recorder);

//       recorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           setRecordedChunks((prev) => [...prev, event.data]);
//         }
//       };

//       recorder.onstop = () => {
//         const blob = new Blob(recordedChunks, { type: 'video/webm' });
//         const url = URL.createObjectURL(blob);
//         const newWindow = window.open('', '_blank');
//         newWindow.document.write('<html><body><video controls autoplay style="width:100%; height:100%"><source src="' + url + '" type="video/webm"></video></body></html>');
//         newWindow.document.close();
//       };

//       recorder.start();
//     } catch (err) {
//       console.error('Error starting screen recording:', err);
//     }
//   };

//   // Stop recording
//   const handleStopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {/* First Container */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 text-center" style={{ height: '400px' }}>
//           <h3 className="text-xl font-bold mb-4">Record in a Snap</h3>
//           <p className="text-gray-600 mb-4">
//             Capture your device's screen with just a few clicks. Record and effortlessly share your videos with anyone.
//           </p>
//           <img src={record} alt="Record in a Snap" className="mx-auto" />
//         </div>

//         {/* Second Container */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 text-center" style={{ height: '400px' }}>
//           <h3 className="text-xl font-bold mb-4">Unlock Async Productivity</h3>
//           <p className="text-gray-600 mb-4">
//             Skip the meetings and share all of your design updates, feedback videos, onboarding videos, and more in one place.
//           </p>
//           <img src={async} alt="Unlock Async Productivity" className="mx-auto" />
//         </div>

//         {/* Third Container */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 text-center" style={{ height: '400px' }}>
//           <h3 className="text-xl font-bold mb-4">Watch, Share, Collaborate</h3>
//           <p className="text-gray-600 mb-4">
//             Clips automatically generate a link, allowing you to quickly share your clips anywhere, even outside of your Workspace.
//           </p>
//           <img src={watch} alt="Watch, Share, Collaborate" className="mx-auto" />
//         </div>
//       </div>

//       {/* Central Section */}
//       <div className="text-center">
//         <h3 className="text-2xl font-bold mb-4">Create your first Clip!</h3>
//         <p className="text-gray-600 mb-4">
//           Create and share screen recordings to give your teammates context. Save your recordings, attach them to tasks, or share them anywhere.{' '}
//           <Link to="/learn-more" className="text-blue-500 hover:underline">
//             Learn more
//           </Link>
//         </p>
//         <button
//           className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//           onClick={handleStartRecording}
//         >
//           Start Recording
//         </button>
//         <button
//           className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 mt-4"
//           onClick={handleStopRecording}
//         >
//           Stop Recording
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Clips;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import async from '../components/async.png';
import record from '../components/record clip.png';
import watch from '../components/watch,share.png';

const Clips = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  // Start recording the current tab
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: 'always' },
        audio: true,
      });

      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      setRecordedChunks([]);
      setIsRecording(true);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        setIsRecording(false);
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
          <html>
            <body style="margin:0;">
              <video controls autoplay style="width:100%; height:100%">
                <source src="${url}" type="video/webm">
              </video>
              <a href="${url}" download="recording.webm" style="display:block; text-align:center; margin-top:10px;">Download Video</a>
            </body>
          </html>
        `);
        newWindow.document.close();
      };

      recorder.start();
    } catch (err) {
      console.error('Error starting screen recording:', err);
    }
  };

  // Stop recording
  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* First Container */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 text-center" style={{ height: '400px' }}>
          <h3 className="text-xl font-bold mb-4">Record in a Snap</h3>
          <p className="text-gray-600 mb-4">
            Capture your device's screen with just a few clicks. Record and effortlessly share your videos with anyone.
          </p>
          <img src={record} alt="Record in a Snap" className="mx-auto" />
        </div>

        {/* Second Container */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 text-center" style={{ height: '400px' }}>
          <h3 className="text-xl font-bold mb-4">Unlock Async Productivity</h3>
          <p className="text-gray-600 mb-4">
            Skip the meetings and share all of your design updates, feedback videos, onboarding videos, and more in one place.
          </p>
          <img src={async} alt="Unlock Async Productivity" className="mx-auto" />
        </div>

        {/* Third Container */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 text-center" style={{ height: '400px' }}>
          <h3 className="text-xl font-bold mb-4">Watch, Share, Collaborate</h3>
          <p className="text-gray-600 mb-4">
            Clips automatically generate a link, allowing you to quickly share your clips anywhere, even outside of your Workspace.
          </p>
          <img src={watch} alt="Watch, Share, Collaborate" className="mx-auto" />
        </div>
      </div>

      {/* Central Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Create your first Clip!</h3>
        <p className="text-gray-600 mb-4">
          Create and share screen recordings to give your teammates context. Save your recordings, attach them to tasks, or share them anywhere.{' '}
          <Link to="/learn-more" className="text-blue-500 hover:underline">
            Learn more
          </Link>
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleStartRecording}
          disabled={isRecording}
        >
          Create Clip
        </button>
      </div>

      {/* Recording Overlay */}
      {isRecording && (
        <div className="fixed top-0 right-0 p-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
            onClick={handleStopRecording}
          >
            Stop Recording
          </button>
        </div>
      )}
    </div>
  );
};

export default Clips;
