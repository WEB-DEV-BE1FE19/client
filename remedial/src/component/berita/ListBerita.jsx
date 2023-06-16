import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListBerita = () => {
  // const [berita, setBerita] = useState([
  //   {
  //     image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/30151840/image001-22.jpg",
  //     judul: "Penting Menguasai Sketchup Bagi Siswa",
  //     rilis: "24 juli 2019",
  //     isi: "Sketchup merupakan program aplikasi membuat bentuk tiga dimensi. Tim arthandling atau perancang teknis pemasangan karya seringkali memanfaatkan ....",
  //   },
  //   {
  //     image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/30151840/image001-22.jpg",
  //     judul: "Penting Menguasai Sketchup Bagi Siswa",
  //     rilis: "24 juli 2019",
  //     isi: "Sketchup merupakan program aplikasi membuat bentuk tiga dimensi. Tim arthandling atau perancang teknis pemasangan karya seringkali memanfaatkan ....",
  //   },
  // ]);
  const navigate = useNavigate();
  const [berita, setBerita] = useState([]);
  useEffect(() => {
    axios({
      url: "https://remedial-production.up.railway.app/berita",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result.data);
        setBerita(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleGoToDetail = (id) => {
    navigate(`/berita/${id}`);
  };

  return (
    <>
      {berita.map((data, index) => {
        return (
          <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-6" key={index}>
            <div className="card mb-3" style={{ Width: "100%" }}>
              <div className="row p-3">
                <div className="col-md-5">
                  <img src={data.gambar_berita} className="img-fluid rounded-start" alt="..." style={{ height: "100%" }} />
                </div>
                <div className="col-md-7">
                  <div className="card-body" onClick={() => handleGoToDetail(data.id)}>
                    <h5 className="card-title ">{data.judul_berita}</h5>
                    <div style={{ overflow: "hidden", height: "100px" }}>
                      <p className="card-text ">{data.deskripsi_berita}</p>
                    </div>
                    <p className="card-text">
                      <small className="text-body-secondary">{data.createdAt.slice(0, 10).split("-").reverse().join("-")}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* {berita.map((data, index) => {
        return (
          <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img src={data.gambar_berita} className="card-img-top" style={{ height: "230px" }} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.judul_berita}</h5>
                <p className="card-text mb-3">
                  <small className="text-body-secondary fs-6">14 juni 2023</small>
                </p>
                <p >{data.deskripsi_berita}</p>
              </div>
            </div>
          </div>
        );
      })} */}
      {/* <section className="list-kelas d-flex justify-content-center">
        {berita.map((item, index) => (
          <div key={index} className="card-berita mb-4 d-flex ">
            <img src={item.gambar_berita} alt="" />
            <div className="card-body m-3">
              <h5 className="card-title">{item.judul_berita}</h5>
              <p className="card-text mb-5">
                <small className="text-body-secondary fs-6">14 juni 2023</small>
              </p>
            </div>
          </div>
        ))}
      </section> */}
    </>
  );
};

export default ListBerita;
