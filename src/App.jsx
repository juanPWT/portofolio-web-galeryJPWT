import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Home from "./page/Home";
import Portofolio from "./page/Portofolio";
import NotFound from "./page/NotFound";
import Sosmed from "./page/Sosmed";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-slate-300 ">
          <div className="flex justify-center items-center h-screen">
            <ClimbingBoxLoader
              color={"#ffffff"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h3 className="text-white text-2xl">Portofolo JPWT</h3>
          </div>
        </div>
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portofolio" element={<Portofolio />} />
              <Route path="/sosial-media" element={<Sosmed />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
