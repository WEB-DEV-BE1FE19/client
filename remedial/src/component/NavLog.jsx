import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import LandingPage from "../pages/LandingPage";

const NavLog = () => {
  let namaLengkap = localStorage.getItem("nama_lengkap");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

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
            <div className="btn-group me-5">
              <button type="button" className="btn btn-secondary">
                {namaLengkap}
              </button>
              <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link style={{ color: "white", textDecoration: "none", paddingLeft:'10%' }} to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavLog;
