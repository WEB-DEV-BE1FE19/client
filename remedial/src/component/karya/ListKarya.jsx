import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListKarya = () => {
  // const [karya, setKarya] = useState([
  //   { image: "https://img.lovepik.com/photo/40011/5436.jpg_wh860.jpg", judul: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", pembuat: "Raihan Renara" },
  //   { image: "https://img.lovepik.com/photo/40011/5436.jpg_wh860.jpg", judul: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", pembuat: "Raihan Renara" },
  //   { image: "https://img.lovepik.com/photo/40011/5436.jpg_wh860.jpg", judul: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", pembuat: "Raihan Renara" },
  // ]);

  const navigate = useNavigate();

  const [karya, setKarya] = useState([]);
  useEffect(() => {
    axios({
      url: "https://remedial-production.up.railway.app/karya",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result.data);
        setKarya(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleGoToDetail = (id) => {
    navigate(`/karya/${id}`);
  };

  return (
    <>
      {karya.map((data, index) => {
        return (
          <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
            <div onClick={() => handleGoToDetail(data.id)} className="card" style={{ height: "330px", width: "100%" }}>
              <img src={data.gambar_karya} className="card-img" style={{ height: "100%" }} alt="..." />
              <div className="card-img-overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", maxWidth: "350px", height: "200px", color: "white", marginTop: "25%", marginLeft: "10px" }}>
                <h5 className="card-title">{data.judul_karya}</h5>
                <p className="card-text">{data.deskripsi_karya}</p>
                <p className="card-text">
                  <small>rilis 15 juni 2023</small>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* {karya.map((data, index) => {
        return (
          <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.gambar_karya} className="img-fluid rounded-start" alt="..." style={{ height: "100%" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title ">{data.judul_karya}</h5>
                    <div style={{ overflow: "hidden", height: "100px" }}>
                      <p className="card-text ">{data.deskripsi_karya}</p>
                    </div>
                    <p className="card-text">
                      <small className="text-body-secondary">rilis 15 juni 2023</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default ListKarya;
