// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import { Dashboard, Add, Edit, Delete, Info, Help, Settings, Report, Assignment, Folder, CalendarToday, Archive, Visibility, Person, Chat, NotificationImportant, TrendingUp, Lock, Security, Build } from '@mui/icons-material';

// const SidebarMenu = ({ open, onClose, handleNavigate}) => {
//   return (
//     <Drawer
//       anchor="left"
//       open={open}
//       onClose={onClose}
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 240,
//           boxSizing: 'border-box',
//         },
//       }}
//     >
//       <List>
//         <ListItem button>
//           <ListItemIcon><Dashboard /></ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <Divider />
//         {/* <ListItem button>
//           <ListItemText primary="Add Project" />
//           </ListItem> */}
//          <ListItem button onClick={() => handleNavigate('/dashboard/add-project')}>
//           <ListItemIcon><Add /></ListItemIcon>
//           <ListItemText primary="Add Project" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Edit /></ListItemIcon>
//           <ListItemText primary="Edit Project" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Delete /></ListItemIcon>
//           <ListItemText primary="Delete Project" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Info /></ListItemIcon>
//           <ListItemText primary="Project Info" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Help /></ListItemIcon>
//           <ListItemText primary="Help" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Settings /></ListItemIcon>
//           <ListItemText primary="Settings" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Report /></ListItemIcon>
//           <ListItemText primary="Reports" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Assignment /></ListItemIcon>
//           <ListItemText primary="Tasks" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Folder /></ListItemIcon>
//           <ListItemText primary="Documents" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><CalendarToday /></ListItemIcon>
//           <ListItemText primary="Calendar" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Archive /></ListItemIcon>
//           <ListItemText primary="Archive" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Visibility /></ListItemIcon>
//           <ListItemText primary="View" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Person /></ListItemIcon>
//           <ListItemText primary="Profile" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Chat /></ListItemIcon>
//           <ListItemText primary="Chat" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><NotificationImportant /></ListItemIcon>
//           <ListItemText primary="Notifications" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><TrendingUp /></ListItemIcon>
//           <ListItemText primary="Analytics" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Lock /></ListItemIcon>
//           <ListItemText primary="Security" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Security /></ListItemIcon>
//           <ListItemText primary="Access Control" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><Build /></ListItemIcon>
//           <ListItemText primary="System Maintenance" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default SidebarMenu;

// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-full fixed p-4">
      <nav className="space-y-2">
        <NavLink 
          to="/dashboard" 
          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          activeClassName="bg-gray-200"
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/projects" 
          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          activeClassName="bg-gray-200"
        >
          Projects
        </NavLink>
        <NavLink 
          to="/settings" 
          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          activeClassName="bg-gray-200"
        >
          Settings
        </NavLink>
        <NavLink 
          to="/profile" 
          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          activeClassName="bg-gray-200"
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
