import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import Navbar from "./Navbar";
import Projectcard from "./Projectcard";
function Projects() {
  const myref = useRef(null);

  const projectdata = [
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
      projecttitle: "AI Resume Analyzer",
      projectdescription: `A smart resume evaluation tool that uses OpenAI's GPT-4o to analyze resumes and provide structured feedback. Users can upload their resume as an image, and the system generates a detailed analysis covering strengths, weaknesses, and actionable suggestions. The tool assesses formatting, technical skills, project impact, and overall presentation, offering ratings across various factors. Built with Next.js, React, Tailwind CSS, and OpenAI API, it demonstrates skills in API integration, prompt engineering, image handling, and full-stack development.`,
      projectimagepath: "/images/resumeanalyzerdemoimage.png",
      demopath: "https://resume-analyzer-eight-delta.vercel.app/",
      githubpath: "https://github.com/samantasubedi/Resume_Analyzer",
    },

    {
      projecttitle: "Weather App",
      projectdescription: `A dynamic Weather Forecasting App built with HTML,Tailwind CSS, and JavaScript. Users can search for any city to get real-time weather data, including temperature, humidity, pressure, wind speed, and cloud conditions. The app also displays sunrise and sunset times in both GMT and local time, providing a complete weather overview in a clean, user-friendly interface.`,
      projectimagepath: "/images/weatherappdemoimage.png",
      demopath: "https://samantasubedi.github.io/weather-app/",
      githubpath: "https://github.com/samantasubedi/weather-app",
    },
    {
      projecttitle: "To Do List",
      projectdescription: `A responsive task management app built with React and Tailwind CSS. Users can add new tasks, delete them, and reorder them using “Move Up” and “Move Down” buttons. This project highlights my understanding of React state management, list rendering, and user interaction handling in a clean, intuitive interface.

`,
      projectimagepath: "/images/todolistdemoimage.png",
      demopath: "https://to-do-list-theta-lovat.vercel.app/",
      githubpath: "https://github.com/samantasubedi/To-do-list",
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
    },
    {
      projecttitle: "Rock Paper Scissor Game",
      projectdescription: `A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript. It features an interactive UI, real-time result updates, and dynamic gameplay against a computer opponent. The game includes randomized computer choices, a scoring system, and smooth animations for an engaging user experience.`,
      projectimagepath: "/images/rpcdemoimage.png",
      demopath: "https://samantasubedi.github.io/Rock-Paper-Scissor/",
      githubpath: "https://github.com/samantasubedi/Rock-Paper-Scissor",
    },
    {
      projecttitle: "Stop Watch",
      projectdescription: `A digital stopwatch built with HTML, CSS, and JavaScript, featuring start, stop, and reset functionality. The timer displays hours, minutes, seconds, and milliseconds with smooth UI transitions and responsive controls.

This project showcases real-time updates using setInterval, effective use of event listeners, time logic handling, and dynamic DOM manipulation to build a practical and visually styled utility.`,
      projectimagepath: "/images/stopwatchdemoimage.png",
      demopath:
        "https://samantasubedi.github.io/basic-projects/stopwatch/html/stopwatch.html",
      githubpath:
        "https://github.com/samantasubedi/basic-projects/tree/main/stopwatch",
    },
    {
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
