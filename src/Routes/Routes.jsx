import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Screens/Home/Home";
import Events from "../Screens/Events/Events";


export function Rts() {
   return(
       <Routes>
           <Route element= { <Home /> }  path="/"  />
           <Route element = { <Events/> }  path="/events" />
       </Routes>
   )
}

