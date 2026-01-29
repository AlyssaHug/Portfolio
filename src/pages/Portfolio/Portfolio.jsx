import "./card.css";
import "./Portfolio.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const galleryItems = [
    {
        id: 1,
        title: "Tandem",
        categories: ["Front-end", "UI/UX Design"],
        image: "Tandem/Preview.png",
        description:
            "An app to help parents find childcare that matches their work schedule.",
        slug: "tandem",
    },
    {
        id: 2,
        title: "Paramore E-Magazine",
        categories: ["Front-end", "UI/UX Design", "Graphic Design"],
        image: "/EMagazine/Preview.png",
        description:
            "An e-magazine covering the band, Paramore, and their journey through the years.",
        slug: "paramore",
    },
    {
        id: 3,
        title: "Bandit Breakout",
        categories: ["Front-end", "UI/UX Design", "Graphic Design"],
        image: "Bandit/Preview.png",
        description: "A western themed board game built for web.",
        slug: "bandit",
    },
    {
        id: 4,
        title: "Revitea+",
        categories: ["Product Design", "Graphic Design"],
        image: "/Revitea/Preview.png",
        description: "Clean matcha-based energy.",
        slug: "revitea",
    },
    {
        id: 5,
        title: "Poster Series",
        categories: ["Graphic Design"],

        image: "/Posters/Preview.png",
        description:
            "A series of posters inspired by retro computer graphics and Hayley Williams 3rd solo album.",
    },
    {
        id: 6,
        title: "MoolahMate",
        categories: ["Front-end", "UI/UX Design"],
        image: "/MoolahMate/Preview.png",
        description: "A gamified budgeting app to help",
    },
];

export default function Work() {
    const [activeFilter, setActiveFilter] = useState("all");

    const allCategories = [
        "all",
        ...new Set(galleryItems.flatMap((item) => item.categories)),
    ].sort((a, b) => {
        if (a === "all") return -1; // always first
        if (b === "all") return 1;
        return a.localeCompare(b);
    });

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) =>
                  item.categories.includes(activeFilter),
              );

    return (
        <div>
            <h1 className='page-title'>Featured Work</h1>
            <div className='filter-container'>
                <div className='filter-buttons'>
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                            data-category={category
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace("/", "-")}
                            onClick={() => setActiveFilter(category)}>
                            {category === "all"
                                ? "All"
                                : category.toUpperCase().replace("/", "/")}
                        </button>
                    ))}
                </div>
            </div>
            <div className='content'>
                {filteredItems.map((item) => (
                    <Link
                        key={item.id}
                        to={`/Portfolio/${item.slug}`}
                        className='project-card-link'>
                        <div className='project-card'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='project-img'
                                loading='lazy'
                            />
                            <div className='card-text'>
                                <h3 className='title'>{item.title}</h3>
                                <p className='brief'>{item.description}</p>
                            </div>
                            <div className='item-info'>
                                <div className='category-tags'>
                                    {item.categories.map((cat) => (
                                        <span
                                            key={cat}
                                            className={`category-tag ${cat
                                                .toLowerCase() // ← add this
                                                .replace(/\s+/g, "-") // spaces → hyphen
                                                .replace("/", "-")}`} // keep for safety
                                        >
                                            {cat
                                                .toUpperCase()
                                                .replace("/", "/")}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
