import Dither from "../../components/Dither/Dither";

import "./About.css";

export default function About() {
    return (
        <div>
            <div className='header-section'>
                <div className='header-text'>
                    <h1 className='title'>Who I Am</h1>
                </div>
                <div
                    className='dither-background'
                    style={{
                        width: "100%",
                        position: "relative",
                    }}>
                    <Dither
                        waveColor={[0.0, 0.3909, 0.4811]}
                        disableAnimation={false}
                        enableMouseInteraction
                        mouseRadius={0.2}
                        colorNum={10}
                        waveAmplitude={0.3}
                        waveFrequency={3}
                        waveSpeed={0.05}
                    />
                </div>
            </div>
            <div className='main main-about'>
                <img
                    src='/'
                    alt='/'
                />
                <h1 className='about-header'>Hey, I'm Alyssa!</h1>
                <p></p>
                <div className='about-section'></div>
                <div className='contact-section'>
                    <div className='contact-background'>
                        <Dither
                            waveColor={[0.0, 0.3909, 0.4811]}
                            disableAnimation={false}
                            enableMouseInteraction
                            mouseRadius={0.2}
                            colorNum={10}
                            waveAmplitude={0.3}
                            waveFrequency={3}
                            waveSpeed={0.05}
                        />
                    </div>
                    <div className='contact-content'>
                        <div className='contact-header'>
                            <span className='first-line'>Feel like</span>

                            <span className='last-line'>Collaborating?</span>
                        </div>
                        <a
                            className='contact-btn'
                            href='mailto:alyssathuggins@gmail.com'>
                            Get in Touch!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
