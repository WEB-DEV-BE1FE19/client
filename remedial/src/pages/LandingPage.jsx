import Header from "../component/Header";
import ListBerita from "../component/berita/ListBerita";
import ListKarya from "../component/karya/ListKarya";
import ListKelas from "../component/kelas/ListKelas";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="wrapper-berita">
        <div className="wp-text-berita w-25 p-3">
          <h1>ini Kelas</h1>;
        </div>
      </div>
      <ListKelas />
      <ListKelas />
      <div className="wrapper-berita">
        <div className="wp-text-berita w-25 p-3">
          <h1>ini Karya</h1>;
        </div>
      </div>
      <ListKarya />
      <ListKarya />
      <div className="wrapper-berita">
        <div className="wp-text-berita w-25 p-3">
          <h1>ini Berita</h1>;
        </div>
      </div>
      <ListBerita />
      <ListBerita />
    </>
  );
};

export default LandingPage;
