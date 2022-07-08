import { useState } from "react";
import { getCurrentTheme, toggleTheme } from "../controllers/helpers";
import { ThemeMode } from "../env";
import DarkModeButton from "../components/DarkModeButton";
import LightModeButton from "../components/LightModeButton";
import Details from "./Details";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    getCurrentTheme() === ThemeMode.dark
  );
  const _toggleDarkMode = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };
  document.body.classList.add(getCurrentTheme());
  return (
    <>
      <header>
        <nav className="justify-spacebw">
          <div className="left">
            <h1 className="title">Tushar Jain</h1>
          </div>
          <div className="right">
            <div className="switch-theme" onClick={_toggleDarkMode}>
              {isDarkMode ? <LightModeButton /> : <DarkModeButton />}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Details />
      </main>
    </>
  );
};

export default HomePage;
