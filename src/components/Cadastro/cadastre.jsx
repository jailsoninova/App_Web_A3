import React from "react";
import "./styleCadastre.css";
import { Link } from "react-router-dom";

function Cadastrar(){
       
     return(
      <>   
         <section className="conteudo">
             {/*.........LINHA 1 section CONTAINER GERAL....................*/}
             <header className="cadastro">                
                    <h2 className="text-Login">CADASTRO</h2>               
             </header>
             {/*.........LINHA 2 SETA....................*/}
             <figure className="container-arrow">
               <Link to="/">
                  <img className="arrow" alt="SETA" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ol8nKK4nyRFAAxsrbWEteJOE3TprmHrpU8Z8h516b3ol-Typepe3UMBJkKgrCwrzjg6W5o5Yrv3dHd3CpOSreMR4dO6BntZs978EVFArOA34rSoFMlDGrG05ux_heVQQx9aLHeaiujMjBuhHSHHLx-8QF4wpNiNv9m11ojbtDeB69nctPLXda96AN10/s320/seta-para-tras.png"/>
               </Link>
             </figure>
             {/*.........LINHA 3 - CRIAR CONTA....................*/}
             <div className="form-container">
                  <header className="criarConta">
                     <h2 className="text-criar">Criar uma Conta</h2>
                  </header> 

                  {/*.........FORMULÁRIO....................*/}
                  <div id="cadastrar" >     
                     <figure id="pessoa">
                     <img className="perfil" alt="perfil" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs28E5aQSp04tBRXQXWCD6H6Nj_bvxQS70FV0Psz-vVjqioZBdDHR5GQTDgqZRSzoU_DCfUeDLu0e2XtcyklPGDy1k3jIRZEl6AFRybdEY7J_zJMIKy9CnaXrpxb137r_NRu5jtYSJhYRVd6HPAPkE7U4FB6cbWKo_XlsS5SP21cMfvj2Uuw6IKKFaqsI/s200/perfil.png"/>
                     </figure>               
                     <div className="act">
                         <input className="criar" type="submit" value="Criar" />
                     </div>
                     <div className="conteudo-parag">
                        <p className="text-parag">Se já tem conta <span>inicie sessão</span></p>
                     </div>
                  </div>  
               </div>        
         </section>
      </>  
          
     )
}

export default Cadastrar;