import img1 from "../assets/images/1.png";

const Header = () => {
  return (
    <>
      <div className="wp-back-img row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="container d-flex align-items-center justify-content-end ">
            <div className="wp-header p-3 text-white">
              <h1 className="mb-4">REMEDIAL</h1>
              <h5 className="mb-4">Raih pengalaman berkarya dan tingkatkan keterampilanmu di bidang seni dengan bergabung bersama kami</h5>
              <a className="btn btn-success btn-lg mt-2" href="#content">
                Lihat Kelas
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper-img col-md-6 d-flex align-items-center justify-content-center">
          <div className="container ">
            <div className="wp-header-img d-flex justify-content-center">
              <img src={img1} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
