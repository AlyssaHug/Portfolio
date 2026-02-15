import { useParams, Link } from "react-router-dom";
import Revitea from "./Revitea/Revitea";
import Posters from "./Posters/Posters";
import Moolahmate from "./Moolahmate/Moolahmate";
import Tandem from "./Tandem/Tandem";
import Paramore from "./Paramore/Paramore";
import Bandit from "./Bandit/Bandit";

export default function ProjectDetailRouter() {
    const { slug } = useParams();

    switch (slug) {
        case "revitea":
            return <Revitea />;

        case "posters":
            return <Posters />;

        case "moolahmate":
            return <Moolahmate />;

        case "tandem":
            return <Tandem />;

        case "paramore":
            return <Paramore />;

        case "bandit":
            return <Bandit />;
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
