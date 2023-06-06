import React from 'react';
 
function  Menu() {
    return (
        
        <div className='famille'>
         <div className='cont-dash'>
          <img className="nn" src="dashboard.png" alt="" />
          <h2>Dashboard</h2>
        </div>
           <div className='mmm'>
            <ul>

               <div className='mami'>
              <img src="file-list.png" alt="" />
            <li className='ddd'>
              cotation
            </li>
            </div>

             <div>
            <img src="BDD.png" alt="" />
            <li className="lili"> 
              commandes
            </li>
            </div>
             <div> 
              <img src="BDD.png" alt="" />
             <li className='gs'>
              gestion de stock</li>
            </div>


            <div>
            <img src="Production.png" alt="" />
            <li className='gs'>
              Plan de production
            </li>
            </div>

            <div>
            <img src="cptabilite.png" alt="" />
            <li className="ML">
              Comptabilité
            </li>
            </div>

            <div>
            <img src="portefeuille.png" alt="" />
             <li className='ptr'>
              Gestion de porte feuille
            </li>
            </div>
           </ul>
           </div>
           
          <div>
            <img src="photo.png" alt="" />
         <h6>Profil</h6>
         </div>
         </div>
         
    );
  }


export default Menu;