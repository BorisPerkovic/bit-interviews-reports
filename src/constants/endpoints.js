import borisImg from "../assets/boris.jpg";
import tanjaImg from "../assets/tanja.jpg";
import marinaImg from "../assets/marina.jpg";
import aleksandarImg from "../assets/aleksandar.jpg";

/* API endpoint for candidates */
export const CANDIDATES_URL = "interviews-reports/candidates";
export const SINGLE_CANDIDATES_URL = "interviews-reports/single-candidate/";
export const REPORTS_URL = "interviews-reports/reports";
export const ADD_REPORT_URL = "interviews-reports/create-report";
export const DELETE_REPORT = "interviews-reports/delete-report/";
export const COMPANIES_URL = "interviews-reports/companies";
export const LOGIN_URL = "interviews-reports/login";
export const BASE_URL = "https://borisperkovic.rs/";

/* select options for create report -phase, status */
export const OPTIONS_PHASE = ["cv", "hr", "tech", "final"];
export const OPTIONS_STATUS = ["passed", "declined"];

/* sidebar list in create report */
export const CREATE_REPORT_SIDE_BAR = [
  "Select Candidate",
  "Select Company",
  "Fill Report Details",
];

/* developer team list */
export const DEVELOPER_TEAM = [

  {
     name: "Aleksandar Biševac",
     image: aleksandarImg,
     summary: {
      text: "Self-motivated and passionate Front End Developer, looking forward to making first steps in IT Industry. Also, beer master, photographer, philosophy enthusiast, and nature lover.",
      loader: ""
    },
     github: "https://github.com/AleksandarBisevac",
     linkedin: "https://www.linkedin.com/in/aleksandar-bi%C5%A1evac/",
  },
  {
    name: "Marina Tintor Popović",
    image: marinaImg,
    summary: {
      text: "I have two great passions- Italian language and coding, which is actually a way of translating code into something that really works. I'm always ready to gain new knowledge and experience because I deeply believe that the only power is the knowledge that we have.",
      loader: ""
    },
    github: "https://github.com/MarinaTP",
    linkedin: "https://www.linkedin.com/in/marina-tintor-popovi%C4%87-b5020a85/"
 },
 {
    name: "Tanja Ilić",
    image: tanjaImg,
    summary: {
      text: "Programer in loading ...",
      loader: true
    },
    github: "https://github.com/tanjaiLic6",
  },
  {
    name: "Boris Perković",
    image: borisImg,
    summary: {
      text: "I have finished ITAcademy in Belgrade and Belgrade Institute of Technology. I am highly motivated to upgrade my knowledge and to work in highly dynamic IT industry. As a professional athlete I am always aiming for the best in myself and in other people. I enjoy working with others and believe that my strong technical and communication skills will ensure that I can meet the expectations.",
      github: "https://github.com/BorisPerkovic",
      loader: ""
    },
    github: "https://github.com/BorisPerkovic",
    linkedin: "https://www.linkedin.com/in/perkovicboris/",
    website: "https://www.borisperkovic.rs/"
  }

];
