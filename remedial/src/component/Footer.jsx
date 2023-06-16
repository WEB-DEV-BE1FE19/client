import img2 from "../assets/images/logo.png";
import serrum from "../assets/images/serrum.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-dark mt-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-3">
              <Link to="/">
                <img src={img2} alt="" className="mb-4" />
              </Link>
              <p>Remedial adalah cara serrum untuk berkomunikasi dengan murid SMA hari ini dengan metode seni rupa dan literasi. dengan proses berdiskusi, berkreasi,d an berapresiasi</p>
            </div>

            <div className="col-3">
              <div className="col" style={{ marginLeft: "30%" }}>
                <div className="mb-4">
                  <h3>Layanan</h3>
                </div>
                <div className="col mb-3">
                  <NavLink style={{ textDecoration: "none", color: "white" }} to="/kelas">
                    Kelas Seni
                  </NavLink>
                </div>
                <div className="col mb-3">
                  <NavLink style={{ textDecoration: "none", color: "white" }} to="/karya">
                    Karya Siswa
                  </NavLink>
                </div>
                <div className="col mb-3">
                  <NavLink style={{ textDecoration: "none", color: "white" }} to="/berita">
                    Berita Seni
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="col">
                <div className="mb-4">
                  <h3>Kontak</h3>
                </div>
                <div className="">
                  <div className="col mb-3">
                    <span>081387448515 - Nopal</span>
                  </div>
                  <div className="col mb-3">
                    <span>081387448515 - Bewok</span>
                  </div>
                  <div className="col mb-3">
                    <span>remedialserrum@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <img src={serrum} alt="" />
            </div>
          </div>
        </div>

        <div className="p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
          <span className="text-white" style={{ marginLeft: "270px" }}>
            {" "}
            Copyright &copy;2018-2023 remedial Develop by FE-19 BE-1
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
