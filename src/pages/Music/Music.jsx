import "./Music.css";
import { useState, useEffect } from "react";
import albumData from "../../Data/albumData.json";
import { usePlayer } from "../../PlayerContext";
import AlbumModal from "../../components/AlbumModal/AlbumModal"; // adjust path as needed
import Dither from "../../components/Dither/Dither";

export default function Music() {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const { playAlbum } = usePlayer();

    useEffect(() => {
        setAlbums(albumData);
    }, []);

    return (
        <>
            <div className='header-section'>
                <div className='header-text'>
                    <h1 className='music-header'>Pick your Tunes</h1>
                </div>
                <div
                    className='dither-background'
                    style={{
                        width: "100%",
                        position: "relative",
                    }}>
                    <Dither
                        waveColor={[0.0, 0.3909, 0.4811]}
                        disableAnimation={false}
                        enableMouseInteraction
                        mouseRadius={0.2}
                        colorNum={10}
                        waveAmplitude={0.3}
                        waveFrequency={3}
                        waveSpeed={0.05}
                    />
                </div>
            </div>
            <div className='music-content'>
                <div className='album-container'>
                    {albums.map((album) => (
                        <div
                            key={album.id}
                            onClick={() => setSelectedAlbum(album)}
                            className='album-card'>
                            <div className='album-cover-wrapper'>
                                <img
                                    src={album.cover}
                                    alt={album.title}
                                    className='album'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AlbumModal
                album={selectedAlbum}
                onClose={() => setSelectedAlbum(null)}
            />
        </>
    );
}
