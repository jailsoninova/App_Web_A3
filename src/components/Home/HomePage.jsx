import React from "react";
import './styleHomePage.css';
import Mobile from "../Mobile/HeadMobile.jsx";
import Footer from "../Footer/footer.jsx";


function HomePage() {
  
    function EventLogin(){
    alert("AGUARDE!\nEstamos trabalhando");
    }
    return (  
        
        <>
            <section className="Conteiner">

                {/*..........ROW FIRST - HEAD - LINKS..........*/}
                <div className="containerFilho div1">
                    <div className="containerFilho soteroGames">
                        <h1 className="h1 sotero">Sotero</h1>
                        <h1 className="h1 games">Games</h1>
                    </div>
                    <figure className="figure fig_fenix">

                        <img className="fenix fnx" alt="fenix" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGUIv1A9wDrFGM9Zo6EnyTVlILrDC7Y8rKuzXkQOdgqujWp_JHgrluE9v8U62ItmcmN0hL2ICiRhVP0Lsn7ZnEn-exi4Hgo2nrza4AoloVhQtrp5eav2gEXEpK5ePOM491U3koQB-WemDtaAs7A8Sd4Zz13XcGQcg59MG3mx251-jZCq82tMIUv3c1INc/s200/fenixleft.png" />
                    </figure>
                </div>

                <div className="containerFilho div2">
                    <h3 className="h3 h3_1">Escolha seu jogo ou cadastre um</h3>
                </div>

                <div className="containerFilho div3">
                    <h3 className="h3 h3_2" onClick={EventLogin}>+Jogos</h3>
                </div>

                <div className="containerFilho div4">
                    <h3 className="h3 h3_3" onClick={EventLogin}>Cadastre-se</h3>
                    <h3 className="h3 h3_4" onClick={EventLogin}>Login</h3>
                </div>
            </section>{/*...fim section section container...*/}

            {/*.............. HEADER MOBILE ..............*/}
            <Mobile/>

            {/*..........ROW SECOND - IMG MÓVEL FENIX..........*/}

            <div className="containerFilho img_mountain">
                <div className='container-text-fenix'>
                    <p className='p-manhas text-manha'>"Quem não tem as manhas não entra não"</p>
                    <figure className='figure-fenix2'>
                        <img className="fenix2" alt="fênix2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1K_xi3hyphenhyphenCgiwU39gzLYHnAdKk07eKByYob8d8924LgNiw4MsBUPv8Dn2pHZu_TFRwEr92FCGbJB7x2KAzX51USpyQaedn_c6cdJOTHw188f9JOqevb1HhHduXdUkrV-4YFiDoAlvzETchRaoanqd42N3e1Pzt2zoPSPj0SCbe2cJoEWTXoCF1WSo_s3Y/s200/fenixright.png" />
                    </figure>
                </div>
            </div>

            {/*..........ROW THIRD - SLIDE DE IMAGENS..........*/}

            <div className="containerFilho slide-show" >
                <div className='setas_slide'>
                    <div className='divBotao divbotao1'>
                        <button className='seta seta1'>&lt;</button>
                    </div>
                    
                    <div className='divBotao divbotao2'>
                        <button className='seta seta2' >&gt;</button>
                    </div>
                </div>
                <div className="containerFilho slides-list">
                    <img className="img_game img_game1" alt="game1" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNs_NL41jv-8BpznmylKG9BjsNBmA0ZvaaNdSbycA5wgEmy9U_jAMre9ZSotx4d30i7LAr4Mv7jDKYoZWIny0p9izxZ5AN6XdQwImXiehmWnGtXwwidcX887rm8pvE6r4Bd67B2Ob5mPDOOzxaWU2vKs3Ex7SHgTwKFRfYPKxDycqAD5cx-ES02MtuhoM/s320/jogo_1.png" />
                    
                    <img className="img_game img_game2" alt="game2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixMPB6nRJASYsXc95Z4sw9VP1jfcbmFnOhxiW6Q1sqiMRqfcxy-VfUAf4PSSmv6HN3EHB5uJtDVwqIeMOmWVNu8P9vSBG2oGwj7UryYz6Op9BmV_AwJduMi_dofQ7GJHBND9mskT7eq6us9a8NIv1WlSwE5MnzWDGVr-Cuums5MFf5ybVebc4A7DyLTh4/s320/jogo_2.png" />
                
                    <img className="img_game img_game3" alt="game3" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKVOBLZ0cGZVS02UwIfMYQbPFhITS2WQzpVtl6K7JAJaJXDGLe5NM8Y96voaWDahF3kbcRsEg_uE62jCOGoT1_AwmFieOG7vJDD0708xPC5Qi-Q7EqyIzmElVzYavDhbuybtei_xyzVABIaTeb5FzYaqIpD9Jwlp2aYnVrjnEwPD8hgCdP1bgdosMGWhs/s320/jogo_3.png" />
                
                    <img className="img_game img_game4" alt="game4" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhg_vLSnvKK7_6DFiBEcMABhoeS31i2MFJzyAix4fmxVd6MaWe2OyNVUx1xUvD4YjHcE1709fl_riYE2Z5IsMRqvc_6kpGVvm_2ncu4aQUOJAXORHMMDo_o-DIg7iRSsD4Ay0oQx9oCbIkPhehCcRLEOm00YgBGUBr_bPS3qZjhFFX6PX050aAx2POudOc/s320/jogo_4.png" />
                
                    <img className="img_game img_game5" alt="game5" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfs9FX9qb1H7gN97-HcmBWu-8jXYen-qGRu-ReRSN7Ng6RYLUr9q2BWj4TkWN8zKlUIiFkIzoH41pK3NDogU7izFW2P37DpCzfTSyRgOiOszld4J7bDRdssv5BGARdaASkiUy2HU1ufrVpkNuCzwaF2X4kAFDhTr8-uYNoWMUDiQ5JWNvnRyZrhfnKUZw/s320/jogo_5.png" />
                
                    <img className="img_game img_game6" alt="game6" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Ed-skFYCI0Rq22ELCc3xlff0u8jXJt60L3FxhQq-izV-mjK4jEwAiOYp0DLDfcMjdFGIxznXsLa9-Ku9wW87C9a__LIkEt5LHsjD3CGIAj80bWUP1pH1rDQolWOBGg02rZNZtyU-qjmWLrHeayJGnvQnU3pzBfPhYXL4GeeoI-nTbipAMp1az2tkeY0/s320/jogo_6.png" />
                </div>
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

            {/*..........ROW FIVE- FOOTER..........*/}
            <Footer/>

        </>  /* Fim */
    )
}
export default HomePage