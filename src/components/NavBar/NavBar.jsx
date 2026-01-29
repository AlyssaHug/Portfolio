import { NavLink } from "react-router-dom";
import Portfolio from "../../pages/Portfolio/Portfolio";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <NavLink to='/'>
                <img
                    src='/LogoBlue.svg'
                    alt='Logo - Return to Home'
                    className='nav-logo'
                />
            </NavLink>
            <div className='nav-items'>
                <NavLink
                    to='/Portfolio'
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }>
                    Portfolio
                </NavLink>
                <NavLink
                    to='/About'
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }>
                    About
                </NavLink>

                <NavLink
                    to='/Contact'
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }>
                    Get in touch!
                </NavLink>
            </div>
        </div>
    );
}
