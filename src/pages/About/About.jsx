import Dither from "../../components/Dither/Dither";
import ScrollText from "../../components/ScrollText/ScrollText";
import "./About.css";
import Grainient from "../../components/Granient/Grainient";

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
                   <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Grainient
    color1="#E7EFFC"
    color2="#8AB2BD"
    color3="#E7EFFC"
    timeSpeed={1}
    warpStrength={0.6}
    warpFrequency={7}
    warpSpeed={2}
    warpAmplitude={5}
    blendSoftness={0.2}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={1}
    grainAnimated={false}
    contrast={1.4}
    gamma={1}
    saturation={0.8}
    zoom={1}
  />
</div>
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
                        <h1 className="education">Education</h1>
                        <p className="diploma">Digital Design & Development Diploma</p>
                        <p className="school">British Columbia Institute of Technology - June 2026</p>
                    </div>
                    <img
                        className='about-image'
                        src='/Me.png'
                        alt='A photo of myself.'
                        loading='lazy'
                        decoding='async'
                    />
                </div>
                <ScrollText
                    text='Illustrator     •     Photoshop     •     InDesign     •     Figma     •     VS Code     •     Github     •     Vercel     •     React     •     Vite     •     HTML5     •     CSS3     •     Javascript'
                    direction='right'
                    speed={20}
                />
                <div className='contact-section'>
                    <div className='contact-content'>
                        <div className='contact-header'>
                            <span>Let's build<br/>something together!</span>
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
