'use client';

import { useState } from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    details: string[];
    color?: string;
}

export default function FeatureCard({ icon, title, description, details, color = 'var(--neon-blue)' }: FeatureCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="feature-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                '--card-color': color,
                '--card-shadow': isHovered ? `0 0 30px ${color}40` : `0 0 15px ${color}20`
            } as React.CSSProperties}
        >
            <div className="feature-icon">
                <i className={icon} />
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className={`feature-details ${isHovered ? 'visible' : ''}`}>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>

            <div className="feature-glow" />
        </div>
    );
}
