
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact  from "./Contact";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;