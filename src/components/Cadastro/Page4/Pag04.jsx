import React from "react";
import styles from "../../../styleGeral.module.css";
import './EstiloPag4.css';
import { Link } from "react-router-dom";

function Page04 (){
  return(
   <>   
   {/*......... SECTION - CONTAINER GERAL....................*/}
     <section className={styles.conteudo}>          
         <header className={styles.cadastro}>                
                <h2 className={styles.textCadastro}>CADASTRO</h2>               
         </header>     

        {/*.........LINHA 3 - FINALIZADO....................*/}

        <div className="formContainer4">
             <header className="finalizado">
                <h2 className="textFinalizado">Finalizado</h2>
             </header>
             {/*.........OK....................*/}
             <figure className="Okverificar">
                <img className="Ok" alt="OKverificar" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGngyeOUdrOiVNl0M32SpOlc4hHxOHq04LLlrdQu6UUdnZpXEwqZnp4dS9AE10199Oo0yaMY7W4ehzIFJXkVmq2kcM7nP1aL9_tHMWsMTWVs71TCGR-xCwVu74YS_9RL8YiEHTmhCyj8ANPXxCJFvT9BurYqGnLahAMdAde3gssKY99Ww50B5R6OyvBiY/s200/verificar.png"/>
             </figure>
             {/*.........BOTÃO....................*/}
             <div className="conteudoBotao" >                 
                 <div className="containerButtons4">                 
                   <Link to="/" className={styles.link}>
                      <button className="buttonOk">Ok</button>
                   </Link>
                 </div>                 
             </div>
        </div>        
    </section>
   </>  
          
     )
}

export default Page04;