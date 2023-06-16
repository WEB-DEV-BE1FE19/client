import ListBerita from "../component/berita/ListBerita";
import MainLayouts from "../layouts/MainLayouts";

const Berita = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  scrollWin();
  return (
    <>
      <MainLayouts>
        <section className="container" style={{ height: "100vh", marginTop: "50px" }}>
          <div className="row py-4">
            <ListBerita />
          </div>
        </section>
      </MainLayouts>
    </>
  );
};

export default Berita;
