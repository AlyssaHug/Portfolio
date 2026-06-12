import "./Revitea.css";
import Cans from "../../components/cans/cans";

export default function Revitea() {
    return (
        <>
            <img
                src='/Revitea/Hero.png'
                alt='Revitea+'
                className='hero-image'
                loading='eager'
                decoding='async'
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
                        loading='lazy'
                        decoding='async'
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
                        <div className='revitea-fonts'>
                          
                            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="30" viewBox="0 0 112 30"                                 className='revitea-font federo'
 fill="currentColor">
                                <path d="M17.7539 0V1.91406H4.27734V10.7227H17.3438V12.6367H4.27734V29.043H0V0H17.7539Z" fill="currentColor"/>
                                <path d="M27.2852 10.2734C28.6133 10.2734 29.7331 10.5208 30.6445 11.0156C31.569 11.4974 32.3177 12.1549 32.8906 12.9883C33.4766 13.8216 33.8932 14.7852 34.1406 15.8789C34.401 16.9596 34.5312 18.1055 34.5312 19.3164V20.2344H22.5C22.5 20.9635 22.6172 21.7513 22.8516 22.5977C23.0859 23.444 23.4635 24.2253 23.9844 24.9414C24.5182 25.6576 25.2018 26.2565 26.0352 26.7383C26.8815 27.207 27.9167 27.4414 29.1406 27.4414H33.2031V29.043H29.082C27.2591 29.043 25.6836 28.8346 24.3555 28.418C23.0404 28.0013 21.9531 27.3958 21.0938 26.6016C20.2474 25.8073 19.6224 24.8372 19.2188 23.6914C18.8151 22.5456 18.6133 21.237 18.6133 19.7656C18.6133 18.5417 18.8021 17.3568 19.1797 16.2109C19.5703 15.0651 20.1302 14.056 20.8594 13.1836C21.6016 12.2982 22.5065 11.5951 23.5742 11.0742C24.6549 10.5404 25.8919 10.2734 27.2852 10.2734ZM27.0898 12.0508C26.2826 12.0508 25.5924 12.2331 25.0195 12.5977C24.4466 12.9622 23.9714 13.4505 23.5938 14.0625C23.2292 14.6615 22.9557 15.3646 22.7734 16.1719C22.6042 16.9661 22.513 17.793 22.5 18.6523H30.7617V17.8125C30.7357 17.0573 30.6641 16.3346 30.5469 15.6445C30.4427 14.9544 30.2539 14.3424 29.9805 13.8086C29.707 13.2747 29.3359 12.8516 28.8672 12.5391C28.4115 12.2135 27.819 12.0508 27.0898 12.0508Z" fill="currentColor"/>
                                <path d="M48.9258 29.043C47.3763 29.043 46.0091 28.9193 44.8242 28.6719C43.6523 28.4245 42.6302 28.0794 41.7578 27.6367C40.8984 27.181 40.1758 26.6471 39.5898 26.0352C39.0169 25.4232 38.5547 24.7526 38.2031 24.0234C37.8516 23.2812 37.6042 22.5 37.4609 21.6797C37.3177 20.8594 37.2461 20.0195 37.2461 19.1602C37.2461 17.8841 37.4349 16.7057 37.8125 15.625C38.2031 14.5312 38.7891 13.5938 39.5703 12.8125C40.3646 12.0182 41.3607 11.3997 42.5586 10.957C43.7695 10.5013 45.2018 10.2734 46.8555 10.2734C47.5065 10.2734 48.2422 10.3841 49.0625 10.6055C49.8958 10.8268 50.6901 11.1589 51.4453 11.6016V0H55.4102V29.043H48.9258ZM41.2109 19.1211C41.2109 19.5638 41.237 20.0781 41.2891 20.6641C41.3542 21.237 41.4779 21.8359 41.6602 22.4609C41.8424 23.0729 42.1029 23.6784 42.4414 24.2773C42.793 24.8633 43.2487 25.3971 43.8086 25.8789C44.3815 26.3477 45.0846 26.7253 45.918 27.0117C46.7643 27.2982 47.7669 27.4414 48.9258 27.4414H51.4453V13.0469C50.8203 12.6693 50.1693 12.3893 49.4922 12.207C48.8151 12.0117 48.0664 11.9141 47.2461 11.9141C46.2826 11.9141 45.4232 12.1159 44.668 12.5195C43.9258 12.9102 43.2943 13.4375 42.7734 14.1016C42.2656 14.7656 41.875 15.5339 41.6016 16.4062C41.3411 17.2656 41.2109 18.1706 41.2109 19.1211Z" fill="currentColor"/>
                                <path d="M68.1836 10.2734C69.5117 10.2734 70.6315 10.5208 71.543 11.0156C72.4674 11.4974 73.2161 12.1549 73.7891 12.9883C74.375 13.8216 74.7917 14.7852 75.0391 15.8789C75.2995 16.9596 75.4297 18.1055 75.4297 19.3164V20.2344H63.3984C63.3984 20.9635 63.5156 21.7513 63.75 22.5977C63.9844 23.444 64.362 24.2253 64.8828 24.9414C65.4167 25.6576 66.1003 26.2565 66.9336 26.7383C67.7799 27.207 68.8151 27.4414 70.0391 27.4414H74.1016V29.043H69.9805C68.1576 29.043 66.582 28.8346 65.2539 28.418C63.9388 28.0013 62.8516 27.3958 61.9922 26.6016C61.1458 25.8073 60.5208 24.8372 60.1172 23.6914C59.7135 22.5456 59.5117 21.237 59.5117 19.7656C59.5117 18.5417 59.7005 17.3568 60.0781 16.2109C60.4688 15.0651 61.0286 14.056 61.7578 13.1836C62.5 12.2982 63.4049 11.5951 64.4727 11.0742C65.5534 10.5404 66.7904 10.2734 68.1836 10.2734ZM67.9883 12.0508C67.181 12.0508 66.4909 12.2331 65.918 12.5977C65.3451 12.9622 64.8698 13.4505 64.4922 14.0625C64.1276 14.6615 63.8542 15.3646 63.6719 16.1719C63.5026 16.9661 63.4115 17.793 63.3984 18.6523H71.6602V17.8125C71.6341 17.0573 71.5625 16.3346 71.4453 15.6445C71.3411 14.9544 71.1523 14.3424 70.8789 13.8086C70.6055 13.2747 70.2344 12.8516 69.7656 12.5391C69.3099 12.2135 68.7174 12.0508 67.9883 12.0508Z" fill="currentColor"/>
                                <path d="M83.2617 12.0898C83.7826 11.7253 84.2383 11.4258 84.6289 11.1914C85.0326 10.957 85.3906 10.7747 85.7031 10.6445C86.0156 10.5013 86.3021 10.4036 86.5625 10.3516C86.8359 10.2995 87.1029 10.2734 87.3633 10.2734C88.3789 10.2734 89.1341 10.625 89.6289 11.3281C90.1237 12.0312 90.4167 13.0273 90.5078 14.3164L87.0898 15.332C86.9596 14.3945 86.7839 13.7305 86.5625 13.3398C86.3411 12.9492 85.9961 12.7539 85.5273 12.7539C85.2539 12.7539 84.9284 12.8125 84.5508 12.9297C84.1862 13.0469 83.7565 13.2422 83.2617 13.5156V29.043H79.2969V10.6445H83.2617V12.0898Z" fill="currentColor"/>
                                <path d="M101.602 10.2734C102.943 10.2734 104.199 10.5273 105.371 11.0352C106.543 11.5299 107.559 12.2135 108.418 13.0859C109.29 13.9453 109.974 14.9609 110.469 16.1328C110.964 17.2917 111.211 18.5286 111.211 19.8438C111.211 21.1719 110.964 22.4219 110.469 23.5938C109.974 24.7526 109.29 25.7682 108.418 26.6406C107.559 27.5 106.543 28.1836 105.371 28.6914C104.199 29.1862 102.943 29.4336 101.602 29.4336C100.286 29.4336 99.0495 29.1862 97.8906 28.6914C96.7448 28.1836 95.7422 27.5 94.8828 26.6406C94.0234 25.7682 93.3398 24.7526 92.832 23.5938C92.3372 22.4219 92.0898 21.1719 92.0898 19.8438C92.0898 18.5286 92.3372 17.2917 92.832 16.1328C93.3398 14.9609 94.0234 13.9453 94.8828 13.0859C95.7422 12.2135 96.7448 11.5299 97.8906 11.0352C99.0495 10.5273 100.286 10.2734 101.602 10.2734ZM101.562 12.0508C100.547 12.0508 99.6875 12.2461 98.9844 12.6367C98.2943 13.0273 97.7344 13.5742 97.3047 14.2773C96.875 14.9805 96.5625 15.8138 96.3672 16.7773C96.1849 17.7409 96.0938 18.7891 96.0938 19.9219C96.0938 21.0417 96.1914 22.0768 96.3867 23.0273C96.582 23.9779 96.8945 24.8047 97.3242 25.5078C97.7539 26.1979 98.3138 26.7383 99.0039 27.1289C99.707 27.5195 100.56 27.7148 101.562 27.7148C102.565 27.7148 103.418 27.5195 104.121 27.1289C104.824 26.7383 105.397 26.1979 105.84 25.5078C106.296 24.8047 106.621 23.9779 106.816 23.0273C107.025 22.0768 107.129 21.0417 107.129 19.9219C107.129 18.7891 107.025 17.7409 106.816 16.7773C106.621 15.8138 106.296 14.9805 105.84 14.2773C105.397 13.5742 104.824 13.0273 104.121 12.6367C103.418 12.2461 102.565 12.0508 101.562 12.0508Z" fill="currentColor"/>
                            </svg>

                       
                            <svg xmlns="http://www.w3.org/2000/svg" width="197" height="41" viewBox="0 0 197 41" fill="none" className='revitea-font fugaz'>
                                
  <path d="M19.72 18.52H9.08L7.24 29.08H0L5.08 0.280001H25.16L24.04 6.52H11.16L10.16 12.28H20.8L19.72 18.52Z" fill="currentColor"/>
  <path d="M42.7203 22.92C42.7203 23.6133 43.067 23.96 43.7603 23.96C44.4803 23.96 45.0803 23.8267 45.5603 23.56L45.3603 28.08C44.0803 29.12 42.6403 29.64 41.0403 29.64C38.027 29.64 36.387 28.48 36.1203 26.16C34.5203 28.48 32.3603 29.64 29.6403 29.64C26.947 29.64 25.2003 29.0267 24.4003 27.8C23.867 27.0267 23.6003 26.1467 23.6003 25.16C23.6003 24.1733 23.6803 23.2667 23.8403 22.44L26.0803 9.84H32.8803L31.0003 20.48C30.9203 20.96 30.8803 21.44 30.8803 21.92C30.8803 23.2 31.6003 23.84 33.0403 23.84C34.2403 23.84 35.2003 23.4267 35.9203 22.6L38.2003 9.84H45.0003L42.7603 22.44C42.7336 22.6 42.7203 22.76 42.7203 22.92Z" fill="currentColor"/>
  <path d="M65.6497 29.72C65.063 33.1067 63.7164 35.7867 61.6097 37.76C59.5297 39.7333 57.143 40.72 54.4497 40.72C51.7564 40.72 49.8097 40.2267 48.6097 39.24C47.4364 38.2533 46.8497 36.96 46.8497 35.36C46.8497 33.0133 48.343 30.9733 51.3297 29.24C49.063 28.52 47.9297 26.8 47.9297 24.08C47.9297 23.4133 47.9964 22.68 48.1297 21.88L48.9297 17.2C49.3564 14.8 50.343 12.8933 51.8897 11.48C53.4364 10.04 55.4364 9.32 57.8897 9.32C60.3697 9.32 62.063 9.92 62.9697 11.12L63.2097 9.84H69.1697L65.6497 29.72ZM55.0897 21C55.0364 21.24 55.0097 21.5733 55.0097 22C55.0097 22.4267 55.2097 22.8533 55.6097 23.28C56.0097 23.68 56.6764 23.88 57.6097 23.88C58.5697 23.88 59.3964 23.5067 60.0897 22.76L61.2897 16.04C60.9164 15.3733 60.2097 15.04 59.1697 15.04C58.1297 15.04 57.3164 15.3067 56.7297 15.84C56.143 16.3733 55.7697 17.0933 55.6097 18L55.0897 21ZM55.3697 35C57.103 35 58.2364 33.4267 58.7697 30.28L59.1697 27.96C55.463 29.6933 53.6097 31.44 53.6097 33.2C53.6097 33.7333 53.7564 34.16 54.0497 34.48C54.3697 34.8267 54.8097 35 55.3697 35Z" fill="currentColor"/>
  <path d="M89.0753 22.92C89.0753 23.6133 89.422 23.96 90.1153 23.96C90.8353 23.96 91.4353 23.8267 91.9153 23.56L91.7153 28.08C90.4353 29.12 88.9953 29.64 87.3953 29.64C84.462 29.64 82.8353 28.5733 82.5153 26.44C81.182 28.5733 79.222 29.64 76.6353 29.64C72.262 29.64 70.0753 27.76 70.0753 24C70.0753 23.36 70.142 22.6533 70.2753 21.88L71.1153 17.2C71.542 14.8 72.5153 12.8933 74.0353 11.48C75.582 10.04 77.582 9.32 80.0353 9.32C82.5153 9.32 84.1953 9.89333 85.0753 11.04L85.2753 9.84H91.3553L89.1153 22.44C89.0886 22.6 89.0753 22.76 89.0753 22.92ZM77.2353 21C77.182 21.24 77.1553 21.5733 77.1553 22C77.1553 22.4267 77.3553 22.8533 77.7553 23.28C78.1553 23.68 78.822 23.88 79.7553 23.88C80.7153 23.88 81.542 23.5067 82.2353 22.76L83.4353 16.04C83.142 15.3733 82.4486 15.04 81.3553 15.04C79.302 15.04 78.102 16.0267 77.7553 18L77.2353 21Z" fill="currentColor"/>
  <path d="M111.218 29.08H93.2578L94.2578 23.48L105.538 15.44H95.6578L96.6578 9.84H114.618L113.618 15.44L102.698 23.48H112.218L111.218 29.08Z" fill="currentColor"/>
  <path d="M141.068 0C147.494 0 150.708 2.62667 150.708 7.88C150.708 8.76 150.614 9.70667 150.428 10.72L149.028 18.72C148.388 22.4267 147.001 25.1733 144.868 26.96C142.734 28.7467 139.734 29.64 135.868 29.64C132.001 29.64 129.308 28.7467 127.788 26.96C126.748 25.7333 126.228 24.04 126.228 21.88C126.228 20.92 126.334 19.8667 126.548 18.72L127.948 10.72C129.201 3.57333 133.574 0 141.068 0ZM136.948 23.44C138.281 23.44 139.348 23.0933 140.148 22.4C140.948 21.7067 141.508 20.4267 141.828 18.56L143.188 10.88C143.268 10.3467 143.308 9.86667 143.308 9.44C143.308 7.28 142.214 6.2 140.028 6.2C137.281 6.25333 135.641 7.81333 135.108 10.88L133.748 18.56C133.641 19.2267 133.588 19.92 133.588 20.64C133.588 22.5067 134.708 23.44 136.948 23.44Z" fill="currentColor"/>
  <path d="M165.07 16.8C165.07 15.6533 164.51 15.08 163.39 15.08C162.297 15.08 161.39 15.4933 160.67 16.32L158.43 29.08H151.63L155.03 9.84H161.35L160.91 12.2C162.484 10.2533 164.47 9.28 166.87 9.28C169.27 9.28 170.83 9.86667 171.55 11.04C172.004 11.7867 172.23 12.64 172.23 13.6C172.23 14.56 172.164 15.4533 172.03 16.28L170.95 22.44C170.924 22.6 170.91 22.7467 170.91 22.88C170.91 23.6 171.31 23.96 172.11 23.96C172.724 23.96 173.27 23.8267 173.75 23.56L173.55 28.08C172.297 29.12 170.87 29.64 169.27 29.64C165.644 29.64 163.83 28.12 163.83 25.08C163.83 24.5467 163.884 23.9733 163.99 23.36L164.95 18.04C165.03 17.56 165.07 17.1467 165.07 16.8Z" fill="currentColor"/>
  <path d="M184.177 29.64C178.63 29.64 175.857 27.72 175.857 23.88C175.857 23.3467 175.91 22.7733 176.017 22.16L176.857 17.2C177.31 14.64 178.483 12.68 180.377 11.32C182.297 9.93333 184.83 9.24 187.977 9.24C193.337 9.24 196.017 11.2667 196.017 15.32C196.017 15.9067 195.963 16.5467 195.857 17.24L195.377 20.08H183.177L183.017 21C182.963 21.32 182.937 21.6133 182.937 21.88C182.937 23.3467 183.803 24.08 185.537 24.08C186.177 24.08 186.723 23.88 187.177 23.48C187.63 23.08 187.897 22.6133 187.977 22.08L194.617 22.16C193.737 27.1467 190.257 29.64 184.177 29.64ZM188.977 17.64C189.083 17.1867 189.137 16.7733 189.137 16.4C189.137 16 188.963 15.6 188.617 15.2C188.27 14.8 187.71 14.6 186.937 14.6C186.19 14.6 185.497 14.8533 184.857 15.36C184.243 15.8667 183.817 16.6267 183.577 17.64H188.977Z" fill="currentColor"/>
</svg>
                        </div>
                    </div>
                    <div className='revitea-creations'>
                        
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
                <div className="project-dark project-iteration">
                <section
                    id='iterations'
                    className='main-section '>
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
                        <div className="iterate-img">
                            <p className="design-stage">Initial Design</p>

                        <img
                            src='/Revitea/initial.svg'
                            alt='Initial mockup of label'
                            className='label-img'
                            loading='lazy'
                            decoding='async'
                        />
                        </div>
                        <div className="iterate-img">
                            <p className="design-stage">Re-Design</p>

                        <img
                            src='/Revitea/attempt.svg'
                            alt='Second version of label'
                            className='label-img'
                            loading='lazy'
                            decoding='async'
                        />
                        </div>
                         <div className="iterate-img">
                            <p className="design-stage">Final Design</p>

                        <img
                            src='/Revitea/finalLabel.svg'
                            alt='Final label design'
                            className='label-img'
                            loading='lazy'
                            decoding='async'
                        />
                        </div>
                    </div>
                </section>
                </div>
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
                            loading='lazy'
                            decoding='async'
                        />
                        <img
                            src='/Revitea/final02.png'
                            alt='Final version of Blueberry flavour'
                            className='final-img'
                            loading='lazy'
                            decoding='async'
                        />
                        <img
                            src='/Revitea/final03.png'
                            alt='Final version of Lavender flavour'
                            className='final-img'
                            loading='lazy'
                            decoding='async'
                        />
                    </div>
                </section>
            </div>
            <div className="project-dark">

            <section
                id='models'
                className='main-section'>
                <h2 className='section-title'>Check it out!</h2>
                <Cans />
            </section>
            </div>
        </>
    );
}
