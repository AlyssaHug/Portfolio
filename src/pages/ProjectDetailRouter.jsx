import { useParams, Link } from "react-router-dom";
import Revitea from "./Revitea/Revitea";

export default function ProjectDetailRouter() {
    const { slug } = useParams();

    switch (slug) {
        case "revitea":
            return <Revitea />;

        default:
            return (
                <div style={{ padding: "6rem 2rem", textAlign: "center" }}>
                    <h2>Project not found</h2>
                    <p>We couldn't find that case study.</p>
                    <Link to='/portfolio'>← Back to all work</Link>
                </div>
            );
    }
}
