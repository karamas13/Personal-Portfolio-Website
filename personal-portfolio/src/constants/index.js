
import photogallery from "../assets/projects/photo-gallery.png";
import financetracker from "../assets/projects/finance-tracker.png";

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
    title: "Photo-Gallery Website (Client)",
    image: photogallery,
    description:
      "A fully functional photo-gallery website with features like an image uploader based on categories, image delete feature, and user authentication. This project is for an actual client so access to the crud functionalities of the application is not available.",
    technologies: ["React", "CSS", "Tailwind", "Node.js", "Firebase", "Netlify"],
    link:"https://nikosbriniasphotography.com/",
    details:
    "In this project, I developed a dynamic photography website that showcases the client's work across various categories, including ecosystems, individuals, meals, and concerts. Leveraging Firebase for backend services, the site allows the client to seamlessly upload images while ensuring a smooth user experience through responsive design. I implemented authentication features to safeguard the upload process, allowing only users registered withing the database to use the admin control panel. The site also incorporates a robust storage solution, enabling the client to delete their images, ensuring their content remains curated and relevant. With an eye for detail, I focused on creating an intuitive interface that highlights the beauty of photography, making it accessible and engaging for visitors across all devices.",
  },
  {
    title: "Finance-Tracking Website (Personal)",
    image: financetracker,
    description:
      "This finance tracking website is designed to help users manage their personal finances by tracking their income and expenses. The application allows users to log in using Google Authentication, providing a secure and seamless sign-in process. Once logged in, users can easily add, view, and categorize their expenses, helping them understand where their money is going. The expense tracker supports category-based management, allowing users to assign expenses to specific categories such as Food, Entertainment, Transportation, etc. Additionally, users can track their income sources, offering a complete view of their financial status. This user-friendly platform is perfect for individuals looking to gain better control over their finances and make informed decisions.",
    technologies: ["React", "Tailwind", "Node.js", "Firebase", "Netlify", "Next"],
    link:"https://personal-financing.netlify.app/",
    details:
    "This personal project showcases my ability to implement all basic CRUD (Create, Read, Update, Delete) functionalities in a real-world application. Users can securely log in via Google Authentication and then manage their finances by tracking both income and expenses. The expense tracking feature includes category-based management, allowing users to organize their spending into categories like Food, Entertainment, and Transportation. The application leverages Firebase for backend services, ensuring secure user authentication and real-time data storage. With a responsive design, the app works seamlessly across devices, providing a complete solution for personal finance management. This project demonstrates my skills in building full-stack applications, including frontend development with React.js and Tailwind CSS, and backend management using Firebase.",
  },

];

export const CONTACT = {
  address: "Currently Living in Greece ",
  phoneNo: "+12 4555 666 00 ",
  email: "nickkaramas@gmail.com",
};
