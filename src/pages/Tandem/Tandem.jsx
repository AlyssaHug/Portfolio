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
                    </header>

                    <div className='project-content case-content'>
                        {/* The Issue */}
                        <section
                            id='issue'
                            className='case-section'>
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
                                <div className='styles case-styles'>
                                    <div className='palettes'>
                                        <div className='palette case-palette'>
                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#00001b",
                                                }}>
                                                #00001B
                                            </div>
                                            <div
                                                className='color-swatch swatch2'
                                                style={{
                                                    backgroundColor: "#3373cc",
                                                }}>
                                                #3373CC
                                            </div>

                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#68D5FF",
                                                }}>
                                                #68D5FF
                                            </div>
                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#92F189",
                                                }}>
                                                #92F189
                                            </div>

                                            <div
                                                className='color-swatch'
                                                style={{
                                                    backgroundColor: "#FFFFFF",
                                                }}>
                                                #FFFFFF
                                            </div>
                                        </div>
                                    </div>
                                    <div className='revitea-fonts '>
                                        <img
                                            className='revitea-font case-font'
                                            src='/Tandem/alan.svg'
                                            alt='ALan Sans - Main font sample'
                                            loading='lazy'
                                            decoding='async'
                                        />

                                        <img
                                            className='revitea-font case-font case-support'
                                            src='/Tandem/omnes.svg'
                                            alt='Omnes - body font sample'
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
                                    text='View Report'
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
                                        className='material-img'
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
                        className='case-test'>
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
