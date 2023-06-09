import img2 from "../assets/images/2.png";
import ListKelas from "../component/kelas/ListKelas";

const Kelas = () => {
  return (
    <>
      <div className="row">
        <div className="wrapper-title col-md-6">
          <div className="container d-flex align-items-center justify-content-end">
            <div className="wp-text p-3 ">
              <h1 className="mb-3">Ambil Kelas Sekarang</h1>
              <h5 className="mb-4">Pilih Kelas Sesuai Keinginan mu agar keterampilan seni mu lebih terarah</h5>
              <a className="btn btn-success btn-lg" href="#content">
                Pilih Kelas
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper-img col-md-6">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="wp-img p-5">
              <img src={img2} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <ListKelas />
      <ListKelas />
      <ListKelas />
    </>
  );
};

export default Kelas;
