import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MainLayouts from "../layouts/MainLayouts";

const DetailKelas = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  scrollWin();

  const { id } = useParams();
  const [kelas, setKelas] = useState([]);
  const [materi, setMateri] = useState([]);

  useEffect(() => {
    axios({
      url: `https://remedial-production.up.railway.app/kelas/${id}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result.data.kelas);
        setKelas(result.data.kelas);
        console.log(result.data.materi);
        setMateri(result.data.materi);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const [data, setData] = useState(null);
  useEffect(() => {
    const storeData = localStorage.getItem("token");
    setData(storeData);
  }, []);

  // const handleBeli = () => {};

  // if (typeof Storage !== "undefined") {
  //   let token = localStorage.getItem("token");

  //   if (token) {
  //     axios({
  //       url: `https://remedial-production.up.railway.app/kelas/${id}`,
  //       method: "post",
  //       headers: {
  //         "token": token,
  //       },
  //     });
  //   } else {
  //     // window.location.href = "/masuk";
  //     console.log("belum login");
  //   }
  // }

  return (
    <>
      {/* <div>
        <h1>params id: {id}</h1>
        <pre>{JSON.stringify(kelas, null, 2)}</pre>
      </div> */}
      <MainLayouts>
        <div className="container mt-5" style={{ height: "auto" }}>
          <div className="row mb-5">
            <div className="col">
              <div className="wrapper-judul-berita text-center mb-5">
                <h1>{kelas.nama_kelas}</h1>
              </div>
              <div className="wrapper-img-berita text-center mb-5">
                <img src={kelas.gambar_kelas} className="rounded" alt="..." style={{ width: "50%", height: "400px" }} />
              </div>
              <div className="wrapper-text-berita mb-5 border rounded p-4">
                <h3>Tentang Kelas</h3>
                <p>{kelas.deskripsi_kelas}</p>
              </div>

              <div className="row">
                <div className="col-6 h-auto">
                  <div className="border rounded p-4">
                    <div className="mb-5 w-75 ">
                      <h3>Yang Akan Dipelajari</h3>
                    </div>
                    {materi.map((data, index) => {
                      return (
                        <div className="col rounded  p-3 mb-3" style={{ backgroundColor: "#D9D9D9" }}>
                          <span>
                            materi {index + 1} {data.judul_materi}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-6 row justify-content-end mb-5">
                  <div className="p-4 rounded border h-auto" style={{ width: "60%" }}>
                    <div className="mb-3 p-3">
                      <h3>Mentor</h3>
                    </div>
                    <div className="col border rounded p-3 mb-3">
                      <span>{kelas.mentor_kelas}</span>
                    </div>
                    <div className="col border rounded p-3 mb-3">
                      <span>{kelas.mentor_kelas}</span>
                    </div>
                  </div>
                  <div className="mt-3" style={{ width: "60%" }}>
                    <button
                      onClick={() => {
                        if (data) {
                          console.log("bisa beli");
                          axios({
                            url: `https://remedial-production.up.railway.app/kelas/${id}`,
                            method: "post",
                            headers: {
                              token: localStorage.getItem("token"),
                            },
                          });
                          window.location.href = `/kelas/${id}/materi`;
                        } else {
                          console.log("blm bisa beli");
                          window.location.href = "/masuk";
                        }
                      }}
                      className="btn btn-success w-100 p-2"
                    >
                      Gabung Kelas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayouts>
    </>
  );
};

export default DetailKelas;
