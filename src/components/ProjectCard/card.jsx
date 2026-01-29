import "./card.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ brief, slug, title, imgSrc, tags = [] }) {
    return (
        <Link
            to={`/Portfolio/${slug}`}
            className='card-link'>
            <div className='project-card'>
                <img
                    className='project-img'
                    src={imgSrc}
                    alt={title}
                />
                <h3 className='title'>{title}</h3>
                <div className='hover-overlay'>
                    <p className='brief'>{brief}</p>

                    <div className='category-tags'>
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className={`category-tag ${cat
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace("/", "-")}`}>
                                {cat.toUpperCase().replace("/", "/")}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
