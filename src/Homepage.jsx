import { motion } from "framer-motion";
import Orb from "./block/Backgrounds/Orb/Orb";
import Navbar from "./Navbar";
import RollingGallery from "./block/Components/RollingGallery/RollingGallery";
function Homepage() {
  return (
    <>
      <div className="relative bg-[url('./images/basketball.png')] bg-gray-950 w-screen h-screen overflow-hidden">
        <Navbar />
        <div className="flex mt-[120px] h-screen left-[100px] absolute items-start px-4">
          <div className="flex flex-col gap-5 w-full max-w-lg">
            {" "}
            <div className="text-5xl font-semibold text-yellow-400">
              Hi I'm{" "}
            </div>
            <div className="text-7xl text-red-600 mt-[25px]">
              Samanta Subedi
            </div>
            <div className="text-3xl text-purple-700 mt-[50px]">
              {" "}
              I craft modern and responsive web applications with passion and
              precision.
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-[45%]  overflow-hidden">
          <RollingGallery autoplay={true} pauseOnHover={false} />
        </div>
      </div>

      <div className="absolute h-1/2 w-1/2 left-[40%] -translate-x-1/2 top-[120px] overflow-hidden flex justify-center items-center">
        <img
          src="https://picsum.photos/200/300"
          alt="image"
          className="absolute pointer-events-none select-none aspect-square rounded-full size-70" // Simplified positioning
        />
        <Orb />
      </div>
    </>
  );
}
export default Homepage;
