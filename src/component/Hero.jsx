const Hero = () => {
  return (
    <>
      <div className="container font-inter px-8 py-2 max-w-md mx-auto sm:max-w-xl md:max-w-full  md:flex md:px-0 md:py-5 ">
        <div className="md:mt-4 md:flex-1 md:px-6">
          <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-100">
            Digi<span className="text-slate-300 dark:text-slate-700">tal</span>
            <span className="text-slate-300 dark:text-slate-700"> Pain</span>
            ting
            <div className="mt-5 h-20  text-white  bg-slate-400 rounded-r-full flex shadow-lg  sm:mt-2 md:rounded-full dark:text-gray-500 dark:bg-slate-100 dark:shadow-indigo-400">
              <h1 className="m-auto text-6xl ">JPWT</h1>
            </div>
          </h1>
          <img
            src="../img/gabut-6.png"
            alt="hero image"
            className="mt-5 rounded-lg shadow-lg  md:hidden"
          />
          <h2 className="mt-4 font-semibold text-xl sm:mt-5 sm:text-2xl text-slate-400 dark:text-slate-100">
            Welcome to digital painting{" "}
            <span className="text-slate-700 text-2xl dark:text-gray-700">
              JPWT
            </span>
          </h2>
          <p className="font-light dark:text-slate-100">
            Website for portofolio digital painting{" "}
            <span className="text-xl text-sky-700 dark:text-gray-800">
              JPWT{" "}
            </span>
            This website is made from React.js and Tailwindcss.
          </p>
          <div className="mt-5 w-32 h-10 bg-sky-600 text-white flex rounded-xl  shadow-md  hover:shadow-lg hover:shadow-sky-300 hover:-translate-y-1 dark:bg-indigo-500 dark:hover:shadow-indigo-400">
            <a
              href="https://www.artstation.com/jpwt"
              target="_blank"
              className="m-auto flex "
            >
              <svg
                fill="white"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 23.63l2.703 4.672c0.552 1.094 1.667 1.781 2.885 1.781h17.943l-3.724-6.453zM32 23.661c0-0.641-0.193-1.245-0.516-1.75l-10.516-18.276c-0.557-1.057-1.656-1.719-2.854-1.719h-5.557l16.24 28.135 2.563-4.432c0.5-0.849 0.641-1.224 0.641-1.958zM17.161 19.047l-7.255-12.568-7.26 12.568z" />
              </svg>{" "}
              <span className="px-2">Artstation</span>
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 group">
          <img
            src="./img/gabut-6.png"
            alt="doragon"
            className="object-cover rounded-l-full shadow-lg  group-hover:shadow-xl  dark:hover:shadow-indigo-400"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
