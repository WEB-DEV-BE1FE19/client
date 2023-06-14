import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListKelas = () => {
  // const [kelas, setKelas] = useState([
  //   { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", nama: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", harga: "Gratis" },
  //   { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", nama: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", harga: "Gratis" },
  //   { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", nama: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", harga: "Gratis" },
  // ]);

  const [kelas, setKelas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: "https://remedial-production.up.railway.app/kelas",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result.data);
        setKelas(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleGoToDetail = (id) => {
    navigate(`/kelas/${id}`)
  };

  return (
    <>
      {kelas.map((data) => {
        return (
          <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4" key={data.id}>
            <div className="card" style={{ width: "100%" }}>
              <img src={data.gambar_kelas} className="card-img-top" style={{ height: "300px" }} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.nama_kelas}</h5>
                <p className="card-text">{data.kategori_kelas}</p>
                <p className="fw-bold">gratis</p>
                <button onClick={() => handleGoToDetail(data.id)} className="btn btn-primary w-100">
                  Lihat Detail
                </button>
                {/* <Link to='/kelas/id' className="btn btn-primary w-100">Lihat Detail</Link> */}
              </div>
            </div>
          </div>
        );
      })}

      {/* <section className="list-kelas d-flex justify-content-center">
        {kelas.map((item, index) => (
          <div className="card-kelas card m-3" key={index}>
            <img src={item.gambar_kelas} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.nama_kelas}</h5>
              <p className="card-text mb-5">
                <small className="text-body-secondary fs-6">{item.kategori_kelas}</small>
              </p>
              <p className="fw-bold">gratis</p>
              <a href="#" className="btn btn-primary w-100">
                Lihat Detail
              </a>
            </div>
          </div>
        ))}
      </section> */}
    </>
  );
};

export default ListKelas;
