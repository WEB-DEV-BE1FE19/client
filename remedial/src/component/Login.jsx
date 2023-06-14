import { Link } from "react-router-dom";
import img2 from "../assets/images/2.png";

const Login = () => {
  return (
    <>
      <div className="row bg-white" style={{ height: "100vh" }}>
        <div className=" col-4 left-box">
          <img src={img2} className="img-fluid" style={{ height: "100%" }} />
        </div>
        <div className=" row col-8 right-box justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="p-5 shadow box-area" style={{ width: "500px", height: "450px" }}>
            <div className="header-text mb-4">
              <h2>Login</h2>
              <p>Harap login dengan email yang sudah terdaftar.</p>
            </div>
            <form id="formlogin" className="loginForm">
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn w-100 mb-2" style={{ background: "green", color: "white" }}>
                Submit
              </button>
              <div className="text-center">
                <span>
                  Belum Punya Akun? <Link to="/daftar">Daftar Sekarang</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
