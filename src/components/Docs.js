// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileImport, faPlus } from '@fortawesome/free-solid-svg-icons';

// const Docs = () => {
//   const [activeTab, setActiveTab] = useState('All');
  
//   // Example data for documents
//   const recentDocs = [
//     { name: 'Document 1', path: '/docs/document1' },
//     { name: 'Document 2', path: '/docs/document2' },
//   ];
//   const favoriteDocs = [
//     { name: 'Favorite Doc 1', path: '/docs/favorite1' },
//   ];
//   const createdByMeDocs = [
//     { name: 'My Doc 1', path: '/docs/mydoc1' },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'All':
//         return <p>Showing all documents...</p>;
//       case 'My Docs':
//         return <p>Showing my documents...</p>;
//       case 'Shared':
//         return <p>Showing shared documents...</p>;
//       case 'Private':
//         return <p>Showing private documents...</p>;
//       case 'Workspace':
//         return <p>Showing workspace documents...</p>;
//       case 'Assigned':
//         return <p>Showing assigned documents...</p>;
//       case 'Archived':
//         return <p>Showing archived documents...</p>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Recent Documents Container */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
//           <h3 className="text-xl font-bold mb-4">Recent</h3>
//           {recentDocs.length > 0 ? (
//             <ul>
//               {recentDocs.map((doc, index) => (
//                 <li key={index} className="mb-2">
//                   <Link to={doc.path} className="text-blue-500 hover:underline">
//                     {doc.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">No recent documents available.</p>
//           )}
//         </div>

//         {/* Favorite Documents Container */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
//           <h3 className="text-xl font-bold mb-4">Favorites</h3>
//           {favoriteDocs.length > 0 ? (
//             <ul>
//               {favoriteDocs.map((doc, index) => (
//                 <li key={index} className="mb-2">
//                   <Link to={doc.path} className="text-blue-500 hover:underline">
//                     {doc.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">No favorite documents available.</p>
//           )}
//         </div>

//         {/* Created by Me Documents Container */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
//           <h3 className="text-xl font-bold mb-4">Created by Me</h3>
//           {createdByMeDocs.length > 0 ? (
//             <ul>
//               {createdByMeDocs.map((doc, index) => (
//                 <li key={index} className="mb-2">
//                   <Link to={doc.path} className="text-blue-500 hover:underline">
//                     {doc.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">No documents created by you.</p>
//           )}
//         </div>
//       </div>

//       {/* Full-width Container with Company Home */}
//       <div className="bg-white shadow-lg rounded-lg mt-6 border-2 border-gray-300 w-full relative" style={{ height: '170px' }}>
//         {/* Company Home Container */}
//         <div
//           className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer absolute top-4 left-4"
//           onClick={() => alert('Company Home clicked')}
//         >
//           <h3 className="text-lg font-bold">Company Home</h3>
//         </div>

//         {/* Import and Add Documents */}
//         <div className="flex space-x-4 absolute top-4 right-4">
//           <div
//             className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
//             onClick={() => alert('Import clicked')}
//           >
//             <FontAwesomeIcon icon={faFileImport} className="mr-2" />
//             <span>Import</span>
//           </div>
//           <div
//             className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
//             onClick={() => alert('Add Documents clicked')}
//           >
//             <FontAwesomeIcon icon={faPlus} className="mr-2" />
//             <span>Add Documents</span>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="mt-4 border-b border-gray-300">
//         <nav className="flex space-x-4">
//           {['All', 'My Docs', 'Shared', 'Private', 'Workspace', 'Assigned', 'Archived'].map(tab => (
//             <button
//               key={tab}
//               className={`text-black hover:font-bold hover:text-blue-500 focus:outline-none ${
//                 activeTab === tab ? 'font-bold text-blue-500 underline' : ''
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Content Display */}
//       <div className="mt-6">
//         {renderContent()}
//       </div>
      
      
      
//     </div>
//   );
// };

