import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div className="">
          <Navbar />
        </div>
        <div className="mt-20">
          <Hero />
        </div>

        <div className="mt-10 xl:mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
