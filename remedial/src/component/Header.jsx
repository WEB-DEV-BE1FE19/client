import img1 from "../assets/images/1.png";

const Header = () => {
  function scrollWin() {
    window.scrollTo(0, 800);
  }

  return (
    <>
      <div className="wp-back-img row row-header mt-5">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="container d-flex align-items-center justify-content-end ">
            <div className="wp-header p-3 text-white">
              <h1 className="mb-4">REMEDIAL</h1>
              <h5 className="mb-4">Raih pengalaman berkarya dan tingkatkan keterampilanmu di bidang seni dengan bergabung bersama kami</h5>
              <button onClick={() => scrollWin()} className="btn btn-success btn-lg mt-2">Lihat Kelas</button>
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
