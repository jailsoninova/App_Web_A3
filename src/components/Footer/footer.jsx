import React from "react";
import './styleFooter.css';

function Footer() {  
  return (  
   <footer className='footer'>
      <div className="box-container">
         <div className="box1">
           <h2 className="title-sotero">Sotero</h2>
           <h2 className="title-games">Games</h2>
         </div>
         <figure className="fenix-footer">
           <img className="fenixdown" alt="fenix" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGUIv1A9wDrFGM9Zo6EnyTVlILrDC7Y8rKuzXkQOdgqujWp_JHgrluE9v8U62ItmcmN0hL2ICiRhVP0Lsn7ZnEn-exi4Hgo2nrza4AoloVhQtrp5eav2gEXEpK5ePOM491U3koQB-WemDtaAs7A8Sd4Zz13XcGQcg59MG3mx251-jZCq82tMIUv3c1INc/s200/fenixleft.png" />
         </figure>
      </div>
       {/*.....IMAGENS REDE SOCIAL.....*/}
        <figure className='whatsap'>
          <img className="img-whatsap" alt="whatsapp" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmhqRg1TmiKVImNtLp_CTuMP4JZsAkST4pkqhveUv8JsiIn0pAFqFFOXInQVqpRWsquDYVrK7pGOwv-Szyj8tJ1D40GzRR-3fKc-0afeFqkqIFf0gVxiW8cq_xZcOs17Z-WkDcEwO1_qQJru7pxpr7ZWLB-HlSgFRM4Trdf2ptTY2WhcwT6wXX8QQhxqI/s200/whatsap.png" title="Dúvidas? Fale conosco" />
          <figcaption>Whatsapp</figcaption>
        </figure>
        <figure className='facebook'>
          <img className="img-facebook" alt="facebook" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMJ5N-Mmk3KgH464UwFm7lUVRpcVxdjRyBaY1f4jnP9ZqxO6H0cy2sfhvVeiyCti_zNzzvJKT-K_EgVBxlU9L0Hy7Crw6iGJdgWn4gqrtYLcc5XCGcrlyPuEcul4zR7Sx1vqCdp2pNuqpkusmlCOt2wDw7RgNVZ63CyeCNh6qUdWj3C2OU-jDS8YALRZA/s200/facebook.png" title="Siga-nos" />
          <figcaption>Facebook</figcaption>
        </figure>
        <figure className='email'>
          <img className="img-email" alt="email" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA-j5qt3gmQjG6FFC1WF-zGmQeSXot63mu_PaybE3BQH_ss1JhpR4COzZ9l89l8HEmjxKjtQjS2uJdMckVbhcLI6M9m3S-Tdx2A2Du_0VEckd3fEXDZOqzb8SGpXdGClA7auIUGRefhj-1s-Sy91Hz3V4-rB6b7SI3-dcjGpW6UwyzmHULnXJn_XKyMS8/s200/email_white.png" title="Envie-nos um e-mail" />
          <figcaption>E-mail</figcaption>
        </figure>
   </footer>
  )
}
export default Footer;