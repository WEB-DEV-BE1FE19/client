import img2 from "../assets/images/logo.png";
import serrum from '../assets/images/serrum.png'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-dark">
        <div className="container p-5">
          <div className="row">
            <div className="col-3">
              <Link to="/">
                <img src={img2} alt="" className="mb-4" />
              </Link>
              <p>Remedial adalah cara serrum untuk berkomunikasi dengan murid SMA hari ini dengan metode seni rupa dan literasi. dengan proses berdiskusi, berkreasi,d an berapresiasi</p>
            </div>
            <div className="col-3">
              <h3>Layanan</h3>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/kelas">
                    Kelas Seni
                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/karya">
                    Karya Siswa
                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/berita">
                    Berita Seni
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Kontak</h3>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <span>081387448515 - Bewok</span>
                </li>
                <li>
                  <span>081387448515 - Nopal</span>
                </li>
                <li>
                  <span>remedialserrum@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-3">
            <img src={serrum} alt="" />
            </div>
          </div>
        </div>

        <div className="p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
          <span className="text-white"> Copyright &copy;2018-2023 remedial Develop by FE-19 BE-1</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
