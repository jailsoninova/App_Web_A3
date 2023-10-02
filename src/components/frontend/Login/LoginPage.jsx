import React from "react";
import "./styleLogin.css";

const LoginPage = ()=>{
     return(
     <div id="login">
          {/*.........LINHA 1....................*/}
       <div id="header">                
              <h2 className="text-Login">LOGIN</h2>               
       </div>
       {/*.........LINHA 2....................*/}
       <figure id="container-arrow">
           <img className="arrow" alt="SETA" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5ol8nKK4nyRFAAxsrbWEteJOE3TprmHrpU8Z8h516b3ol-Typepe3UMBJkKgrCwrzjg6W5o5Yrv3dHd3CpOSreMR4dO6BntZs978EVFArOA34rSoFMlDGrG05ux_heVQQx9aLHeaiujMjBuhHSHHLx-8QF4wpNiNv9m11ojbtDeB69nctPLXda96AN10/s320/seta-para-tras.png"/>
       </figure>
       {/*.........LINHA 3....................*/}
       <div id="container-form">
            <div id="header2">
               <h2 className="text-sotero">SOTERO GAMES</h2>               
            </div>
            <form className="form"> 
               <div className="field">
                   <label htmlFor="password">Id/Email</label>
                   <input type="password" name='password' id='password' />
               </div>     
               <div className="field">
                   <label htmlFor="email">Senha</label>
                   <input type="email" name='email' id='email' />
               </div>
               
               <div className="actions">
                   <button className="button" type="submit">Entrar</button>
                    </div>
               </form>  
               </div>        
       </div>


     )
}

export default LoginPage