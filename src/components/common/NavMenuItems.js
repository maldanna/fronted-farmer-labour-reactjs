import Home from "./Home";
import About from "./About";
import Login from "./loginAndlogout/Login";
//import UserLogin from "../loginAndlogout/userLogin";

import Profile from "./user/Profile";
import Contactus from "./Contactus";
import Signup from "./loginAndlogout/Signup";
import WorkPost from "./WorkPost";
import WorkPost2 from "./WorkPost2";

const LoggedInNavMenuItems = [
    { id: "About", title: 'About', path: '/About', element: About},
    { id: "Contactus", title: 'Contactus', path: '/Contactus', element: Contactus},
    { id: "Profile", title: 'Profile', path: '/Profile', element: Profile},
    { id: "WorkPost", title: 'WorkPost', path: '/WorkPost', element: WorkPost}
    // Add more menu items as neede
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
    { id: "Signup", title: 'Signup', path: '/Signup', element: Signup},
    { id: "WorkPost", title: 'WorkPost', path: '/WorkPost', element: WorkPost},
    { id: "WorkPost2", title: 'WorkPost2', path: '/WorkPost2', element: WorkPost2}
  ]

  export {LogoutNavMenuItems,LoggedInNavMenuItems,NavMenuItems};