import { Link } from 'react-router-dom';


function Navbar(props){
    return (
    <>
        <nav className="navbar navbar-light background">
            <a className="navbar-brand pleft" href="/">Rio Nagata</a>
            <ul className="nav justify-content-end ">
                <li className="nav-item navlink">
                    <Link to='/' className='nav-link'>Home</Link> 
                </li>
                <li className="nav-item navlink">
                    <Link to='/projects' className='nav-link'>Project</Link>
                </li>
                <li className="nav-item navlink">
                    <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
            </ul>
        </nav>
    </>
    );
}
export default Navbar;