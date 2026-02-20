import "./card.css";
import { Link } from "react-router-dom";
import PixelTransition from "../PixelTransition/PixelTransition";

export default function ProjectCard({
    id,
    title,
    categories,
    image,
    description,
    slug,
}) {
    const cardContent = (
        <div className='project-card'>
            <img
                src={image}
                alt={title}
                className='project-img'
                loading='lazy'
            />
            <div className='project-text'>
                <h3 className='projectCard-title'>{title}</h3>
                <p className='brief'>{description}</p>
            </div>
            <div className='item-info'>
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
    );

    return (
        <Link
            key={id}
            to={`/Portfolio/${slug}`}
            className='project-card-link'>
            <PixelTransition
                firstContent={cardContent}
                secondContent={cardContent}
                gridSize={24}
                pixelColor='#a9abd175'
                animationStepDuration={0.35}
                once={false}
                className='custom-pixel-card'
            />
        </Link>
    );
}
