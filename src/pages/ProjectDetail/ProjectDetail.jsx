// src/pages/ProjectDetail/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";

// You can later move this array to src/data/projects.js
const projects = [
    {
        id: "project-1",
        title: "Revitea+",
        heroImage: "/Revitea/Hero.png",
        shortDescription: "Modernizing an online fashion store",
        fullDescription:
            "I led the end-to-end redesign of a legacy e-commerce platform...",
        role: "UI/UX Designer, Visual Designer",
        timeline: "6 months – 2024",
        tools: ["Figma", "FigJam", "UserTesting"],
        sections: [
            { title: "The Challenge", content: "..." },
            { title: "Research & Insights", content: "..." },
            { title: "Design Process", content: "..." },
            { title: "Final Outcome", content: "..." },
        ],
        images: [
            "/images/ecom-1.jpg",
            "/images/ecom-2.jpg",
            "/images/ecom-3.jpg",
        ],
    },
    {
        id: "project-2",
        title: "Mobile Banking App",
        heroImage: "/images/banking-hero.jpg",
        shortDescription: "Accessible banking for young adults",
        // ... same structure
    },
    // add more projects here
];

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
            <div className='back-link-wrapper'>
                <Link
                    to='/portfolio'
                    className='back-link'>
                    ← All Projects
                </Link>
            </div>

            <header className='project-header'>
                <h1>{project.title}</h1>
                <p className='short-desc'>{project.shortDescription}</p>
                <div className='meta'>
                    <span>Role: {project.role}</span>
                    <span>Timeline: {project.timeline}</span>
                </div>
            </header>

            <img
                src={project.heroImage}
                alt={project.title}
                className='hero-image'
            />

            <div className='project-content'>
                {project.sections.map((section, index) => (
                    <section
                        key={index}
                        className='case-section'>
                        <h2>{section.title}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: section.content,
                            }}
                        />
                        {/* or use <p> + children if you prefer JSX */}
                    </section>
                ))}

                <div className='gallery'>
                    {project.images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${project.title} – image ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}
