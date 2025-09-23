import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>Contact</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/login" className='nav-link'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar