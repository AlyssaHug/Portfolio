import "./Paramore.css";
import { useState, useEffect, useRef } from "react";
import { CodeButton } from "../../components/Button/Button";

export default function Paramore() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const [activeId, setActiveId] = useState("overview");
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const intersectingSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) => entry.target);

                console.log(
                    "Intersecting section IDs:",
                    intersectingSections.map((sec) => sec.id),
                ); // ← DEBUG: Shows all visible sections

                if (intersectingSections.length > 0) {
                    // Sort by top position in viewport (smallest .top = highest on screen)
                    intersectingSections.sort(
                        (a, b) =>
                            a.getBoundingClientRect().top -
                            b.getBoundingClientRect().top,
                    );

                    const topId = intersectingSections[0].id;
                    console.log("Topmost intersecting ID:", topId); // ← DEBUG: Shows which one was selected

                    setActiveId(topId);
                }
            },
            {
                rootMargin: "-150px 0px -50% 0px", // ← Adjusted: Slightly larger top offset (for header) and bottom threshold (more lenient)
                threshold: 0.05, // ← Adjusted: Lower to trigger on minimal overlap (helps short sections)
            },
        );

        const sections = document.querySelectorAll("section[id], header[id]");
        console.log(
            "Observed section IDs:",
            Array.from(sections).map((sec) => sec.id),
        ); // ← DEBUG: Confirms all sections are found

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <img
                src='/EMagazine/Hero.png'
                alt='A picture of a laptop with the homepage of the e-magazine open.'
                className='hero-image'
                loading='lazy'
                decoding='async'
            />
            <div className='case-flex'>
                {/* Navigation */}
                <div className='contents-nav'>
                    {/* desktop table of contents */}
                    <aside className='desktop-content-container'>
                        <div className='desktop-links'>
                            <h3 className='contents-desktop-header'>
                                Contents
                            </h3>
                            <nav className='case-links'>
                                <a
                                    href='#overview'
                                    className={`case-link ${activeId === "overview" ? "active" : ""}`}>
                                    Overview
                                </a>

                                <a
                                    href='#role'
                                    className={`case-link ${activeId === "role" ? "active" : ""}`}>
                                    My Role
                                </a>

                                <a
                                    href='#challenge'
                                    className={`case-link ${activeId === "challenge" ? "active" : ""}`}>
                                    The Challenge
                                </a>

                                <a
                                    href='#idea'
                                    className={`case-link ${activeId === "idea" ? "active" : ""}`}>
                                    The Idea
                                </a>

                                <a
                                    href='#research'
                                    className={`case-link ${activeId === "research" ? "active" : ""}`}>
                                    Research
                                </a>

                                <a
                                    href='#process'
                                    className={`case-link ${activeId === "process" ? "active" : ""}`}>
                                    The Process
                                </a>

                                <a
                                    href='#iterations'
                                    className={`case-link ${activeId === "iterations" ? "active" : ""}`}>
                                    Iterations
                                </a>

                                <a
                                    href='#coding'
                                    className={`case-link ${activeId === "coding" ? "active" : ""}`}>
                                    Development
                                </a>

                                <a
                                    href='#reflect'
                                    className={`case-link ${activeId === "reflect" ? "active" : ""}`}>
                                    Reflection
                                </a>

                                <a
                                    href='#test'
                                    className={`case-link ${activeId === "test" ? "active" : ""}`}>
                                    Test it out!
                                </a>
                            </nav>
                        </div>
                    </aside>
                    {/* Mobile table of contents */}
                    <div className='menu-btn-container'>
                        <button
                            className='mobile-menu-btn'
                            onClick={toggleMenu}
                            aria-label='Toggle menu'
                            aria-expanded={isOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    {/* Mobile Menu Dropdown */}
                    <div className={`mobile-casemenu ${isOpen ? "open" : ""}`}>
                        <ul className='mobile-link'>
                            <p className='contents-header'>Contents</p>
                            <li>
                                <a
                                    href='#overview'
                                    className='link'>
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#role'
                                    className='link'>
                                    My Role
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#challenge'
                                    className='link'>
                                    The Challenge
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#idea'
                                    className='link'>
                                    The Idea
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#research'
                                    className='link'>
                                    Research
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#process'
                                    className='link'>
                                    The Process
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
                                    href='#coding'
                                    className='link'>
                                    Development
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#reflect'
                                    className='link'>
                                    Reflection
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
                    </div>
                </div>
                <div className='case-page-content'>
                    <header
                        className='case-header'
                        id='overview'>
                        {/* Summary */}
                        <div className='header-text'>
                            <h1 className='project-title'>
                                Paramore E-Magazine
                            </h1>
                            <p className='case-summary'>
                                This project was one that gave the creative
                                freedom to build an interactive, informational
                                digital media piece with the topic of our
                                choosing. The goal was to create an e-magazine
                                that was both engaging and detailed. The result
                                was ‘This is Paramore’, an interactive
                                experience detailing the band’s members and
                                their history.
                            </p>
                            <div className='meta'>
                                <span className='role'>Role: </span>
                                <p>UI/UX Designer, Front-end Developer</p>
                            </div>
                        </div>
                        {/* My Role */}
                        <section
                            className='case-role'
                            id='role'>
                            <h2 className='case-title'>My Role</h2>
                            <p className='role-desc'>
                                For this project, I was a UI/UX Designer, as
                                well as a front-end developer, following this
                                project from start to finish. As a designer, I
                                worked on our storyboarding to ensure the flow
                                between sections blended seamlessly, and
                                building Photoshop assets and screen mock-ups
                                for development. Once our mock-ups were
                                complete, I hopped into our files and started
                                coding. I helped implement and style our content
                                and images, while also merging our code and
                                conducting code reviews with my teammate.
                            </p>
                        </section>
                    </header>

                    <div className='project-content case-content'>
                        {/* The Challenge*/}
                        <section
                            id='challenge'
                            className='case-section'>
                            <h2 className='case-title'>The Challenge</h2>
                            <p className='case-desc'>
                                The scope we had to complete this project was
                                1.5 months, from start to finish. Given our
                                short time, we had to act quickly on tasks, to
                                ensure we could implement all our ideas while
                                still delivering a high-quality product. I had
                                to work under pressure, and not let said
                                pressure affect my work ethic or quality.
                            </p>
                        </section>
                        {/* The Idea */}
                        <section
                            id='idea'
                            className='case-section'>
                            <h2 className='case-title'>
                                The Idea - Paramore's History
                            </h2>
                            <p className='case-desc'>
                                The idea was to build an e-magazine base around
                                the band, Paramore, and their journey, from
                                start to finish. Our priority was covering their
                                history, while also including details regarding
                                their albums and band members to tell the story
                                of their rise to popularity. We wanted the
                                navigation for this to be linear, providing a
                                set path for users, with some optional pages to
                                flip through, to best tell their story from the
                                beginning.
                            </p>
                            <img
                                src='/EMagazine/Reference.png'
                                alt="Reference images of Paramore's online sites and branding."
                                className='casesection-bannerImg'
                                loading='lazy'
                                decoding='async'
                            />
                        </section>
                        {/* Research */}
                        <section
                            id='research'
                            className='case-section'>
                            <h2 className='case-title'>Research Insights</h2>

                            <p className='case-desc'>
                                Before starting anything, we conducted secondary
                                research by examining media brands to inform our
                                strategic direction. Looking at big companies,
                                like Vogue and National geographic, gave us
                                insights to how they engage with users and
                                connect with them, which we then applied to our
                                own product.
                                <br />
                                <br />
                                Vogue boosts its popularity through
                                celebrity/influencer collaborations, fueling
                                consumer interest and driving their engagement.
                                Although their audience is predominantly female,
                                leaving them an opportunity to expand and reach
                                other audiences.
                                <br />
                                <br />
                                National Geographic builds strong loyalty via
                                their mission-driven focus, making it hard for
                                audiences to view them negatively. While they
                                effectively raise awareness of global issues,
                                there’s opportunity to deepen emotional
                                connections with stronger calls to action,
                                encouraging readers to participate actively.
                            </p>
                        </section>
                        {/* The Process */}
                        <section
                            id='process'
                            className='case-section'>
                            <div className='process-flow'>
                                <h2 className='case-title'>Design Process</h2>

                                <h3 className='section-subheader'>
                                    Story Board
                                </h3>
                                <p className='case-desc'>
                                    To start, we decided on what topics the
                                    magazine should cover, deciding on starting
                                    with covering the band members, then their
                                    history and albums, and ending with a brief
                                    on where they are now, both as a band and as
                                    people. We built a storyboard based on this
                                    order, connecting the pages and planning the
                                    flow to create a seamless, engaging
                                    walkthrough of their history.
                                </p>
                                <img
                                    src='/EMagazine/Storyboard.png'
                                    alt='An image with notes linked by arrows showing how the magazine flows between sections, from the homepage to the end.'
                                    className='userflow-img'
                                />
                            </div>
                            <div className='process-styles'>
                                <h3 className='section-subheader'>
                                    Style guide
                                </h3>
                                <p className='section-desc'>
                                    We wanted the overall feel of the magazine
                                    to match the aesthetic of the band, so we
                                    went for a grunge look with our styles and
                                    assets. We chose a monochromatic palette as
                                    a base for everything, adding hints of color
                                    referencing album art. We also went with a
                                    loud, sans serif font for our headers,
                                    wanting to match the aesthetic, but also
                                    have legibility.
                                </p>
                                <div className='styles case-styles'>
                                    <div className='palettes'>
                                        <div className='palette case-palette'>
                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#1A1A1A",
                                                }}>
                                                #1A1A
                                            </div>
                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#222526",
                                                }}>
                                                #222526
                                            </div>

                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#353A3E",
                                                }}>
                                                #353A3E
                                            </div>
                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#BFBFBF",
                                                }}>
                                                #BFBFBF
                                            </div>

                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#E0E0E0",
                                                }}>
                                                #E0E0E0
                                            </div>
                                        </div>
                                    </div>
                                    <div className='revitea-fonts '>
                                        <img
                                            className='revitea-font case-font'
                                            src='/EMagazine/Benniter.svg'
                                            alt='Benniter Trial Sans - Main font sample'
                                            loading='lazy'
                                            decoding='async'
                                        />

                                        <img
                                            className='revitea-font case-font case-support'
                                            src='/EMagazine/Noto.svg'
                                            alt='Noto Sans - body font sample'
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Iterations */}
                        <section
                            id='iterations'
                            className='case-dark'>
                            <div className='iteration-initial'>
                                <h2 className='case-title'>Iterations</h2>
                                <h3 className='section-subheader'>
                                    Initial Mock-ups
                                </h3>
                                <p className='case-desc'>
                                    It started with sketching rough drafts of
                                    what we wanted the screens to look like for
                                    each section. Once we landed on our ideas,
                                    we identified the assets we would need, then
                                    sourced the images needed and built them.
                                    For mock-ups, I built the band member pages,
                                    their future, and the ending screen, and
                                    drafted them in Photoshop.
                                </p>
                                <div className='band-mock'>
                                    <div className='mock-band-top'>
                                        <img
                                            className='mock-img'
                                            src='/EMagazine/bandMock.png'
                                            alt='Initial lo-fi mockup of the band homepage.'
                                            loading='lazy'
                                            decoding='async'
                                        />

                                        <img
                                            className='mock-img'
                                            src='/EMagazine/hayleyMock.png'
                                            alt="Mock-up of Hayley's page."
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                    <div className='mock-band-bottom'>
                                        <img
                                            className='mock-img'
                                            src='/EMagazine/taylorMock.png'
                                            alt="Mock-up of Taylor's page."
                                            loading='lazy'
                                            decoding='async'
                                        />

                                        <img
                                            className='mock-img'
                                            src='/EMagazine/zacMock.png'
                                            alt="Mock-up of Zac's page."
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='iteration-final'>
                                <h3 className='section-subheader'>
                                    Final Design
                                </h3>
                                <p className='case-desc'>
                                    With these mock-ups, we downloaded the built
                                    assets and images into our project folder.
                                    There were adjustments made as we developed
                                    our final version to have better cohesion
                                    within our site. With extra pops of color to
                                    match each person and the albums, the result
                                    was a detailed, engaging digital experience.
                                </p>
                                <div className='band-mock'>
                                    <div className='mock-band-top'>
                                        <img
                                            className='mock-img'
                                            src='/EMagazine/band.png'
                                            alt='Final version of the band homepage.'
                                            loading='lazy'
                                            decoding='async'
                                        />

                                        <img
                                            className='mock-img'
                                            src='/EMagazine/hayleyPage.png'
                                            alt="Final version of Hayley's page."
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                    <div className='mock-band-bottom'>
                                        <img
                                            className='mock-img'
                                            src='/EMagazine/music.png'
                                            alt='Album carousel on the homepage.'
                                            loading='lazy'
                                            decoding='async'
                                        />

                                        <img
                                            className='mock-img'
                                            src='/EMagazine/future.png'
                                            alt='The future page, talking about where they are now.'
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Development */}
                        <section
                            id='coding'
                            className='case-section'>
                            <div className='title-container'>
                                <h2 className='case-title'>Development</h2>
                                <CodeButton
                                    text='View source code'
                                    href='https://github.com/AlyssaHug/Paramore'
                                />
                            </div>
                            <div className='dev-interact'>
                                <h3 className='section-subheader'>Base Code</h3>
                                <p className='case-desc'>
                                    When developing the magazine, implementing
                                    the base content according to our style
                                    guide was our priority. We set-up all our
                                    page files and started by adding all
                                    necessary elements, then applying css styles
                                    both to universal elements and page-specific
                                    items to ensure consistency. Throughout the
                                    process, we sent videos and screenshots of
                                    our work to ensure decisions were made
                                    together.
                                </p>
                            </div>
                            <div className='dev-base'>
                                <h3 className='section-subheader'>
                                    Interactivity & Animation
                                </h3>
                                <p className='case-desc'>
                                    Once the content was structured and the
                                    pages were linked properly, we delved into
                                    our interactivity plans. We implemented a
                                    base with load-ins, hover states, and smooth
                                    scrolling, then moved focus to the fun
                                    stuff. We really wanted to ensure each page
                                    had a fun element for users, so we added
                                    interesting effects/hovers, and hid some
                                    confetti behind buttons.
                                </p>
                                <div className='showcase-images'>
                                    <video
                                        className='showcase-img'
                                        autoPlay
                                        muted
                                        loop
                                        controls>
                                        <source
                                            src='/EMagazine/confetti.mp4'
                                            type='video/mp4'></source>
                                    </video>
                                    <video
                                        className='showcase-img'
                                        autoPlay
                                        muted
                                        loop
                                        controls>
                                        <source
                                            src='/EMagazine/albums.mp4'
                                            type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </section>

                        {/* Reflection */}
                        <section
                            id='reflect'
                            className='case-section'>
                            <h2 className='case-title'>Reflection</h2>

                            <p className='case-desc'>
                                The result was a Paramore E-Magazine, different
                                from your typical information hub with
                                personalization to its topic and hidden
                                interactions. Through this journey, I learned
                                how to work well under the pressure of
                                deadlines, not letting it affect my quality of
                                work.
                                <br />
                                <br />
                                Through this project, I was reminded how great
                                design can come from close partnership rather
                                than a solo venture. Working in a two-person
                                team meant both taking on multiple roles, which
                                created a fast iteration cycle that required
                                constant compromise and check-in to ensure we
                                were on the same page. These experiences have
                                made me more adaptable and collaborative as a
                                designer.
                            </p>
                        </section>
                    </div>
                    {/* Check it out! */}
                    <section
                        id='test'
                        className='case-test case-desktop'>
                        <div className='test-text'>
                            <h2 className='case-title'>Check it out!</h2>
                            <h3 className='test-cta'>Wanna try it yourself?</h3>
                            <CodeButton
                                text='Visit the site!'
                                href='https://paramore-emagazine.vercel.app/'
                            />
                        </div>
                        <video
                            className='demo-desktop'
                            controls>
                            <source
                                src='/EMagazine/demo.mp4'
                                type='video/mp4'></source>
                        </video>
                    </section>
                </div>
            </div>
        </>
    );
}
