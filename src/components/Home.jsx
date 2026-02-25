import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition duration-300
        ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}
    `}
    >
      <p> Current theme is {theme}</p>
    </div>
  );
};

export default Home;
