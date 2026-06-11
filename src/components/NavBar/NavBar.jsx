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
                    {/* <NavLink
                        to='/Music'
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={closeMenu}>
                        Music
                    </NavLink> */}
                    <NavLink
                    to='/Contact'
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={closeMenu}
                    >Contact</NavLink>
                </div>

                {/* Desktop Contact Button - hidden on mobile */}
                <div className='dark-btn desktop-nav'>
                    <button
                        className='nav-item dark-item'
                        onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
<path d="M16 32C11.5556 32 7.77778 30.4444 4.66667 27.3333C1.55556 24.2222 0 20.4444 0 16C0 11.5556 1.55556 7.77778 4.66667 4.66667C7.77778 1.55556 11.5556 0 16 0C16.4148 0 16.8225 0.014815 17.2231 0.0444446C17.6237 0.0740742 18.016 0.118518 18.4 0.177778C17.1852 1.03704 16.2145 2.15585 15.488 3.53422C14.7615 4.91259 14.3988 6.40119 14.4 8C14.4 10.6667 15.3333 12.9333 17.2 14.8C19.0667 16.6667 21.3333 17.6 24 17.6C25.6296 17.6 27.1259 17.2367 28.4889 16.5102C29.8519 15.7837 30.963 14.8136 31.8222 13.6C31.8815 13.9852 31.9259 14.3775 31.9556 14.7769C31.9852 15.1763 32 15.584 32 16C32 20.4444 30.4444 24.2222 27.3333 27.3333C24.2222 30.4444 20.4444 32 16 32Z" fill="var(--black)"/>
</svg>
                    </button>
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
                        to='/Music'
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active mobile-link"
                                : "nav-link mobile-link"
                        }
                        onClick={closeMenu}>
                        Music
                    </NavLink> */}
                    <NavLink
                    to='/Contact'
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active mobile-link"
                                : "nav-link mobile-link"
                        }
                        onClick={closeMenu}
                    >Contact</NavLink>

                    <button
                        className='nav-item dark-item'
                        onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                            <path d="M16 32C11.5556 32 7.77778 30.4444 4.66667 27.3333C1.55556 24.2222 0 20.4444 0 16C0 11.5556 1.55556 7.77778 4.66667 4.66667C7.77778 1.55556 11.5556 0 16 0C16.4148 0 16.8225 0.014815 17.2231 0.0444446C17.6237 0.0740742 18.016 0.118518 18.4 0.177778C17.1852 1.03704 16.2145 2.15585 15.488 3.53422C14.7615 4.91259 14.3988 6.40119 14.4 8C14.4 10.6667 15.3333 12.9333 17.2 14.8C19.0667 16.6667 21.3333 17.6 24 17.6C25.6296 17.6 27.1259 17.2367 28.4889 16.5102C29.8519 15.7837 30.963 14.8136 31.8222 13.6C31.8815 13.9852 31.9259 14.3775 31.9556 14.7769C31.9852 15.1763 32 15.584 32 16C32 20.4444 30.4444 24.2222 27.3333 27.3333C24.2222 30.4444 20.4444 32 16 32Z" fill="#202326"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
