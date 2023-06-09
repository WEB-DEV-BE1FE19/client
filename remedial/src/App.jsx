import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import LandingPage from "./pages/LandingPage";
import Kelas from "./pages/Kelas";
import Berita from "./pages/Berita";
import Karya from "./pages/Karya";
import TentangKami from "./pages/TentangKami";
import Login from "./component/Login";
import Daftar from "./component/Daftar";
import NotFound from "./pages/NotFound";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/Karya" element={<Karya />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
