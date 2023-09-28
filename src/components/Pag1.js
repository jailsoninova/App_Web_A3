import './App.css';
function Pag1(){

    return(
        <>
            <div className="Conteiner">

        {/*..........ROW FIRST - HEAD - LINKS..........*/}            
                <div class="containerFilho div1">
                    <div className="containerFilho soteroGames">
                        <h1 className="h1 sotero">Sotero</h1>
                        <h1 className="h1 games">Games</h1>
                    </div>
                    <figure className="fig_fenix">
                        
                        <img className="fenix" alt="fenix" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGUIv1A9wDrFGM9Zo6EnyTVlILrDC7Y8rKuzXkQOdgqujWp_JHgrluE9v8U62ItmcmN0hL2ICiRhVP0Lsn7ZnEn-exi4Hgo2nrza4AoloVhQtrp5eav2gEXEpK5ePOM491U3koQB-WemDtaAs7A8Sd4Zz13XcGQcg59MG3mx251-jZCq82tMIUv3c1INc/s200/fenixleft.png"/>
                    </figure>
                </div>

                <div className="containerFilho div2">
                    <h3 className="h3 h3_1">Escolha seu jogo ou cadastre um</h3>
                </div>

                <div className="containerFilho div3">
                    <h3 className="h3 h3_2">+Jogos</h3>
                </div>
                
                <div className="containerFilho div4">
                    <h3 className="h3 h3_3">Cadastre-se</h3>
                    <h3 className="h3 h3_4">Login</h3>
                </div>
            </div>

            {/*..........ROW SECOND - IMG FENIX E MONTANHAS..........*/}
            <figure className="containerFilho img_mountain">
                <img className="fenix2" alt="fênix2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1K_xi3hyphenhyphenCgiwU39gzLYHnAdKk07eKByYob8d8924LgNiw4MsBUPv8Dn2pHZu_TFRwEr92FCGbJB7x2KAzX51USpyQaedn_c6cdJOTHw188f9JOqevb1HhHduXdUkrV-4YFiDoAlvzETchRaoanqd42N3e1Pzt2zoPSPj0SCbe2cJoEWTXoCF1WSo_s3Y/s200/fenixright.png"/>
            </figure>

            {/*..........ROW THIRD - SLIDE DE IMAGENS..........*/}
            <div className="slide-show" >
                <div className='setas_slide'>
                    <span className='seta seta1'>&lt;</span>
                    <span className='seta seta2'>&gt;</span>                
                </div>               
                <ul className="slides-list" >
                    <li className='slide'>
                        <img className="img_game img_game1" alt="game1" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNs_NL41jv-8BpznmylKG9BjsNBmA0ZvaaNdSbycA5wgEmy9U_jAMre9ZSotx4d30i7LAr4Mv7jDKYoZWIny0p9izxZ5AN6XdQwImXiehmWnGtXwwidcX887rm8pvE6r4Bd67B2Ob5mPDOOzxaWU2vKs3Ex7SHgTwKFRfYPKxDycqAD5cx-ES02MtuhoM/s320/jogo_1.png"/>
                    </li>
        
                    <li className='slide'>
                    <img className="img_game img_game2" alt="game2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixMPB6nRJASYsXc95Z4sw9VP1jfcbmFnOhxiW6Q1sqiMRqfcxy-VfUAf4PSSmv6HN3EHB5uJtDVwqIeMOmWVNu8P9vSBG2oGwj7UryYz6Op9BmV_AwJduMi_dofQ7GJHBND9mskT7eq6us9a8NIv1WlSwE5MnzWDGVr-Cuums5MFf5ybVebc4A7DyLTh4/s320/jogo_2.png"/>
                    </li> 
                    <li className='slide'>     
                        <img className="img_game img_game3" alt="game3" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKVOBLZ0cGZVS02UwIfMYQbPFhITS2WQzpVtl6K7JAJaJXDGLe5NM8Y96voaWDahF3kbcRsEg_uE62jCOGoT1_AwmFieOG7vJDD0708xPC5Qi-Q7EqyIzmElVzYavDhbuybtei_xyzVABIaTeb5FzYaqIpD9Jwlp2aYnVrjnEwPD8hgCdP1bgdosMGWhs/s320/jogo_3.png"/>
                    </li> 
                    <li className='slide'>
                        <img className="img_game img_game4" alt="game4" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhg_vLSnvKK7_6DFiBEcMABhoeS31i2MFJzyAix4fmxVd6MaWe2OyNVUx1xUvD4YjHcE1709fl_riYE2Z5IsMRqvc_6kpGVvm_2ncu4aQUOJAXORHMMDo_o-DIg7iRSsD4Ay0oQx9oCbIkPhehCcRLEOm00YgBGUBr_bPS3qZjhFFX6PX050aAx2POudOc/s320/jogo_4.png"/>
                    </li>     
                    <li className='slide'>
                        <img className="img_game img_game5" alt="game5" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfs9FX9qb1H7gN97-HcmBWu-8jXYen-qGRu-ReRSN7Ng6RYLUr9q2BWj4TkWN8zKlUIiFkIzoH41pK3NDogU7izFW2P37DpCzfTSyRgOiOszld4J7bDRdssv5BGARdaASkiUy2HU1ufrVpkNuCzwaF2X4kAFDhTr8-uYNoWMUDiQ5JWNvnRyZrhfnKUZw/s320/jogo_5.png"/>
                    </li> 
                    <li className='slide'>
                        <img className="img_game img_game6" alt="game6" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Ed-skFYCI0Rq22ELCc3xlff0u8jXJt60L3FxhQq-izV-mjK4jEwAiOYp0DLDfcMjdFGIxznXsLa9-Ku9wW87C9a__LIkEt5LHsjD3CGIAj80bWUP1pH1rDQolWOBGg02rZNZtyU-qjmWLrHeayJGnvQnU3pzBfPhYXL4GeeoI-nTbipAMp1az2tkeY0/s320/jogo_6.png"/>
                    </li> 
                </ul>
            </div>


        </>  /* Fim */
          )
}
export default Pag1