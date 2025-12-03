'use client';

import { useEffect, useState, useRef } from 'react';

interface ProgressBarProps {
    label: string;
    percentage: number;
    color?: string;
    delay?: number;
}

export default function ProgressBar({ label, percentage, color = 'var(--neon-green)', delay = 0 }: ProgressBarProps) {
    const [width, setWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible, delay]);

    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(() => {
            setWidth(percentage);
        }, 300);

        return () => clearTimeout(timer);
    }, [isVisible, percentage]);

    return (
        <div ref={ref} className="progress-container">
            <div className="progress-label">
                <span>{label}</span>
                <span className="progress-percentage">{percentage}%</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${width}%`,
                        background: `linear-gradient(90deg, ${color}, ${color}80)`,
                        transition: 'width 1.5s ease-out'
                    }}
                />
            </div>
        </div>
    );
}
