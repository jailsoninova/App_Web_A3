import React from "react";
import "./styleLogin.css";
import styles from "../../styleGeral.module.css";
import { Link } from "react-router-dom";

function LoginPage() {           
   return(
     <section className="container">
       {/*.........LINHA 1....................*/}
       <header className="login">                
              <h2 className="text-Login">LOGIN</h2>               
       </header>
      {/*.........LINHA 2 - RETORNAR HOME....................*/}          
          
      <div className={styles.returnHome}>
            <figure className={styles.figureHome}>         
                <Link to="/" className={styles.link}>            
                     <img className={styles.homePage1} alt="home"src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMfKQa8L1tKaxyWzM36w-gTasXAs9WUwNekh1yo9vDn6MdwvROhwazvHGiGjX0y8PVqKuu-EZQsJ5TvAa6Xq0pg6O5RTwhjVwi3H8otvFTLHuTt69D6j-NsiQrhS3U4sihMHz-WjzJJR00EjFxB039Rc3Q5hzQS8zzNVp0E7eFydznGF0SMEJPan1NYP8/s200/casa.png"/>
                </Link> 
                <figcaption className={styles.ficapt}>Pág Inicial</figcaption> 
            </figure>   
         </div>    
       {/*....LINHA 3 TEXTO SOTERO GAMES.....*/}
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