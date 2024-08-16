
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt, faLink } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);

//   const containers = [
//     { title: 'Recents', description: 'View your recent activity and tasks.', links: [
//         { name: 'Task 1', to: '/task1' },
//         { name: 'Task 2', to: '/task2' },
//         { name: 'Projects', to: '/projects' },
//         { name: 'Dashboard', to: '/dashboard' },
//       ]},
//     { title: 'Agenda', description: 'Keep track of your meetings and events.' },
//     { title: 'My Work', description: 'Overview of your current tasks and projects.' },
//     { title: 'Assigned to Me', description: 'Tasks assigned to you by others.' },
//     { title: 'Personal List', description: 'Your personal to-do list and notes.' },
//     { title: 'Assigned Comments', description: 'Comments assigned to your tasks.' },
//     { title: 'Line Up', description: 'Organize and prioritize your tasks.' },
//     { title: 'Ask AI', description: 'Get AI assistance for your tasks and questions.' },
//   ];

//   const handleLinkCopy = (to) => {
//     navigator.clipboard.writeText(window.location.origin + to);
//     alert('Link copied to clipboard');
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//       {containers.map((container, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-lg rounded-lg p-8 border-4 border-grey-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
//           style={{ height: '400px' }}
//           onClick={() => alert(`Clicked on ${container.title}`)}
//         >
//           <div>
//             <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
//             <p className="text-gray-600">{container.description}</p>
//             {container.title === 'Recents' && (
//               <div className="mt-4">
//                 {container.links.map((link, i) => (
//                   <div
//                     key={i}
//                     className="mb-2 flex items-center justify-between"
//                     onMouseEnter={() => setHoveredLinkIndex(i)}
//                     onMouseLeave={() => setHoveredLinkIndex(null)}
//                   >
//                     <Link
//                       to={link.to}
//                       className="text-blue-500 hover:underline"
//                     >
//                       {link.name}
//                     </Link>
//                     {hoveredLinkIndex === i && (
//                       <div className="flex items-center space-x-2">
//                         <a
//                           href={link.to}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-gray-500 hover:text-gray-700"
//                           title="Open in new tab"
//                         >
//                           <FontAwesomeIcon icon={faExternalLinkAlt} />
//                         </a>
//                         <button
//                           onClick={() => handleLinkCopy(link.to)}
//                           className="text-gray-500 hover:text-gray-700"
//                           title="Copy link"
//                         >
//                           <FontAwesomeIcon icon={faLink} />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt, faLink, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const containers = [
//     { title: 'Recents', description: 'View your recent activity and tasks.', links: [
//         { name: 'Task 1', to: '/task1' },
//         { name: 'Task 2', to: '/task2' },
//         { name: 'Projects', to: '/projects' },
//         { name: 'Dashboard', to: '/dashboard' },
//       ]},
//     { title: 'Agenda', description: 'Keep track of your meetings and events.' },
//     { title: 'My Work', description: 'Overview of your current tasks and projects.' },
//     { title: 'Assigned to Me', description: 'Tasks assigned to you by others.' },
//     { title: 'Personal List', description: 'Your personal to-do list and notes.' },
//     { title: 'Assigned Comments', description: 'Comments assigned to your tasks.' },
//     { title: 'Line Up', description: 'Organize and prioritize your tasks.' },
//     { title: 'Ask AI', description: 'Get AI assistance for your tasks and questions.' },
//   ];

//   const handleLinkCopy = (to) => {
//     navigator.clipboard.writeText(window.location.origin + to);
//     alert('Link copied to clipboard');
//   };

//   const handleDateChange = (days) => {
//     const newDate = new Date(currentDate);
//     newDate.setDate(newDate.getDate() + days);
//     setCurrentDate(newDate);
//   };

