'use client';

import { useEffect, useRef } from 'react';

export default function HackerText({ text, className }: { text: string; className?: string }) {
    const elementRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
        let iteration = 0;
        const length = text.length;
        const intervalMs = 35;

        // Start with scrambled text
        element.innerText = text.split("").map(() => letters[Math.floor(Math.random() * letters.length)]).join("");

        const iv = setInterval(() => {
            element.innerText = element.innerText.split("").map((ch, idx) => {
                if (idx < iteration) return text[idx];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");

            iteration += 1 / 3;

            if (iteration >= length) {
                clearInterval(iv);
                element.innerText = text;
            }
        }, intervalMs);

        // Hover effect
        const handleMouseOver = () => {
            let hoverIteration = 0;
            const hoverIv = setInterval(() => {
                element.innerText = element.innerText.split("").map((ch, idx) => {
                    if (idx < hoverIteration) return text[idx];
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("");

                hoverIteration += 1 / 3;

                if (hoverIteration >= length) {
                    clearInterval(hoverIv);
                    element.innerText = text;
                }
            }, intervalMs);
        };

        element.addEventListener('mouseover', handleMouseOver);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
        };
    }, [text]);

    return (
        <h1
            ref={elementRef}
            className={className}
            data-value={text}
        >
            {text}
        </h1>
    );
}