// export default Docs;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [step, setStep] = useState(1);  // To track the steps of the import process
  const [file, setFile] = useState(null);  // To store the selected file
  const [loading, setLoading] = useState(false);  // To show loading state
  const [summary, setSummary] = useState('');  // To display document summary

  // Example data for documents
  const recentDocs = [
    { name: 'Document 1', path: '/docs/document1' },
    { name: 'Document 2', path: '/docs/document2' },
  ];
  const favoriteDocs = [
    { name: 'Favorite Doc 1', path: '/docs/favorite1' },
  ];
  const createdByMeDocs = [
    { name: 'My Doc 1', path: '/docs/mydoc1' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'All':
        return <p>Showing all documents...</p>;
      case 'My Docs':
        return <p>Showing my documents...</p>;
      case 'Shared':
        return <p>Showing shared documents...</p>;
      case 'Private':
        return <p>Showing private documents...</p>;
      case 'Workspace':
        return <p>Showing workspace documents...</p>;
      case 'Assigned':
        return <p>Showing assigned documents...</p>;
      case 'Archived':
        return <p>Showing archived documents...</p>;
      default:
        return null;
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:2022/api/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Simulate summary generation delay
      setTimeout(() => {
        setSummary(`Summary of the uploaded document: ${file.name}`);
        setLoading(false);
        setStep(3);  // Proceed to the next step
      }, 2000);
    } catch (error) {
      console.error('Error uploading the file:', error);
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Step 2 of 4</h2>
            <p>Confluence import preparation</p>
            <p>Let's get your data ready!</p>
            <ul className="list-disc ml-5">
              <li>Login to Confluence.</li>
              <li>Navigate to Space Settings in the sidebar.</li>
              <li>Under Manage Space, click on "Export space".</li>
              <li>Where it says Export Formats, select HTML and click Next.</li>
              <li>Ensure "Normal Export" is selected, then click Export.</li>
              <li>When the export has completed, click on the "here" button to download the contents.</li>
            </ul>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Step 3 of 4</h2>
            <p>Select a file to upload</p>
            <p>
              Docs imported will be accessible to the whole Workspace, but you can change permissions
              afterwards. <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </p>
            <input type="file" onChange={handleFileChange} />
            <button
              className={`bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 ${
                !file ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleUpload}
              disabled={!file || loading}
            >
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        );
      case 3:
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Step 4 of 4</h2>
            <p>We're generating a summary of your upload. This may take a few minutes.</p>
            {loading ? (
              <div className="mt-4">
                <span className="animate-pulse text-lg">...</span>
              </div>
            ) : (
              <p>{summary}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {step === 1 || step === 2 || step === 3 ? (
        renderStepContent()
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recent Documents Container */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold mb-4">Recent</h3>
              {recentDocs.length > 0 ? (
                <ul>
                  {recentDocs.map((doc, index) => (
                    <li key={index} className="mb-2">
                      <Link to={doc.path} className="text-blue-500 hover:underline">
                        {doc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No recent documents available.</p>
              )}
            </div>

            {/* Favorite Documents Container */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold mb-4">Favorites</h3>
              {favoriteDocs.length > 0 ? (
                <ul>
                  {favoriteDocs.map((doc, index) => (
                    <li key={index} className="mb-2">
                      <Link to={doc.path} className="text-blue-500 hover:underline">
                        {doc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No favorite documents available.</p>
              )}
            </div>

            {/* Created by Me Documents Container */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
              <h3 className="text-xl font-bold mb-4">Created by Me</h3>
              {createdByMeDocs.length > 0 ? (
                <ul>
                  {createdByMeDocs.map((doc, index) => (
                    <li key={index} className="mb-2">
                      <Link to={doc.path} className="text-blue-500 hover:underline">
                        {doc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No documents created by you.</p>
              )}
            </div>
          </div>

          {/* Full-width Container with Company Home */}
          <div
            className="bg-white shadow-lg rounded-lg mt-6 border-2 border-gray-300 w-full relative"
            style={{ height: '170px' }}
          >
            {/* Company Home Container */}
            <div
              className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer absolute top-4 left-4"
              onClick={() => alert('Company Home clicked')}
            >
              <h3 className="text-lg font-bold">Company Home</h3>
            </div>

            {/* Import and Add Documents */}
            <div className="flex space-x-4 absolute top-4 right-4">
              <div
                className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => setStep(1)}
              >
                <FontAwesomeIcon icon={faFileImport} className="mr-2" />
                <span>Import</span>
              </div>
              <div
                className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => alert('Add Document clicked')}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                <span>Add</span>
              </div>
            </div>
          </div>

          {/* Horizontal Links */}
          <div className="flex justify-around items-center mt-4 border-b border-black pb-2">
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              All
            </Link>
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              My Docs
            </Link>
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              Shared
            </Link>
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              Private
            </Link>
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              Workspace
            </Link>
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              Assigned
            </Link>
            <Link to="#" className="text-black hover:font-bold hover:underline hover:underline-offset-4">
              Archived
            </Link>
          </div>

          {/* Content based on selected link */}
          <div className="mt-6">{renderContent()}</div>
        </>
      )}
    </div>
  );
};

export default Docs;
