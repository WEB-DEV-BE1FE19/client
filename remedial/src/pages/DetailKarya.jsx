import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MainLayouts from "../layouts/MainLayouts";

const DetailKarya = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  scrollWin();

  const { id } = useParams();
  const [karya, setKarya] = useState([]);

  useEffect(() => {
    axios({
      url: `https://remedial-production.up.railway.app/karya/${id}`,
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
  }, [id]);

  return (
    <>
      {/* <h1>params id: {id}</h1> */}
      <MainLayouts>
        <div className="container" style={{ height: "150vh", marginTop: "120px" }}>
          <div className="row">
            <div className="col text-center">
              <div className="wrapper-judul-berita mb-5">
                <h1>{karya.judul_karya}</h1>
              </div>
              <div className="wrapper-img-berita mb-4">
                <img src={karya.gambar_karya} className="rounded" alt="..." style={{ width: "50%", height: "400px" }} />
              </div>
              <div className="wrapper-text-berita">
                <p>{karya.deskripsi_karya}</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayouts>
    </>
  );
};

export default DetailKarya;
