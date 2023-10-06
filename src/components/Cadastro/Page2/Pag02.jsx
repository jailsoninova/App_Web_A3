import React from "react";
import styles from "../../../styleGeral.module.css";
import './EstiloPag2.css';
import { Link } from "react-router-dom";

function Page02 (){
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

         <div className="formContainer2">
              <header className="criarConta2">
                 <h2 className="textCriar2">Criar uma Conta</h2>
              </header> 
              {/*.........AVISO DADOS....................*/}
              <text className="avisoDados">
               Seus dados não são visualizados por outros
              </text>

              {/*.........FORMULÁRIO....................*/}
              <div className="cadastrar02" >     
                 <form className="formPag2">
                   <div className="SelectInput">
                      <label htmlFor="estado">Estado</label>
                      <select id="estado" name="estado">
                         <option value="AC">Acre</option>
                         <option value="AL">Alagoas</option>
                         <option value="AP">Amapá</option>
                         <option value="AM">Amazonas</option>
                         <option value="BA">Bahia</option>
                         <option value="CE">Ceará</option>
                         <option value="DF">Distrito Federal</option>
                         <option value="ES">Espírito Santo</option>
                         <option value="GO">Goiás</option>
                         <option value="MA">Maranhão</option>
                         <option value="MT">Mato Grosso</option>
                         <option value="MS">Mato Grosso do Sul</option>
                         <option value="MG">Minas Gerais</option>
                         <option value="PA">Pará</option>
                         <option value="PB">Paraíba</option>
                         <option value="PR">Paraná</option>
                         <option value="PE">Pernambuco</option>
                         <option value="PI">Piauí</option>
                         <option value="RJ">Rio de Janeiro</option>
                         <option value="RN">Rio Grande do Norte</option>
                         <option value="RS">Rio Grande do Sul</option>
                         <option value="RO">Rondônia</option>
                         <option value="RR">Roraima</option>
                         <option value="SC">Santa Catarina</option>
                         <option value="SP">São Paulo</option>
                         <option value="SE">Sergipe</option>
                         <option value="TO">Tocantins</option>
                         <option value="EX">Estrangeiro</option>
                      </select>
                   </div>
                   <div className="SelectInput">
                     <label htmlFor="pais">Data nascimento</label>
                     <input type="date" />                   
                   </div>
                   <div className="containerButtons">
                    <Link to="/Pag01" className={styles.link}>
                       <button className="button1Pag2">Voltar</button>
                    </Link>
                    <Link to="/Pag03" className={styles.link}>
                       <button className="button2Pag2">Avançar</button>
                    </Link>
                   </div>
                   <div className={styles.numPag}>
                     <p className={styles.pNumPag}>2</p>
                  </div>
                 </form>
              </div>  
         </div>        
     </section>
   </>  
          
     )
}

export default Page02;