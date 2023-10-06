import React from "react";
import './styleHomePage.css';
import Mobile from "../Mobile/HeadMobile.jsx";
import Footer from "../Footer/footer.jsx";
import Header from "../Header/header.jsx"

export default function HomePage() {
    
      return (  
    <>
      {/*.............. HEADER WEB ............*/}
      <Header/>
   
      {/*.............. HEADER MOBILE ..........*/}
      <Mobile/>

      {/*............IMG MÓVEL FENIX............*/}

      <div className="containerFilho img_mountain">
        <div className='container-text-fenix'>
            <p className='p-manhas text-manha'>"Quem não tem as manhas não entra não"</p>
            <figure className='figure-fenix2'>
                <img className="fenix2" alt="fênix2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1K_xi3hyphenhyphenCgiwU39gzLYHnAdKk07eKByYob8d8924LgNiw4MsBUPv8Dn2pHZu_TFRwEr92FCGbJB7x2KAzX51USpyQaedn_c6cdJOTHw188f9JOqevb1HhHduXdUkrV-4YFiDoAlvzETchRaoanqd42N3e1Pzt2zoPSPj0SCbe2cJoEWTXoCF1WSo_s3Y/s200/fenixright.png" />
            </figure>
        </div>
      </div>

      {/*........ROW THIRD - SLIDE DE IMAGENS........*/}

      <div className="containerFilho slideShow" >
        <figure className="containerFilho slideList">
            <img className="imgGame img_game1" alt="game1" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNs_NL41jv-8BpznmylKG9BjsNBmA0ZvaaNdSbycA5wgEmy9U_jAMre9ZSotx4d30i7LAr4Mv7jDKYoZWIny0p9izxZ5AN6XdQwImXiehmWnGtXwwidcX887rm8pvE6r4Bd67B2Ob5mPDOOzxaWU2vKs3Ex7SHgTwKFRfYPKxDycqAD5cx-ES02MtuhoM/s320/jogo_1.png" />
            
            <img className="imgGame img_game2" alt="game2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixMPB6nRJASYsXc95Z4sw9VP1jfcbmFnOhxiW6Q1sqiMRqfcxy-VfUAf4PSSmv6HN3EHB5uJtDVwqIeMOmWVNu8P9vSBG2oGwj7UryYz6Op9BmV_AwJduMi_dofQ7GJHBND9mskT7eq6us9a8NIv1WlSwE5MnzWDGVr-Cuums5MFf5ybVebc4A7DyLTh4/s320/jogo_2.png" />
        
            <img className="imgGame img_game3" alt="game3" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKVOBLZ0cGZVS02UwIfMYQbPFhITS2WQzpVtl6K7JAJaJXDGLe5NM8Y96voaWDahF3kbcRsEg_uE62jCOGoT1_AwmFieOG7vJDD0708xPC5Qi-Q7EqyIzmElVzYavDhbuybtei_xyzVABIaTeb5FzYaqIpD9Jwlp2aYnVrjnEwPD8hgCdP1bgdosMGWhs/s320/jogo_3.png" />
        
            <img className="imgGame img_game4" alt="game4" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhg_vLSnvKK7_6DFiBEcMABhoeS31i2MFJzyAix4fmxVd6MaWe2OyNVUx1xUvD4YjHcE1709fl_riYE2Z5IsMRqvc_6kpGVvm_2ncu4aQUOJAXORHMMDo_o-DIg7iRSsD4Ay0oQx9oCbIkPhehCcRLEOm00YgBGUBr_bPS3qZjhFFX6PX050aAx2POudOc/s320/jogo_4.png" />
        
                   
        </figure>
      </div>
         {/*..........ROW FOUR - IMAGENS LOGOS..........*/}
      <div className='containerFilho container-logos'>
        <div className='logos'>
            <img alt="BARBIE" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPB9TxlMjv_aBXN6UTbduv6cNWcsjb9QfugZSlb7fkKgvLdHFX2g2PNKGEwNvbYs70AAciVipOyEBK5SQyUXg_9NBCtGGC-hIB7z4_5vPGOtQIhA7LtWfKTh4WhhJ62k9iUUYZSj7jAfT2ILee0Fg35h3ZSs99OrJtb0wUdOpCrKsHzCrQC4a4ch3CEyU/s320/barbie.png" />

            <img alt="FARM" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpLPiY9TxYEy4um8nK0BLILZNsPpsEJQWDnkZdcUrc66dERQJ8PzBVcVg9gICGJEHLSGvqgIUcJ6kuY1o_01J_dhE6LH6mjleCeCk2mSuym45x3qJ2EMix3q2mF5lhzwgkzpVUrQU8sNVEYcKPprRWCt-IGbP6N54E65PqqgxaSvSqMDcMDCo6tj3J8bg/s320/big_farm.png" />

            <img alt="EMPIRE" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd595TLLQfiQ8wVTnzXcl3k5cR3MMvWyd8Hb5aN_GvjT5B7FNpAbke0J1VNt4p9f_aGyN6dNdaZVyu8YJ8zSpgGwBFIOZ50ipaHFRwGa0iHdLm665o4I9Co7ihrmA8iNNRIp2XKQ8fxNgvVRAnarezj1jPH4WN-H_jVNZgSiRAKlRiX2G5jQAlOuCkmL4/s320/empire.png" />

            <img alt="GUMBALL" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAASFoEJJCQRy0UBIwB73ehKwBhZpGOD0Bc1UOAvK5Lov8YcfgWflU4EORjdSWhxx3r2Ao0nkolRppuFY1yoIe4v2y_cxCOE_uSw18VpEu1u_xscu4hTyTl1TUFxtwZbLTE44V02V48kEeeAH_EZFZJNXw9IMbswZ09kcmLh0prhr_j_P6IK4Paluz_tg/s320/gumball.png" />

            <img alt="MARIO" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZljHhRL1h3wllj7RJo3rgNIc6vLUIKeZfp7D68MhZJ5eStgSuNIwlnfQwqxlshjAyxd4RvXXNYjocJ30iPWhQpdl5ALPBnCHEmRl0Aq4LeQllmhG8p5krlU8uAA2-TqEriNoxO1mQozHeO883Y_i5fWOxlNglCa5CUt-f9OirWvt_ZoiUK3Db3ntxrwA/s320/mario.png" />

            <img alt="NARUTO" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0fqeeM3Sk2vB0rhOu9DbSBzkec-1LeLeoUAD_qcbeHPdG9GPLpZYUv2yArvod1i7M8EDdvg721-LHzL8VlRvZSJSfEa_dAwNYXZ5O4BZf-uubIdtbWJnFzkGtqItuHLZDNQWPNRNEiDz91d2cgmhOKMRlObQGDrT-r1VrVTDclDrA8fxqbJvnZFipGrc/s320/naruto.png" />

            <img alt="PIKACHU" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCTOgOKJmFAHLKgG3dsVzogVfRxWiPYL1_YbQDfKSSNw9Kr6Mc6LBRKMSYmMLeLRKxqAtUAHmFwyDz_LD6bYV8O8bPPu42Lqegz3UyGoFEAY9JhLwfe1YNiPXo_IsJr1PM1GT6SeS52Jk5Do05-RHxa_tGzc80wpvitk7lobWgcYZIq0s_VY-vX8BVtPw/s320/pikachu.png" />

            <img alt="SONIC" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFbFfeGhiN6KvjN-Wz6sgAs_yG5QJMtV7H_1r07U7q3KWxA6WjnY3DGsTrrvMQu6W6xYLZVGdfguDvMLXfaDnBSq1cUPMViv4dAhSrC8zLZF-8mX19fdJCvmx2aKuCdgOAzecGJx7qY1Bp8MPcvJWnt_g-oTT3aHn7KXMQsSIdYhQFTBdXBPkzGmfOXSY/s320/sonic.png" />

            <img alt="HOMEM ARANHA" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyPVS-z_6QJprMefE31N1eLtwGQc39-WOgDTunvtUurUaTb733m8VlVd1l5OWLXeVgEiKF_mfmQhDI4vLPUx1EmU5Pe0pBj6xJSKBA_yFJkJiRmvwlVHpxgDcIZ3dYZo80_wh4Hp4fZVAxqAoYFbktmhW6fIuD6ZcH7o1SVBB4NuizUgWi_iCIgTN72Ps/s320/spyderman.png" />

            <img alt="SURF" className="logo-img" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCNNRe35XufESMbUTqZ2OC3ZhNVI60zcWZ6fA3JxHIpN3__C0Qlo-R0Y5gN7Ea56OF4nicL47oBLVsBWCD28Gk6u3ZkDlPbCLkdLFUzbmN7Ug6cKpfGbP7pVWXUu8Q8kWH1_t0CpNo6BClf5Aj9OjKD6rxJac71JGjHkZIuuqB5YqJknEYsaUnIZKRkTk/s320/subway_surfers.png" />
        </div>
      </div>

    {/*..........ROW FIVE - FOOTER..........*/}
    <Footer/>

    </>  /* Fim */
    )
}