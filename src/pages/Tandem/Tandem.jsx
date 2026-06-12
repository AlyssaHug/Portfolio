import "./Tandem.css";
import { useState, useEffect, useRef } from "react";
import { CodeButton } from "../../components/Button/Button";

export default function Tandem() {
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
                src='/Tandem/Hero.png'
                alt='Photo with two phones with different screens from the Tandem app. One has the schedule homepage, and the other has the AI upload analszing screen.'
                className='hero-image'
                loading='eager'
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
                                    href='#coding'
                                    className={`case-link ${activeId === "coding" ? "active" : ""}`}>
                                    Development
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
                                    href='#coding'
                                    className='link'>
                                    Development
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
                            <h1 className='project-title'>Tandem</h1>
                            <p className='case-summary'>
                                Finding childcare can be a struggle, especially
                                as a tradesworker with odd hours or scheduled
                                weekends. The goal was to create an app not only
                                helping parents find childcare that matches
                                their work schedule, but provide budget friendly
                                options that encourage community. The result was
                                Tandem, a scheduling app that helps match you
                                with nannies, allowing easier availability for
                                odd shifts, and nanny sharing so parents can
                                split the cost of care.
                            </p>
                            <div className='meta'>
                                <span className='role'>Role: </span>
                                <p>
                                    UI/UX Designer, Frontend Developer,
                                    Researcher
                                </p>
                            </div>
                        </div>
                        
                    </header>

                    <div className='project-content case-content'>
                    <div className="case-dark">

                        {/* My Role */}
                        <section
                            className='case-role'
                            id='role'>
                            <h2 className='case-title'>My Role</h2>
                            <p className='role-desc'>
                                For this project, I was a UI/UX Designer and
                                researcher, collecting data on our target
                                audience and ensuring we used it to inform our
                                design decisions. As a designer, along with
                                working on the app, I also later made
                                promotional material in the form of business
                                cards,matching our apps’ branding, for our app
                                showcase. Once the app design was finalized, I
                                transitioned to one of the frontend developers,
                                coding the ID scan onboarding process along with
                                reviewing and merging our onboarding system with
                                our profile.
                            </p>
                        </section>
                        {/* The Issue */}
                        <section
                            id='issue'
                            className='case-role'>
                            <h2 className='case-title'>The Issue</h2>
                            <p className='case-desc'>
                                Daycares can be difficult to get into, with long
                                waitlists and lack of flexible hours, which
                                makes it hard for tradesparents to find
                                childcare. Many are faced with the options to
                                either call into work if their childcare falls
                                through, or become a stay-at-home parent; which
                                many can’t afford to do.
                            </p>
                            <div className='issue-stats'>
                                <div className='issue-stat left-stat'>
                                    <h2 className='stat-number'>63%</h2>
                                    <p className='stat-caption'>
                                        tradeswomen identify as parents
                                    </p>
                                </div>
                                <div className='issue-stat right-stat'>
                                    <h2 className='stat-number'>100%</h2>
                                    <p className='stat-caption'>
                                        struggle with childcare
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                        {/* The Idea */}
                        <section
                            id='idea'
                            className='case-section'>
                            <h2 className='case-title'>The Idea - Tandem</h2>
                            <p className='case-desc'>
                                Tandem is an app dedicated to helping parents
                                find flexible, affordable childcare options.
                                With AI schedule uploading, the app recommends
                                which days need care based on your work
                                schedule. It provides options for nannies,
                                allowing parents more range in the hours they
                                need. Knowing nannies can be pricier, the app
                                also has the option to nanny share, where
                                parents can share the cost of care.
                            </p>
                            <img
                                src='/Tandem/Reference.png'
                                alt='Reference images of other scheduling/childcare apps.'
                                className='casesection-bannerImg'
                                loading='lazy'
                                decoding='async'
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
                                <CodeButton
                                    text='View Report'
                                    href='https://docs.google.com/document/d/1q2iX2L2OvAhui6LYZeLVbo92AMHXwLF_mHFE8P5sgxE/edit?tab=t.0#heading=h.ckmm2i24taya'
                                />
                            </div>
                            <p className='case-desc'>
                                Through interviews 8 with tradesparents, we
                                realized just how far the issue went. With 63%
                                working 40–59 hours a week, and 50% having a mix
                                of advance and last-minute scheduling, parents
                                are having to schedule reactively.
                                <br />
                                <br />
                                60% rely on family or friends for childcare when
                                their schedule changes last-minute, since
                                finding reliable childcare is their biggest
                                struggle, 50% say.
                                <br />
                                <br />
                                We also conducted secondary research, through
                                online forums and reddit posts, it helped
                                highlight just how difficult of a position
                                parents were in.
                            </p>
                        </section>
                        {/* The Process */}
                        <section
                            id='process'
                            className='case-section'>
                            <div className='process-flow'>
                                <h2 className='case-title'>Design Process</h2>

                                <h3 className='section-subheader'>User Flow</h3>
                                <p className='case-desc'>
                                    With our research, we planned how our user
                                    flow would look, wanting it to be clear and
                                    straightforward. As we iterated our
                                    wireframes, we adjusted our flow to ensure
                                    parents could view and book through their
                                    schedule seamlessly.
                                </p>
                                <img
                                    src='/Tandem/userflow.png'
                                    alt='An image with notes linked by arrows showing how the app flows, from sign-in to booking.'
                                    className='userflow-img'
                                    loading='lazy'
                                    decoding='async'
                                />
                            </div>
                            <div className='process-styles'>
                                <h3 className='section-subheader'>
                                    Style guide
                                </h3>
                                <p className='section-desc'>
                                    Wanting to highlight trust, support, and
                                    balance, we ensured that conveyed in our
                                    apps branding and visuals. With blue and
                                    green tones, we portray safety and security,
                                    putting users at ease when navigating the
                                    app. We also opted for simple and clear, yet
                                    effective fonts for easier readability.
                                </p>
                                <div className='revitea-styles case-styles'>
                                    <div className='palettes'>
                                        <div className='palette'>
                                            <div
                                                className='case-swatch case-swatch-2'
                                                style={{
                                                    backgroundColor: "#00001b",
                                                }}>
                                                #00001B
                                            </div>
                                            <div
                                                className='case-swatch case-swatch-2'
                                                style={{
                                                    backgroundColor: "#3373cc",
                                                }}>
                                                #3373CC
                                            </div>

                                            <div
                                                className='case-swatch'
                                                style={{
                                                    backgroundColor: "#68D5FF",
                                                }}>
                                                #68D5FF
                                            </div>
                                            <div
                                                className='case-swatch'
                                                style={{
                                                    backgroundColor: "#92F189",
                                                }}>
                                                #92F189
                                            </div>

                                            <div
                                                className='case-swatch'
                                                style={{
                                                    backgroundColor: "#FFFFFF",
                                                }}>
                                                #FFFFFF
                                            </div>
                                        </div>
                                    </div>
                                    <div className='revitea-fonts '>
                                      
                                        <svg className='revitea-font case-font'
 xmlns="http://www.w3.org/2000/svg" width="184" height="30" viewBox="0 0 184 30" fill="currentColor">
  <path d="M0 28.8L9.08 5.44C9.61333 4.02667 10.2933 2.96 11.12 2.24C11.9733 1.49333 13.0133 1.12 14.24 1.12C15.4133 1.12 16.4133 1.49333 17.24 2.24C18.0933 2.96 18.7867 4.02667 19.32 5.44L28.4 28.8H21.36L13.44 6.88H14.84L7 28.8H0ZM6.8 23.84V18.28H21.88V23.84H6.8Z" fill="currentColor"/>
  <path d="M35.5744 0V21.64C35.5744 22.52 35.6944 23.1333 35.9344 23.48C36.201 23.8 36.641 23.96 37.2544 23.96C37.4944 23.96 37.7344 23.9333 37.9744 23.88C38.241 23.8267 38.4944 23.7733 38.7344 23.72V28.48C37.641 29.0133 36.441 29.28 35.1344 29.28C33.1077 29.28 31.6677 28.7067 30.8144 27.56C29.9877 26.3867 29.5744 24.8 29.5744 22.8V0H35.5744Z" fill="currentColor"/>
  <path d="M60.0847 28.8H54.0047C53.818 28.4267 53.6714 27.88 53.5647 27.16C53.4847 26.44 53.4447 25.6 53.4447 24.64L53.2447 23.48V15.4C53.2447 14.5733 52.978 14 52.4447 13.68C51.938 13.36 51.2314 13.2 50.3247 13.2C49.3914 13.2 48.618 13.32 48.0047 13.56C47.3914 13.7733 46.858 14.04 46.4047 14.36C45.9514 14.6533 45.5114 14.9067 45.0847 15.12C44.6847 15.3333 44.2047 15.44 43.6447 15.44C42.8714 15.44 42.258 15.24 41.8047 14.84C41.3514 14.4133 41.1247 13.84 41.1247 13.12C41.1247 12.6133 41.2447 12.1333 41.4847 11.68C41.7247 11.2 42.138 10.76 42.7247 10.36C44.4047 9 46.9247 8.32 50.2847 8.32C52.258 8.32 53.9114 8.57333 55.2447 9.08C56.578 9.58667 57.578 10.4267 58.2447 11.6C58.9114 12.7467 59.2447 14.2933 59.2447 16.24V22.28C59.2447 23.7467 59.3247 25.0267 59.4847 26.12C59.6447 27.1867 59.8447 28.08 60.0847 28.8ZM47.0047 29.28C45.0047 29.28 43.4314 28.7467 42.2847 27.68C41.138 26.6133 40.5647 25.2 40.5647 23.44C40.5647 21.7867 41.098 20.4933 42.1647 19.56C43.2314 18.6 44.8047 17.96 46.8847 17.64L50.9647 17C51.8714 16.84 52.4714 16.6533 52.7647 16.44C53.0847 16.2267 53.2447 15.8933 53.2447 15.44V19.4C53.0847 19.5333 52.8714 19.6667 52.6047 19.8C52.3647 19.9067 51.9647 20.0267 51.4047 20.16L49.3647 20.56C48.6447 20.6933 48.058 20.9333 47.6047 21.28C47.178 21.6 46.9647 22.1067 46.9647 22.8C46.9647 23.4933 47.178 24.04 47.6047 24.44C48.058 24.8133 48.658 25 49.4047 25C50.1247 25 50.7647 24.8267 51.3247 24.48C51.9114 24.1333 52.378 23.64 52.7247 23C53.0714 22.36 53.2447 21.6267 53.2447 20.8L53.9647 24.56C53.378 26.1333 52.4714 27.32 51.2447 28.12C50.018 28.8933 48.6047 29.28 47.0047 29.28Z" fill="currentColor"/>
  <path d="M76.7625 28.8V17.96C76.7625 17.0533 76.6158 16.3067 76.3225 15.72C76.0292 15.1333 75.6158 14.7067 75.0825 14.44C74.5758 14.1467 74.0025 14 73.3625 14C72.6692 14 72.0158 14.16 71.4025 14.48C70.8158 14.7733 70.3358 15.24 69.9625 15.88C69.5892 16.4933 69.4025 17.28 69.4025 18.24L68.5625 13.36C68.9625 12.2133 69.5092 11.2667 70.2025 10.52C70.8958 9.77333 71.6958 9.22667 72.6025 8.88C73.5358 8.50667 74.5092 8.32 75.5225 8.32C76.8292 8.32 78.0292 8.61333 79.1225 9.2C80.2425 9.76 81.1358 10.68 81.8025 11.96C82.4692 13.2133 82.8025 14.88 82.8025 16.96V28.8H76.7625ZM63.4025 28.8V8.8H69.4025V28.8H63.4025Z" fill="currentColor"/>
  <path d="M106.713 29.28C104.553 29.28 102.58 29.04 100.793 28.56C99.0334 28.0533 97.5268 27.4267 96.2734 26.68V20.52C98.1401 21.7467 100.007 22.6933 101.873 23.36C103.74 24 105.473 24.32 107.073 24.32C108.567 24.32 109.66 24.0667 110.353 23.56C111.047 23.0533 111.393 22.4133 111.393 21.64C111.393 20.9467 111.113 20.3867 110.553 19.96C110.02 19.5333 109.287 19.1867 108.353 18.92C107.447 18.6267 106.447 18.3467 105.353 18.08C104.287 17.8133 103.207 17.5067 102.113 17.16C101.02 16.7867 100.02 16.3067 99.1134 15.72C98.2068 15.1067 97.4734 14.3333 96.9134 13.4C96.3534 12.44 96.0734 11.24 96.0734 9.8C96.0734 8.09333 96.5134 6.58667 97.3934 5.28C98.2734 3.97333 99.5534 2.96 101.233 2.24C102.94 1.49333 104.993 1.12 107.393 1.12C109.233 1.12 110.86 1.33333 112.273 1.76C113.687 2.18667 114.86 2.78667 115.793 3.56C116.327 3.98667 116.74 4.44 117.033 4.92C117.327 5.4 117.473 5.94667 117.473 6.56C117.473 7.36 117.233 8.01333 116.753 8.52C116.273 9 115.607 9.24 114.753 9.24C114.06 9.24 113.433 9.08 112.873 8.76C112.313 8.44 111.753 8.06667 111.193 7.64C110.66 7.21333 110.033 6.84 109.313 6.52C108.62 6.17333 107.767 6 106.753 6C105.473 6 104.5 6.26667 103.833 6.8C103.193 7.33333 102.873 7.98667 102.873 8.76C102.873 9.45333 103.153 10.0133 103.713 10.44C104.273 10.8667 105.007 11.2267 105.913 11.52C106.82 11.8133 107.807 12.0933 108.873 12.36C109.967 12.6267 111.06 12.9467 112.153 13.32C113.247 13.6933 114.247 14.1867 115.153 14.8C116.06 15.3867 116.793 16.1467 117.353 17.08C117.913 18.0133 118.193 19.2 118.193 20.64C118.193 22.3467 117.767 23.8533 116.913 25.16C116.06 26.4667 114.78 27.48 113.073 28.2C111.393 28.92 109.273 29.28 106.713 29.28Z" fill="currentColor"/>
  <path d="M139.889 28.8H133.809C133.623 28.4267 133.476 27.88 133.369 27.16C133.289 26.44 133.249 25.6 133.249 24.64L133.049 23.48V15.4C133.049 14.5733 132.783 14 132.249 13.68C131.743 13.36 131.036 13.2 130.129 13.2C129.196 13.2 128.423 13.32 127.809 13.56C127.196 13.7733 126.663 14.04 126.209 14.36C125.756 14.6533 125.316 14.9067 124.889 15.12C124.489 15.3333 124.009 15.44 123.449 15.44C122.676 15.44 122.063 15.24 121.609 14.84C121.156 14.4133 120.929 13.84 120.929 13.12C120.929 12.6133 121.049 12.1333 121.289 11.68C121.529 11.2 121.943 10.76 122.529 10.36C124.209 9 126.729 8.32 130.089 8.32C132.063 8.32 133.716 8.57333 135.049 9.08C136.383 9.58667 137.383 10.4267 138.049 11.6C138.716 12.7467 139.049 14.2933 139.049 16.24V22.28C139.049 23.7467 139.129 25.0267 139.289 26.12C139.449 27.1867 139.649 28.08 139.889 28.8ZM126.809 29.28C124.809 29.28 123.236 28.7467 122.089 27.68C120.943 26.6133 120.369 25.2 120.369 23.44C120.369 21.7867 120.903 20.4933 121.969 19.56C123.036 18.6 124.609 17.96 126.689 17.64L130.769 17C131.676 16.84 132.276 16.6533 132.569 16.44C132.889 16.2267 133.049 15.8933 133.049 15.44V19.4C132.889 19.5333 132.676 19.6667 132.409 19.8C132.169 19.9067 131.769 20.0267 131.209 20.16L129.169 20.56C128.449 20.6933 127.863 20.9333 127.409 21.28C126.983 21.6 126.769 22.1067 126.769 22.8C126.769 23.4933 126.983 24.04 127.409 24.44C127.863 24.8133 128.463 25 129.209 25C129.929 25 130.569 24.8267 131.129 24.48C131.716 24.1333 132.183 23.64 132.529 23C132.876 22.36 133.049 21.6267 133.049 20.8L133.769 24.56C133.183 26.1333 132.276 27.32 131.049 28.12C129.823 28.8933 128.409 29.28 126.809 29.28Z" fill="currentColor"/>
  <path d="M156.567 28.8V17.96C156.567 17.0533 156.421 16.3067 156.127 15.72C155.834 15.1333 155.421 14.7067 154.887 14.44C154.381 14.1467 153.807 14 153.167 14C152.474 14 151.821 14.16 151.207 14.48C150.621 14.7733 150.141 15.24 149.767 15.88C149.394 16.4933 149.207 17.28 149.207 18.24L148.367 13.36C148.767 12.2133 149.314 11.2667 150.007 10.52C150.701 9.77333 151.501 9.22667 152.407 8.88C153.341 8.50667 154.314 8.32 155.327 8.32C156.634 8.32 157.834 8.61333 158.927 9.2C160.047 9.76 160.941 10.68 161.607 11.96C162.274 13.2133 162.607 14.88 162.607 16.96V28.8H156.567ZM143.207 28.8V8.8H149.207V28.8H143.207Z" fill="currentColor"/>
  <path d="M173.646 29.28C172.072 29.28 170.632 29.12 169.326 28.8C168.019 28.4533 166.806 28.0133 165.686 27.48V22.4C167.126 23.3333 168.566 24.0667 170.006 24.6C171.472 25.1333 172.766 25.4 173.886 25.4C174.872 25.4 175.592 25.2267 176.046 24.88C176.499 24.5333 176.726 24.1067 176.726 23.6C176.726 23.0667 176.459 22.64 175.926 22.32C175.392 22 174.712 21.7333 173.886 21.52C173.059 21.28 172.179 21.0267 171.246 20.76C170.312 20.4933 169.432 20.1467 168.606 19.72C167.779 19.2933 167.099 18.7067 166.566 17.96C166.032 17.2133 165.766 16.24 165.766 15.04C165.766 13.76 166.112 12.6133 166.806 11.6C167.526 10.56 168.566 9.76 169.926 9.2C171.312 8.61333 173.019 8.32 175.046 8.32C176.646 8.32 178.019 8.50667 179.166 8.88C180.312 9.22667 181.192 9.72 181.806 10.36C182.446 10.9733 182.766 11.7067 182.766 12.56C182.766 13.2267 182.566 13.7467 182.166 14.12C181.792 14.4933 181.286 14.68 180.646 14.68C180.139 14.68 179.672 14.56 179.246 14.32C178.846 14.0533 178.432 13.76 178.006 13.44C177.606 13.12 177.139 12.84 176.606 12.6C176.099 12.3333 175.486 12.2 174.766 12.2C173.886 12.2 173.232 12.3867 172.806 12.76C172.379 13.1333 172.166 13.5733 172.166 14.08C172.166 14.64 172.432 15.0933 172.966 15.44C173.499 15.76 174.179 16.04 175.006 16.28C175.832 16.4933 176.712 16.7333 177.646 17C178.579 17.2667 179.459 17.6267 180.286 18.08C181.112 18.5333 181.792 19.1333 182.326 19.88C182.859 20.6 183.126 21.56 183.126 22.76C183.126 24.04 182.766 25.1733 182.046 26.16C181.326 27.1467 180.259 27.92 178.846 28.48C177.432 29.0133 175.699 29.28 173.646 29.28Z" fill="currentColor"/>
</svg>

                                       
                                        <svg className='revitea-font case-font' xmlns="http://www.w3.org/2000/svg" width="124" height="27" viewBox="0 0 124 27" fill="currentColor">
  <path d="M13.08 26.92C5.36 26.92 0 21.4 0 13.52C0 5.6 5.48 0 13.12 0C20.84 0 26.2 5.52 26.2 13.44C26.2 21.36 20.76 26.92 13.08 26.92ZM13.12 23.28C18.36 23.28 22.04 19.28 22.04 13.52C22.04 7.76 18.32 3.64 13.08 3.64C7.84 3.64 4.16 7.64 4.16 13.44C4.16 19.2 7.88 23.28 13.12 23.28Z" fill="currentColor"/>
  <path d="M53.2084 6.68C58.0884 6.68 60.4484 9.64 60.4484 14.6V24.68C60.4484 26.12 59.7284 26.56 58.6884 26.56H58.2884C57.2084 26.56 56.4884 26.12 56.4884 24.68V15.08C56.4884 11.84 55.0884 10.16 52.2484 10.16C50.2084 10.16 48.3684 11.44 47.3684 13.36V24.68C47.3684 26.12 46.6484 26.56 45.6084 26.56H45.2084C44.1684 26.56 43.4084 26.12 43.4084 24.68V15.24C43.4084 11.84 42.0084 10.16 39.1684 10.16C37.1684 10.16 35.2884 11.44 34.3284 13.36V24.68C34.3284 26.12 33.5684 26.56 32.5684 26.56H32.1284C31.0884 26.56 30.3684 26.12 30.3684 24.68V7.4C30.3684 7.28 31.0084 6.96 31.8084 6.96C32.9284 6.96 34.1284 7.44 34.2884 9.92C35.6084 8.04 37.6084 6.68 40.2484 6.68C43.3684 6.68 45.5284 8.16 46.5284 10.72C47.8484 8.48 50.0084 6.68 53.2084 6.68Z" fill="currentColor"/>
  <path d="M75.4541 6.68C80.5341 6.68 82.8941 10.16 82.8941 14.92V24.68C82.8941 26.12 82.1341 26.56 81.1341 26.56H80.6941C79.6541 26.56 78.9341 26.12 78.9341 24.68V15.4C78.9341 12.16 77.2941 10.16 74.4941 10.16C71.9741 10.16 70.0541 11.52 69.0941 13.52V24.68C69.0941 26.12 68.3341 26.56 67.3341 26.56H66.8941C65.8541 26.56 65.1341 26.12 65.1341 24.68V7.4C65.1341 7.28 65.7741 6.96 66.5741 6.96C67.6541 6.96 68.9741 7.52 69.0541 10.08C70.4141 8.08 72.5341 6.68 75.4541 6.68Z" fill="currentColor"/>
  <path d="M86.3959 16.88C86.3959 11.04 90.5559 6.68 96.2359 6.68C101.796 6.68 105.476 10.6 105.476 16.36V16.68C105.476 17.52 105.196 17.84 104.276 17.84H90.0759C90.0759 18.08 90.1159 18.32 90.1559 18.56C90.7159 21.72 93.2359 23.8 96.6359 23.8C99.9959 23.8 101.676 22.32 102.676 20.6C102.756 20.52 104.756 20.88 104.756 22.56C104.756 23.4 104.036 24.48 102.636 25.36C101.236 26.24 99.1959 26.92 96.5559 26.92C90.4759 26.92 86.3959 22.88 86.3959 16.88ZM101.636 15.16C101.436 11.84 99.3959 9.68 96.1959 9.68C93.0359 9.68 90.5959 11.96 90.1159 15.16H101.636Z" fill="currentColor"/>
  <path d="M109.277 25.2C108.277 24.48 107.757 23.6 107.757 22.8C107.757 21.56 109.197 20.92 109.317 21C110.597 22.64 112.758 23.88 115.798 23.88C118.518 23.88 120.037 22.88 120.037 21.28C120.037 19.32 118.237 18.96 115.077 18.28C112.237 17.68 108.317 16.8 108.317 12.72C108.317 9.12 111.317 6.68 115.997 6.68C119.677 6.68 121.998 7.84 122.918 9.2C123.238 9.64 123.397 10.12 123.397 10.56C123.397 11.8 121.878 12.52 121.798 12.4C120.598 10.8 118.598 9.68 116.158 9.68C113.438 9.68 111.997 10.72 111.997 12.32C111.997 14.08 113.678 14.48 116.798 15.16C119.758 15.8 123.878 16.68 123.878 20.84C123.878 24.52 120.838 26.88 115.878 26.88C112.838 26.88 110.637 26.16 109.277 25.2Z" fill="currentColor"/>
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
                                    Lo-fi & Mid-fi
                                </h3>
                                <p className='case-desc'>
                                    During our wireframe iterations, I focused
                                    on our schedule feature. Initially, with the
                                    app having a homepage, we kept it pretty
                                    simple, being an overview for the current
                                    week/month. When making our mid-fi, we tried
                                    adjusting our homepage to help differentiate
                                    it from our schedule page.
                                </p>
                                <div className='lofi-comparison'>
                                    <div className='lofi-homepage'>
                                        <div className='lofi-images'>
                                            <p className='iteration-caption'>
                                                Lo-fi Homepage
                                            </p>
                                            <img
                                                className='lofi-img'
                                                src='/Tandem/initial-home.png'
                                                alt='Initial lo-fi mockup of the homepage in greyscale.'
                                                loading='lazy'
                                                decoding='async'
                                            />
                                        </div>
                                        <div className='lofi-img'>
                                            <p className='iteration-caption'>
                                                Mid-fi Homepage
                                            </p>
                                            <img
                                                className='lofi-img'
                                                src='/Tandem/mid-home.png'
                                                alt='Mid-fi iteration of homepage, in color with icons in the navbar.'
                                                loading='lazy'
                                                decoding='async'
                                            />
                                        </div>
                                    </div>
                                    <div className='lofi-schedule'>
                                        <div className='lofi-images'>
                                            <p className='iteration-caption'>
                                                Lo-fi Schedule
                                            </p>
                                            <img
                                                className='lofi-img'
                                                src='/Tandem/initial-weekly.png'
                                                alt='Initial greyscale mockup of the schedule page'
                                                loading='lazy'
                                                decoding='async'
                                            />
                                        </div>
                                        <div className='lofi-images'>
                                            <p className='iteration-caption'>
                                                Mid-fi Schedule
                                            </p>
                                            <img
                                                className='lofi-img'
                                                src='/Tandem/mid-weekly.png'
                                                alt='Mid-fi iteration of the schedule page, in color and a weekly/monthly toggle for the calendar'
                                                loading='lazy'
                                                decoding='async'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='iteration-testing'>
                                <div className='title-container'>
                                    <h2 className='section-subheader'>
                                        User Testing
                                    </h2>
                                    <CodeButton
                                        text='View Report'
                                        href='https://docs.google.com/document/d/1GI7hbHmCOMoOPl5raU56DoE3Czq-sEFLe-LUqUbMc1o/edit?usp=sharing'
                                    />
                                </div>
                                <p className='case-desc'>
                                    We conducted user testing before moving onto
                                    our hi-fi, making sure the direction we were
                                    going matched what our users were seeking.
                                    Through this we identified issues in our
                                    onboarding and the sizing of small text, and
                                    noted these for future iterations.
                                </p>
                            </div>

                            <div className='iteration-final'>
                                <h3 className='section-subheader'>Hi-Fi</h3>
                                <p className='case-desc'>
                                    With our hi-fi screens, we implemented the
                                    feedback from our testing and made some
                                    extra changes by adjusting our palette. When
                                    adjusting, we also merged our homepage into
                                    the schedule, both to give room for the
                                    nanny share feature and to reduce
                                    redundancy. The final design reflects our
                                    core messaging and the final product.
                                </p>
                                <div className='hifi-img-container'>
                                    <div className='hifi-images'>
                                        <p className='iteration-caption'>
                                            Mid-fi Schedule
                                        </p>
                                        <img
                                            className='hifi-img'
                                            src='/Tandem/mid-weekly.png'
                                            alt='Mid-fi iteration of the schedule page, in color and a weekly/monthly toggle for the calendar'
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                    <div className='hifi-images'>
                                        <p className='iteration-caption'>
                                            Hi-fi Schedule
                                        </p>
                                        <img
                                            className='hifi-img'
                                            src='/Tandem/hifi-weekly.png'
                                            alt='Final version of the schedule, which is now the apps homepage. With brighter colors and simplified cards'
                                            loading='lazy'
                                            decoding='async'
                                        />
                                    </div>
                                    <ul className='hifi-list'>
                                        <li>Simplified day cards</li>
                                        <li>Week shown along the top</li>
                                        <li>
                                            Current day highlight for clarity
                                        </li>
                                        <li>
                                            Simplified weekly/monthly toggle
                                        </li>
                                    </ul>
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
                                    text='View Source Code'
                                    href='https://github.com/IDSP-TRADECARE/Tandem'
                                />
                            </div>
                            <p className='case-desc'>
                                When developing the app, I focused on
                                onboarding, specifically the forms. With the
                                forms, there are options to either input your
                                information manually, or scan your ID to help
                                auto-fill. Along with this section, I was also
                                in-charge of merging and linking the onboarding
                                section together, and profile section to it to
                                ensure the information input was saved properly.
                            </p>
                        </section>
                        {/* Promotion */}
                        <section
                            id='promotion'
                            className='case-section'>
                            <h2 className='case-title'>Promotion</h2>
                            <div className='promotion-materials'>
                                <h3 className='section-subheader'>Materials</h3>
                                <p className='case-desc'>
                                    For the apps’ promotion, we created both
                                    digital and printed materials. Digitally, we
                                    made a landing page showcasing Tandem’s core
                                    features and value, a promotional video to
                                    highlight our solution, as well as posting
                                    on social media to engage with our audience.
                                    For printed materials, brochures and
                                    business cards were made, as well as branded
                                    stickers to hand out.
                                </p>
                                <div className='material-images'>
                                    <img
                                        src='/Tandem/brochure.png'
                                        loading='lazy'
                                        decoding='async'
                                        alt='A photo of our brochure, highlighting out apps features'
                                        className='material-img'
                                    />
                                    <img
                                        src='/Tandem/film.png'
                                        loading='lazy'
                                        decoding='async'
                                        alt='A photo from when we were filming our promotional video'
                                        className='material-img film-img'
                                    />

                                    <img
                                        src='/Tandem/card.png'
                                        loading='lazy'
                                        decoding='async'
                                        alt='One of the business cards made for our showcase'
                                        className='material-img'
                                    />
                                </div>
                            </div>
                            <div className='promotion-showcase'>
                                <h3 className='section-subheader'>
                                    App Showcase
                                </h3>
                                <p className='case-desc'>
                                    The project ended with showcasing our app as
                                    part of BCIT’s app showcase in December
                                    2025. With our video, printed materials, and
                                    live app demo, we clearly and effectively
                                    positioned Tandem as the solution for
                                    tradesparents. This event provided powerful
                                    validation for us, reinforcing the app’s
                                    real-world relevance in helping
                                    tradesparents overcome childcare barriers.
                                </p>
                                <div className='showcase-images'>
                                    <img
                                        src='/Tandem/booth.png'
                                        alt='The team at our booth during the showcase'
                                        className='showcase-img'
                                        loading='lazy'
                                        decoding='async'
                                    />
                                    <img
                                        src='/Tandem/present.png'
                                        alt='A photo of the team during our live demo presentation'
                                        className='showcase-img'
                                        loading='lazy'
                                        decoding='async'
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
                                The result was Tandem, not just an app, but a
                                link connecting parents and lessening the burden
                                of finding childcare. Through this journey, I
                                was reminded that design rarely follows a
                                straight line. It’s full of detours, with
                                iterations and feedback loops that ultimately
                                make the product stronger.
                                <br />
                                <br />
                                This was also my first time closely
                                collaborating with developers, which came with
                                some learning curves. I learned to communicate
                                design decisions with better context and detail,
                                to ground my recommendations in our user needs,
                                and to iterate collaboratively when constraints
                                emerged. These are skills that have made me a
                                stronger, more versatile designer.
                            </p>
                        </section>
                    </div>
                    {/* Check it out! */}
                    <section
                        id='test'
                        className='case-test case-dark'>
                        <div className='test-text'>
                            <h2 className='case-title'>Check it out!</h2>
                            <h3 className='test-cta'>Wanna try it yourself?</h3>
                            <CodeButton
                                text='Try the app!'
                                href='https://www.tandem-app.com/sign-in?redirect_url=https%3A%2F%2Fwww.tandem-app.com%2F'
                            />
                        </div>
                        <video
                            className='demo-mobile'
                            autoPlay
                            muted
                            controls>
                            <source
                                src='/Tandem/demo.mp4'
                                type='video/mp4'></source>
                        </video>
                    </section>
                </div>
            </div>
        </>
    );
}
