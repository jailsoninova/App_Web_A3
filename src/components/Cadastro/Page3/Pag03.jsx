import React from "react";
import styles from "../../../styleGeral.module.css";
import './EstiloPag3.css';
import { Link } from "react-router-dom";

function Page03 (){
  return(
   <>   
   {/*......... SECTION - CONTAINER GERAL....................*/}
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

        <div className="formContainer3">
             <header className="criarConta3">
                <h2 className="textCriar2">Perfil</h2>
             </header> 
             {/*.........AVISO DADOS....................*/}
             <text className="avisoDados3">
              <p>Seu ID será visto por outros jogadores</p>
              <p>Exemplo: sultan, pavan, mar_bravo </p>
             </text>

             {/*.........FORMULÁRIO....................*/}
             <div className="cadastrar3" >     
               <form className="formPag3">
                 <div className="Input3">
                    <label htmlFor="ID">Id jogador</label>
                    <input id="ID" type="text" className="IdJogador"/>
                 </div>
                 <div className="Input3">
                   <label htmlFor="email">Endereço email</label>
                   <input type="email" id="email" required  className="email"/>                  
                 </div>
                 <div className="Input3">
                   <label htmlFor="password">Senha</label>
                   <input type="password" id="password" required  className="email"/>                  
                 </div>
                 <div className="containerButtons">
                  <Link to="/Pag02" className={styles.link}>
                     <button className="button1">Voltar</button>
                  </Link>
                  <Link to="/Pag04" className={styles.link}>
                      <button className="button2">Avançar</button>
                  </Link>
                 </div>
                 <div className={styles.numPag}>
                   <p className={styles.pNumPag}>3</p>
                </div>
               </form>
             </div>  
        </div>        
    </section>
   </>  
          
     )
}

export default Page03;