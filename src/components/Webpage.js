import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Webpage(){
    return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
    );
}
export default Webpage;