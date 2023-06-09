import { Link, Navigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img src={logo} alt="Bootstrap" width="120" height="40" />
            </Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active ms-5 me-3" aria-current="page" href="#">
                <Link to="/kelas">Kelas</Link>
              </a>
              <a className="nav-link me-3" href="#">
                <Link to="/karya">Karya</Link>
              </a>
              <a className="nav-link me-3" href="#">
                <Link to="/berita">Berita</Link>
              </a>

              <a className="nav-link me-3" href="#">
                <Link to="/tentangkami">Tentang Kami</Link>
              </a>
            </div>
          </div>
          <div className="wrapper-button p-1">
            <a href="#">
              <button className="btn btn-outline-success m-1">
                <Link to="/daftar">Daftar</Link>
              </button>
            </a>
            <a href="#">
              <button className="btn btn-success m-1" type="submit">
                <Link to="/masuk">Masuk</Link>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
