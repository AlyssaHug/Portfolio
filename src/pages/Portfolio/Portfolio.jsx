import "./Portfolio.css";
import ProjectCard from "../../components/footer/ProjectCard/card";
import NavBar from "../../components/footer/NavBar/NavBar";

export default function Portfolio() {
    return (
        <div className='page'>
            <header>
                <NavBar />
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
