import "./card.css";
import { Link } from "react-router-dom";

export default function ProjectCard({
    id,
    title,
    categories,
    image,
    description,
    slug,
}) {
    return (
        <Link
            key={id}
            to={`/Portfolio/${slug}`}
            className='project-card-link'>
            <div className='project-card'>
                <img
                    src={image}
                    alt={title}
                    className='project-img'
                    loading='lazy'
                />
                <div className='card-text'>
                    <h3 className='title'>{title}</h3>
                    <p className='brief'>{description}</p>
                </div>
                <div className='item-info'>
                    <div className='category-tags'>
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className={`category-tag ${cat
                                    .toLowerCase() // ← add this
                                    .replace(/\s+/g, "-") // spaces → hyphen
                                    .replace("/", "-")}`} // keep for safety
                            >
                                {cat.toUpperCase().replace("/", "/")}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
