
import photogallery from "../assets/projects/photo-gallery.png";

export const HERO_CONTENT = `Welcome to My Portfolio! I’m Nick, a full-stack developer and computer science major with a passion for crafting exceptional web experiences. My expertise spans both SQL and NoSQL databases, including Firebase and MongoDB, allowing me to build robust and scalable applications. I am well-versed in modern front-end technologies like React, Vite, and Tailwind CSS, as well as Bootstrap for responsive design. My skill set also includes working with APIs, Node.js, and version control systems like Git and GitHub. Explore my work to see how I blend creativity and technical proficiency to bring innovative ideas to life. Let’s connect and collaborate!`

export const ABOUT_TEXT = `As a full-stack developer, I pride myself not only on my technical expertise but also on my strong interpersonal skills. I believe that effective communication and collaboration are key to successful project outcomes. I thrive in team environments, where I can contribute my ideas and also listen to others' perspectives, fostering a culture of creativity and innovation. My adaptability allows me to navigate challenges and changes with ease, while my attention to detail ensures that I deliver high-quality work consistently. I’m committed to continuous learning and growth, eager to embrace new technologies and methodologies that enhance my contributions to any project. Ultimately, I aim to build meaningful relationships with colleagues and clients, understanding that strong connections lead to successful collaboration and shared success.`

export const EXPERIENCES = [
  {
    year: "June 2022 - Septemeber 2022",
    role: "Freelancer Assistant",
    company: "Freelancing",
    description: `Designed and developed full stack web applications using HTML, CSS, mySql and C#. Worked closely with a full-stack developer to create web applications.`,
    technologies: ["HTML", "CSS", "C#", "mySQL", "WordPress"],
  },
  {
    year: "2020 - 2024",
    role: "Computer Science Major",
    company: "Democritus University of Thrace",
    description: `Studied Computer Science in Democritus University of Thrace.`,
    technologies: ["C++", "Java", "mySQL", "Kotlin", "HTML", "CSS", "JavaScript", "MatLab", "React"],
  },

];

export const PROJECTS = [
  {
    title: "Photo-Gallery Website",
    image: photogallery,
    description:
      "A fully functional photo-gallery website with features like an image uploader based on categories, image delete feature, and user authentication. This project is for an actual client so acces to the crud functionalities of the application is not available.",
    technologies: ["React", "CSS", "Tailwind", "Node.js", "Firebase", "Netlify"],
  },

];

export const CONTACT = {
  address: "Currently Living in Greece ",
  phoneNo: "+12 4555 666 00 ",
  email: "nickkaramas@gmail.com",
};
