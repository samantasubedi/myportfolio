import { motion } from "framer-motion";
import { useState } from "react";
function Navbar() {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [activetab, setactivetab] = useState("Home");
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-evenly bg-gradient-to-r from-gray-800 to-gray-950 p-3 w-2/3 rounded-4xl">
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
              <span className="font-bold z-10 relative text-white">{tab}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
