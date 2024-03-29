import { Link } from 'react-router-dom';


function Navbar(props){
    return (
    <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light navcss'>
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
             
 {/*}          <div>
                <label class="form-check-label switch">
                    <input class="form-check-input" type="checkbox" onClick={props.toggleDarkMode}/>
                    <span class="slider round"></span>
                </label>
    </div>*/}
        </nav>
    </>
    );
}
export default Navbar;