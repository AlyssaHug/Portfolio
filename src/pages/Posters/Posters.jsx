import { Link } from "react-router-dom";
import "./Posters.css";

export default function Posters() {
    return (
        <div className='project-detail-page'>
            <img
                src='/Posters/Hero.png'
                alt='Hayley Williams Poster'
                className='hero-image'
            />
            <header
                className='project-header'
                id='overview'>
                <ul className='links'>
                    <li>
                        <a
                            href='#overview'
                            className='link'>
                            Overview
                        </a>
                    </li>
                    <li>
                        <a
                            href='#ideation'
                            className='link'>
                            Ideation
                        </a>
                    </li>
                    <li>
                        <a
                            href='#creation'
                            className='link'>
                            Creation
                        </a>
                    </li>
                    <li>
                        <a
                            href='#iterations'
                            className='link'>
                            Iterations
                        </a>
                    </li>
                    <li>
                        <a
                            href='#final'
                            className='link'>
                            Final Product
                        </a>
                    </li>
                    <li>
                        <a
                            href='#test'
                            className='link'>
                            Test it out!
                        </a>
                    </li>
                </ul>
                <div className='header-text'>
                    <h1 className='project-title'>Poster Series</h1>
                    <p className='short-desc'>
                        This project was one that gave me the creative freedom
                        to design a poster series with the topic of my choosing.
                        The goal was to produce 3 visually engaging, unique
                        posters as a cohesive promotional/product line. The
                        result is a poster series that blends retro Windows with
                        music, matching inline with the artist's branding.
                    </p>
                    <div className='meta'>
                        <span className='role'>Role: </span>
                        <p>Graphic Designer</p>
                    </div>
                </div>
            </header>

            <div className='project-content'>
                <section
                    id='ideation'
                    className='main-section'>
                    <h2 className='section-title'>
                        Ideation - Music-Inspired Posters
                    </h2>
                    <p className='section-desc'>
                        I wanted to create something inspired by music, being an
                        avid listener to many artists. With this project
                        providing the creative freedom for what I choose, I
                        wanted to make sure it was based around a topic that
                        inspires me, and I find nothing more inspiring than
                        music. I researched some artists and what kinds of
                        merchandise/promotional material is done.
                    </p>
                    <img
                        className='section-bannerImg'
                        src='/Posters/Reference.png'
                    />
                </section>
                <section
                    id='creation'
                    className='main-section'>
                    <h2 className='section-title'>
                        Creation - Hayley Williams Series
                    </h2>
                    <p className='section-desc'>
                        I decided on focusing on Hayley Williams, the lead
                        singer of Paramore while also being a solo artist. Given
                        this is someone I grew up listening to, I already
                        started thinking about what direction I could go with,
                        since her branding and style has changed over the years.
                        I decided I wanted to base it around her newest album,
                        wanting to reference some lyrics from its songs.
                    </p>
                    <div className='styles'>
                        <div className='palettes'>
                            <div className='palette'>
                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#243DBD" }}>
                                    #243DBD
                                </div>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#ABABAB" }}>
                                    #ABABAB
                                </div>

                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#FFBE22" }}>
                                    #FFBE22
                                </div>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#599FFF" }}>
                                    #599FFF
                                </div>

                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#FFB9B9" }}>
                                    #FFB9B9
                                </div>
                            </div>
                        </div>
                        <div className='fonts'>
                            <img
                                className='font'
                                src='/Posters/Minecraftia.svg'
                                alt='Minecraftia - Main font sample'
                            />

                            <img
                                className='font support'
                                src='/Posters/Supporting.svg'
                                alt='Lyric font samples'
                            />
                        </div>
                    </div>
                    <div className='creation-images'>
                        <img
                            src='/Posters/swatches.png'
                            alt='Asset of color menu'
                            className='swatch-menu'
                        />
                        <div className='square-row'>
                            <img
                                src='/Posters/window.png'
                                alt='Interface option for window size'
                                className='square'
                            />

                            <img
                                src='/Posters/eraser.png'
                                alt='Interface option for eraser tool'
                                className='square'
                            />
                            <img
                                src='/Posters/pencil.png'
                                alt='Interface option for pencil tool'
                                className='square'
                            />
                            <img
                                src='/Posters/select.png'
                                alt='Interface option for selection tool'
                                className='square'
                            />
                            <img
                                src='/Posters/brush.png'
                                alt='Interface option for the paint brush tool'
                                className='square'
                            />
                        </div>
                    </div>
                </section>
                <section
                    id='iterations'
                    className='main-section'>
                    <h2 className='section-title'>Iterations</h2>
                    <p className='section-desc'>
                        Originally heading in a more grunge, tour poster style,
                        it didn’t feel right given the artist. After conducting
                        more research into her, and how she markets herself with
                        more retro media, I switched directions to base the
                        series off Windows paint. This change fits better with
                        her album and matching her digital branding on her
                        website, the theme was kept consistent through each
                        poster.
                    </p>
                    <div className='iteration-images'>
                        <img
                            src='/Posters/initial.png'
                            alt='Initial mockup of poster'
                            className='process-img'
                        />
                        <p className='eq'>=</p>
                        <img
                            src='/Posters/ver01.png'
                            alt='New version of the poster'
                            className='process-img'
                        />
                    </div>
                </section>
                <section
                    id='final'
                    className='main-section'>
                    <h2 className='section-title'>Final Product</h2>
                    <p className='section-desc'>
                        The result was a 3-poster series blending old Windows
                        paint with Hayley Williams newest solo album, with
                        details referencing the songs. Each poster features a
                        black & white image, drawn over with different patterns
                        and colors, and text featuring the lyrics from the songs
                        they’re based on.
                    </p>
                    <div className='img-container'>
                        <img
                            src='/Posters/ver01.png'
                            alt='Final version of Strawberry flavour'
                            className='final-poster'
                        />
                        <img
                            src='/Posters/ver02.png'
                            alt='Final version of Blueberry flavour'
                            className='final-poster'
                        />
                        <img
                            src='/Posters/ver03.png'
                            alt='Final version of Lavender flavour'
                            className='final-poster'
                        />
                    </div>
                </section>
            </div>
            <section
                id='models'
                className='main-section'>
                <h2 className='section-title'>Check it out!</h2>
            </section>
        </div>
    );
}
