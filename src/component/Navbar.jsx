import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import DarkModeTog from "./DarkModeTog";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const toggleHidden = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="bg-gradient-to-b from-slate-300 p-5 fixed top-0 w-full dark:from-gray-600">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className=" text-slate-700 text-xl font-bold dark:text-slate-100">
                            JPWT{" "}
                            <span className="md:text-white text-slate-700 dark:text-gray-800">
                                08
                            </span>
                        </div>
                        <div className="hidden md:flex space-x-4 text-slate-500 ">
                            <div className=" text-slate-500 hover:text-slate-900 dark:text-slate-200  dark:hover:text-slate-400">
                                {/* darkmode toggle  */}
                                <DarkModeTog />
                                {/* end darkmode toggle  */}
                            </div>

                            <div
                                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer dark:text-slate-100"
                                onClick={() => navigate("/")}
                            >
                                Home
                            </div>
                            <div
                                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer dark:text-slate-100"
                                onClick={() => navigate("/commiss")}
                            >
                                Commission
                            </div>
                            <div
                                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer dark:text-slate-100"
                                onClick={() => navigate("/portofolio")}
                            >
                                Portofolio
                            </div>
                            <div
                                className=" text-slate-500 hover:text-slate-900 hover:-translate-y-1 hover:text-lg transition-all duration-500 cursor-pointer dark:text-slate-100"
                                onClick={() => navigate("/sosial-media")}
                            >
                                Social Media
                            </div>
                        </div>
                        <div className="md:hidden flex gap-2">
                            {/* <DarkModeTog /> */}

                            <button
                                className=" text-slate-500 dark:text-slate-100"
                                onClick={toggleHidden}
                            >
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
                    className={`h-36 w-28 bg-slate-300 float-right mx-5 mt-4 rounded-lg md:hidden ${isOpen ? "hidden" : ""
                        } dark:bg-slate-600`}
                    id="navbar-stiky"
                >
                    <div className="flex  text-white  h-full dark:text-slate-400">
                        <div className="m-auto">
                            <div
                                className="hover:text-slate-700 hover:-translate-y-1  cursor-pointer dark:hover:text-slate-100"
                                onClick={() => navigate("/")}
                            >
                                Home
                            </div>
                            <hr className="py-2" />
                            <div
                                className="hover:text-slate-700 hover:-translate-y-1  cursor-pointer dark:hover:text-slate-100"
                                onClick={() => navigate("/commiss")}
                            >
                                Commission
                            </div>
                            <hr className="py-2" />  <div
                                className="hover:text-slate-700 hover:-translate-y-1 cursor-pointer dark:hover:text-slate-100"
                                onClick={() => navigate("/portofolio")}
                            >
                                Portofolio
                            </div>
                            <hr className="py-2" />
                            <div
                                className="hover:text-slate-700 hover:-translate-y-1 cursor-pointer dark:hover:text-slate-100"
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
