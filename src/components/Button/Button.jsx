import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({ text, link }) {
    return (
        <div className='view-all-wrapper'>
            <Link
                to={link}
                className='view-all-btn'>
                {text}
            </Link>
        </div>
    );
}
export function CodeButton({ text, href }) {
    return (
        <a
            className='code-btn'
            href={href}
            target='_blank'>
            {text}
        </a>
    );
}
