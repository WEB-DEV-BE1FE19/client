import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
        <div className="container">
          <span className="navbar-brand" href="#">
            <NavLink to="/">
              <img src={logo} alt="Bootstrap" width="120" height="40" />
            </NavLink>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link ms-5 me-3" to="/kelas">
                Kelas
              </NavLink>

              <NavLink className="nav-link me-3" to="/karya">
                Karya
              </NavLink>

              <NavLink className="nav-link me-3" to="/berita">
                Berita
              </NavLink>

              <NavLink className="nav-link me-3" to="/tentangkami">
                Tentang Kami
              </NavLink>
            </div>
          </div>
          <div className="wrapper-button p-1">
            <span href="#">
              <NavLink className="btn btn-outline-success m-1" to="/daftar">
                Daftar
              </NavLink>

              <NavLink className="btn btn-success m-1" to="/masuk">
                Masuk
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
