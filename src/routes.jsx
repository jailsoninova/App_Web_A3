import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 

import HomePage from "./components/Home/HomePage";
import Cadastre from "./components/Cadastro/cadastre";
import LoginPage from "./components/Login/LoginPage";

function AppRoutes(){
 return(
   <BrowserRouter>   
     <Routes>
        <Route exact path="/" element = {<HomePage/>}></Route>
        <Route exact path="/Cadastre" element = {<Cadastre/>}></Route>       
        <Route exact path="/Loginpage" element = {<LoginPage/>}></Route>

      </Routes>    
   </BrowserRouter>

 );
}
export default AppRoutes;