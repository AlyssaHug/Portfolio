import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PlayerProvider } from "./PlayerContext.jsx";
import MiniPlayer from "./components/MiniPlayer/MiniPlayer.jsx";
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <PlayerProvider>
                <App />
                <MiniPlayer />
            </PlayerProvider>
        </ThemeProvider>
    </StrictMode>,
);
