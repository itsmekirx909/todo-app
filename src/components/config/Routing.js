import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Log from "../pages/Log";
import Todoapp from "../pages/Todoapp";

export default function Routing(){
    return(
        <Router>
            <Routes>
                <Route path="/Todoapp" element={<Todoapp/>}/>
                <Route path="/" element={<Log/>}/>
            </Routes>
        </Router>
    )
}