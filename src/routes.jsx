import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 

import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import Pag01 from "./components/Cadastro/Page1/Pag01.jsx";
import Page02 from "./components/Cadastro/Page2/Pag02.jsx";
import Page03 from "./components/Cadastro/Page3/Pag03.jsx";
import Page04 from "./components/Cadastro/Page4/Pag04.jsx";

function AppRoutes(){
 return(
 <BrowserRouter>   
  <Routes>
    <Route exact path="/" element = {<HomePage/>}></Route>          
    <Route exact path="/Loginpage" element = {<LoginPage/>}></Route>
    <Route exact path="/Pag01" element = {<Pag01/>}></Route> 
    <Route exact path="/Pag02" element = {<Page02/>}></Route>  
    <Route exact path="/Pag03" element = {<Page03/>}></Route>    
    <Route exact path="/Pag04" element = {<Page04/>}></Route>  
  </Routes>  
 </BrowserRouter>

 );
}
export default AppRoutes;