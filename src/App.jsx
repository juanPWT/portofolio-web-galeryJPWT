import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import Portofolio from "./page/Portofolio";
import NotFound from "./page/NotFound";
import Sosmed from "./page/Sosmed";
import Commiss from "./page/Commiss";
import Admin from "./page/Admin";

function ProtectedRoute({ children }) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const accessKey = params.get('access')

    return accessKey == "juanpekalongan0815" ? children : <NotFound />
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                // ini saya protect
                <Route path="/set" element={<ProtectedRoute>< Admin /></ProtectedRoute>} />
                // ini tidak
                <Route path="/commiss" element={< Commiss />} />
                <Route path="/portofolio" element={<Portofolio />} />
                <Route path="/sosial-media" element={<Sosmed />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
