import "./Home.css";

export default function Home() {
    return (
        <div className='homepage'>
            <div className='header-text'>
                <div className='header'>
                    <div className='first-name-container'>
                        <img
                            src='/LogoWhite.svg'
                            alt='Logo of the letter A'
                            className='name-logo'
                        />
                        <span className='first-name'>lyssa</span>
                    </div>
                    <span className='last-name'>Huggins</span>
                </div>
                <p className='disclaimer'>
                    My site is currently under construction. <br />
                    Feel free to click around and explore, just be mindful I'm
                    still working hard to complete parts of the site!
                </p>
            </div>
            <div className='main'>
                <p className='intro'>
                    Hi, I'm Alyssa! A detailed designer with a passion for
                    creating digital products that feel alive
                </p>
            </div>
        </div>
    );
}
