import { Link } from "react-router-dom";
import Portfolio from "../../pages/Portfolio/Portfolio";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <Link to='/'>
                <img
                    src='/LogoBlue.svg'
                    alt='Logo - Return to Home'
                    className='nav-logo'
                />
            </Link>
            <div className='nav-items'>
                <Link
                    to='/Portfolio'
                    className='nav-link'>
                    Portfolio
                </Link>
                <Link
                    to='/About'
                    className='nav-link'>
                    About
                </Link>

                <Link
                    to='/Contact'
                    className='nav-link'>
                    Get in touch!
                </Link>
            </div>
        </div>
    );
}
