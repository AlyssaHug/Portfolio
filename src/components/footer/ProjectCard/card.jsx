import "./card.css";

export default function ProjectCard({ title, description, link, imgSrc }) {
    return (
        <div className='project-card'>
            <img
                className='project-img'
                src={imgSrc}
                alt={title}
            />
            <h3 className='title'>{title}</h3>
        </div>
    );
}
