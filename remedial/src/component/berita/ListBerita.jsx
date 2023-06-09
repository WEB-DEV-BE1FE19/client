import { useState } from "react";

const ListBerita = () => {
  const [berita, setBerita] = useState([
    {
      image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/30151840/image001-22.jpg",
      judul: "Penting Menguasai Sketchup Bagi Siswa",
      rilis: "24 juli 2019",
      isi: "Sketchup merupakan program aplikasi membuat bentuk tiga dimensi. Tim arthandling atau perancang teknis pemasangan karya seringkali memanfaatkan ....",
    },
    {
      image: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/06/30151840/image001-22.jpg",
      judul: "Penting Menguasai Sketchup Bagi Siswa",
      rilis: "24 juli 2019",
      isi: "Sketchup merupakan program aplikasi membuat bentuk tiga dimensi. Tim arthandling atau perancang teknis pemasangan karya seringkali memanfaatkan ....",
    },
  ]);
  return (
    <>
      <section className="list-kelas d-flex justify-content-center">
        {berita.map((item, index) => (
          <div key={index} className="card-berita mb-4 d-flex ">
            <img src={item.image} alt="" />
            <div className="card-body m-3">
              <h5 className="card-title">{item.judul}</h5>
              <p className="card-text mb-5">
                <small className="text-body-secondary fs-6">{item.rilis}</small>
              </p>
              <p className="">{item.isi}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ListBerita;
