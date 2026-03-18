import "./MiniPlayer.css";
import { usePlayer } from "../../PlayerContext";

export default function MiniPlayer() {
    const {
        currentAlbum,
        currentTrackIndex,
        isPlaying,
        pause,
        next,
        togglePlay,
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
                    <p>
                        {currentAlbum.artist} – {currentAlbum.title}
                    </p>
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
