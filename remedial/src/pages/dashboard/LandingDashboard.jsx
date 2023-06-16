import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Axios from "axios"
import { Link } from "react-router-dom";

const LandingDashboard = () => {
  const [dashFetch, setDashboard] = useState([])
  useEffect(() => {
      getListDashboard()
  }, [])

  useEffect(() => {
  }, [dashFetch])

  const getListDashboard = async () => {
  let config = {
      url: "https://remedial-production.up.railway.app/dashboard",
      method: "get",
      headers: {
      "Content-type": "application/json",
      "token": localStorage.getItem("token")
      }
  }

  try {
      let createData = await Axios(config)
      console.log(createData)
      setDashboard(createData.data.kelas_peserta)
  } catch (error){
      console.log(error)
  }
}
  
  return (
    <>
      
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

        <header id="header">
          <div class="d-flex flex-column">

            <div class="profile">
              <h1 class="text-light"><a href="index.html">{localStorage.getItem('nama_lengkap')}</a></h1>
            </div>

            <nav id="navbar" class="nav-menu navbar">
              <ul>
                <Link to='/'>
                  <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                </Link>
              </ul>
            </nav>
          </div>
        </header>

          <div className='container col-md-6 mt-5 mb-4'>
            <div className='d-flex justify-content-between'>
            <h2>Kelas yang sudah di ikuti</h2>
            </div>

            <br />

            {
              dashFetch.map((data) => {
                return(
                  <div className="card" style={{width: "18rem"}}>
                    <img src={data.gambar_kelas} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{data.nama_kelas}</h5>
                      <p className="card-text">{data.deskripsi_kelas}</p>
                        <Link to = {`/kelas/${data.id}/materi`}>
                          <a className="btn btn-primary">Lihat Kelas</a>
                        </Link>
                    </div>
                  </div>
                )
              })
            } 
          </div>

    </>
  );
};

export default LandingDashboard;
