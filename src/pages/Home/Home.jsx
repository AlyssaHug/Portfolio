import "./Home.css";
import ProjectCard from "../../components/ProjectCard/card";
import projects from "../../Data/projects.json";
import Button from "../../components/Button/Button";
import Grainient from "../../components/Granient/Grainient";


export default function Home() {
    const allCategories = [
        "all",
        ...new Set(projects.flatMap((item) => item.categories)),
    ].sort((a, b) => {
        if (a === "all") return -1; // always first
        if (b === "all") return 1;
        return a.localeCompare(b);
    });

    return (
        <div className='homepage'>
            <div className='header-section'>
                <div className='header-text'>
                    <div className='header'>
                        <div className='first-name-container'>
                            <img
                                src='/Logo.svg'
                                alt='Logo of the letter A'
                                className='name-logo'
                                loading='eager'
                                decoding='async'
                            />
                            <span className='first-name'>lyssa</span>
                        </div>
                        <span className='last-name'>Huggins</span>
                    </div>
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
            <div className='main'>
                <p className='intro'>
                    Digital designer and front-end developer creating products with personality and polish.
                </p>
                <div className='feature-section'>
                    <div className='section-text'>
                        
                        <Button
                            link='/Portfolio'
                            text='View all Projects'
                        />
                    </div>
                    <div className='projects-container'>
                        {projects.slice(0, 3).map(
                            (
                                project, // ← slice(0,3) = first 3 items
                            ) => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    categories={project.categories}
                                    image={project.image}
                                    description={project.description}
                                    slug={project.slug}
                                />
                            ),
                        )}
                    </div>
                </div>
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
