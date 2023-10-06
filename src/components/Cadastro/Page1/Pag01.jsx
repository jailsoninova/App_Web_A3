import React from "react";
import styles from "../../../styleGeral.module.css";
import './EstiloPag1.css';
import { Link } from "react-router-dom";

function Page01 (){
   return(
   <>   
   {/*.........LINHA 1 section CONTAINER GERAL....................*/}
      <section className={styles.conteudo}>          
         <header className={styles.cadastro}>                
                 <h2 className={styles.textCadastro}>CADASTRO</h2>               
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

          {/*.........LINHA 3 - CRIAR CONTA....................*/}

          <div className="formContainer1">
               <header className="criarConta1">
                  <h2 className="textCriar1">Criar uma Conta</h2>
               </header> 

               {/*.........FORMULÁRIO....................*/}
               <div className="cadastrar01" >     
                  <figure className="pessoa">
                  <img className="perfil" alt="perfil" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs28E5aQSp04tBRXQXWCD6H6Nj_bvxQS70FV0Psz-vVjqioZBdDHR5GQTDgqZRSzoU_DCfUeDLu0e2XtcyklPGDy1k3jIRZEl6AFRybdEY7J_zJMIKy9CnaXrpxb137r_NRu5jtYSJhYRVd6HPAPkE7U4FB6cbWKo_XlsS5SP21cMfvj2Uuw6IKKFaqsI/s200/perfil.png"/>
                  </figure>               
                  <div className="act">
                     <Link to="/Pag02" className={styles.link}>
                      <input id="criar" className="buttonPage1" type="submit" value="Criar" />
                     </Link>
                  </div>

                  {/*...........LINK LOGIN - INICIE SESSÃO.........*/}
                  <div className="temConta">
                     <p className="textConta">Se já tem conta 
                     <Link to="/LoginPage" className={styles.link}>
                        <span className="linkInicieSessao"> inicie sessão</span>
                     </Link>
                     </p>
                  </div>
                  <div className={styles.numPag}>
                     <p className={styles.pNumPag}>1</p>
                  </div>
               </div>  
            </div>        
      </section>
   </>  
          
     )
}

export default Page01;