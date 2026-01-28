import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects.json";
import "./ProjectDetail.css";

export default function ProjectDetail() {
    const { projectId } = useParams(); // ← reads :projectId from URL

    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className='not-found'>
                <h2>Project not found</h2>
                <Link to='/portfolio'>← Back to all projects</Link>
            </div>
        );
    }

    return (
        <article className='project-detail-page'>
            <img
                src={project.heroImage}
                alt={project.title}
                className='hero-image'
            />
            <header className='project-header'>
                <ul>
                    {project.sections.map((section, index) => {
                        const id = `section-${index + 1}`;
                        const label = section.menuLabel || section.title; // ← magic line

                        return (
                            <li key={index}>
                                <a href={`#${id}`}>{label}</a>
                            </li>
                        );
                    })}
                </ul>
                <h1>{project.title}</h1>
                <p className='short-desc'>{project.description}</p>
                <div className='meta'>
                    <span className='role'>Role: </span>
                    <p> {project.role}</p>
                </div>
            </header>

            <div className='project-content'>
                {project.sections.map((section, index) => {
                    const sectionId = `section-${index + 1}`; // ← same ID as above!

                    return (
                        <section
                            key={sectionId}
                            id={sectionId} // ← this makes the jump work
                            className='case-section'>
                            <h2>{section.title}</h2> {/* full title here */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: section.content,
                                }}
                            />
                            {/* or normal <p> tags if you prefer */}
                        </section>
                    );
                })}
            </div>
            <div className='gallery-test'>
                <h2>{project.end.title}</h2>
                <div>
                    <img src={project.end.image} />
                </div>
            </div>
        </article>
    );
}
