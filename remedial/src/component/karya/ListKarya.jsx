import { useState } from "react";

const ListKarya = () => {
  const [karya, setKarya] = useState([
    { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", judul: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", pembuat: "Raihan Renara" },
    { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", judul: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", pembuat: "Raihan Renara" },
    { image: "https://awsimages.detik.net.id/community/media/visual/2022/08/24/teknik-aquarel-3.jpeg?w=1280", judul: "Belajar Melukis Cat Air Menggunakan Teknik Aquarel", kategori: "Melukis", pembuat: "Raihan Renara" },
  ]);
  return (
    <>
      <section className="list-kelas d-flex justify-content-center">
        {karya.map((item, index) => (
          <div className="card-karya m-3" key={index}>
            <img src={item.image} alt="" />
            <div className="card-body-karya">
              <p className="card-text">
                <small className="text-body-secondary fs-6">{item.kategori}</small>
              </p>
              <h5 className="card-title mb-4">{item.judul}</h5>

              <p className="">
                oleh <b>{item.pembuat}</b>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ListKarya;
