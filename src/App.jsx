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
                        Lorem ipsum dolor sit amet consectetur. Vitae amet nisi
                        massa tempor dui netus. Venenatis nunc netus gravida
                        dictum. Pharetra laoreet ut molestie fringilla.
                        Curabitur felis dignissim scelerisque pretium et tellus
                        fermentum.
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
