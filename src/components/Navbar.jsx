import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav className={`flex justify-between 
        ${
            theme === "light"
            ? "bg-gray-100 text-black"
            : "bg-gray-900 text-white"
        } 
        `}>
        <h1 className="text-2xl font-bold">Theme Changer</h1>
        <button onClick={toggleTheme}
        className={`rounded-2xl font-medium px-5 py-2 transition duration-300 border
            ${
                theme === "light"
                ? "bg-gray-100 text-black"
                : "bg-gray-900 text-white"
            } 
            `} 
        >{theme === "light"?"Dark":"Light"}</button>
        
      </nav>
    </div>
  );
};

export default Navbar;
