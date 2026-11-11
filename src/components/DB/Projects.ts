import MME from "../../assets/projects/images/MMERevise.png";
import TicTacToe from "../../assets/projects/gifs/ReactTicTacToe.gif";
import Tailwind from "../../assets/projects/gifs/DSquared.gif";
import Bennetts from "../../assets/projects/gifs/BennetSports.gif";
import AJSMarine from "../../assets/projects/images/AJS-Marine.png";
import AMGLogistics from "../../assets/projects/images/AMG-logistics.png";
import DigitalFreight from "../../assets/projects/images/Digital_Freight_Ltd.png";
import DracLogistics from "../../assets/projects/images/Drac_Logistics.png";
import EFSGlobal from "../../assets/projects/images/EFS_Global.png";
import EstuaryWaste from "../../assets/projects/images/Estuary_Waste.png";
import HYA from "../../assets/projects/images/HYA.png";
import JagUFS from "../../assets/projects/images/Jag_UFS.png";
import MagnumBookServices from "../../assets/projects/images/Magnum_Book_Services.png";
import MovingOn from "../../assets/projects/images/MovingOn.png";
import OTR from "../../assets/projects/images/OTR.png";
import PSP from "../../assets/projects/images/PSP.png";
import RegalCrown from "../../assets/projects/images/Regal_Crown_Logistics.png";
import RickettsFreight from "../../assets/projects/images/Ricketts_Freight.png";
import Scanwell from "../../assets/projects/images/Scanwell.png";
import Sigma from "../../assets/projects/images/Sigma.png";
import YPI from "../../assets/projects/images/YPI.png";

export interface ProjectType {
  title: string;
  role: string;
  thumbnail: string;
  category: string[];
  date: string[];
  description: string;
  stack: string[];
  link: string;
}
// continue from here, add all the projects,
// then fix the thumbnail for some of them
// add the showing x of x projects but ignore the sort by

const projects: ProjectType[] = [
  {
    title: "MME Revise",
    role: "Junior Front End Developer",
    thumbnail: MME,
    category: ["company", "collaborative"],
    date: ["2022", "2023"],
    description:
      "Front end design changes, mobile responsiveness adaptation to main website and online learning portal.",
    stack: [
      "html",
      "css",
      "js",
      "php",
      "laravel",
      "jquery",
      "bootstrap",
      "vue.js",
    ],
    link: "https://mmerevise.co.uk/",
  },
  {
    title: "Tailwind Project",
    role: "Junior Front End Developer",
    thumbnail: Tailwind,
    category: ["company"],
    date: ["2022"],
    description:
      "Fully responsiveness webpage based on a wireframe from DSquared. Demonstrates ability to pick up new frameworks. Pixel perfect, in a timely manner.",
    stack: ["html", "css", "js", "tailwind"],
    link: "https://github.com/JonathanHYYan/Tailwind-CSS-Demo",
  },
  {
    title: "Bennetts Sport",
    role: "Junior Front End Developer",
    thumbnail: Bennetts,
    category: ["company"],
    date: ["2022"],
    description:
      "Retail website designed from scratch connected to Bennetts server to dynamically render available retailers and sizes for each product.",
    stack: ["html", "css", "js", "react", "styledComponents"],
    link: "https://github.com/JonathanHYYan/Retail-Website",
  },
  {
    title: "Sigma Freight",
    role: "Full Stack Cloud Developer",
    thumbnail: Sigma,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description:
      "Full stack design, development, maintenance for international logistics on an Azure ecosystem.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://www.sigmafreight.com/",
  },
  {
    title: "OTR South",
    role: "Full Stack Cloud Developer",
    thumbnail: OTR,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Children's Charity Fullstack CRM development.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://otr-south.org.uk/",
  },
  {
    title: "YPI Counselling",
    role: "Full Stack Cloud Developer",
    thumbnail: YPI,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Children's Charity Fullstack CRM development.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://www.ypicounselling.co.uk/",
  },
  {
    title: "AJS Marine",
    role: "Full Stack Cloud Developer",
    thumbnail: AJSMarine,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Marine logistcs management software and CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://ajsmarine.co.uk/",
  },
  {
    title: "AMG Logistics",
    role: "Full Stack Cloud Developer",
    thumbnail: AMGLogistics,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "International logistcs management software and CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://amglogistics.co.uk/",
  },
  {
    title: "Digital Freight",
    role: "Full Stack Cloud Developer",
    thumbnail: DigitalFreight,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "International freight forwarding logistic software and CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://digitalfreight.co.uk/",
  },
  {
    title: "Drac Logistics",
    role: "Full Stack Cloud Developer",
    thumbnail: DracLogistics,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Freight forwarding logistic software and CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "",
  },
  {
    title: "EFS Global",
    role: "Full Stack Cloud Developer",
    thumbnail: EFSGlobal,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Warehousing, haulage and logistic software and CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://efs.global/",
  },
  {
    title: "Estuary Waste Management",
    role: "Full Stack Cloud Developer",
    thumbnail: EstuaryWaste,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Waste management logistic software and CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://www.estuarywastemanagement.com/",
  },
  {
    title: "Hampshire Youth Access",
    role: "Full Stack Cloud Developer",
    thumbnail: HYA,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Children's counselling charity CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://hampshireyouthaccess.org.uk/",
  },
  {
    title: "JAG UFS",
    role: "Full Stack Cloud Developer",
    thumbnail: JagUFS,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "International logistic CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://www.jagufs.com/",
  },
  {
    title: "Magnum Book Services",
    role: "Full Stack Cloud Developer",
    thumbnail: MagnumBookServices,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "International book shipping solutions CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://magnumbookservices.com/",
  },
  {
    title: "Moving on Project",
    role: "Full Stack Cloud Developer",
    thumbnail: MovingOn,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Youth mental suport CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://themovingonprojectcounselling.co.uk/",
  },
  {
    title: "PSP Logistics",
    role: "Full Stack Cloud Developer",
    thumbnail: PSP,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Freight Forwarding and Export packing CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://psp-logistics.com/",
  },
  {
    title: "Regal Crown Logistics",
    role: "Full Stack Cloud Developer",
    thumbnail: RegalCrown,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "UK Based international freight forwarding CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://www.regalcrown.co.uk/",
  },
  {
    title: "Rickets Freight Logistics",
    role: "Full Stack Cloud Developer",
    thumbnail: RickettsFreight,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "Global logistics CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://rickettsfreightltd.co.uk/",
  },
  {
    title: "Scanwell Logistics",
    role: "Full Stack Cloud Developer",
    thumbnail: Scanwell,
    category: ["company", "collaborative"],
    date: ["2023", "2024", "2025", "2026"],
    description: "UK logistic solutions CRM.",
    stack: ["html", "css", "js", "php", "custom PHP", "Azure"],
    link: "https://scanwelluk.com/our-services/",
  },
  {
    title: "React Tic Tac Toe",
    role: "Junior Front End Developer",
    thumbnail: TicTacToe,
    category: ["personal"],
    date: ["2022"],
    description:
      "React Tic Tac Toe Project for Hackajob. Features contain: Alternating players, win/tie conditions and board reset using React hooks and vanilla CSS",
    stack: ["html", "css", "js", "react"],
    link: "https://github.com/JonathanHYYan/React-Tic-Tact-Toe",
  },
];

export default projects;
