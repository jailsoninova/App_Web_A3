import React from "react";
import './styleHeader.css';
import { Link } from "react-router-dom";

function Header() {  
 function EventLogin(){
  alert("AGUARDE!\nEstamos trabalhando");
  }
  return (  
   <section id="Container">
       {/*..........ROW FIRST - HEAD - LINKS..........*/}
      <div className="divs box1">
         <div className="divs soteroGames">
           <h1 className="sotero">Sotero</h1>
           <h1 className="games">Games</h1>
         </div>
         <figure className="fig-fenix">
           <img className="fenix" alt="fenix" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGUIv1A9wDrFGM9Zo6EnyTVlILrDC7Y8rKuzXkQOdgqujWp_JHgrluE9v8U62ItmcmN0hL2ICiRhVP0Lsn7ZnEn-exi4Hgo2nrza4AoloVhQtrp5eav2gEXEpK5ePOM491U3koQB-WemDtaAs7A8Sd4Zz13XcGQcg59MG3mx251-jZCq82tMIUv3c1INc/s200/fenixleft.png" />
         </figure>
      </div>
      
      {/*.........TEXTOS NO HEADER.......*/}
       <div className="divs box2">
            <h3 className="texto-escolha">Escolha seu jogo ou cadastre um</h3>
       </div>
       <div className="divs box3">
            <h3 className="jogos" onClick={EventLogin}>+Jogos</h3>
       </div>           
       <nav className="divs box4">
          <Link to="/Cadastre"><h3 className="cadastre" >Cadastre-se</h3></Link>
          <Link to="/LoginPage"><h3 className="login" >Login</h3></Link>
        </nav>
       
  </section>
  )
}
export default Header;