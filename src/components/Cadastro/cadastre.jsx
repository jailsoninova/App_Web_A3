import React from "react";
import "./styleCadastre.css";
import { Link } from "react-router-dom";

function Cadastrar(){
       
     return(
      <>   
          <figure className="container-arrow">
             <Link to="/">
                <img className="arrow" alt="SETA" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ol8nKK4nyRFAAxsrbWEteJOE3TprmHrpU8Z8h516b3ol-Typepe3UMBJkKgrCwrzjg6W5o5Yrv3dHd3CpOSreMR4dO6BntZs978EVFArOA34rSoFMlDGrG05ux_heVQQx9aLHeaiujMjBuhHSHHLx-8QF4wpNiNv9m11ojbtDeB69nctPLXda96AN10/s320/seta-para-tras.png"/>
             </Link>        
       </figure>
       <div>
           <h1>Pág. Cadastro em construção</h1>
       </div>
  </>  
          
     )
}

export default Cadastrar;