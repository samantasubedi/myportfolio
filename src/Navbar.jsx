import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [activetab, setactivetab] = useState("Home");
  const tabpath = {
    Home: "/",
    Projects: "/projects",
    About: "/about",
    Contact: "/contact",
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-evenly  p-3 w-2/3 rounded-4xl">
          {tabs.map((tab) => (
            <motion.button
              className="font-bold py-2 px-5 rounded-3xl relative"
              key={tab}
              whileTap={{ scale: 0.9 }}
              onClick={() => setactivetab(tab)}
            >
              {activetab === tab && (
                <motion.div
                  className="bg-gray-600 rounded-3xl absolute inset-0"
                  layoutId="highlight"
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                ></motion.div>
              )}
              <Link
                to={tabpath[tab]}
                className="font-bold z-10 relative text-white"
              >
                {tab}
              </Link>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="absolute flex gap-5 right-15 bottom-5">
        <Icon
          icon="line-md:facebook"
          className="text-black size-[40px] bg-white rounded-full p-1 hover:bg-blue-600 hover:text-white hover:cursor-pointer duration-300 transition-all "
        />

        <Icon
          icon="line-md:instagram"
          className="text-black p-1 bg-white rounded-xl size-[40px] hover:cursor-pointer  duration-300 transition-all hover:text-white hover:bg-gradient-to-bl from-purple-600 to-orange-600"
        />
        <Icon
          icon="line-md:linkedin"
          className="text-black p-1 rounded-xl bg-white size-[40px] hover:cursor-pointer  duration-300 transition-all hover:bg-blue-700 hover:text-white"
        />
        <Icon
          icon="line-md:github-twotone"
          className="text-black p-1 bg-white rounded-full size-[40px] hover:bg-black  duration-300 transition-all hover:text-white cursor-pointer"
        />
      </div>
    </div>
  );
}
export default Navbar;
