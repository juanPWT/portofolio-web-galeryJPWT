import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const toggleHidden = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gradient-to-b from-slate-300 p-5 fixed top-0 w-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className=" text-slate-700 text-xl font-bold">
              Portofolio{" "}
              <span className="md:text-white text-slate-700">JPWT</span>
            </div>
            <div className="hidden md:flex space-x-4 text-slate-500 ">
              <div
                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </div>

              <div
                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer"
                onClick={() => navigate("/portofolio")}
              >
                Portofolio
              </div>
              <div
                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer"
                onClick={() => navigate("/sosial-media")}
              >
                Social Media
              </div>
            </div>
            <div className="md:hidden">
              <button className=" text-slate-500" onClick={toggleHidden}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Menu Responsif */}
        </div>
        <div
          className={`h-36 w-28 bg-slate-300 float-right mx-5 mt-4 rounded-lg md:hidden ${
            isOpen ? "hidden" : ""
          }`}
          id="navbar-stiky"
        >
          <div className="flex  text-white  h-full">
            <div className="m-auto">
              <div
                className="hover:text-slate-700 hover:-translate-y-1  cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </div>
              <hr className="py-2" />
              <div
                className="hover:text-slate-700 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate("/portofolio")}
              >
                Portofolio
              </div>
              <hr className="py-2" />
              <div
                className="hover:text-slate-700 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate("/sosial-media")}
              >
                Social Media
              </div>
              <hr className="py-2" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
