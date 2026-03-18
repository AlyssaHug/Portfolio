import { useEffect, useState } from "react";
import { usePlayer } from "../../PlayerContext";
import "./AlbumModal.css";

export default function AlbumModal({ album, onClose }) {
    const { playAlbum } = usePlayer();
    const [trackDurations, setTrackDurations] = useState({});

    useEffect(() => {
        if (!album) return;

        document.body.style.overflow = "hidden";

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        //------Loads songs from data + song duration------
        const loadDurations = async () => {
            const durations = {};
            console.log(
                "Album tracks:",
                album.tracks.map((t) => ({
                    name: t.name,
                    url: t.url,
                })),
            );
            await Promise.all(
                album.tracks.map(async (track, i) => {
                    try {
                        const dur = await getAudioDuration(track.url);
                        durations[i] = dur;
                    } catch {
                        durations[i] = 0;
                    }
                }),
            );

            setTrackDurations(durations);
        };

        loadDurations();

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [album, onClose]);

    if (!album) return null;
    //------Formats duration------
    const formatDuration = (seconds) => {
        if (!seconds || seconds === 0) return "—:--";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, "0")}`;
    };

    return (
        <div
            className='modal-overlay'
            onClick={onClose}>
            <div
                className='modal-content'
                onClick={(e) => e.stopPropagation()}>
                <div className='modal-art'>
                    <img
                        src={album.cover}
                        alt={album.title}
                    />
                </div>

                <div className='modal-body'>
                    <div className='modal-header'>
                        <p className='modal-artist'>{album.artist}</p>
                        <p className='modal-album-title'>{album.title}</p>
                    </div>

                    <div className='tracklist'>
                        {/* Maps each album */}
                        {album.tracks.map((track, i) => (
                            <div
                                key={i}
                                className='track-item'>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginRight: "1.5rem",
                                    }}>
                                    <span className='track-number'>
                                        {(i + 1).toString().padStart(2, "0")}
                                    </span>
                                    <span className='track-name'>
                                        {track.name}
                                    </span>
                                </div>
                                <span className='track-duration'>
                                    {formatDuration(trackDurations[i])}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            playAlbum(album);
                            onClose();
                        }}
                        className='play-button'>
                        Play Album
                    </button>

                    <p className='close-hint'>
                        Click outside or press Esc to close
                    </p>
                </div>
            </div>
        </div>
    );
}
function getAudioDuration(url) {
    return new Promise((resolve) => {
        if (!url) {
            console.warn("No URL provided for track");
            resolve(0);
            return;
        }

        console.log("Trying to load duration from:", url);

        const audio = new Audio();
        audio.preload = "metadata";

        audio.onloadedmetadata = () => {
            console.log("Success → duration:", audio.duration, "seconds");
            resolve(audio.duration);
        };

        audio.onerror = (e) => {
            console.error("Audio error:", e);
            console.warn("Failed URL was:", url);
            resolve(0);
        };

        audio.onloadeddata = () => console.log("Some data loaded for", url);

        audio.src = url;
    });
}
