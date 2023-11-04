import React, { useState, useEffect } from 'react';
import './styles/ScrollingText.css'
const ScrollingText = ({ textArray, interval = 1000 * 5 }) => { // 2000
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, interval);

        return () => {
            clearInterval(textInterval);
        };
    }, [textArray, interval]);

    return (
        <div className="scrolling-text-container">
            <div className="scrolling-text">
            <span className='gradient-text'>
                {textArray[currentIndex]}
            </span>!
            </div>
        </div>
    );
}

export default ScrollingText;
