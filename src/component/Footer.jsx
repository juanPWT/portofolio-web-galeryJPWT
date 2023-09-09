import { useState } from "react";

const Footer = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <footer className="bg-gradient-to-t from-slate-300  w-full shadow dark:from-gray-600">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4 xl:py-2">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
                JPWT
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-100">
              <li>
                <a
                  className="hover:underline cursor-pointer"
                  onClick={handleClick}
                >
                  Contact
                </a>
                <span
                  className={`text-lg text-gray-700 ${
                    isHidden ? "hidden" : ""
                  } dark:text-gray-100`}
                >
                  : juanpratamapekalongan@gmail.com
                </span>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-400 sm:mx-auto  lg:my-8 dark:border-slate-200" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-slate-300">
            © 2023
            <a href="#" className="hover:font-semibold">
              JPWT
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
