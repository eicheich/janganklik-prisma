'use client';

import { useEffect, useState } from 'react';

interface TerminalLine {
    text: string;
    type: 'command' | 'output' | 'error' | 'success';
    delay?: number;
}

interface TerminalProps {
    lines: TerminalLine[];
    title?: string;
    className?: string;
}

export default function Terminal({ lines, title = "Terminal", className = '' }: TerminalProps) {
    const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (currentLineIndex >= lines.length) return;

        const currentLine = lines[currentLineIndex];
        const delay = currentLine.delay || 1000;

        const timer = setTimeout(() => {
            setIsTyping(true);

            // Simulate typing effect
            setTimeout(() => {
                setVisibleLines(prev => [...prev, currentLine]);
                setCurrentLineIndex(prev => prev + 1);
                setIsTyping(false);
            }, 500);
        }, delay);

        return () => clearTimeout(timer);
    }, [currentLineIndex, lines]);

    const getLineClass = (type: string) => {
        switch (type) {
            case 'command': return 'terminal-command';
            case 'error': return 'terminal-error';
            case 'success': return 'terminal-success';
            default: return 'terminal-output';
        }
    };

    return (
        <div className={`terminal ${className}`}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-button close"></span>
                    <span className="terminal-button minimize"></span>
                    <span className="terminal-button maximize"></span>
                </div>
                <div className="terminal-title">{title}</div>
            </div>

            <div className="terminal-body">
                {visibleLines.map((line, index) => (
                    <div key={index} className={`terminal-line ${getLineClass(line.type)}`}>
                        {line.type === 'command' && <span className="terminal-prompt">$ </span>}
                        {line.text}
                    </div>
                ))}

                {isTyping && (
                    <div className="terminal-line terminal-typing">
                        <span className="terminal-cursor">|</span>
                    </div>
                )}
            </div>
        </div>
    );
}
