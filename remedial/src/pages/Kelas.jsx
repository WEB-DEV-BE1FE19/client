import img2 from "../assets/images/2.png";
import ListKelas from "../component/kelas/ListKelas";
import { Link } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

const Kelas = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  scrollWin();

  function scrollKelas() {
    window.scrollTo(0, 800);
  }

  return (
    <>
      <MainLayouts>
        <section className="container" style={{ marginBottom: "30vh" }}>
          <div className="row row-kelas">
            <div className="wrapper-title col-md-6 d-flex align-items-center">
              <div className="container ">
                <div className="wp-text p-3 ">
                  <h1 className="mb-3">Ambil Kelas Sekarang</h1>
                  <h5 className="mb-4">Pilih Kelas Sesuai Keinginan mu agar keterampilan seni mu lebih terarah</h5>
                  <button onClick={() => scrollKelas()} className="btn btn-success btn-lg mt-2">
                    Pilih Kelas
                  </button>
                </div>
              </div>
            </div>
            <div className="wrapper-img col-md-6 d-flex align-items-center justify-content-center">
              <div className="container ">
                <div className="wp-img p-5">
                  <img src={img2} alt="" className="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row py-4">
            <ListKelas />
          </div>
        </section>
      </MainLayouts>
    </>
  );
};

export default Kelas;
