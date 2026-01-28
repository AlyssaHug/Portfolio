import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/card";
import NavBar from "../../components/NavBar/NavBar";
import projects from "../../data/projects.json";

export default function Portfolio() {
    return (
        <div className='page'>
            <header>
                <NavBar />
                <h1 className='page-title'>Featured Work</h1>
            </header>
            <main className='content'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        imgSrc={project.preview}
                    />
                ))}
            </main>
        </div>
    );
}
