import React, { useState, useEffect } from 'react';
import './styles.scss';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
    );
};

export default CustomCursor;
