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
      className=" p-2 mt-[8%] flex flex-col gap-5 justify-center items-center border-white border-2 w-2/3 bg-lime-200 rounded-lg"
    >
      <div className="text-semibold text-3xl text-red-700 font-semibold text-center bg-gray-200 p-4 rounded-2xl italic">
        {currentproject.projecttitle}
      </div>
      <p className="bg-purple-200 font-semibold p-2 rounded-lg">
        {currentproject.projectdescription}
      </p>
      <img src={currentproject.projectimagepath} alt="demoimage"></img>
      <div className="w-full flex justify-end">
        <div className="flex gap-3">
          <a
            href={currentproject.demopath}
            target="_blank"
            className=" cursor-pointer hover:shadow-md hover:shadow-black font-bold text-amber-800 bg-amber-200  p-2 rounded-2xl hover:bg-gray-200 transition-all duration-300"
          >
            Demo
          </a>
          <a
            href={currentproject.githubpath}
            target="_blank"
            className="cursor-pointer hover:shadow-md hover:shadow-black font-bold text-blue-800 bg-cyan-200  p-2 rounded-2xl hover:bg-gray-200 transition-all duration-300"
          >
            Github
          </a>{" "}
        </div>
      </div>
    </motion.div>
  );
}
export default Projectcard;
