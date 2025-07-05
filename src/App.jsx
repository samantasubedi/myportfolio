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
        className="bg-red-400 font-bold fixed right-5"
        onClick={() => {
          settheme(theme == "dark" ? "light" : "dark");
        }}
      >
        {theme == "dark" ? " changetolight" : "changetodark"}
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
