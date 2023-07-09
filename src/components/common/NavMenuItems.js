import Home from "./Home";
import About from "./About";
import Login from "./loginAndlogout/Login";
//import UserLogin from "../loginAndlogout/userLogin";

import Profile from "./user/Profile";
import Contactus from "./Contactus";

const LoggedInNavMenuItems = [
    { id: "About", title: 'About', path: '/About', element: About},
    { id: "Contactus", title: 'Contactus', path: '/Contactus', element: Contactus},
    { id: "Profile", title: 'Profile', path: '/Profile', element: Profile},

    // Add more menu items as needed
  ];
  const LogoutNavMenuItems = [
    { id: "About", title: 'About', path: '/About', element: About},
    { id: "Contactus", title: 'Contactus', path: '/Contactus', element: Contactus},
    { id: "Login", title: 'Login', path: '/Login', element: Login},

    // Add more menu items as needed
  ];
  const NavMenuItems = [
    { id: "Home", title: 'Home', path: '/' , element: Home },
    { id: "About", title: 'About', path: '/About', element: About},
    { id: "Profile", title: 'Profile', path: '/Profile', element: Profile},
    { id: "Contactus", title: 'Contactus', path: '/Contactus', element: Contactus},
    { id: "Login", title: 'Login', path: '/Login', element: Login},
  ]

  export {LogoutNavMenuItems,LoggedInNavMenuItems,NavMenuItems};