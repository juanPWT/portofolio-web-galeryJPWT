import { useEffect, useState } from "react";

const DarkModeTog = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="flex justify-center">
        <span className="mr-2 font-inter font-semibold ">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
        <input
          type="checkbox"
          id="toggle"
          className=" hidden"
          checked={darkMode}
          onChange={handleDarkMode}
        />
        <label htmlFor="toggle">
          <div className="w-9 h-5 bg-slate-400 rounded-full flex items-center p-1 cursor-pointer dark:bg-white dark:shadow-md dark:shadow-indigo-300">
            <div className="w-4 h-4 bg-white rounded-full toggle-circle"></div>
          </div>
        </label>
      </div>
    </>
  );
};

export default DarkModeTog;
