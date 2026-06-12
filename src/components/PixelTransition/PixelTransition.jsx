import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./PixelTransition.css";

export default function PixelTransition({
    firstContent,
    secondContent,
    gridSize = 7,
    pixelColor = "currentColor",
    animationStepDuration = 0.3,
    once = false,
    aspectRatio = "100%",
    className = "",
    style = {},
}) {
    const containerRef = useRef(null);
    const pixelGridRef = useRef(null);
    const activeRef = useRef(null);
    const delayedCallRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;

    useEffect(() => {
        const pixelGridEl = pixelGridRef.current;
        if (!pixelGridEl) return;

        pixelGridEl.innerHTML = "";

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement("div");
                pixel.classList.add("pixelated-image-card__pixel");
                pixel.style.backgroundColor = pixelColor;

                const size = 100 / gridSize;
                pixel.style.width = `${size}%`;
                pixel.style.height = `${size}%`;
                pixel.style.left = `${col * size}%`;
                pixel.style.top = `${row * size}%`;
                pixelGridEl.appendChild(pixel);
            }
        }
    }, [gridSize, pixelColor]);

   
    const handleEnter = () => {
        if (!isActive) animatePixels(true);
    };
    const handleLeave = () => {
        setIsActive(false);
    };
    const handleClick = () => {
        if (!isActive) animatePixels(true);
        else if (isActive && !once) animatePixels(false);
    };

    return (
        <div
            ref={containerRef}
            className={`pixelated-image-card ${className}`}
            style={style}
            onMouseEnter={!isTouchDevice ? handleEnter : undefined}
            onMouseLeave={!isTouchDevice ? handleLeave : undefined}
            onClick={isTouchDevice ? handleClick : undefined}
            onFocus={!isTouchDevice ? handleEnter : undefined}
            onBlur={!isTouchDevice ? handleLeave : undefined}
            tabIndex={0}>
            <div style={{ paddingTop: aspectRatio }} />
            <div
                className='pixelated-image-card__default'
                aria-hidden={isActive}>
                {firstContent}
            </div>
            <div
                className='pixelated-image-card__active'
                ref={activeRef}
                aria-hidden={!isActive}>
                {secondContent}
            </div>
            <div
                className='pixelated-image-card__pixels'
                ref={pixelGridRef}
            />
        </div>
    );
}