import { useState } from "react";
import { getCurrentTheme, toggleTheme } from "../controllers/helpers";
import { ThemeMode } from "../env";
import DarkModeButton from "../widgets/DarkModeButton";
import LightModeButton from "../widgets/LightModeButton";

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
          <div className="left"></div>
          <div className="right">
            <div className="switch-theme" onClick={_toggleDarkMode}>
              {isDarkMode ? <LightModeButton /> : <DarkModeButton />}
            </div>
          </div>
        </nav>
      </header>
      <main></main>
    </>
  );
};

export default HomePage;
