import "./App.css";
import { LoadingScreen } from "../Components/LoadingScreen";
import "./index.css";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { MobileMenu } from "../Components/MobileMenu";
import { Home } from "../Components/sections/Home";
import { About } from "../Components/sections/About";
import { Projects } from "../Components/sections/Projects";
import { Contact } from "../Components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