//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//       {containers.map((container, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-lg rounded-lg p-8 border-4 border-grey-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
//           style={{ height: '400px' }}
//           onClick={() => alert(`Clicked on ${container.title}`)}
//         >
//           <div>
//             <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
//             <p className="text-gray-600">{container.description}</p>
//             {container.title === 'Recents' && (
//               <div className="mt-4">
//                 {container.links.map((link, i) => (
//                   <div
//                     key={i}
//                     className="mb-2 flex items-center justify-between"
//                     onMouseEnter={() => setHoveredLinkIndex(i)}
//                     onMouseLeave={() => setHoveredLinkIndex(null)}
//                   >
//                     <Link
//                       to={link.to}
//                       className="text-blue-500 hover:underline"
//                     >
//                       {link.name}
//                     </Link>
//                     {hoveredLinkIndex === i && (
//                       <div className="flex items-center space-x-2">
//                         <a
//                           href={link.to}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-gray-500 hover:text-gray-700"
//                           title="Open in new tab"
//                         >
//                           <FontAwesomeIcon icon={faExternalLinkAlt} />
//                         </a>
//                         <button
//                           onClick={() => handleLinkCopy(link.to)}
//                           className="text-gray-500 hover:text-gray-700"
//                           title="Copy link"
//                         >
//                           <FontAwesomeIcon icon={faLink} />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//             {container.title === 'Agenda' && (
//               <div className="mt-4 flex flex-col items-center">
//                 <div className="flex items-center mb-4">
//                   <button onClick={() => handleDateChange(-1)} className="text-gray-500 hover:text-gray-700">
//                     &lt;
//                   </button>
//                   <div className="mx-4 text-xl font-bold">
//                     {formatDate(currentDate)}
//                   </div>
//                   <button onClick={() => handleDateChange(1)} className="text-gray-500 hover:text-gray-700">
//                     &gt;
//                   </button>
//                 </div>
//                 <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="text-gray-700 mb-4" />
//                 <button
//                   onClick={togglePopup}
//                   className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
//                 >
//                   <FontAwesomeIcon icon={faPlus} className="mr-2" />
//                   Add Calendar Integration
//                 </button>
//                 {isPopupVisible && (
//                   <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-8 rounded shadow-lg max-w-lg">
//                       <h2 className="text-2xl mb-4">Calendar Integration</h2>
//                       <p>Integrate your calendar with external services.</p>
//                       <button onClick={togglePopup} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faLink, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  CONTAINER: 'container',
};

const DraggableContainer = ({ container, index, moveContainer, children }) => {
  const [, ref] = useDrag({
    type: ItemTypes.CONTAINER,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CONTAINER,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveContainer(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="bg-white shadow-lg rounded-lg p-8 border-4 border-grey-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl" style={{ height: '400px' }}>
      {children}
    </div>
  );
};

const Home = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [containers, setContainers] = useState([
    { title: 'Recents', description: 'View your recent activity and tasks.', links: [
        { name: 'Task 1', to: '/task1' },
        { name: 'Task 2', to: '/task2' },
        { name: 'Projects', to: '/projects' },
        { name: 'Dashboard', to: '/dashboard' },
      ]},
    { title: 'Agenda', description: 'Keep track of your meetings and events.' },
    { title: 'My Work', description: 'Overview of your current tasks and projects.' },
    { title: 'Assigned to Me', description: 'Tasks assigned to you by others.' },
    { title: 'Personal List', description: 'Your personal to-do list and notes.' },
    { title: 'Assigned Comments', description: 'Comments assigned to your tasks.' },
    { title: 'Line Up', description: 'Organize and prioritize your tasks.' },
    { title: 'Ask AI', description: 'Get AI assistance for your tasks and questions.' },
  ]);

  const moveContainer = (fromIndex, toIndex) => {
    const updatedContainers = [...containers];
    const [movedContainer] = updatedContainers.splice(fromIndex, 1);
    updatedContainers.splice(toIndex, 0, movedContainer);
    setContainers(updatedContainers);
  };

  const handleLinkCopy = (to) => {
    navigator.clipboard.writeText(window.location.origin + to);
    alert('Link copied to clipboard');
  };

  const handleDateChange = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {containers.map((container, index) => (
          <DraggableContainer
            key={index}
            index={index}
            container={container}
            moveContainer={moveContainer}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
              <p className="text-gray-600">{container.description}</p>
              {container.title === 'Recents' && (
                <div className="mt-4">
                  {container.links.map((link, i) => (
                    <div
                      key={i}
                      className="mb-2 flex items-center justify-between"
                      onMouseEnter={() => setHoveredLinkIndex(i)}
                      onMouseLeave={() => setHoveredLinkIndex(null)}
                    >
                      <Link
                        to={link.to}
                        className="text-blue-500 hover:underline"
                      >
                        {link.name}
                      </Link>
                      {hoveredLinkIndex === i && (
                        <div className="flex items-center space-x-2">
                          <a
                            href={link.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700"
                            title="Open in new tab"
                          >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                          <button
                            onClick={() => handleLinkCopy(link.to)}
                            className="text-gray-500 hover:text-gray-700"
                            title="Copy link"
                          >
                            <FontAwesomeIcon icon={faLink} />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {container.title === 'Agenda' && (
                <div className="mt-4 flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <button onClick={() => handleDateChange(-1)} className="text-gray-500 hover:text-gray-700">
                      &lt;
                    </button>
                    <div className="mx-4 text-xl font-bold">
                      {formatDate(currentDate)}
                    </div>
                    <button onClick={() => handleDateChange(1)} className="text-gray-500 hover:text-gray-700">
                      &gt;
                    </button>
                  </div>
                  <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="text-gray-700 mb-4" />
                  <button
                    onClick={togglePopup}
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                  >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Add Calendar Integration
                  </button>
                  {isPopupVisible && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-8 rounded shadow-lg max-w-lg">
                        <h2 className="text-2xl mb-4">Calendar Integration</h2>
                        <p>Integrate your calendar with external services.</p>
                        <button onClick={togglePopup} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </DraggableContainer>
        ))}
      </div>
    </DndProvider>
  );
};

export default Home;
