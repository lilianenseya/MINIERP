import React from 'react';
import {NavLink} from "react-router-dom"
 
function  Menu() {
    return (
        
        <div className='famille'>

            <div className='cont-dash'>
                    <img className="nn" src="dashboard.png" alt="" />
                    <NavLink to="/">Dashboard</NavLink>
            </div>

           <div className='mmm'>
               <div className='mami'>
                    <img src="file-list.png" alt="" />
                    <NavLink className='ddd' to="/Cotation">Cotation</NavLink>
                </div>


                <div>
                      <img src="BDD.png" alt="" />
                      <NavLink  className="lili" to="/Commandes">Commandes</NavLink>
                      
                </div>


                <div> 
                          <img src="BDD.png" alt="" />
                          <NavLink className='gs' to="/gestiondestock">Dashboard</NavLink>
                       
                </div>


                <div>
                            <img src="Pproduction.png" alt="" />
                            <NavLink className='gs' to="/Pproduction">Dashboard</NavLink>
              
                </div>

                
                <div>
                           <img src="cptabilite.png" alt="" />
                           <NavLink  className="ML"to="/Comptabilite">Dashboard</NavLink>
            
               </div>


                <div>
                           <img src="portefeuille.png" alt="" />
                           <NavLink  className="ptr"to="/Gestion de porte feuille">Dashboard</NavLink>
             
                 </div>
       
                </div>
           
                <div>
                             <img src="photo.png" alt="" />
                             <NavLink  className="photo"to="/Profil">Dashboard</NavLink>
          
                </div>
         </div>
         
    );
  }


export default Menu;