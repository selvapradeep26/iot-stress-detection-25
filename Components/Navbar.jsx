import './Navbar.css'

function Navbar(){

    return(
        <div className="Nbar">
        <nav>
            <ul className='nav-list'>
                <li className='class-item'>
                    <a href="/" className='Nav-link'>Home</a>
                </li>
                 <li className='class-item'>
                    <a href="/">About</a>
                </li>
                 <li className='class-item'>
                    <a href="/">contact</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar