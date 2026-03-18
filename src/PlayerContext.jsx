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

    //------Audio set up------
    useEffect(() => {
        const audio = new Audio();
        audioRef.current = audio;

        const handleEnded = () => {
            if (!currentAlbum) return;
            setCurrentTrackIndex(
                (prev) => (prev + 1) % currentAlbum.tracks.length,
            );
        };

        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);
    //------Track source loading------
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !currentAlbum) return;

        const track = currentAlbum.tracks[currentTrackIndex];

        if (audio.src !== track.url) {
            audio.src = track.url;
            audio.load();
        }
    }, [currentAlbum, currentTrackIndex]);
    //------Playback state handling------
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch(console.error);
        } else {
            audio.pause();
        }
    }, [isPlaying]);
    //------Starts new album------
    const playAlbum = (album) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;

        setCurrentAlbum(album);
        setCurrentTrackIndex(0);
        setIsPlaying(true);
    };
    //------Handling audio play/pause------
    const pause = () => setIsPlaying(false);
    const next = () => {
        if (!currentAlbum) return;
        const nextIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
        setCurrentTrackIndex(nextIndex);
    };
    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio || !currentAlbum) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((err) => {
                    console.error("Resume failed:", err);
                });
        }
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
                togglePlay,
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
