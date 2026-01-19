import "./projects.css";
import ProjectCard from "../../components/footer/ProjectCard/card";

export default function Projects() {
    return (
        <div className='page'>
            <header>
                <h1 className='page-title'>Featured Work</h1>
            </header>
            <main className='content'>
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
                <ProjectCard
                    title='Travel Magazine'
                    imgSrc='/TravelMag_Preview.png'
                />
            </main>
        </div>
    );
}
