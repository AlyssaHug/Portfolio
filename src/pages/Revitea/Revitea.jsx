import "./Revitea.css";
import Cans from "../../components/cans/cans";

export default function Revitea() {
    return (
        <div className='project-detail-page'>
            <img
                src='/Revitea/Hero.png'
                alt='Revitea+'
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
                    <h1 className='project-title'>Revitea+</h1>
                    <p className='short-desc'>
                        Health-conscious consumers want a drink that’s healthier
                        while giving them clean energy. The goal was to create a
                        product that was not only visually appealing and
                        attractive from a shelf, but also has clean ingredients
                        and natural flavors. The result is an energy drink line
                        that is simple, yet appealing, highlighting its
                        different flavors while being overall cohesive.
                    </p>
                    <div className='meta'>
                        <span className='role'>Role: </span>
                        <p>Product Designer, Illustrator</p>
                    </div>
                </div>
            </header>

            <div className='project-content'>
                <section
                    id='ideation'
                    className='main-section'>
                    <h2 className='section-title'>
                        Ideation - Matcha-based Energy
                    </h2>
                    <p className='section-desc'>
                        It started with ideating, researching, creating
                        moodboards, and style guides figure out what direction
                        to go. I looked at drinks currently on the market, both
                        energy and tea-based drinks, to see what worked for
                        other companies and what ways they were trying to
                        differentiate themselves.
                    </p>
                    <img
                        className='section-bannerImg'
                        src='/Revitea/Reference.png'
                    />
                </section>
                <section
                    id='creation'
                    className='main-section'>
                    <h2 className='section-title'>Creation - Revitea+</h2>
                    <p className='section-desc'>
                        The goal was to create a drink that was sleek and spoke
                        for itself, with 3 different flavors in the line-up.
                        With the base flavor being Matcha, I wanted to ensure
                        there were underlying tones from it carried throughout
                        all cans, while still being unique from each other.{" "}
                        <br />
                        <br />
                        With this, I chose 2 fonts for the base of the project,
                        along with curated color palettes to be used both
                        consistently across all cans and individually for each
                        flavor.
                    </p>
                    <div className='revitea-styles'>
                        <div className='palette-grid'>
                            <div className='palette'>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#F2E8CF" }}>
                                    #F2E8CF
                                </div>
                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#386641" }}>
                                    #386641
                                </div>
                            </div>
                            <div className='palette'>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#F1DADD" }}>
                                    #F1DADD
                                </div>
                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#CE6876" }}>
                                    #CE6876
                                </div>
                            </div>
                            <div className='palette'>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#CADEE5" }}>
                                    #CADEE5
                                </div>
                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#426996" }}>
                                    #426996
                                </div>
                            </div>
                            <div className='palette'>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#D2C8E8" }}>
                                    #D2C8E8
                                </div>
                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#816EAF" }}>
                                    #816EAF
                                </div>
                            </div>
                        </div>
                        <div className='revitea-fonts'>
                            <img
                                className='revitea-font federo'
                                src='/Revitea/federo.svg'
                                alt='Federo - Display font sample'
                            />

                            <img
                                className='revitea-font fugaz'
                                src='/Revitea/fugaz.svg'
                                alt='Fugaz One - Body font sample'
                            />
                        </div>
                    </div>
                    <div className='revitea-creations'>
                        <img
                            src='/Revitea/Name Variation.png'
                            alt='Name variations'
                            className='variation'
                        />
                        <img
                            src='/Revitea/strawberry.svg'
                            alt='Strawberry can art'
                            className='can-svg'
                        />

                        <img
                            src='/Revitea/blueberry.svg'
                            alt='Blueberry can art'
                            className='can-svg'
                        />
                        <img
                            src='/Revitea/lavender.svg'
                            alt='Lavender can art'
                            className='can-svg'
                        />
                    </div>
                </section>
                <section
                    id='iterations'
                    className='main-section'>
                    <h2 className='section-title'>Iterations</h2>
                    <p className='section-desc'>
                        Combining the visuals carried through energy drinks vs.
                        tea drinks took a couple tries, trying to create
                        something matching the market while standing out.
                        Because of this, there were a couple previous versions
                        that didn’t make the cut.
                        <br />
                        <br />
                        With palettes, fonts, and drink names, every part of
                        this project had multiple renditions and combinations to
                        ensure the best one suited was picked.
                    </p>
                    <div className='iteration-images'>
                        <img
                            src='/Revitea/initial.svg'
                            alt='Initial mockup of label'
                            className='label-img'
                        />
                        <p className='eq'>=</p>
                        <img
                            src='/Revitea/attempt.svg'
                            alt='Second version of label'
                            className='label-img'
                        />
                        <p className='eq'>=</p>
                        <img
                            src='/Revitea/finalLabel.svg'
                            alt='Final label design'
                            className='label-img'
                        />
                    </div>
                </section>
                <section
                    id='final'
                    className='main-section'>
                    <h2 className='section-title'>Final Product</h2>
                    <p className='section-desc'>
                        The result was a 3 flavor line-up of matcha-based energy
                        drinks. On the side of the can, are highlights showing
                        its health-conscious promotion, with the nutrition
                        information on the other. Each can is themed to its
                        unique flavor while being cohesive as a full set,
                        accented to reflect their contents.
                    </p>
                    <div className='img-container'>
                        <img
                            src='/Revitea/final01.png'
                            alt='Final version of Strawberry flavour'
                            className='final-img'
                        />
                        <img
                            src='/Revitea/final02.png'
                            alt='Final version of Blueberry flavour'
                            className='final-img'
                        />
                        <img
                            src='/Revitea/final03.png'
                            alt='Final version of Lavender flavour'
                            className='final-img'
                        />
                    </div>
                </section>
            </div>
            <section
                id='models'
                className='main-section'>
                <h2 className='section-title'>Check it out!</h2>
                <Cans />
            </section>
        </div>
    );
}
