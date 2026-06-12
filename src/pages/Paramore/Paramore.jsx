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
                        <div className="try-btn">

                            <CodeButton
                                text='Visit the site!'
                                href='https://paramore-emagazine.vercel.app/'
                            />
                            </div>
                    </header>

                    <div className='project-content case-content'>
                      <div className="case-dark">

                        {/* My Role */}
                        <section
                            className='case-section'
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
                      </div>
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
                                <div className='revitea-styles'>
                                    <div className='palettes'>
                                        <div className='palette'>
                                            <div
                                                className='case-swatch case-swatch-2'
                                                style={{
                                                    backgroundColor: "#1A1A1A",
                                                }}>
                                                #1A1A1A
                                            </div>
                                            <div
                                                className='case-swatch case-swatch-2'
                                                style={{
                                                    backgroundColor: "#222526",
                                                }}>
                                                #222526
                                            </div>

                                            <div
                                                className='case-swatch case-swatch-2'
                                                style={{
                                                    backgroundColor: "#353A3E",
                                                }}>
                                                #353A3E
                                            </div>
                                            <div
                                                className='case-swatch'
                                                style={{
                                                    backgroundColor: "#BFBFBF",
                                                }}>
                                                #BFBFBF
                                            </div>

                                            <div
                                                className='case-swatch'
                                                style={{
                                                    backgroundColor: "#E0E0E0",
                                                }}>
                                                #E0E0E0
                                            </div>
                                        </div>
                                    </div>
                                    <div className='revitea-fonts '>
                                        
                                        <svg className="revitea-font case-font" xmlns="http://www.w3.org/2000/svg" width="188" height="29" viewBox="0 0 188 29" fill="currentColor">
  <path d="M20.52 14.52C21.72 15.32 22.5333 16.3467 22.96 17.6C23.3867 18.8267 23.4933 20.0933 23.28 21.4C23.0933 22.7067 22.6133 23.9333 21.84 25.08C21.0667 26.2267 20.08 27.1067 18.88 27.72C18 28.04 17.1067 28.2533 16.2 28.36C15.32 28.44 14.4267 28.48 13.52 28.48C12.64 28.48 11.7333 28.4533 10.8 28.4C9.89333 28.3467 8.96 28.3467 8 28.4H1.6C1.22667 28.4 0.92 28.2533 0.68 27.96C0.466667 27.6667 0.36 27.32 0.36 26.92C0.306667 25.5867 0.28 24.3067 0.28 23.08C0.306667 21.8533 0.333333 20.6267 0.36 19.4C0.386667 18.1733 0.4 16.9467 0.4 15.72C0.426667 14.4667 0.413333 13.1733 0.36 11.84C0.36 11.2 0.346667 10.7067 0.32 10.36C0.293333 9.98667 0.266667 9.64 0.24 9.32C0.24 9 0.226667 8.66667 0.2 8.32C0.173333 7.94667 0.16 7.44 0.16 6.8C0.24 6.32 0.226667 5.72 0.12 5C0.04 4.28 0 3.58667 0 2.92C0 2.25333 0.0933333 1.69333 0.28 1.24C0.493333 0.760001 0.933333 0.546668 1.6 0.600002C2.69333 0.546668 3.70667 0.506667 4.64 0.480001C5.6 0.426667 6.53333 0.386666 7.44 0.36C8.34667 0.333334 9.26667 0.320001 10.2 0.320001C11.16 0.293334 12.1867 0.280001 13.28 0.280001C14.8 0.36 16.2667 0.68 17.68 1.24C19.12 1.8 20.2933 2.64 21.2 3.76C21.6 4.4 21.88 5.13333 22.04 5.96C22.2267 6.76 22.28 7.57333 22.2 8.4C22.12 9.22667 21.9067 10.0267 21.56 10.8C21.24 11.5467 20.7867 12.1867 20.2 12.72C19.9333 13.0133 19.84 13.3333 19.92 13.68C20 14 20.2 14.28 20.52 14.52ZM6.2 7.76C6.2 8.10667 6.18667 8.48 6.16 8.88C6.16 9.28 6.21333 9.65333 6.32 10C6.42667 10.32 6.58667 10.6 6.8 10.84C7.04 11.0533 7.4 11.16 7.88 11.16C8.54667 11.08 9.28 11.0933 10.08 11.2C10.88 11.3067 11.6667 11.36 12.44 11.36C13.2933 11.36 14.0267 11.1867 14.64 10.84C15.28 10.4933 15.6533 9.76 15.76 8.64C15.76 8.10667 15.6667 7.68 15.48 7.36C15.32 7.01333 15.0933 6.74667 14.8 6.56C14.5067 6.34667 14.1733 6.21333 13.8 6.16C13.4533 6.08 13.0933 6.04 12.72 6.04C12.1067 6.14667 11.4267 6.13333 10.68 6C9.96 5.86667 9.26667 5.8 8.6 5.8C7.98667 5.8 7.45333 5.93333 7 6.2C6.57333 6.44 6.30667 6.96 6.2 7.76ZM13.84 22.64C14.56 22.6933 15.16 22.5867 15.64 22.32C16.12 22.0533 16.48 21.7067 16.72 21.28C16.96 20.8267 17.08 20.3333 17.08 19.8C17.08 19.2667 16.96 18.7867 16.72 18.36C16.48 17.9067 16.12 17.5467 15.64 17.28C15.16 17.0133 14.56 16.92 13.84 17C13.0933 17 12.5067 17 12.08 17C11.6533 16.9733 11.2533 16.9467 10.88 16.92C10.5067 16.8933 10.0933 16.88 9.64 16.88C9.21333 16.8533 8.62667 16.84 7.88 16.84C7.4 16.84 7.02667 17.0267 6.76 17.4C6.52 17.7467 6.4 18.16 6.4 18.64C6.34667 19.04 6.29333 19.48 6.24 19.96C6.18667 20.4133 6.18667 20.8533 6.24 21.28C6.29333 21.68 6.44 22.04 6.68 22.36C6.92 22.6533 7.32 22.8267 7.88 22.88C8.62667 22.88 9.21333 22.8667 9.64 22.84C10.0933 22.8133 10.5067 22.7867 10.88 22.76C11.2533 22.7333 11.6533 22.7067 12.08 22.68C12.5067 22.6533 13.0933 22.64 13.84 22.64Z" fill="currentColor"/>
  <path d="M46.0844 0.600002C46.4577 0.600002 46.7777 0.706668 47.0444 0.92C47.311 1.10667 47.4444 1.4 47.4444 1.8C47.4444 2.14667 47.4444 2.42667 47.4444 2.64C47.471 2.82667 47.4844 3.01333 47.4844 3.2C47.4844 3.38667 47.4844 3.58667 47.4844 3.8C47.511 3.98667 47.5244 4.26667 47.5244 4.64C47.471 5.22667 47.2177 5.61333 46.7644 5.8C46.311 5.98667 45.7644 6.08 45.1244 6.08C44.7244 6.08 44.2977 6.05333 43.8444 6C43.391 5.94667 42.9377 5.90667 42.4844 5.88C42.0577 5.82667 41.6444 5.78667 41.2444 5.76C40.871 5.73333 40.5377 5.74667 40.2444 5.8H34.4444C33.9644 5.8 33.5644 6.01333 33.2444 6.44C32.9244 6.86667 32.7644 7.32 32.7644 7.8C32.711 8.2 32.671 8.61334 32.6444 9.04C32.6177 9.44 32.6444 9.82667 32.7244 10.2C32.8044 10.5467 32.9777 10.84 33.2444 11.08C33.511 11.2933 33.911 11.4133 34.4444 11.44C35.4577 11.4133 36.391 11.4 37.2444 11.4C38.1244 11.4 38.9777 11.4 39.8044 11.4C40.6577 11.4 41.5244 11.4133 42.4044 11.44C43.2844 11.44 44.2177 11.44 45.2044 11.44C45.6044 11.4667 45.911 11.6133 46.1244 11.88C46.3644 12.1467 46.4844 12.48 46.4844 12.88C46.4844 13.2267 46.471 13.52 46.4444 13.76C46.4444 13.9733 46.4444 14.1733 46.4444 14.36C46.4444 14.52 46.431 14.7067 46.4044 14.92C46.4044 15.1333 46.4044 15.4267 46.4044 15.8C46.4044 16.1733 46.2977 16.4933 46.0844 16.76C45.8977 17 45.6044 17.12 45.2044 17.12C44.271 17.0667 43.4044 17.0267 42.6044 17C41.8044 16.9733 41.0177 16.96 40.2444 16.96C39.311 16.96 38.391 16.9867 37.4844 17.04C36.5777 17.0667 35.5644 17.12 34.4444 17.2C33.8577 17.2533 33.431 17.4 33.1644 17.64C32.9244 17.88 32.7644 18.1733 32.6844 18.52C32.631 18.8667 32.631 19.2533 32.6844 19.68C32.7644 20.1067 32.8444 20.52 32.9244 20.92C32.9244 21.4 33.0577 21.7867 33.3244 22.08C33.591 22.3467 33.9644 22.48 34.4444 22.48C35.4577 22.5333 36.4044 22.5733 37.2844 22.6C38.1644 22.6267 39.031 22.64 39.8844 22.64C40.871 22.64 41.8577 22.6267 42.8444 22.6C43.831 22.5467 44.911 22.48 46.0844 22.4C46.511 22.3733 46.8177 22.52 47.0044 22.84C47.191 23.16 47.2977 23.56 47.3244 24.04C47.3777 24.52 47.3777 25.0267 47.3244 25.56C47.271 26.0667 47.2444 26.52 47.2444 26.92C47.2177 27.5333 46.9777 27.9467 46.5244 28.16C46.0977 28.3467 45.551 28.44 44.8844 28.44C44.4844 28.44 44.071 28.4133 43.6444 28.36C43.2177 28.3333 42.791 28.3067 42.3644 28.28C41.9377 28.2267 41.5244 28.2 41.1244 28.2C40.751 28.1733 40.4044 28.1867 40.0844 28.24C39.3377 28.24 38.7377 28.2533 38.2844 28.28C37.8577 28.3067 37.4577 28.3333 37.0844 28.36C36.711 28.36 36.311 28.3733 35.8844 28.4C35.4577 28.4267 34.871 28.44 34.1244 28.44C33.5377 28.3333 32.8044 28.3333 31.9244 28.44C31.0444 28.5733 30.191 28.64 29.3644 28.64C28.6444 28.64 28.0177 28.5333 27.4844 28.32C26.9777 28.08 26.6977 27.6133 26.6444 26.92C26.6977 25.9867 26.7244 25.12 26.7244 24.32C26.7244 23.4933 26.711 22.6933 26.6844 21.92C26.6844 21.12 26.6577 20.32 26.6044 19.52C26.5777 18.6933 26.5377 17.8133 26.4844 16.88C26.5377 15.9467 26.5777 15.08 26.6044 14.28C26.6577 13.4533 26.6977 12.64 26.7244 11.84C26.7777 11.04 26.8177 10.24 26.8444 9.44C26.8977 8.61334 26.9377 7.73333 26.9644 6.8C27.0444 6.4 27.0444 5.84 26.9644 5.12C26.911 4.4 26.8844 3.69333 26.8844 3C26.8844 2.28 26.9644 1.66667 27.1244 1.16C27.2844 0.653334 27.6177 0.426667 28.1244 0.480001C29.751 0.426667 31.311 0.386666 32.8044 0.36C34.3244 0.306667 35.8444 0.280001 37.3644 0.280001C38.8044 0.280001 40.231 0.306667 41.6444 0.36C43.0844 0.386666 44.5644 0.466667 46.0844 0.600002Z" fill="currentColor"/>
  <path d="M73.1012 0.0800014C73.5012 0.0800014 73.8079 0.253335 74.0212 0.600002C74.2612 0.920001 74.3812 1.26667 74.3812 1.64C74.3812 2.28 74.3946 2.78667 74.4212 3.16C74.4746 3.50667 74.5279 3.84 74.5813 4.16C74.6346 4.48 74.6746 4.82667 74.7012 5.2C74.7546 5.54667 74.7812 6.04 74.7812 6.68C74.7812 7.32 74.7679 7.82667 74.7412 8.2C74.7146 8.54667 74.6879 8.88 74.6612 9.2C74.6346 9.52 74.6079 9.86667 74.5813 10.24C74.5546 10.5867 74.5413 11.08 74.5413 11.72C74.5679 12.6533 74.5813 13.5333 74.5813 14.36C74.5813 15.16 74.5813 15.96 74.5813 16.76C74.5813 17.5333 74.5679 18.3333 74.5413 19.16C74.5413 19.96 74.5279 20.8267 74.5013 21.76C74.5013 22.4 74.4879 22.9067 74.4613 23.28C74.4613 23.6267 74.4613 23.96 74.4613 24.28C74.4613 24.6 74.4479 24.9467 74.4212 25.32C74.4212 25.6667 74.4212 26.16 74.4212 26.8C74.4212 27.2 74.3012 27.5467 74.0612 27.84C73.8212 28.1333 73.5012 28.28 73.1012 28.28C72.6746 28.28 72.3279 28.2933 72.0612 28.32C71.8212 28.32 71.5946 28.3333 71.3812 28.36C71.1679 28.3867 70.9279 28.4 70.6613 28.4C70.4213 28.4267 70.0746 28.44 69.6213 28.44C68.9013 28.3067 68.3146 28.04 67.8613 27.64C67.4346 27.24 67.0612 26.7733 66.7412 26.24C66.4212 25.7067 66.1146 25.1467 65.8213 24.56C65.5546 23.9733 65.2079 23.4267 64.7812 22.92C63.8479 21.3467 62.9813 19.7733 62.1813 18.2C61.4079 16.6267 60.5013 15.08 59.4613 13.56C59.1413 13.08 58.7279 12.84 58.2213 12.84C57.8479 12.84 57.5279 12.96 57.2612 13.2C56.9946 13.44 56.8613 13.7733 56.8613 14.2C56.8613 14.92 56.8613 15.5467 56.8613 16.08C56.8613 16.6133 56.8613 17.1333 56.8613 17.64C56.8879 18.1467 56.9012 18.6667 56.9012 19.2C56.9012 19.7333 56.9012 20.36 56.9012 21.08C56.8479 21.4267 56.8346 21.8533 56.8613 22.36C56.9146 22.84 56.9679 23.36 57.0213 23.92C57.1013 24.4533 57.1546 25 57.1813 25.56C57.2079 26.0933 57.1812 26.5733 57.1012 27C57.0479 27.4 56.9013 27.7333 56.6613 28C56.4213 28.2667 56.0612 28.3867 55.5812 28.36C55.1812 28.36 54.8613 28.36 54.6213 28.36C54.4079 28.3867 54.2079 28.4 54.0213 28.4C53.8346 28.4 53.6212 28.4 53.3812 28.4C53.1679 28.4267 52.8613 28.44 52.4613 28.44C51.7679 28.28 51.3146 27.9467 51.1012 27.44C50.9146 26.9333 50.8346 26.3467 50.8613 25.68C50.9146 25.0133 50.9946 24.3333 51.1012 23.64C51.2079 22.92 51.2213 22.2933 51.1413 21.76C51.1946 20.4267 51.2212 19.1467 51.2212 17.92C51.2212 16.6667 51.2079 15.44 51.1813 14.24C51.1546 13.0133 51.1146 11.7733 51.0612 10.52C51.0346 9.26667 51.0079 7.98667 50.9813 6.68C51.0613 6.17333 51.0479 5.56 50.9412 4.84C50.8346 4.12 50.7679 3.44 50.7412 2.8C50.7412 2.13333 50.8479 1.57333 51.0612 1.12C51.2746 0.64 51.7413 0.386666 52.4613 0.36C52.9146 0.440001 53.4346 0.466668 54.0213 0.440001C54.6079 0.413334 55.1946 0.413334 55.7812 0.440001C56.3679 0.466668 56.9146 0.546668 57.4212 0.680001C57.9279 0.786668 58.3413 1.01333 58.6613 1.36C59.8079 3.68 60.9679 5.97334 62.1413 8.24C63.3413 10.5067 64.6612 12.72 66.1012 14.88C66.4212 15.36 66.8346 15.6 67.3412 15.6C67.6612 15.6 67.9413 15.4933 68.1813 15.28C68.4479 15.04 68.5813 14.6933 68.5813 14.24C68.5013 12.1067 68.4346 10.0133 68.3812 7.96C68.3279 5.90667 68.3279 3.8 68.3812 1.64C68.3812 1.26667 68.5012 0.933334 68.7412 0.640001C68.9812 0.346667 69.3946 0.2 69.9812 0.2C70.3812 0.2 70.6879 0.2 70.9013 0.2C71.1413 0.173333 71.3546 0.16 71.5413 0.16C71.7279 0.133334 71.9279 0.120001 72.1413 0.120001C72.3813 0.0933345 72.7013 0.0800014 73.1012 0.0800014Z" fill="currentColor"/>
  <path d="M101.187 0.0800014C101.587 0.0800014 101.894 0.253335 102.107 0.600002C102.347 0.920001 102.467 1.26667 102.467 1.64C102.467 2.28 102.481 2.78667 102.507 3.16C102.561 3.50667 102.614 3.84 102.667 4.16C102.721 4.48 102.761 4.82667 102.787 5.2C102.841 5.54667 102.867 6.04 102.867 6.68C102.867 7.32 102.854 7.82667 102.827 8.2C102.801 8.54667 102.774 8.88 102.747 9.2C102.721 9.52 102.694 9.86667 102.667 10.24C102.641 10.5867 102.627 11.08 102.627 11.72C102.654 12.6533 102.667 13.5333 102.667 14.36C102.667 15.16 102.667 15.96 102.667 16.76C102.667 17.5333 102.654 18.3333 102.627 19.16C102.627 19.96 102.614 20.8267 102.587 21.76C102.587 22.4 102.574 22.9067 102.547 23.28C102.547 23.6267 102.547 23.96 102.547 24.28C102.547 24.6 102.534 24.9467 102.507 25.32C102.507 25.6667 102.507 26.16 102.507 26.8C102.507 27.2 102.387 27.5467 102.147 27.84C101.907 28.1333 101.587 28.28 101.187 28.28C100.761 28.28 100.414 28.2933 100.147 28.32C99.9072 28.32 99.6805 28.3333 99.4672 28.36C99.2539 28.3867 99.0139 28.4 98.7472 28.4C98.5072 28.4267 98.1605 28.44 97.7072 28.44C96.9872 28.3067 96.4005 28.04 95.9472 27.64C95.5205 27.24 95.1472 26.7733 94.8272 26.24C94.5072 25.7067 94.2005 25.1467 93.9072 24.56C93.6405 23.9733 93.2939 23.4267 92.8672 22.92C91.9339 21.3467 91.0672 19.7733 90.2672 18.2C89.4939 16.6267 88.5872 15.08 87.5472 13.56C87.2272 13.08 86.8139 12.84 86.3072 12.84C85.9339 12.84 85.6139 12.96 85.3472 13.2C85.0805 13.44 84.9472 13.7733 84.9472 14.2C84.9472 14.92 84.9472 15.5467 84.9472 16.08C84.9472 16.6133 84.9472 17.1333 84.9472 17.64C84.9739 18.1467 84.9872 18.6667 84.9872 19.2C84.9872 19.7333 84.9872 20.36 84.9872 21.08C84.9339 21.4267 84.9205 21.8533 84.9472 22.36C85.0005 22.84 85.0539 23.36 85.1072 23.92C85.1872 24.4533 85.2405 25 85.2672 25.56C85.2939 26.0933 85.2672 26.5733 85.1872 27C85.1339 27.4 84.9872 27.7333 84.7472 28C84.5072 28.2667 84.1472 28.3867 83.6672 28.36C83.2672 28.36 82.9472 28.36 82.7072 28.36C82.4939 28.3867 82.2939 28.4 82.1072 28.4C81.9205 28.4 81.7072 28.4 81.4672 28.4C81.2539 28.4267 80.9472 28.44 80.5472 28.44C79.8539 28.28 79.4005 27.9467 79.1872 27.44C79.0005 26.9333 78.9205 26.3467 78.9472 25.68C79.0005 25.0133 79.0805 24.3333 79.1872 23.64C79.2939 22.92 79.3072 22.2933 79.2272 21.76C79.2805 20.4267 79.3072 19.1467 79.3072 17.92C79.3072 16.6667 79.2939 15.44 79.2672 14.24C79.2405 13.0133 79.2005 11.7733 79.1472 10.52C79.1205 9.26667 79.0939 7.98667 79.0672 6.68C79.1472 6.17333 79.1339 5.56 79.0272 4.84C78.9205 4.12 78.8539 3.44 78.8272 2.8C78.8272 2.13333 78.9339 1.57333 79.1472 1.12C79.3605 0.64 79.8272 0.386666 80.5472 0.36C81.0005 0.440001 81.5205 0.466668 82.1072 0.440001C82.6939 0.413334 83.2805 0.413334 83.8672 0.440001C84.4539 0.466668 85.0005 0.546668 85.5072 0.680001C86.0139 0.786668 86.4272 1.01333 86.7472 1.36C87.8939 3.68 89.0539 5.97334 90.2272 8.24C91.4272 10.5067 92.7472 12.72 94.1872 14.88C94.5072 15.36 94.9205 15.6 95.4272 15.6C95.7472 15.6 96.0272 15.4933 96.2672 15.28C96.5339 15.04 96.6672 14.6933 96.6672 14.24C96.5872 12.1067 96.5205 10.0133 96.4672 7.96C96.4139 5.90667 96.4139 3.8 96.4672 1.64C96.4672 1.26667 96.5872 0.933334 96.8272 0.640001C97.0672 0.346667 97.4805 0.2 98.0672 0.2C98.4672 0.2 98.7739 0.2 98.9872 0.2C99.2272 0.173333 99.4405 0.16 99.6272 0.16C99.8139 0.133334 100.014 0.120001 100.227 0.120001C100.467 0.0933345 100.787 0.0800014 101.187 0.0800014Z" fill="currentColor"/>
  <path d="M111.633 0.4C112.326 0.4 112.766 0.64 112.953 1.12C113.14 1.6 113.22 2.17333 113.193 2.84C113.166 3.50667 113.1 4.2 112.993 4.92C112.886 5.61333 112.873 6.2 112.953 6.68C113.14 10.12 113.18 13.4667 113.073 16.72C112.993 19.9733 112.94 23.3333 112.913 26.8C112.913 27.2 112.793 27.5733 112.553 27.92C112.34 28.24 112.033 28.4 111.633 28.4C111.233 28.4 110.913 28.3867 110.673 28.36C110.46 28.36 110.246 28.36 110.033 28.36C109.846 28.3333 109.633 28.32 109.393 28.32C109.18 28.2933 108.873 28.28 108.473 28.28C107.886 28.28 107.486 28.0267 107.273 27.52C107.086 27.0133 106.98 26.4133 106.953 25.72C106.953 25 106.98 24.28 107.033 23.56C107.113 22.8133 107.113 22.2133 107.033 21.76C107.033 21.12 107.02 20.6267 106.993 20.28C106.993 19.9067 106.993 19.56 106.993 19.24C106.993 18.92 106.98 18.5867 106.953 18.24C106.953 17.8667 106.953 17.36 106.953 16.72C106.953 15.7867 106.953 14.92 106.953 14.12C106.953 13.2933 106.953 12.4933 106.953 11.72C106.98 10.92 107.006 10.12 107.033 9.32C107.086 8.49333 107.126 7.61333 107.153 6.68C107.206 5.74667 107.206 4.94667 107.153 4.28C107.1 3.58667 107.06 3.01333 107.033 2.56C107.006 2.08 107.02 1.70667 107.073 1.44C107.153 1.14667 107.353 0.920001 107.673 0.76C107.993 0.6 108.46 0.506667 109.073 0.480001C109.713 0.426667 110.566 0.4 111.633 0.4Z" fill="currentColor"/>
  <path d="M136.667 0C137.2 0.106667 137.56 0.333334 137.747 0.680001C137.933 1 138.04 1.38667 138.067 1.84C138.093 2.26667 138.08 2.72 138.027 3.2C138 3.65333 138 4.08 138.027 4.48C137.973 5.2 137.707 5.68 137.227 5.92C136.773 6.13333 136.227 6.24 135.587 6.24C134.92 6.24 134.227 6.2 133.507 6.12C132.787 6.01333 132.16 6 131.627 6.08C130.693 6.16 130.08 6.44 129.787 6.92C129.493 7.37333 129.347 7.92 129.347 8.56C129.373 9.2 129.453 9.88 129.587 10.6C129.72 11.32 129.76 11.9867 129.707 12.6C129.707 13.1867 129.707 13.6533 129.707 14C129.733 14.3467 129.76 14.6667 129.787 14.96C129.813 15.2533 129.827 15.5733 129.827 15.92C129.853 16.2667 129.867 16.7333 129.867 17.32C129.787 18.2 129.72 19.0267 129.667 19.8C129.64 20.5733 129.613 21.3333 129.587 22.08C129.587 22.8 129.587 23.5467 129.587 24.32C129.613 25.0933 129.653 25.92 129.707 26.8C129.707 27.2 129.56 27.5733 129.267 27.92C128.973 28.2667 128.64 28.44 128.267 28.44C127.973 28.44 127.72 28.4267 127.507 28.4C127.32 28.4 127.147 28.3867 126.987 28.36L126.387 28.32C126.227 28.2933 126.04 28.28 125.827 28.28C125.64 28.2533 125.4 28.24 125.107 28.24C124.547 28.1067 124.187 27.8133 124.027 27.36C123.867 26.88 123.8 26.3467 123.827 25.76C123.853 25.1467 123.893 24.52 123.947 23.88C124.027 23.2133 124.027 22.6133 123.947 22.08C123.947 21.4933 123.933 21.0267 123.907 20.68C123.907 20.3333 123.907 20.0133 123.907 19.72C123.907 19.4267 123.893 19.1067 123.867 18.76C123.867 18.3867 123.867 17.9067 123.867 17.32C123.893 16.44 123.907 15.6267 123.907 14.88C123.907 14.1067 123.88 13.3467 123.827 12.6C123.8 11.8533 123.76 11.1067 123.707 10.36C123.653 9.58667 123.587 8.76 123.507 7.88C123.507 7.34667 123.347 6.93333 123.027 6.64C122.707 6.34667 122.28 6.2 121.747 6.2C121.107 6.2 120.6 6.18667 120.227 6.16C119.88 6.10667 119.547 6.06667 119.227 6.04C118.907 5.98667 118.56 5.94667 118.187 5.92C117.84 5.89333 117.347 5.88 116.707 5.88C116.333 5.88 116.04 5.74667 115.827 5.48C115.613 5.21333 115.507 4.88 115.507 4.48C115.56 4.10667 115.547 3.69334 115.467 3.24C115.413 2.76 115.387 2.32 115.387 1.92C115.413 1.49333 115.507 1.12 115.667 0.800002C115.853 0.453335 116.2 0.240001 116.707 0.16C117.427 0.106668 118.133 0.0800014 118.827 0.0800014C119.52 0.053335 120.213 0.0400019 120.907 0.0400019C122.667 0.0400019 124.387 0.0800014 126.067 0.16C127.747 0.213335 129.453 0.240002 131.187 0.240002C132.093 0.240002 133 0.226668 133.907 0.2C134.813 0.173333 135.733 0.106667 136.667 0Z" fill="currentColor"/>
  <path d="M159.952 0.600002C160.325 0.600002 160.645 0.706668 160.912 0.92C161.178 1.10667 161.312 1.4 161.312 1.8C161.312 2.14667 161.312 2.42667 161.312 2.64C161.338 2.82667 161.352 3.01333 161.352 3.2C161.352 3.38667 161.352 3.58667 161.352 3.8C161.378 3.98667 161.392 4.26667 161.392 4.64C161.338 5.22667 161.085 5.61333 160.632 5.8C160.178 5.98667 159.632 6.08 158.992 6.08C158.592 6.08 158.165 6.05333 157.712 6C157.258 5.94667 156.805 5.90667 156.352 5.88C155.925 5.82667 155.512 5.78667 155.112 5.76C154.738 5.73333 154.405 5.74667 154.112 5.8H148.312C147.832 5.8 147.432 6.01333 147.112 6.44C146.792 6.86667 146.632 7.32 146.632 7.8C146.578 8.2 146.538 8.61334 146.512 9.04C146.485 9.44 146.512 9.82667 146.592 10.2C146.672 10.5467 146.845 10.84 147.112 11.08C147.378 11.2933 147.778 11.4133 148.312 11.44C149.325 11.4133 150.258 11.4 151.112 11.4C151.992 11.4 152.845 11.4 153.672 11.4C154.525 11.4 155.392 11.4133 156.272 11.44C157.152 11.44 158.085 11.44 159.072 11.44C159.472 11.4667 159.778 11.6133 159.992 11.88C160.232 12.1467 160.352 12.48 160.352 12.88C160.352 13.2267 160.338 13.52 160.312 13.76C160.312 13.9733 160.312 14.1733 160.312 14.36C160.312 14.52 160.298 14.7067 160.272 14.92C160.272 15.1333 160.272 15.4267 160.272 15.8C160.272 16.1733 160.165 16.4933 159.952 16.76C159.765 17 159.472 17.12 159.072 17.12C158.138 17.0667 157.272 17.0267 156.472 17C155.672 16.9733 154.885 16.96 154.112 16.96C153.178 16.96 152.258 16.9867 151.352 17.04C150.445 17.0667 149.432 17.12 148.312 17.2C147.725 17.2533 147.298 17.4 147.032 17.64C146.792 17.88 146.632 18.1733 146.552 18.52C146.498 18.8667 146.498 19.2533 146.552 19.68C146.632 20.1067 146.712 20.52 146.792 20.92C146.792 21.4 146.925 21.7867 147.192 22.08C147.458 22.3467 147.832 22.48 148.312 22.48C149.325 22.5333 150.272 22.5733 151.152 22.6C152.032 22.6267 152.898 22.64 153.752 22.64C154.738 22.64 155.725 22.6267 156.712 22.6C157.698 22.5467 158.778 22.48 159.952 22.4C160.378 22.3733 160.685 22.52 160.872 22.84C161.058 23.16 161.165 23.56 161.192 24.04C161.245 24.52 161.245 25.0267 161.192 25.56C161.138 26.0667 161.112 26.52 161.112 26.92C161.085 27.5333 160.845 27.9467 160.392 28.16C159.965 28.3467 159.418 28.44 158.752 28.44C158.352 28.44 157.938 28.4133 157.512 28.36C157.085 28.3333 156.658 28.3067 156.232 28.28C155.805 28.2267 155.392 28.2 154.992 28.2C154.618 28.1733 154.272 28.1867 153.952 28.24C153.205 28.24 152.605 28.2533 152.152 28.28C151.725 28.3067 151.325 28.3333 150.952 28.36C150.578 28.36 150.178 28.3733 149.752 28.4C149.325 28.4267 148.738 28.44 147.992 28.44C147.405 28.3333 146.672 28.3333 145.792 28.44C144.912 28.5733 144.058 28.64 143.232 28.64C142.512 28.64 141.885 28.5333 141.352 28.32C140.845 28.08 140.565 27.6133 140.512 26.92C140.565 25.9867 140.592 25.12 140.592 24.32C140.592 23.4933 140.578 22.6933 140.552 21.92C140.552 21.12 140.525 20.32 140.472 19.52C140.445 18.6933 140.405 17.8133 140.352 16.88C140.405 15.9467 140.445 15.08 140.472 14.28C140.525 13.4533 140.565 12.64 140.592 11.84C140.645 11.04 140.685 10.24 140.712 9.44C140.765 8.61334 140.805 7.73333 140.832 6.8C140.912 6.4 140.912 5.84 140.832 5.12C140.778 4.4 140.752 3.69333 140.752 3C140.752 2.28 140.832 1.66667 140.992 1.16C141.152 0.653334 141.485 0.426667 141.992 0.480001C143.618 0.426667 145.178 0.386666 146.672 0.36C148.192 0.306667 149.712 0.280001 151.232 0.280001C152.672 0.280001 154.098 0.306667 155.512 0.36C156.952 0.386666 158.432 0.466667 159.952 0.600002Z" fill="currentColor"/>
  <path d="M187.768 27.04C187.875 27.3333 187.862 27.5733 187.728 27.76C187.622 27.9467 187.435 28.0933 187.168 28.2C186.902 28.3067 186.582 28.3733 186.208 28.4C185.862 28.4533 185.502 28.48 185.128 28.48C184.648 28.48 184.182 28.4667 183.728 28.44C183.302 28.4133 182.955 28.3867 182.688 28.36C181.995 28.3067 181.422 28.0933 180.968 27.72C180.515 27.3467 180.115 26.8933 179.768 26.36C179.448 25.8267 179.142 25.2667 178.848 24.68C178.555 24.0667 178.208 23.52 177.808 23.04C177.408 22.4533 177.062 21.8267 176.768 21.16C176.502 20.4933 176.195 19.8667 175.848 19.28C175.528 18.6933 175.115 18.2133 174.608 17.84C174.102 17.44 173.408 17.2267 172.528 17.2C171.915 17.2267 171.475 17.4533 171.208 17.88C170.968 18.28 170.822 18.7733 170.768 19.36C170.715 19.9467 170.702 20.5733 170.728 21.24C170.782 21.88 170.782 22.4667 170.728 23V26.96C170.675 27.6 170.462 28.0267 170.088 28.24C169.715 28.4267 169.275 28.52 168.768 28.52C168.315 28.52 167.862 28.48 167.408 28.4C166.955 28.3467 166.542 28.3333 166.168 28.36C165.768 28.36 165.408 28.2267 165.088 27.96C164.795 27.6667 164.648 27.3333 164.648 26.96C164.728 26 164.768 25.12 164.768 24.32C164.795 23.4933 164.795 22.6933 164.768 21.92C164.768 21.1467 164.755 20.36 164.728 19.56C164.702 18.7333 164.688 17.84 164.688 16.88C164.688 15.9467 164.688 15.08 164.688 14.28C164.715 13.4533 164.728 12.6533 164.728 11.88C164.755 11.08 164.755 10.28 164.728 9.48C164.728 8.65333 164.702 7.77333 164.648 6.84C164.648 5.48 164.635 4.38667 164.608 3.56C164.608 2.73333 164.648 2.10667 164.728 1.68C164.835 1.22667 165.022 0.933335 165.288 0.800002C165.582 0.640001 166.008 0.546667 166.568 0.52C167.128 0.493334 167.862 0.480001 168.768 0.480001C169.675 0.480001 170.822 0.413334 172.208 0.280001C173.328 0.253335 174.475 0.240002 175.648 0.240002C176.822 0.240002 177.955 0.306668 179.048 0.440001C180.168 0.573335 181.208 0.800001 182.168 1.12C183.155 1.44 184.008 1.92 184.728 2.56C185.448 3.2 186.022 4.02667 186.448 5.04C186.875 6.05333 187.075 7.30667 187.048 8.8C187.075 10 186.928 11.0133 186.608 11.84C186.315 12.64 185.928 13.32 185.448 13.88C184.995 14.44 184.515 14.9067 184.008 15.28C183.502 15.6533 183.062 16 182.688 16.32C182.342 16.64 182.102 16.9867 181.968 17.36C181.835 17.7067 181.928 18.1333 182.248 18.64C182.595 19.1733 182.848 19.6 183.008 19.92C183.195 20.24 183.355 20.5467 183.488 20.84C183.648 21.1067 183.808 21.4 183.968 21.72C184.155 22.04 184.422 22.4667 184.768 23C185.115 23.5333 185.395 23.9467 185.608 24.24C185.848 24.5067 186.062 24.76 186.248 25C186.462 25.24 186.675 25.5067 186.888 25.8C187.128 26.0933 187.422 26.5067 187.768 27.04Z" fill="currentColor"/>
