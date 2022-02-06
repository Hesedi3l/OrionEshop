import React from 'react'
import {Routes, Route} from "react-router-dom"


import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles";


function OrionRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/articles" element={<Articles/>}/>
            </Routes>
        </>
    );
}






export default OrionRoutes;
