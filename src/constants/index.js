import project1 from "../assets/projects/ieee.png";
import project2 from "../assets/projects/pygame.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/blog.jpg";

export const HERO_CONTENT = `I'm an accomplished full stack developer, specializing in MERN (MongoDB, Express.js, React.js, Node.js) stack and PHP with MySQL and phpMyAdmin. Over the past 2 years, I've cultivated a deep understanding of front-end technologies like React.js, Angular, and UI/UX design principles, as well as back-end technologies including Node.js and Laravel. Additionally, I have experience with Azure VM for cloud deployment. My objective is to utilize my expertise to architect robust and scalable web applications that elevate user experiences and drive business growth.



`;

export const ABOUT_TEXT = `Enthusiastic Software Engineering student with a solid foundation in MERN Stack development and Full Stack development. Proficient in leveraging Azure VM for cloud computing solutions. Possess a Bachelor's degree in Embedded Systems. Passionate about exploring the intersection of software engineering and embedded systems to create innovative solutions for real-world challenges. Founder of IEEE ESSTHS Student Branch, having served as Vice Chair and Treasurer, leading a team to numerous achievements and volunteering activities.`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Aug 2023 ",
    role: "Summer Internship - Junior Front End Developer",
    company: "Continuous Net",
    description: `I had the fantastic opportunity to embark on an engaging internship as a Junior Frontend Developer. Throughout the experience, I was tasked with creating and launching interactive interface using AngularJS, JavaScript, TypeScript, and Bootstrap. Working closely alongside seasoned developers, I refined my frontend construction techniques and delved into the ever-evolving landscape of web development.
    `,
    technologies: ["Angular", "TypeScript", "JavaScript", "Bootstrap"],
    imageUrl: '../assets/net.png' ,

  },
  {
    year: "Feb 2022 - May 2022 · 4 mos",
    role: "Final-Year Internship Project",
    company: "EMKA ELECTRONIQUE",
    description: `Designed and developed an advanced real-time vehicle tracking system from the ground up, integrating GSM/GPRS GPS technology with STM32 microcontrollers and Arduino hardware. This project entailed crafting a seamless solution for monitoring vehicle movements in real-time, providing accurate location updates, and enabling remote monitoring functionalities. With its innovative features, this system is set to transform fleet management, enhance security measures, and optimize logistical operations.`,
    technologies: ["STM32", "ARDUINO", "C", "C++", "Figma"],
    imageUrl: '../assets/emka.png' ,

  },

];

export const PROJECTS = [
  {
    title: "Members Connect",
    image: project1,
    description:
      "Developed a dynamic web platform with a custom login process for student members using HTML, CSS, and PHP, enabling easy sign-up and secure profile access.",
    technologies: ["HTML", "CSS", "PHP"],
  },
  {
    title: "FAST X SPACE GAME ",
    image: project2,
    description:
      "Created a 2-player space-themed Pygame with sound effects, music, and scoring.Players grow by consuming objects, aiming for the highest score. Features a visually appealing interface",
    technologies: ["PYTHON" ,"PYGAME"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.JS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "My classmates and I used the PHP framework CodeIgniter4 to create a simple CRUD application and a blog platform, implementing user sign-up, login, and sharingfunctionalities.",
    technologies: ["Codelgniter 4","PHP"],
  },
];

export const EDUCATION = [
  {
    year: "2022 - Present (Excpected 2025)  ",
    degree: "Computer Engineering",
    university: "PolyTechnique Sousse",
    imageUrl: '../assets/Education/poly.png' ,
    url: "https://www.polytecsousse.tn" 


  },
  {
    year: "2019 - 2022 ",
    degree: "Embedded Systems Bachelor",
    university: "ESSTHS",
    imageUrl: '../assets/Education/essths.png' ,
    url: "https://essths.rnu.tn/public/" 

  },

];


export const CONTACT = {
  address: " ",
  address1: "Akouda - Sousse - Tunisia ",
  phoneNo: "+216 55 199 445 ",
  email: "oussamabenmahmoud26@gmail.com",
};

