import { Link } from 'react-router-dom';

function Navbar(){
    return (
    <>
        <nav className='navbar navbar-light bg-light'>
            <a className="navbar-brand" id='rio'>Rio Nagata</a>
            <ul className="nav justify-content-end">
                <li className="nav-item navlink">
                    <Link to='/'>Home</Link> 
                </li>
                <li className="nav-item navlink">
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className="nav-item navlink">
                    <Link to='/projects'>Project</Link>
                </li>
            </ul>
        </nav>
    </>
    );
}
export default Navbar;