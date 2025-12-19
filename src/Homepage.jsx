import { Icon } from "@iconify/react/dist/iconify.js";
import Orb from "./block/Backgrounds/Orb/Orb";
import RollingGallery from "./block/Components/RollingGallery/RollingGallery";
import Navbar from "./Navbar";
import Snowfall from "react-snowfall";
function Homepage() {
  return (
    <>
      <div className="relative bg-[url('/images/basketballtexture.png')] bg-blend-color-burn bg-white/70 dark:bg-gray-950 w-screen h-screen overflow-hidden">
        <Navbar />
        <Snowfall color="purple"></Snowfall>
        <div className="flex mt-[45%] md:mt-[9%] h-screen left-[2%] absolute items-start px-4">
          <div className="flex flex-col gap-5 w-full max-w-lg p-5 rounded-3xl bg-white/70 dark:bg-transparent">
            {" "}
            <div className="text-2xl md:text-5xl font-semibold text-yellow-400 font-mono bg-white/90 w-fit p-2 rounded-2xl dark:bg-transparent">
              Hi I'm{" "}
            </div>
            <div className="text-3xl md:text-7xl text-red-600 md:mt-[2%] font-mono bg-white/90 w-fit p-2 rounded-2xl dark:bg-transparent">
              Samanta Subedi
            </div>
            <div className="text-xl md:text-3xl text-purple-700 md:mt-[3%] font-mono bg-white/90 w-fit p-2 rounded-2xl dark:bg-transparent">
              {" "}
              I craft modern and responsive web applications with passion and
              precision.
            </div>
          </div>
        </div>

        <div className="absolute top-[64%] md:top-20 md:left-[45%] left-[-23%] overflow-hidden">
          <RollingGallery autoplay={true} pauseOnHover={false} />
        </div>
        <div className="absolute flex gap-3 md:gap-5 md:right-[5%] md:bottom-3 bottom-[8%] right-[20px]">
          <a href="https://www.facebook.com/samanta.subedi.7" target="_blank">
            {" "}
            <Icon
              icon="line-md:facebook"
              className="text-black size-[40px] bg-white rounded-full p-1 hover:bg-blue-600 hover:text-white hover:cursor-pointer duration-300 transition-all "
            />
          </a>

          <a href="https://www.instagram.com/samantasubedi/" target="_blank">
            {" "}
            <Icon
              icon="line-md:instagram"
              className="text-black p-1 bg-white rounded-xl size-[40px] hover:cursor-pointer  duration-300 transition-all hover:text-white hover:bg-gradient-to-bl from-purple-600 to-orange-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/samanta-subedi-1895b9318/ "
            target="_blank"
          >
            {" "}
            <Icon
              icon="line-md:linkedin"
              className="text-black p-1 rounded-xl bg-white size-[40px] hover:cursor-pointer  duration-300 transition-all hover:bg-blue-700 hover:text-white"
            />
          </a>
          <a target="_blank" href="https://github.com/samantasubedi">
            {" "}
            <Icon
              icon="line-md:github-twotone"
              className="text-black p-1 bg-white rounded-full size-[40px] hover:bg-black  duration-300 transition-all hover:text-white cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className="absolute h-1/2 w-1/2 md:left-[-12%] left-[20%] translate-x-1/2 md:top-[16%] top-[0%] overflow-hidden flex justify-center items-center ">
        <img
          src="/images/myimage.png"
          alt="image"
          className="absolute  pointer-events-none select-none aspect-square rounded-full md:size-70 size-40 "
        />
        <Orb />
      </div>
    </>
  );
}
export default Homepage;
