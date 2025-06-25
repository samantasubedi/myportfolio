import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function Navbar() {
  const tabs = ["Home", "Projects", "About", "Contact"];

  const tabpath = {
    Home: "/",
    Projects: "/projects",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-evenly  md:p-3 p-1 md:w-2/3 w-fit rounded-4xl">
          {tabs.map((tab) => (
            <NavLink
              to={tabpath[tab]}
              className="font-bold z-10 relative text-white "
              key={tab}
            >
              {({ isActive }) => (
                <motion.button
                  className="font-bold py-2 px-5 rounded-3xl relative cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                >
                  {isActive && (
                    <motion.div
                      className="bg-gray-600 -z-10 text-white rounded-3xl absolute inset-0"
                      layoutId="highlight"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    ></motion.div>
                  )}
                  {tab}
                </motion.button>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
