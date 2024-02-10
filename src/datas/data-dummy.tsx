import { FaBeer, FaSearch, FaHeart } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";

export const dataSidebarLogIn = [
  {
    link: "/",
    logo: <FaBeer />,
    name: "Home",
  },
  {
    link: "/search",
    logo: <FaSearch />,
    name: "Search",
  },
  {
    link: "/follows",
    logo: <FaHeart />,
    name: "Follows",
  },
  {
    link: "/profile",
    logo: <GiPlagueDoctorProfile />,
    name: "Profile",
  },
];

export const dataSidebarNotLogIn = [
  {
    link: "/",
    logo: <FaBeer />,
    name: "Home",
  },
  {
    link: "/search",
    logo: <FaSearch />,
    name: "Search",
  },
];
