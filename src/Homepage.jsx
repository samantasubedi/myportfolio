import { motion } from "motion/react";
import Orb from "./block/Backgrounds/Orb/Orb";
import Navbar from "./Navbar";
function Homepage() {
  return (
    <>
      <div className="bg-[url('./basketball.png')] bg-gray-950 h-screen">
        <Navbar />
        <div className="flex mt-30 h-screen  ">
          <div className="felx flex-col gap-5 w-1/4 ml-30">
            <div className="text-5xl font-semibold text-yellow-400">
              Hi I'm{" "}
            </div>
            <div className="text-7xl text-red-600 mt-[25px]">
              Samanta Subedi
            </div>
            <div className="text-3xl text-purple-700 ml-[50px] w-[500px] mt-[50px]">
              I craft modern and responsive web applications with passion and
              precision.
            </div>
          </div>
        </div>
      </div>
      <div className=" h-1/2 w-1/2 left-[200px] top-[120px] absolute">
        <img
          src="https://picsum.photos/200/300"
          alt="image"
          className="absolute pointer-events-none select-none left-1/2 -translate-1/2 aspect-square rounded-full top-1/2 size-70 "
        />

        <Orb />
      </div>
    </>
  );
}
export default Homepage;
