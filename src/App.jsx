import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Projects from "./Projects";

function App() {
  const [theme, settheme] = useState(() => {
    const storedtheme = localStorage.getItem("theme");
    if (storedtheme) {
      return storedtheme;
    } else {
      const systemtheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches; //returns true if the system theme is dark
      return systemtheme ? "dark" : "light";
    }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme == "dark") {
      //This condition adds or removes the dark class on the <html> element depending on the current theme.
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        className=" font-bold fixed right-5 z-20 md:top-2.5 top-12 cursor-pointer"
        onClick={() => {
          settheme(theme == "dark" ? "light" : "dark");
        }}
      >
        {theme == "dark" ? (
          <Icon
            icon="line-md:sun-rising-loop"
            className="bg-white size-5 md:size-10 rounded-full"
          />
        ) : (
          <Icon
            icon="line-md:moon-alt-loop"
            className="bg-gray-700 size-5 md:size-10 rounded-full "
          />
        )}
      </button>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}
export default App;
