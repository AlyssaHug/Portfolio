import "./App.css";

function App() {
    return (
        <>
            <div className='header'>
                <h1>
                    Hi! I'm Alyssa.
                    <br />A UI/UX Designer.
                </h1>
                <p>
                    My site is currently under construction. Working hard to
                    have it updated soon!
                </p>
            </div>
            <div className='content'></div>
            <footer>
                <div className='my-info'>
                    <img
                        className='img-me'
                        src='/LogoBlue.svg'></img>
                    <p className='footer-text'>
                        Welcome to my little corner of the internet. I'm
                        constantly creating, learning, and iterating, and this
                        portfolio caputres the highlights. Built with a lot of
                        late-night inspiration, it's a space where my ideas get
                        to breathe. Feel free to reach out!
                    </p>
                </div>
                <div className='line'></div>
                <div className='social-btns'>
                    <a
                        href='/Resume.pdf'
                        target='_blank'>
                        <button className='social-btn'>Resume</button>
                    </a>
                    {/* <button className='social-btn'>Email</button> */}
                    <a
                        href='https://www.linkedin.com/in/alyssa-huggins/'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <button className='social-btn'>LinkedIn</button>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default App;
