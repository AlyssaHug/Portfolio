import {
    createContext,
    useContext,
    useRef,
    useState,
    useEffect,
    Children,
} from "react";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
    const [currentAlbum, setCurrentAlbum] = useState(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio();
        const audio = audioRef.current;

        const handleEnded = () => {
            if (!currentAlbum) return;
            const nextIndex =
                (currentTrackIndex + 1) % currentAlbum.tracks.length;
            setCurrentTrackIndex(nextIndex);
        };

        audio.addEventListener("ended", handleEnded);
        return () => audio.removeEventListener("ended", handleEnded);
    }, [currentTrackIndex, currentAlbum]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !currentAlbum) return;

        audio.src = currentAlbum.tracks[currentTrackIndex].src;
        audio.load();

        if (isPlaying) {
            audio.play().catch(console.error);
        }
    }, [currentAlbum, currentTrackIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch(console.error);
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const playAlbum = (album) => {
        setCurrentAlbum(album);
        setCurrentTrackIndex(0);
        setIsPlaying(true);
    };

    const pause = () => setIsPlaying(false);
    const next = () => {
        if (!currentAlbum) return;
        const nextIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
        setCurrentTrackIndex(nextIndex);
    };

    return (
        <PlayerContext.Provider
            value={{
                currentAlbum,
                currentTrackIndex,
                isPlaying,
                playAlbum,
                pause,
                next,
            }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayer must be used inside PlayerProvider");
    }
    return context;
};
