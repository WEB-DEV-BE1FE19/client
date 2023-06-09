import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const ListKelas = () => {
  const [kelas, setKelas] = useState([
    { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", nama: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", harga: "Gratis" },
    { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", nama: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", harga: "Gratis" },
    { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", nama: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", harga: "Gratis" },
  ]);
  return (
    <>
      <section className="list-kelas d-flex justify-content-center">
        {kelas.map((item, index) => (
          <div className="card m-3" key={index}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.nama}</h5>
              <p className="card-text mb-5">
                <small className="text-body-secondary fs-6">{item.kategori}</small>
              </p>
              <p className="fw-bold">{item.harga}</p>
              <a href="#" className="btn btn-primary w-100">
                Lihat Detail
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ListKelas;
