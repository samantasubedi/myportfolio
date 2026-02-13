import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import Navbar from "./Navbar";
import Projectcard from "./Projectcard";
function Projects() {
  const myref = useRef(null);

  const projectdata = [
    {projecttitle: "Chat Application",
      projectdescription:"A full-stack real-time chat application built with Next.js on the frontend and Express.js on the backend, using Socket.IO for instant, bidirectional communication. The app supports live user presence, active user lists, and real-time message delivery with a clean, modern UI. It demonstrates my understanding of WebSockets, event-driven architecture, and scalable real-time systems."
    ,projectimagepath:"/images/chatdemoimage.png"
      ,demopath:"https://chat.samantasubedi.com.np/"
    ,githubpath:"https://github.com/samantasubedi/chat-app"
    },
    {
       projecttitle: "Expense Log",
       projectdescription:"Expense Log is a full-stack expense tracking application built with Next.js, Prisma, and MySQL. It enables users to securely record and categorize their daily expenses using a clean multi-step form with validation. The app supports authentication through Google and GitHub via NextAuth.js, providing a smooth and secure login experience. Users can add, view, filter, and analyze their expenses, while all data is efficiently managed with Prisma and stored in a reliable MySQL database."
    ,  projectimagepath:"/images/expenselogdemoimage.png",
       demopath:"https://expense.samantasubedi.com.np/",
       githubpath:"https://github.com/samantasubedi/expenselog"
     },
     {
  projecttitle: "Resume Analyzer",
  projectdescription: `A web app that analyzes resumes to provide insights and scoring based on content quality, structure, and keywords. Users can upload their resumes and receive detailed feedback to improve their job applications.
Built with React, Node.js, and OpenAI API, showcasing skills in file handling, text analysis, API integration, and creating interactive user interfaces.`,
  projectimagepath: "/images/resumeanalyzerdemoimage.png",
  demopath: "https://resume-analyzer-eight-delta.vercel.app/",
  githubpath: "https://github.com/samantasubedi/Resume_Analyzer",
},
 {
      projecttitle: "To Do List",
      projectdescription: `Todo App is a full-stack task management application built with Next.js, Tailwind CSS, and Express.js, using MySQL for persistent data storage. It allows users to create todos, mark tasks as completed, set priorities, and filter tasks based on priority and completion status. The app also includes a light and dark theme toggle for a better user experience, focusing on simplicity, performance, and usability.

`,
      projectimagepath: "/images/todolistdemoimage.png",
      demopath: "https://todo.samantasubedi.com.np/",
      githubpath: "https://github.com/samantasubedi/toDoList",
    },
    {
      projecttitle: "Job Application Manager",
      projectdescription: `A responsive React app that helps job seekers efficiently track and manage their job applications.
Features include adding/editing applications, uploading resumes and cover letters, tracking application statuses, and storing data locally for privacy and offline access.
Built with React, Tailwind CSS, and React Icons, showcasing skills in component design, state management, and form validation`,
      projectimagepath: "/images/jobtrackerdemoimage.png",
      demopath: "https://job-application-tracker-ashen.vercel.app/",
      githubpath: "https://github.com/samantasubedi/Job-application-tracker",
    },
   

    {
      projecttitle: "Weather App",
      projectdescription: `A dynamic Weather Forecasting App built with HTML,Tailwind CSS, and JavaScript. Users can search for any city to get real-time weather data, including temperature, humidity, pressure, wind speed, and cloud conditions. The app also displays sunrise and sunset times in both GMT and local time, providing a complete weather overview in a clean, user-friendly interface.`,
      projectimagepath: "/images/weatherappdemoimage.png",
      demopath: "https://samantasubedi.github.io/weather-app/",
      githubpath: "https://github.com/samantasubedi/weather-app",
    },

    {
      projecttitle: "Password Generator",
      projectdescription: `A customizable password generator built with HTML, CSS, JavaScript, and styled using Tailwind CSS. Users can select character options (uppercase, lowercase, numbers, symbols) and generate a secure 8-character password based on their preferences.

This project demonstrates dynamic DOM manipulation, event handling, conditional logic, and user interface design—all packed into a clean and interactive tool.`,
      projectimagepath: "/images/passwordgeneratordemoimage.png",
      githubpath:
        "https://github.com/samantasubedi/basic-projects/tree/main/Password-Generator",
      demopath:
        "https://samantasubedi.github.io/basic-projects/Password-Generator/html/passwordgenerator.html",
    },     {
      projecttitle: "Gender Predictor",
      projectdescription: `A web-based Gender Prediction Tool built with HTML, CSS, and JavaScript. Users can input a name, and the app predicts the gender along with a probability score and estimated name frequency. The interface is designed with a clean, user-friendly layout and dynamic result updates for an interactive experience.`,
      projectimagepath: "/images/genderpredictordemoimage.png",
      demopath: "https://samantasubedi.github.io/gender-checker/",
      githubpath: "https://github.com/samantasubedi/gender-checker",
    },
  ];
  return (
    <>
      <div className="bg-[url('/images/basketballtexture.png')] h-fit bg-white/70 bg-blend-color-burn dark:bg-gray-950 pb-10">
        <Navbar />

        <div className="flex justify-center items-center flex-col gap-2">
          {projectdata.map((currentproject, index) => (
            <Projectcard key={index} currentproject={currentproject} /> //Projectcard component requires the data of the project which is in
            //this component so we pass the currentproject object , in both components the name of current object is same i.e currentproject but we can also keep different names.
          ))}
        </div>
        <div className="flex justify-center mt-[5%]">
          <a
            href="https://github.com/samantasubedi?tab=repositories"
            target="_blank"
            className="flex gap-3 w-fit md:p-5 p-1 bg-purple-300 border-transparent text-blue-900 font-bold rounded-2xl md:text-2xl text-lg border-1 md:border-3 hover:border-blue-700 hover:shadow-blue-500 shadow-lg cursor-pointer"
          >
            <div className="font-serif">View all projects on github</div>
            <Icon
              icon="line-md:arrow-right"
              className="md:text-4xl text-3xl text-fuchsia-900 font-extrabold"
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Projects;
