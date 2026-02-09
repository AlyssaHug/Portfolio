import { Link } from "react-router-dom";
import "./Moolahmate.css";

export default function Moolahmate() {
    return (
        <div className='project-detail-page'>
            <img
                src='/MoolahMate/Hero.png'
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
                            href='#coding'
                            className='link'>
                            Development
                        </a>
                    </li>
                    <li>
                        <a
                            href='#final'
                            className='link'>
                            Result
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
                    <h1 className='project-title'>MoolahMate</h1>
                    <p className='short-desc'>
                        Budgeting can be difficult for younger people,
                        especially if they aren’t taught it or aren’t motivated.
                        The goal was to create an app not only helping people
                        save money and track their spending, but help it be a
                        fun, engaging process to keep users interested. The
                        result was MoolahMate, a gamified budgeting app with a
                        cow mascot, while having a calming, secure color palette
                        to reassure users.
                    </p>
                    <div className='meta'>
                        <span className='role'>Role: </span>
                        <p>UI/UX Designer, Lead Frontend Developer</p>
                    </div>
                </div>
            </header>

            <div className='project-content'>
                <section
                    id='ideation'
                    className='main-section'>
                    <h2 className='section-title'>
                        Ideation - Gamified Budgeting
                    </h2>
                    <p className='section-desc'>
                        Through our research, we found that younger people
                        struggled to budget well, either not knowing where to
                        start or uninterested in the process. To make the
                        experience more engaging, we decided to gamify it,
                        wanting a mascot to interact with our users and goals to
                        act as incentives to save.
                    </p>
                    <img
                        className='section-bannerImg'
                        src='/MoolahMate/Reference.png'
                    />
                </section>
                <section
                    id='creation'
                    className='main-section'>
                    <h2 className='section-title'>Creation - MoolahMate</h2>
                    <p className='section-desc'>
                        We went with a simplified, straightforward design for
                        the app, since it had so many features, we wanted every
                        action to be clear and understood by the user. We used
                        plain language and info pop-ups to clarify inputs where
                        needed. <br />
                        <br />
                        We wanted to ensure our app was secure and calming,
                        while being light and enjoyable. With our palette and
                        layout supporting our goals, and our mascot bringing a
                        fun element for users to interact with, MoolahMate
                        started to take shape.
                    </p>
                    <div className='styles'>
                        <div className='palettes'>
                            <div className='palette'>
                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#274B28" }}>
                                    #274B28
                                </div>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#83BE6C" }}>
                                    #83BE6C
                                </div>

                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#F3EDEA" }}>
                                    #F3EDEA
                                </div>
                                <div
                                    className='color-swatch'
                                    style={{ backgroundColor: "#B2D4E6" }}>
                                    #B2D4E6
                                </div>

                                <div
                                    className='color-swatch swatch2'
                                    style={{ backgroundColor: "#15243C" }}>
                                    #15243C
                                </div>
                            </div>
                        </div>
                        <div className='revitea-fonts'>
                            <img
                                className='revitea-font quicksand'
                                src='/MoolahMate/quicksand.svg'
                                alt='Quicksand - Main font sample'
                            />

                            <img
                                className='revitea-font support'
                                src='/MoolahMate/libre.svg'
                                alt='Libre Franklin - body font sample'
                            />
                        </div>
                    </div>
                    <div className='moo-creations'>
                        <img
                            src='/MoolahMate/Calendar.svg'
                            alt='Calendar from the expense page'
                            className='variation calendar'
                        />
                        <div className='nav-svg'>
                            <img
                                src='/MoolahMate/nav-light.svg'
                                alt='Default navbar'
                                className='nav'
                            />

                            <img
                                src='/MoolahMate/nav-dark.svg'
                                alt='Navbar in dark mode'
                                className='nav'
                            />
                        </div>
                        <img
                            src='/MoolahMate/moomoo.svg'
                            alt='Cow mascot with a coin on its back'
                            className='variation moomoo'
                        />
                    </div>
                </section>
                <section
                    id='iterations'
                    className='section-dark'>
                    <h2 className='section-title'>Iterations</h2>
                    <p className='section-desc'>
                        Originally, with everything we planned to include in our
                        app, the scope was too broad for our timeline and some
                        of the features weren’t clear enough to our users. To
                        circumvent this, we cut down our scope, narrowing our
                        MVP to ensure we delivered the best app we could.
                        <br />
                        <br />
                        Given the dual roles in this project, being both
                        designers and coders for the app, structure and
                        work-ethic became an issue further down the timeline.
                        With better, segmented deadlines and a base guideline
                        for everyone to follow helped support better
                        communication and understanding.
                    </p>
                    <div className='iteration-images'>
                        <div className='process-img-container'>
                            <p className='caption'>Initial Mockup</p>
                            <img
                                src='/MoolahMate/Initial.png'
                                alt='Initial mockup of goals page'
                                className='process-img-moo'
                            />
                        </div>
                        <div className='process-img-container'>
                            <p className='caption'>First Iteration</p>
                            <img
                                src='/MoolahMate/ver01.png'
                                alt='first iteration - lofi'
                                className='process-img-moo'
                            />
                        </div>
                        <div className='process-img-container'>
                            <p className='caption'>Second Iteration</p>
                            <img
                                src='/MoolahMate/ver02.png'
                                alt='Second iteration - midfi'
                                className='process-img-moo'
                            />
                        </div>
                        <div className='process-img-container'>
                            <p className='caption'>Final Version</p>
                            <img
                                src='/MoolahMate/ver03.png'
                                alt='final iteration - Hifi'
                                className='process-img-moo'
                            />
                        </div>
                    </div>
                </section>
                <section
                    id='coding'
                    className='main-section'>
                    <div className='title-container'>
                        <h2 className='section-title'>Development</h2>
                        <a
                            className='code-btn'
                            target='_blank'
                            href='https://github.com/AlyssaHug/Design02_App'>
                            View Source Code
                        </a>
                    </div>
                    <p className='section-desc'>
                        When developing the app, I was in charge of the goals,
                        rewards, and profile sections. I also checked in with
                        team members to help when needed along with reviewing
                        and merging the code to ensure no conflicts or bugs were
                        present.
                    </p>
                </section>
                <section
                    id='final'
                    className='main-section'>
                    <h2 className='section-title'>Final Product</h2>
                    <p className='section-desc'>
                        The result was a budgeting app built to help young
                        money-conscious users manage their finances while
                        engaging in the app. With goals and rewards, a
                        transaction calendar, and MooMoo (the mascot), the app
                        has everything users need to track their spending while
                        reaching their monetary goals.
                    </p>
                    <div className='final-img-container'>
                        <img
                            className='moomoosit'
                            src='/MoolahMate/moomoosit.svg'
                            alt='MooMoo sitting down'
                        />
                        <div className='img-container'>
                            <img
                                src='/MoolahMate/opening.png'
                                alt='Start page for Moolahmate, with options to sign-in or sign-up'
                                className='final-poster'
                            />
                            <img
                                src='/MoolahMate/goal-recs.png'
                                alt='Recommended goal screen, with 2 options based on recent purchases'
                                className='final-poster'
                            />
                            <img
                                src='/MoolahMate/moo-page.png'
                                alt='The MooMoo page, with options to interact with MooMoo'
                                className='final-poster'
                            />
                        </div>
                    </div>
                </section>
            </div>
            <section
                id='models'
                className='main-section test-section'>
                <h2 className='section-title'>Check it out!</h2>
                <video
                    className='demo-mobile'
                    controls>
                    <source
                        src='/MoolahMate/demo.mp4'
                        type='video/mp4'></source>
                </video>
            </section>
        </div>
    );
}
