'use client'
import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';

const TypingEffect = () => {
    const [index, setIndex] = useState(0);
    const phrases = ["Automated Forensic Reports"];
    const text = useTypewriter(phrases[index]);

    useEffect(() => {
        if (text === phrases[index]) {
            setIndex((index + 1) % phrases.length);
        }
    }, [text, index, phrases]);

    return (
        <div className="text-center">
            <div className="text-4xl font-bold">CHI-NEXT</div>
            <div className="text-2xl">{text}</div>
        </div>
    );
};

export default TypingEffect;
