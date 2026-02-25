import { useEffect } from "react";
import { usePlayer } from "../../PlayerContext";
import "./AlbumModal.css";

export default function AlbumModal({ album, onClose }) {
    const { playAlbum } = usePlayer();

    useEffect(() => {
        if (!album) return;

        document.body.style.overflow = "hidden";

        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [album, onClose]);

    if (!album) return null;

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
                                <span className='track-duration'>—:--</span>
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