</svg>

                                        <svg className="revitea-font case-font" xmlns="http://www.w3.org/2000/svg" width="169" height="30" viewBox="0 0 169 30" fill="currentColor">
  <path d="M20.56 28.96H16.4L3.16 5.4H3C3.02667 5.90667 3.05333 6.44 3.08 7C3.13333 7.56 3.16 8.14667 3.16 8.76C3.18667 9.34667 3.21333 9.96 3.24 10.6C3.26667 11.2133 3.28 11.8267 3.28 12.44V28.96H0V0.4H4.12L17.36 23.76H17.52C17.4933 23.36 17.4667 22.88 17.44 22.32C17.4133 21.76 17.3867 21.1733 17.36 20.56C17.3333 19.92 17.3067 19.28 17.28 18.64C17.28 18 17.28 17.4133 17.28 16.88V0.4H20.56V28.96Z" fill="currentColor"/>
  <path d="M43.9772 18.2C43.9772 19.96 43.7772 21.52 43.3772 22.88C42.9772 24.24 42.3905 25.4133 41.6172 26.4C40.8439 27.36 39.8972 28.0933 38.7772 28.6C37.6572 29.1067 36.3905 29.36 34.9772 29.36C33.6439 29.36 32.4305 29.1067 31.3372 28.6C30.2439 28.0933 29.3105 27.36 28.5372 26.4C27.7639 25.44 27.1639 24.28 26.7372 22.92C26.3105 21.5333 26.0972 19.96 26.0972 18.2C26.0972 15.8267 26.4439 13.8267 27.1372 12.2C27.8572 10.5467 28.8839 9.29333 30.2172 8.44C31.5505 7.56 33.1639 7.12 35.0572 7.12C36.8439 7.12 38.4039 7.54667 39.7372 8.4C41.0705 9.25333 42.1105 10.5067 42.8572 12.16C43.6039 13.7867 43.9772 15.8 43.9772 18.2ZM29.6172 18.2C29.6172 19.9333 29.8039 21.4267 30.1772 22.68C30.5772 23.9067 31.1772 24.8533 31.9772 25.52C32.7772 26.16 33.8039 26.48 35.0572 26.48C36.2839 26.48 37.2972 26.16 38.0972 25.52C38.8972 24.8533 39.4839 23.9067 39.8572 22.68C40.2572 21.4267 40.4572 19.9333 40.4572 18.2C40.4572 16.44 40.2572 14.96 39.8572 13.76C39.4839 12.5333 38.8972 11.6133 38.0972 11C37.2972 10.36 36.2705 10.04 35.0172 10.04C33.1239 10.04 31.7505 10.7467 30.8972 12.16C30.0439 13.5733 29.6172 15.5867 29.6172 18.2Z" fill="currentColor"/>
  <path d="M55.4931 26.48C55.9731 26.48 56.4398 26.44 56.8931 26.36C57.3731 26.2533 57.7865 26.1467 58.1331 26.04V28.72C57.7331 28.9067 57.2265 29.0533 56.6131 29.16C55.9998 29.2933 55.3731 29.36 54.7331 29.36C53.6931 29.36 52.7598 29.16 51.9331 28.76C51.1065 28.36 50.4531 27.7067 49.9731 26.8C49.4931 25.8667 49.2531 24.6133 49.2531 23.04V10.24H46.5731V8.52L49.3331 7.32L50.5331 2.6H52.6531V7.52H57.8931V10.24H52.6531V22.84C52.6531 24.0667 52.8931 24.9867 53.3731 25.6C53.8798 26.1867 54.5865 26.48 55.4931 26.48Z" fill="currentColor"/>
  <path d="M78.7819 18.2C78.7819 19.96 78.5819 21.52 78.1819 22.88C77.7819 24.24 77.1952 25.4133 76.4219 26.4C75.6485 27.36 74.7019 28.0933 73.5819 28.6C72.4619 29.1067 71.1952 29.36 69.7819 29.36C68.4485 29.36 67.2352 29.1067 66.1419 28.6C65.0485 28.0933 64.1152 27.36 63.3419 26.4C62.5685 25.44 61.9685 24.28 61.5419 22.92C61.1152 21.5333 60.9019 19.96 60.9019 18.2C60.9019 15.8267 61.2485 13.8267 61.9419 12.2C62.6619 10.5467 63.6885 9.29333 65.0219 8.44C66.3552 7.56 67.9685 7.12 69.8619 7.12C71.6485 7.12 73.2085 7.54667 74.5419 8.4C75.8752 9.25333 76.9152 10.5067 77.6619 12.16C78.4085 13.7867 78.7819 15.8 78.7819 18.2ZM64.4219 18.2C64.4219 19.9333 64.6085 21.4267 64.9819 22.68C65.3819 23.9067 65.9819 24.8533 66.7819 25.52C67.5819 26.16 68.6085 26.48 69.8619 26.48C71.0885 26.48 72.1019 26.16 72.9019 25.52C73.7019 24.8533 74.2885 23.9067 74.6619 22.68C75.0619 21.4267 75.2619 19.9333 75.2619 18.2C75.2619 16.44 75.0619 14.96 74.6619 13.76C74.2885 12.5333 73.7019 11.6133 72.9019 11C72.1019 10.36 71.0752 10.04 69.8219 10.04C67.9285 10.04 66.5552 10.7467 65.7019 12.16C64.8485 13.5733 64.4219 15.5867 64.4219 18.2Z" fill="currentColor"/>
  <path d="M108.274 21.24C108.274 22.92 107.9 24.36 107.154 25.56C106.407 26.76 105.34 27.6933 103.954 28.36C102.567 29.0267 100.94 29.36 99.0738 29.36C98.1138 29.36 97.1938 29.3067 96.3138 29.2C95.4604 29.0933 94.6604 28.9467 93.9137 28.76C93.1937 28.5733 92.5271 28.3333 91.9137 28.04V24.6C92.8737 25.0533 93.9938 25.44 95.2738 25.76C96.5538 26.08 97.8337 26.24 99.1137 26.24C100.34 26.24 101.367 26.04 102.194 25.64C103.047 25.24 103.687 24.6933 104.114 24C104.54 23.28 104.754 22.4667 104.754 21.56C104.754 20.6267 104.58 19.84 104.234 19.2C103.887 18.56 103.287 17.9733 102.434 17.44C101.58 16.9067 100.407 16.3333 98.9137 15.72C97.8204 15.2667 96.8471 14.7867 95.9938 14.28C95.1671 13.7733 94.4737 13.2 93.9137 12.56C93.3537 11.8933 92.9271 11.1467 92.6338 10.32C92.3671 9.46667 92.2337 8.48 92.2337 7.36C92.2071 5.86667 92.5538 4.57333 93.2738 3.48C93.9938 2.36 94.9938 1.50667 96.2738 0.92C97.5538 0.306667 99.0204 0 100.674 0C102.087 0 103.38 0.146666 104.554 0.439999C105.754 0.733333 106.82 1.09333 107.754 1.52L106.674 4.6C105.74 4.17333 104.767 3.82667 103.754 3.56C102.74 3.29333 101.7 3.16 100.634 3.16C99.5938 3.16 98.7004 3.33333 97.9538 3.68C97.2338 4.02667 96.6871 4.52 96.3138 5.16C95.9671 5.77333 95.7937 6.49333 95.7937 7.32C95.7937 8.30667 95.9671 9.12 96.3138 9.76C96.6604 10.3733 97.2338 10.9333 98.0338 11.44C98.8604 11.9467 99.9671 12.4933 101.354 13.08C102.874 13.72 104.14 14.4133 105.154 15.16C106.194 15.88 106.967 16.7333 107.474 17.72C108.007 18.68 108.274 19.8533 108.274 21.24Z" fill="currentColor"/>
  <path d="M120.475 7.12C122.848 7.12 124.581 7.72 125.675 8.92C126.795 10.12 127.355 11.9467 127.355 14.4V28.96H124.835L124.235 25.96H124.115C123.581 26.7067 123.021 27.3467 122.435 27.88C121.848 28.3867 121.168 28.76 120.395 29C119.648 29.24 118.768 29.36 117.755 29.36C116.528 29.36 115.461 29.1067 114.555 28.6C113.648 28.0933 112.941 27.36 112.435 26.4C111.955 25.44 111.715 24.3067 111.715 23C111.715 20.8667 112.461 19.2133 113.955 18.04C115.475 16.8667 117.755 16.2267 120.795 16.12L123.995 16V14.68C123.995 12.9467 123.661 11.72 122.995 11C122.355 10.28 121.408 9.92 120.155 9.92C119.221 9.92 118.301 10.0667 117.395 10.36C116.515 10.6533 115.661 11.0133 114.835 11.44L113.755 8.88C114.661 8.34667 115.688 7.92 116.835 7.6C118.008 7.28 119.221 7.12 120.475 7.12ZM121.275 18.56C119.061 18.64 117.501 19.0533 116.595 19.8C115.688 20.5467 115.235 21.6133 115.235 23C115.235 24.2267 115.541 25.1333 116.155 25.72C116.795 26.3067 117.635 26.6 118.675 26.6C120.221 26.6 121.488 26.08 122.475 25.04C123.488 24 123.995 22.4667 123.995 20.44V18.44L121.275 18.56Z" fill="currentColor"/>
  <path d="M142.867 7.12C145.134 7.12 146.841 7.73333 147.987 8.96C149.134 10.1867 149.707 12.1333 149.707 14.8V28.96H146.307V15.16C146.307 13.4533 145.987 12.1733 145.347 11.32C144.707 10.4667 143.681 10.04 142.267 10.04C140.267 10.04 138.867 10.6933 138.067 12C137.267 13.28 136.867 15.2267 136.867 17.84V28.96H133.467V7.52H136.187L136.667 10.44H136.867C137.294 9.69333 137.814 9.08 138.427 8.6C139.041 8.09333 139.734 7.72 140.507 7.48C141.281 7.24 142.067 7.12 142.867 7.12Z" fill="currentColor"/>
  <path d="M168.171 23.08C168.171 24.44 167.864 25.5867 167.251 26.52C166.638 27.4533 165.758 28.16 164.611 28.64C163.491 29.12 162.131 29.36 160.531 29.36C159.224 29.36 158.078 29.24 157.091 29C156.104 28.76 155.238 28.44 154.491 28.04V24.8C155.238 25.2533 156.144 25.6533 157.211 26C158.304 26.32 159.411 26.48 160.531 26.48C162.024 26.48 163.118 26.2 163.811 25.64C164.504 25.08 164.851 24.32 164.851 23.36C164.851 22.8 164.718 22.3067 164.451 21.88C164.184 21.4533 163.718 21.04 163.051 20.64C162.411 20.2133 161.504 19.7467 160.331 19.24C159.131 18.68 158.091 18.1333 157.211 17.6C156.331 17.04 155.651 16.3867 155.171 15.64C154.691 14.8667 154.451 13.9067 154.451 12.76C154.451 11 155.118 9.62667 156.451 8.64C157.811 7.62667 159.584 7.12 161.771 7.12C162.944 7.12 164.024 7.24 165.011 7.48C166.024 7.72 166.984 8.06667 167.891 8.52L166.691 11.24C166.184 10.9733 165.651 10.7467 165.091 10.56C164.531 10.3733 163.958 10.2267 163.371 10.12C162.811 10.0133 162.224 9.96 161.611 9.96C160.384 9.96 159.424 10.2 158.731 10.68C158.064 11.16 157.731 11.8 157.731 12.6C157.731 13.1867 157.878 13.6933 158.171 14.12C158.491 14.52 158.998 14.92 159.691 15.32C160.384 15.6933 161.318 16.1467 162.491 16.68C163.664 17.2133 164.678 17.76 165.531 18.32C166.384 18.8533 167.038 19.5067 167.491 20.28C167.944 21.0267 168.171 21.96 168.171 23.08Z" fill="currentColor"/>
</svg>
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
                        className='case-test case-desktop case-dark'>
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
                            autoPlay
                            muted
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
