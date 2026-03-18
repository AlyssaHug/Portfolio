import "./MiniPlayer.css";
import { usePlayer } from "../../PlayerContext"; // adjust path

export default function MiniPlayer() {
    const {
        currentAlbum,
        currentTrackIndex,
        isPlaying,
        pause,
        next,
        togglePlay, // ← now you can destructure it here
    } = usePlayer();

    if (!currentAlbum) return null;

    const currentTrack = currentAlbum.tracks[currentTrackIndex];

    return (
        <div className='mini-player'>
            <img
                src={currentAlbum.cover}
                alt={currentAlbum.title}
                className='mini-cover'
            />

            <div className='mini-info'>
                <div className='mini-track-name'>{currentTrack.name}</div>
                <div className='mini-album-info'>
                    {currentAlbum.artist} – {currentAlbum.title}
                </div>
            </div>

            <div className='mini-controls'>
                <button
                    onClick={togglePlay}
                    className='control-btn pause-play'
                    title={isPlaying ? "Pause" : "Resume"}>
                    {isPlaying ? "⏸" : "▶"}
                </button>
            </div>
        </div>
    );
}
