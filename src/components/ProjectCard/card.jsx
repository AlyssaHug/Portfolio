import "./card.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, imgSrc }) {
    return (
        <Link
            to={`/Portfolio/${id}`}
            className='card-link'>
            <div className='project-card'>
                <img
                    className='project-img'
                    src={imgSrc}
                    alt={title}
                />
                <h3 className='title'>{title}</h3>
            </div>
        </Link>
    );
}
