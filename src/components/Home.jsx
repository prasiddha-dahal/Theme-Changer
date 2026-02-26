import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center transition duration-300 bg-white text-black dark:bg-black dark:text-white" >
      <p> Current theme is {theme}</p>
    </div>
  );
};

export default Home;
