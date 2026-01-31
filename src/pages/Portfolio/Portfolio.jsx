import "./Portfolio.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../Data/projects.json";
import ProjectCard from "../../components/ProjectCard/card";

// const galleryItems = [
//     {
//         id: 1,
//         title: "Tandem",
//         categories: ["Front-end", "UI/UX Design"],
//         image: "Tandem/Preview.png",
//         description:
//             "An app to help parents find childcare that matches their work schedule.",
//         slug: "tandem",
//     },
//     {
//         id: 2,
//         title: "Paramore E-Magazine",
//         categories: ["Front-end", "UI/UX Design", "Graphic Design"],
//         image: "/EMagazine/Preview.png",
//         description:
//             "An e-magazine covering the band, Paramore, and their journey through the years.",
//         slug: "paramore",
//     },
//     {
//         id: 3,
//         title: "Bandit Breakout",
//         categories: ["Front-end", "UI/UX Design", "Graphic Design"],
//         image: "Bandit/Preview.png",
//         description: "A western themed board game built for web.",
//         slug: "bandit",
//     },
//     {
//         id: 4,
//         title: "Revitea+",
//         categories: ["Product Design", "Graphic Design"],
//         image: "/Revitea/Preview.png",
//         description: "Clean matcha-based energy.",
//         slug: "revitea",
//     },
//     {
//         id: 5,
//         title: "Poster Series",
//         categories: ["Graphic Design"],

//         image: "/Posters/Preview.png",
//         description:
//             "A series of posters inspired by retro computer graphics and Hayley Williams 3rd solo album.",
//         slug: "posters",
//     },
//     {
//         id: 6,
//         title: "MoolahMate",
//         categories: ["Front-end", "UI/UX Design"],
//         image: "/MoolahMate/Preview.png",
//         description: "A gamified budgeting app to help",
//         slug: "moolahmate",
//     },
// ];

export default function Work() {
    const [activeFilter, setActiveFilter] = useState("all");

    const allCategories = [
        "all",
        ...new Set(projects.flatMap((item) => item.categories)),
    ].sort((a, b) => {
        if (a === "all") return -1; // always first
        if (b === "all") return 1;
        return a.localeCompare(b);
    });

    const filteredItems =
        activeFilter === "all"
            ? projects
            : projects.filter((item) => item.categories.includes(activeFilter));

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
                    <ProjectCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        categories={item.categories}
                        image={item.image}
                        description={item.description}
                        slug={item.slug}
                    />
                ))}
            </div>
        </div>
    );
}
