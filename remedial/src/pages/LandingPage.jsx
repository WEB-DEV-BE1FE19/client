import Header from "../component/Header";
import ListBerita from "../component/berita/ListBerita";
import ListKarya from "../component/karya/ListKarya";
import ListKelas from "../component/kelas/ListKelas";
import MainLayouts from "../layouts/MainLayouts";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <MainLayouts>
        <Header />
        <section className="container" style={{ marginBottom: "25vh", marginTop: "10vh" }}>
          <div className="d-flex justify-content-between">
            <h1>Kelas Seni</h1>
            <div className="">
              <Link to="/kelas" className="btn btn-success btn-lg">
                Lihat Semua
              </Link>
            </div>
          </div>
          <div className="row py-4">
            <ListKelas />
          </div>
        </section>

        <section className="container" style={{ marginBottom: "25vh" }}>
          <div className="d-flex justify-content-between">
            <h1>Karya Siswa</h1>
            <div className="">
              <Link to="/karya" className="btn btn-success btn-lg">
                Lihat Semua
              </Link>
            </div>
          </div>
          <div className="row py-4">
            <ListKarya />
          </div>
        </section>

        <section className="container" style={{ marginBottom: "25vh" }}>
          <div className="d-flex justify-content-between">
            <h1>Berita Siswa</h1>
            <div className="">
              <Link to="/berita" className="btn btn-success btn-lg">
                Lihat Semua
              </Link>
            </div>
          </div>

          <div className="row py-4">
            <ListBerita />
          </div>
        </section>
      </MainLayouts>
    </>
  );
};

export default LandingPage;
