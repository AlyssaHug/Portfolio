import Dither from "../../components/Dither/Dither";
import ScrollText from "../../components/ScrollText/ScrollText";
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
                <div className='about-content'>
                    <div className='about-text'>
                        <h1 className='about-header'>Hey, I'm Alyssa!</h1>
                        <p className='about-desc'>
                            A multidisciplinary designer and front-end developer
                            based in Vancouver, BC. I’ve always loved anything
                            creative, and enjoy drawing and sewing in my free
                            time! I love taking my creativity and technical
                            skills and applying them to provide a new
                            perspective. When I'm not at my computer working,
                            you can typically find me with my cats, listening to
                            music, or grabbing another coffee. I love breathing
                            life into every project I take on.
                        </p>
                    </div>
                    <img
                        className='about-image'
                        src='/Me.png'
                        alt='A photo of myself.'
                    />
                </div>
                <ScrollText
                    text='Illustrator     •     Photoshop     •     InDesign     •     Figma     •     VS Code     •     Github     •     Vercel     •     React     •     Vite     •     HTML5     •     CSS3     •     Javascript'
                    direction='right'
                    speed={20}
                />
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
