import "./Bandit.css";
import { useState, useEffect, useRef } from "react";

export default function Bandit() {
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
        <div className='project-case-page'>
            <img
                src='/Bandit/Hero.png'
                alt='Photo of a desktop with the board game on screen.'
                className='hero-image'
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
                                    href='#issue'
                                    className={`case-link ${activeId === "issue" ? "active" : ""}`}>
                                    The Issue
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
                                    href='#promotion'
                                    className={`case-link ${activeId === "promotion" ? "active" : ""}`}>
                                    Promotion
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
                                    href='#issue'
                                    className='link'>
                                    The Issue
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
                                    href='#promotion'
                                    className='link'>
                                    Promotion
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
                            <h1 className='project-title'>Bandit Breakout</h1>
                            <p className='case-summary'>
                                Online multiplayer games are very competitive
                                focused, with first person shooter games and
                                fast-paced racing, there’s little option for
                                something more laid back. The goal was to create
                                a digital board game for friends to play
                                casually or competitively, while engaging in
                                story and events. The result was Bandit
                                Breakout, an online game with a western theme
                                and hand-drawn graphics, with multiple endings
                                and routes that keep users coming back for more.
                            </p>
                            <div className='meta'>
                                <span className='role'>Role: </span>
                                <p>
                                    UI/UX Designer, Frontend Developer,
                                    Researcher
                                </p>
                            </div>
                        </div>
                        {/* My Role */}
                        <section
                            className='case-role'
                            id='role'>
                            <h2 className='case-title'>My Role</h2>
                            <p className='role-desc'>
                                For this project, I was a researcher and UI/UX
                                Designer, collecting data on our user base and
                                using it to inform our design decisions. As an
                                illustrator, I helped create the assets for the
                                items and backgrounds in the game, following the
                                direction of the lead illustrator. I also
                                iterated based on feedback from our users and
                                other designers, ensuring alignment with our
                                project. I also helped with our promotional
                                materials, being the main developer for our
                                landing page.
                            </p>
                        </section>
                    </header>

                    <div className='project-content case-content'>
                        {/* The Issue */}
                        <section
                            id='issue'
                            className='case-section'>
                            <h2 className='case-title'>The Issue</h2>
                            <p className='case-desc'>
                                There are many multiplayer online games out
                                there, but most are overly competitive and
                                restrictive, leaving few options for casual
                                gamers who enjoy story driven content. Online
                                board games are an option, but are often found
                                repetitive, and no longer enjoyable after a
                                couple playthroughs.
                            </p>
                            <div className='issue-stats'>
                                <div className='issue-stat left-stat'>
                                    <h2 className='stat-number'>75%</h2>
                                    <p className='stat-caption'>
                                        play board games online
                                    </p>
                                </div>
                                <div className='issue-stat right-stat'>
                                    <h2 className='stat-number'>67%</h2>
                                    <p className='stat-caption'>
                                        like having varying difficulty
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* The Idea */}
                        <section
                            id='idea'
                            className='case-section'>
                            <h2 className='case-title'>
                                The Idea - Bandit Breakout
                            </h2>
                            <p className='case-desc'>
                                Bandit breakout is an online board game built
                                for both casual and competitive play. With event
                                spaces, decision tiles, and multiple endings,
                                players can replay to discover it all. The game
                                is a western, animal-themed board with hand
                                drawn graphics, and item cards to give yourself
                                a boost, or stall others.
                            </p>
                            <img
                                src='/Bandit/Reference.png'
                                alt='Reference images of other online board/multiplayer games.'
                                className='casesection-bannerImg'
                            />
                        </section>
                        {/* Research */}
                        <section
                            id='research'
                            className='case-section'>
                            <div className='title-container'>
                                <h2 className='case-title'>
                                    Research Insights
                                </h2>
                                <a
                                    className='code-btn case-code-btn'
                                    target='_blank'
                                    href='https://docs.google.com/document/d/12Z3Hw660hhzNR4QW1Gg4uPothI71lgKRqduENTvWCV4/edit?usp=sharing'>
                                    View Report
                                </a>
                            </div>
                            <p className='case-desc'>
                                Through interviews with 12 participants, we
                                realized just how few options there were for
                                players. With 67% spending 12+ hours a week
                                playing games, and 75% like playing online board
                                games with friends.
                                <br />
                                <br />
                                67% prefer having the choice between casual or
                                competitive play, as long as the rules and
                                mechanics stay consistent, 50% say.
                                <br />
                                <br />
                                We also conducted secondary research, through
                                online forums and reddit posts, along with
                                investigating other games and their reviews.
                            </p>
                        </section>
                        {/* The Process */}
                        <section
                            id='process'
                            className='case-section'>
                            <div className='process-flow'>
                                <h2 className='case-title'>Design Process</h2>

                                <h3 className='section-subheader'>Ruleset</h3>
                                <p className='case-desc'>
                                    With our research, we planned how we wanted
                                    our game to play and the rules needed. I
                                    used these rules when designing the initial
                                    board to ensure they were applicable to the
                                    game. As we iterated, I adjusted our game
                                    board to match the changing rules and new
                                    actionable tiles.
                                </p>
                                <img
                                    src='/Bandit/rules.png'
                                    alt='The rules overlay listing the games health/combat rules on one sheet, and the board movement on the other.'
                                    className='userflow-img'
                                />
                            </div>
                            <div className='process-styles'>
                                <h3 className='section-subheader'>
                                    Style guide
                                </h3>
                                <p className='section-desc'>
                                    The theme for the game was western, so we
                                    went for rustic, yet bright visuals. The
                                    colors helped portray the theme in a
                                    stylistic way, further pushed by the hand
                                    drawn style that brought the game to life.
                                    The fonts were chosen to be readable, while
                                    also blending in with the game style.
                                </p>
                                <div className='styles case-styles'>
                                    <div className='palettes'>
                                        <div className='palette case-palette'>
                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#401911",
                                                }}>
                                                #401911
                                            </div>
                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#008F0E",
                                                }}>
                                                #008F0E
                                            </div>

                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#D75B1D",
                                                }}>
                                                #D75B1D
                                            </div>
                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#88D0E7",
                                                }}>
                                                #88D0E7
                                            </div>

                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#F0E5BC",
                                                }}>
                                                #F0E5BC
                                            </div>
                                        </div>
                                    </div>
                                    <div className='revitea-fonts '>
                                        <img
                                            className='revitea-font case-font'
                                            src='/Bandit/western.svg'
                                            alt='Western Bang Bang - Main font sample'
                                        />

                                        <img
                                            className='revitea-font case-font case-support'
                                            src='/Bandit/wellfleet.svg'
                                            alt='Wellfleet - body font sample'
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
                                <h3 className='section-subheader'>Lo-fi</h3>
                                <p className='case-desc'>
                                    Our initial game was made as a physical
                                    paper board, with cut-out item cards and
                                    character menus. This allowed us to ensure
                                    the game’s core functions and rules played
                                    well and would translate to digital.
                                </p>
                                <div className='lofi-comparison'>
                                    <div className='lofi-board'>
                                        <img
                                            className='lofi-bandit'
                                            src='/Bandit/initial.png'
                                            alt='Initial paper mock-up of the board'
                                        />

                                        <img
                                            className='lofi-bandit'
                                            src='/Bandit/midfi.png'
                                            alt='Digital iteration of the paper board with finalized tile colors'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='iteration-testing'>
                                <div className='title-container'>
                                    <h2 className='section-subheader'>
                                        User Testing
                                    </h2>
                                    <a
                                        className='code-btn case-code-btn'
                                        target='_blank'
                                        href='https://docs.google.com/document/d/1nTi6eHf8bLRyAQud3w3LcmAbzzMeTkNsXYO-bLaqMzA/edit?usp=sharing'>
                                        View Report
                                    </a>
                                </div>
                                <p className='case-desc'>
                                    With this version, we conducted user
                                    testing, making sure the direction we were
                                    going matched what our players were wanting.
                                    Through this, we identified issues in the
                                    tile designs and map routes.
                                </p>
                            </div>

                            <div className='iteration-final'>
                                <h3 className='section-subheader'>
                                    Final Version
                                </h3>
                                <p className='case-desc'>
                                    Our final version was built using the
                                    illustrations made, piecing them together in
                                    Figma to finalize the screen layouts. We
                                    implemented the feedback on the routes and
                                    game tiles to make them more clear, along
                                    with small changes for easier usability. The
                                    final design reflects our initial goal for
                                    the game, a stylistic and fun, yet easy to
                                    understand multiplayer game.
                                </p>
                                <img
                                    src='/Bandit/final.png'
                                    alt='Final version of the board with the background art and other assets.'
                                    className='bandit-final'
                                />
                            </div>
                        </section>

                        {/* Promotion */}
                        <section
                            id='promotion'
                            className='case-section'>
                            <h2 className='case-title'>Promotion</h2>
                            <div className='promotion-materials'>
                                <div className='title-container'>
                                    <h2 className='section-subheader'>
                                        Digital
                                    </h2>
                                    <a
                                        className='code-btn case-code-btn'
                                        target='_blank'
                                        href='https://bandit-breakout.vercel.app/'>
                                        Visit website
                                    </a>
                                </div>
                                <p className='case-desc'>
                                    To help promote the game, we developed a
                                    website to act as our game’s landing
                                    page/official site. I was in charge of
                                    developing the body content on the page,
                                    highlighting our game’s features and
                                    mechanics, as well as the team behind it.
                                </p>
                            </div>
                            <div className='promotion-showcase'>
                                <h3 className='section-subheader'>
                                    Project Showcase
                                </h3>
                                <p className='case-desc'>
                                    The project ended with showcasing the game
                                    alongside other projects in May 2025. With
                                    our promotional site and video, and our
                                    pitch presentation, Bandit Breakout came out
                                    on top!
                                </p>
                                <div className='showcase-images'>
                                    <img
                                        src='/Bandit/team.jpg'
                                        alt='The team after winning the presentation.'
                                        className='showcase-bandit'
                                    />
                                    <img
                                        src='/Bandit/group.jpg'
                                        alt='A photo of the team wit hsome of our fellow classmates and teachers that guides us through this project.'
                                        className='showcase-bandit'
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Reflection */}
                        <section
                            id='reflect'
                            className='case-section'>
                            <h2 className='case-title'>Reflection</h2>

                            <p className='case-desc'>
                                The result was Bandit breakout, more than just
                                another online board game, built to connect
                                friends through story and gameplay. Through this
                                journey, I learned how to prepare documents for
                                developers and how to best communicate features
                                to ensure the project's goal was achieved.
                                <br />
                                <br />
                                This project was my first time working in a
                                larger team, involving developer hand-off.
                                Through this, I learned how to organize assets
                                and clearly explain design choices, and how to
                                iterate based on development feasibility. This
                                project allowed me to work in an amazing team,
                                CommandZ, and this experience will forever stick
                                with me.
                            </p>
                        </section>
                    </div>
                    {/* Check it out! */}
                    <section
                        id='test'
                        className='case-test case-desktop'>
                        <div className='test-text'>
                            <h2 className='case-title'>Check it out!</h2>
                            <h3 className='test-cta'>Wanna learn more?</h3>
                            <a
                                className='case-code-btn code-btn'
                                href='https://bandit-breakout.vercel.app/'
                                target='_blank'>
                                Visit the site!
                            </a>
                        </div>
                        <video
                            className='demo-desktop'
                            controls>
                            <source
                                src='/Bandit/demo.mp4'
                                type='video/mp4'></source>
                        </video>
                    </section>
                </div>
            </div>
        </div>
    );
}
