import ListKarya from "../component/karya/ListKarya";
import { Link } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

const Karya = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  scrollWin();
  return (
    <>
      <MainLayouts>
        <section className="container" style={{ height: "150vh", marginTop: "50px" }}>
          <div className="row py-4">
            <ListKarya />
          </div>
        </section>
      </MainLayouts>
    </>
  );
};

export default Karya;
