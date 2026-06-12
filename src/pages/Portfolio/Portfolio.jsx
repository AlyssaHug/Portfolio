import "./Portfolio.css";
import { useState } from "react";
import projects from "../../Data/projects.json";
import ProjectCard from "../../components/ProjectCard/card";
import Grainient from "../../components/Granient/Grainient";


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
            <div className='page-header'>
                <div className='header-text'>
                    <h1 className='page-title'>Featured Work</h1>
                    
                </div>
               <div
                    className='dither-background'
                    style={{
                        width: "100%",
                        position: "relative",
                    }}>
                   <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Grainient
    color1="#E7EFFC"
    color2="#8AB2BD"
    color3="#E7EFFC"
    timeSpeed={1}
    warpStrength={0.6}
    warpFrequency={7}
    warpSpeed={2}
    warpAmplitude={5}
    blendSoftness={0.2}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={1}
    grainAnimated={false}
    contrast={1.4}
    gamma={1}
    saturation={0.8}
    zoom={1}
  />
</div>
                </div>
            </div>
            <div className="page">
            
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
                                        : category
                                              .toUpperCase()
                                              .replace("/", "/")}
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
        </div>
    );
}
