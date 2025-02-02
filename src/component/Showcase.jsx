const Showcase = () => {
    return (
        <>
            <div className="container p-8 mx-auto font-inter grid grid-cols-2 gap-2 md:gap-4  w-full md:grid-cols-4 xl:grid-cols-2">
                <h1 className="h-15 text-xl font-bold text-slate-500 dark:text-slate-100">
                    My Galery
                </h1>
                <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-2 md:col-start-4 xl:hidden dark:text-slate-100">
                    J
                </h1>
                <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-4 xl:hidden  dark:text-slate-100">
                    P
                </h1>
                <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-3 md:col-start-3 xl:hidden dark:text-slate-100">
                    W
                </h1>
                <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-4 md:col-start-3 xl:hidden dark:text-slate-100">
                    T
                </h1>
                <div className="h-15 font-light text-slate-400 md:row-start-1 md:col-start-2 dark:text-slate-300">
                    Digital Painting
                </div>
                <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    <div className="w-full h-full bg-[url('../img/elf-princess-sophia.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    <div className="w-full h-full bg-[url('../img/gabut-6.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    <div className="w-full h-full bg-[url('../img/profil.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    <div className="w-full h-full bg-[url('../img/doom-dragon.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    <div className="w-full h-full bg-[url('../img/dragon1.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
                </div>

                <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    <div className="w-full h-full bg-[url('../img/gabut-4.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
                </div>
                <div className="h-40 sm:h-48 md:h-64 lg:h-80 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-95 transition-all duration-500 shadow-lg dark:shadow-indigo-300">
                    {/* Overlay Background */}
                    <div className="w-full h-full bg-slate-50 dark:bg-slate-700 bg-cover bg-center absolute flex items-center justify-center p-4">
                        {/* Semi-Transparent Overlay for Better Readability */}
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                        {/* Text Content */}
                        <h1 className="relative z-10 text-center text-sm sm:text-base lg:text-xl text-slate-800 dark:text-white">
                            Portofolio lainnya ada di <br />
                            <a href="https://www.instagram.com/talesofparadys" className="text-red-600 hover:underline" target="_blank">
                                Instagram
                            </a> dan
                            <a href="https://www.artstation.com/jpwt" className="text-blue-600 hover:underline ml-1" target="_blank">
                                ArtStation
                            </a>
                        </h1>
                    </div>
                </div>            </div>
        </>
    );
};

export default Showcase;
