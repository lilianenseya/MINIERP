import "../../App.css";
import Menu from "../Menu";
import Navbar from "../dossier_dash_client/Navbar";
import Paragr from "../dossier_dash_client/Paragr";

function Dashbord() {
  return (
    <div className="menuItems">
      <Navbar />
      <div className="disp">
        <Menu />
        <div className="contenu-droit">
          <div className="container1">
            <h2 className="Titre">Demandes recentes</h2>
            <div className="contenu1">
              <Paragr /> <Paragr />
              <Paragr /> <Paragr />
              <Paragr /> <Paragr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
