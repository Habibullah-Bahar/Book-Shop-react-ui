import React from "react";
import DarkPng from "../../assets/website/dark-mode-button.png";
import LightPng from "../../assets/website/light-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") element.classList.add("dark");
    else element.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const ChangeTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <div>
      <div className="relative w-12 h-12">
        <img src={LightPng} alt="" 
        onClick={ChangeTheme}
        className={`w-12 z-10 absolute top-0 left-0 drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer ${theme === "light"?"opacity-100":"opacity-0"}`}
        />
         <img src={DarkPng} alt="" 
         onClick={ChangeTheme}
        className={`w-12 absolute top-0 left-0 drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer ${theme === "dark"?"opacity-100":"opacity-0"}`}
        />
      </div>
    </div>
  );
};

export default Darkmode;
