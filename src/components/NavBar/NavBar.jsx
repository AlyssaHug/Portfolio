import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className='nav-container'>
            <div className='nav-bar'>
                {/* Left - Logo + Name */}

                <NavLink
                    to='/'
                    className='link-img'
                    onClick={closeMenu}>
                    <img
                        src='/LogoBlue.svg'
                        loading='eager'
                        decoding='async'
                        className='nav-logo'
                    />
                    <p className='nav-name'>lyssa Huggins</p>
                </NavLink>

                {/* Desktop Nav Links - hidden on mobile */}
                <div className='nav-items desktop-nav'>
                    <NavLink
                        to='/Portfolio'
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={closeMenu}>
                        Portfolio
                    </NavLink>
                    <NavLink
                        to='/About'
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={closeMenu}>
                        About
                    </NavLink>
                    <NavLink
                        to='/Music'
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={closeMenu}>
                        Music
                    </NavLink>
                </div>

                {/* Desktop Contact Button - hidden on mobile */}
                <div className='connect-btn desktop-nav'>
                    <a
                        href='mailto:alyssathuggins@gmail.com'
                        className='nav-item email-btn'
                        onClick={closeMenu}>
                        Get in touch!
                    </a>
                </div>

                {/* Hamburger Button - visible only on mobile */}
                <button
                    className='hamburger'
                    onClick={toggleMenu}
                    aria-label='Toggle menu'
                    aria-expanded={isOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {/* Mobile Menu Dropdown */}
                <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                    <NavLink
                        to='/Portfolio'
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active mobile-link"
                                : "nav-link mobile-link"
                        }
                        onClick={closeMenu}>
                        Portfolio
                    </NavLink>
                    <NavLink
                        to='/About'
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active mobile-link"
                                : "nav-link mobile-link"
                        }
                        onClick={closeMenu}>
                        About
                    </NavLink>
                    {/* <NavLink
                        to='/Gallery'
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active mobile-link"
                                : "nav-link mobile-link"
                        }
                        onClick={closeMenu}>
                        Gallery
                    </NavLink> */}

                    <a
                        href='mailto:alyssathuggins@gmail.com'
                        className='nav-item mobile-link email-btn'
                        onClick={closeMenu}>
                        Get in touch!
                    </a>
                </div>
            </div>
        </div>
    );
}
