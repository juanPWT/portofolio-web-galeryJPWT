import { useEffect, useState } from "react";

const Hero = () => {
    const [status, setStatus] = useState({
        open: "Close ❌",
        request: 0,
        waitlist: 0,
        onWorking: 0,
        done: 0,
        max: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "commissions", "status");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setStatus(docSnap.data());
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container px-8 py-2 max-w-md mx-auto sm:max-w-xl md:max-w-full  md:flex md:px-0 md:py-5 ">
                <div className="md:mt-4 md:flex-1 md:px-6">
                    <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-100">
                        Commission {status.open}
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
                        About me{" "}
                    </h2>
                    <p className="font-light dark:text-slate-100">
                        Hallo perkenalkan nama saya {" "}
                        <span className="text-xl text-sky-700 dark:text-gray-800">
                            Juan Pratama Wahyu Talendra
                        </span>
                        , saya illustrator dari kota kecil yg berada di Jawa Tengah, hobi yang disukai yaitu gambar, coding dan lain-lain yg seru. Intinya saya artist dah enjoy 😁.
                    </p>

                    <div className="w-full mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="w-32 h-10 bg-sky-600 text-white flex rounded-xl  shadow-md  hover:shadow-lg hover:shadow-sky-300 hover:-translate-y-1 dark:bg-indigo-500 dark:hover:shadow-indigo-400">
                            <a
                                href="https://www.artstation.com/jpwt"
                                target="_blank"
                                className="m-auto flex "
                            >
                                <span className="px-2">Artstation</span>
                            </a>
                        </div>
                        <div className="w-32 h-10 bg-red-600 text-white flex rounded-xl  shadow-md  hover:shadow-lg hover:shadow-red-300 hover:-translate-y-1 dark:bg-indigo-500 dark:hover:shadow-pink-400">
                            <a
                                href="https://www.instagram.com/talesofparadys"
                                target="_blank"
                                className="m-auto flex "
                            >

                                {" "}
                                <span className="px-2">Instagram</span>
                            </a>
                        </div>
                        <div className="w-32 h-10 bg-black text-white flex rounded-xl  shadow-md  hover:shadow-lg hover:shadow-slate-300 hover:-translate-y-1 dark:bg-indigo-500 dark:hover:shadow-gray-400">
                            <a
                                href="https://x.com/jpwtpkl"
                                target="_blank"
                                className="m-auto flex "
                            >

                                {" "}
                                <span className="px-2">X</span>
                            </a>
                        </div>
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
