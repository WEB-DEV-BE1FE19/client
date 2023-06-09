import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Kelas from "./pages/Kelas";
import Berita from "./pages/Berita";
import Karya from "./pages/Karya";
import TentangKami from "./pages/TentangKami";
import Login from "./component/Login";
import Daftar from "./component/Daftar";
import NotFound from "./pages/NotFound";
import LandingDashboard from "./pages/dashboard/LandingDashboard";
import DetailKelas from "./pages/DetailKelas";
import DetailKarya from "./pages/DetailKarya";
import DetailBerita from "./pages/DetailBerita";
import { useEffect, useState } from "react";
import DetailBeliKelas from "./pages/DetailBeliKelas";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/kelas/:id" element={<DetailKelas />} />
        <Route path="/kelas/:id/materi" element={<DetailBeliKelas />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
        <Route path="/karya" element={<Karya />} />
        <Route path="/karya/:id" element={<DetailKarya />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<LandingDashboard />} />
      </Routes>
    </>
  );
}

export default App;
