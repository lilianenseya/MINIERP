import React from "react";

function Navbar(){
    return(
        <div className="nav">
            <h1>SmallERP</h1>
            <div className="zz">
                 <img className="forme-Zero" src="Group 1.png" alt="" />
                 <div className="inputRecherche">
                    <img className= "icon"   src="search.png" alt="" />
                    <input className="inp" type="search" placeholder="Rechercher" />
                 </div>
            </div>
            
            <div className="forme">
                <img src="Ellipse 3.png" alt="" />
                <h3>Client</h3>
            </div>
             

        </div>
    )
}
export default Navbar;