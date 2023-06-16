import { Link } from "react-router-dom";
import img2 from "../assets/images/2.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://remedial-production.up.railway.app/login", values)
      // .then((res) => console.log(res))
      // .then((err) => console.log(err));
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("nama_lengkap", res.data.nama_lengkap);
        let token = localStorage.getItem("token");
        if (token) {
          navigate("/");
          console.log(res);
        }
      });
  };

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
            <form id="formlogin" className="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={(e) => setValues({ ...values, password: e.target.value })} type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-success w-100 mb-2" style={{ color: "white" }}>
                Masuk
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
