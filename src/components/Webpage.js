import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

function Webpage(){
    const[darkmode, setDarkMode] = React.useState(false);

    function toggleDarkMode(){
        setDarkMode(prevmode => !prevmode);
    }

    return (
    <>
    <div className="page-container">
        <Navbar />
        {/*<Navbar darkmode = {darkmode} toggleDarkMode = {toggleDarkMode}/>*/}
        <div className='pagecontent'>
            <Outlet/>
        </div>
        <br></br>
        <Footer />
    </div>
    </>
    );
}
export default Webpage;