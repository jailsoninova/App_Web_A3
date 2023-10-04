import React from "react";
import "./styleLogin.css";
import { Link } from "react-router-dom";

function LoginPage() {           
   return(
     <section className="container">
       {/*.........LINHA 1....................*/}
       <header className="login">                
              <h2 className="text-Login">LOGIN</h2>               
       </header>
       {/*.........LINHA 2....................*/}
       <figure className="container-arrow">
         <Link to="/">
            <img className="arrow" alt="SETA" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ol8nKK4nyRFAAxsrbWEteJOE3TprmHrpU8Z8h516b3ol-Typepe3UMBJkKgrCwrzjg6W5o5Yrv3dHd3CpOSreMR4dO6BntZs978EVFArOA34rSoFMlDGrG05ux_heVQQx9aLHeaiujMjBuhHSHHLx-8QF4wpNiNv9m11ojbtDeB69nctPLXda96AN10/s320/seta-para-tras.png"/>
         </Link>
       </figure>
       {/*.........LINHA 3....................*/}
       <div className="container-form">
         <header className="soteroGames">
            <h2 className="text-sotero">SOTERO GAMES</h2>
         </header> 

          {/*.........FORMULÁRIO....................*/}
         <form className="form" >     
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
            </div>
            <div className="field">
                <label htmlFor="password">Senha</label>
                <input type="password" name='password' id="password" 
                />
            </div>                
            <div className="actions">
                <input className="botao" type="submit" value="Entrar" />
            </div>
            </form>  
           </div>        
      </section>


     )
}
export default LoginPage;