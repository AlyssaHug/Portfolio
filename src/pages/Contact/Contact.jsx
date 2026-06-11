import './Contact.css';
import Grainient from '../../components/Granient/Grainient';
import ContactForm from '../../components/Form/Form';

export default function Contact(){
    return(
        <div>
            <div className='header-section'>
                <div className='header-text'>
                    <h1 className='title'>Contact</h1>
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
            <div className="contact-page">
                <div className="contact-text">
                    <h1 className="about-header">Get in touch!</h1>
                    <p className="about-desc contact-desc">Whether it’s for a project or just to ask some questions, please feel free to reach out and send an email! If you don’t wanna send an email but still wanna connect or learn more about me, check out my LinkedIn or my resume.</p>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
};