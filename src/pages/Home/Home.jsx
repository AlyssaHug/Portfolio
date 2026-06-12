import "./Home.css";
import ProjectCard from "../../components/ProjectCard/card";
import projects from "../../Data/projects.json";
import Button from "../../components/Button/Button";
import Grainient from "../../components/Granient/Grainient";
import { useTheme } from "../../context/ThemeContext";
import { BigCard } from "../../components/ProjectCard/card";


export default function Home() {
    const { theme } = useTheme();   

    const allCategories = [
        "all",
        ...new Set(projects.flatMap((item) => item.categories)),
    ].sort((a, b) => {
        if (a === "all") return -1;
        if (b === "all") return 1;
        return a.localeCompare(b);
    });

    return (
        <div className='homepage'>
            <div className='header-section'>
                <div className='header-text'>
                    <div className='header'>
                        <div className='first-name-container'>
                            
                            <svg className='name-logo' xmlns="http://www.w3.org/2000/svg" width="70" height="72" viewBox="0 0 57 59" fill="none">
  <path d="M13.7848 32.4171C16.045 33.5472 18.1476 34.6904 20.1319 35.8468L15.2303 53.1394H7.22749L13.7848 32.4171ZM51.4598 59C32.7997 39.5392 25.9138 35.1766 0 24.533H16.2816L24.0347 0H31.7484L39.541 24.533H46.7028L56.1905 29.6183L41.1967 29.7234L51.4729 59H51.4598ZM32.4974 29.7891L25.086 29.8416C28.9888 31.9047 32.7603 34.1648 35.9404 36.8849L27.9375 8.33096L23.3514 24.533H31.0257L32.4974 29.7891Z" fill="currentColor"/>
</svg>
                            <span className='first-name'>lyssa</span>
                        </div>
                        <span className='last-name'>Huggins</span>
                    </div>
                </div>
                {/* Header Background */}
                <div
                    className='dither-background'
                    style={{
                        width: "100%",
                        position: "relative",
                    }}>
                   <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Grainient
    color1={theme === 'dark' ? "#242B32" : "#D5E4F6"}
    color2={theme === 'dark' ? "#004752" : "#8AB2BD"}
    color3={theme === 'dark' ? "#242B32" : "#D5E4F6"}
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
                    <div className='projects-container highlight-container'>
                        {projects.slice(1, 2).map(
                            (
                                project, // ← slice(0,3) = first 3 items
                            ) => (
                                <BigCard
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    categories={project.categories}
                                    image={project.image}
                                    description={project.description}
                                    descFirst={project.descFirst}
                                    descSecond={project.descSecond}
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
