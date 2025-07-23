import { Icon } from "@iconify/react/dist/iconify.js";
import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
function Projectcard({ currentproject }) {
  const myref = useRef(null);
  const isinview = useInView(myref, { once: false, threshold: 0.2 }); //useInview function form framer motion is a react hook that takes 2 parameters ref (it points to the element being refrenced) and a object parameter that object contain various properties like threshold, once , margin etc . it returns an  parameter inView (a boolean that tells us whether the element is visible in the viewport or not).

  return (
    <motion.div
      ref={myref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isinview ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duriation: 0.7, ease: easeInOut }}
      className=" md:p-2 p-1 mt-[8%] flex flex-col gap-5 justify-center items-center border-white md:border-2 border-1 md:w-2/3 w-full bg-gray-200 rounded-lg"
    >
      <div className="font-serif text-semibold text-3xl text-red-700 font-semibold text-center bg-gray-300 shadow-md shadow-gray-400 p-4 rounded-2xl italic">
        {currentproject.projecttitle}
      </div>
      <p className="font-serif bg-gray-300 font-semibold p-2 rounded-lg">
        {currentproject.projectdescription}
      </p>
      <img src={currentproject.projectimagepath} alt="demoimage"></img>
      <div className="w-full flex justify-end">
        <div className="flex gap-3">
          <a
            href={currentproject.demopath}
            target="_blank"
            className=" text-lg hover:bg-gray-300 cursor-pointer hover:shadow-md hover:shadow-black font-bold text-black bg-gradient-to-br from-gray-100 to-gray-500  border-gray-400  p-2 rounded-2xl  transition-all duration-300 "
          >
            <div className="flex">
              <span>Demo</span>
              <Icon icon="mynaui:globe" width="24" height="24" />
            </div>
          </a>
          <a
            href={currentproject.githubpath}
            target="_blank"
            className="text-lg cursor-pointer hover:shadow-md hover:shadow-blue-900 font-bold text-blue-950 bg-gradient-to-br from-blue-100 to-blue-500  p-2 rounded-2xl hover:bg-gray-200 transition-all duration-300"
          >
            <div className="flex">
              <span>Github</span>
              <Icon icon="line-md:github-loop" width="24" height="24" />
            </div>
          </a>{" "}
        </div>
      </div>
    </motion.div>
  );
}
export default Projectcard;
