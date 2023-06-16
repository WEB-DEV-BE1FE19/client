import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MainLayouts from "../layouts/MainLayouts";

const DetailBerita = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  scrollWin();

  const { id } = useParams();
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    axios({
      url: `https://remedial-production.up.railway.app/berita/${id}`,
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
  }, [id]);

  return (
    <>
      {/* <h1>params id: {id}</h1> */}

      <MainLayouts>
        <div className="container" style={{ height: "150vh", marginTop: "120px" }}>
          <div className="row">
            <div className="col text-center">
              <div className="wrapper-img-berita mb-5">
                <img src={berita.gambar_berita} className="rounded" alt="..." style={{ width: "50%", height: "400px" }} />
              </div>
              <div className="wrapper-judul-berita mb-4">
                <h1>{berita.judul_berita}</h1>
              </div>
              <div className="wrapper-text-berita">
                <p>{berita.deskripsi_berita}</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayouts>
    </>
  );
};
export default DetailBerita;
