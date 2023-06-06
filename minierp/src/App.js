import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./component/pages/dashboard";
import Comptabilite from "./component/pages/comptabilite";
import Gstock from "./component/pages/gestiondestock";
import Cotation from "./component/pages/Cotation";
import Pproduction from "./component/pages/plandeproduction";
import Gportefeuille from "./component/pages/gestiondeportefeuilleclient";
import Commandes from "./component/pages/commandes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord />}></Route>
        <Route path="/Cotation" element={<Cotation />}></Route>
        <Route path="/Comptabilite" element={<Comptabilite />}></Route>
        <Route path="/Gstock" element={<Gstock />}></Route>
        <Route path="/Pproduction" element={<Pproduction />}></Route>
        <Route path="/Commandes" element={<Commandes />}></Route>
        <Route path="/Gportefeuille" element={<Gportefeuille />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
