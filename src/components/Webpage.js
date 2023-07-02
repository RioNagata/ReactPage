import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import React from "react";

function Webpage(){
    const[darkmode, setDarkMode] = React.useState(false);

    function toggleDarkMode(){
        setDarkMode(prevmode => !prevmode);
    }

    return (
    <>
    <Navbar darkmode = {darkmode} toggleDarkMode = {toggleDarkMode}/>
    <div className={darkmode ? 'dark': ''}>
        <Outlet/>
    </div>
    <Footer />
    </>
    );
}
export default Webpage;