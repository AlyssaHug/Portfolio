import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <img
                src='/LogoBlue.svg'
                alt='Logo'
                className='nav-logo'
            />
            <div className='nav-items'>
                <a
                    href='#Portfolio'
                    className='nav-link'>
                    Portfolio
                </a>
                <a
                    href='#about'
                    className='nav-link'>
                    About
                </a>
                <a
                    href='#contact'
                    className='nav-link'>
                    Get in Touch!
                </a>
            </div>
        </nav>
    );
}
