const Showcase = () => {
  return (
    <>
      <div className="container p-8 mx-auto font-inter grid grid-cols-2 gap-2 md:gap-4  w-full md:grid-cols-4 xl:grid-cols-2">
        <h1 className="h-15 text-xl font-bold text-slate-500 ">My Galery</h1>
        <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-2 md:col-start-4 xl:hidden">
          J
        </h1>
        <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-4 xl:hidden ">
          P
        </h1>
        <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-3 md:col-start-3 xl:hidden">
          W
        </h1>
        <h1 className="h-15 text-4xl font-bold text-slate-500 hidden md:block md:row-start-4 md:col-start-3 xl:hidden">
          T
        </h1>
        <div className="h-15 font-light text-slate-400 md:row-start-1 md:col-start-2">
          Digital Painting
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-[url('./img/gabut-6.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-[url('./img/profil.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-[url('./img/doom-dragon.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-[url('./img/dragon1.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-[url('./img/elf-princess-sophia.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-[url('./img/gabut-4.png')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500"></div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-slate-300 bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500 flex">
            <h1 className="m-auto text-slate-500 group-hover:text-slate-100">
              Coming Soon
            </h1>
          </div>
        </div>
        <div className="h-15 aspect-[4/3] md:aspect-[3/4]  xl:aspect-[4/3] rounded-lg overflow-hidden group relative hover:scale-90 transition-all duration-500 shadow-lg">
          <div className="w-full h-full bg-slate-300 bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500 flex">
            <h1 className="m-auto text-slate-500 group-hover:text-slate-100">
              Coming Soon
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
