import "./Portfolio.css";
import { useState } from "react";
import projects from "../../Data/projects.json";
import ProjectCard from "../../components/ProjectCard/card";

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
