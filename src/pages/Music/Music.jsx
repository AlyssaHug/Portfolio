import "./Music.css";
import { useState, useEffect } from "react";
import albumData from "../../Data/albumData.json";
import { usePlayer } from "../../PlayerContext";
import AlbumModal from "../../components/AlbumModal/AlbumModal"; // adjust path as needed
import Grainient from "../../components/Granient/Grainient";

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
                    <p className='header-desc'>
                        A mix of my top songs from my favourite albums by my
                        favourite artists.
                        <br />
                        Feel free to listen while exploring my site!
                    </p>
                </div>
                <div
                    className='dither-background'
                    style={{
                        width: "100%",
                        position: "relative",
                    }}>
                   <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Grainient
    color1="#E7EFFC"
    color2="#8AB2BD"
    color3="#E7EFFC"
    timeSpeed={1}
    warpStrength={0.6}
    warpFrequency={7}
    warpSpeed={2}
    warpAmplitude={5}
    blendSoftness={0.2}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={1}
    grainAnimated={false}
    contrast={1.4}
    gamma={1}
    saturation={0.8}
    zoom={1}
  />
</div>
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
