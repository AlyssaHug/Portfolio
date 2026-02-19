import "./ScrolLText.css";

export default function ScrollText({
    text,
    direction = "left", // 'left' | 'right' | 'up' | 'down'
    speed = 500, // seconds per full loop
}) {
    const repeated = (text + "       •       ").repeat(
        direction === "up" || direction === "down" ? 10 : 8,
    );
    return (
        <div className='scrollContainer'>
            <div
                className={`track left`}
                style={{ "--speed": `${speed}s` }}>
                <span>{repeated}</span>
                {/* <span>Illustrator</span>
                <span>Photoshop</span>
                <span>InDesign</span>
                <span>Figma</span>
                <span>VS Code</span>
                <span>Github</span>
                <span>Vercel</span>
                <span>React</span>
                <span>Vite</span>
                <span>HTML5</span>
                <span>CSS3</span> */}

                <span>JavaScript</span>
            </div>

            {(direction === "left" || direction === "right") && (
                <>
                    <div className='fadeLeft' />

                    <div className='fadeRight' />
                </>
            )}
        </div>
    );
}
