import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import DataSosmed from "../component/DataSosmed";

const Sosmed = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="mt-20 relative z-0">
          <DataSosmed />
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Sosmed;
