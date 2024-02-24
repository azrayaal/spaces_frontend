import { FaBeer, FaSearch, FaHeart } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";

export const dataSidebarLogIn = [
  {
    link: "/",
    logo: <FaBeer />,
    name: "Home",
  },
  {
    link: "/search-space",
    logo: <FaSearch />,
    name: "Search",
  },
  {
    link: "/follows",
    logo: <FaHeart />,
    name: "Follows",
  },
  {
    link: `/my-profile/`,
    logo: <GiPlagueDoctorProfile />,
    name: "Profile",
  },
];

export const dataSidebarNotLogIn = [
  // {
  //   link: "/",
  //   logo: <FaBeer />,
  //   name: "Home",
  // },
  // {
  //   link: "/search",
  //   logo: <FaSearch />,
  //   name: "Search",
  // },
];

export const ContentDummy = [
  {
    avatar: "https://source.unsplash.com/uFCmJ6fiWGY",
    profileName: "Kay-O",
    userName: "ky0",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores atque tenetur.",
    image_content: "https://source.unsplash.com/7z9ByavTdH8",
    datePost: 12,
    likes: 24,
    replies: 1,
  },
  {
    avatar: "https://source.unsplash.com/4JL_VAgxwcU",

    profileName: "Malik",
    userName: "malik",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    image_content: "",
    datePost: 15,
    likes: 100,
    replies: 9,
  },
  {
    avatar: "https://source.unsplash.com/1kU3F0v90NY",
    profileName: "Eulaa",
    userName: "eula",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid fugiat obcaecati nihil nulla commodi harum incidunt provident impedit quibusdam.",
    image_content: "",
    datePost: 25,
    likes: 530,
    replies: 120,
  },
];

export const suggestDummy = [
  {
    avatar: "https://source.unsplash.com/CXhRVSqBwe0",
    profileName: "Calliope",
    userName: "callio",
  },
  {
    avatar: "https://source.unsplash.com/dZqgoqa1css",
    profileName: "Gura",
    userName: "gawrgurrrr",
  },
  {
    avatar: "https://source.unsplash.com/NxOQWmoYr9k",
    profileName: "WATSON?!",
    userName: "watsonemi",
  },
];
import { IoHomeSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
export const bottomNavData = [
  {
    logo: <IoHomeSharp />,
  },
  {
    logo: <FaSearch />,
  },
  {
    logo: <IoIosNotifications />,
  },
];
