/* eslint-disable react-hooks/immutability */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ChatMessage {
    type: string;
    text: string;
}

const LEVELS = [
    {
        id: 1,
        badge: 'LEVEL 1: PHISHING',
        title: "JANGAN ASAL <span class='text-gradient'>KLIK!</span>",
        desc: 'Ada nomor asing kirim file mencurigakan berformat **.apk**. Tugas lo: **Amankan data pribadi!**',
        chat: [
            {
                type: 'incoming',
                text: 'Permisi kak, paket J&T sudah sampai alamat. Mohon cek foto resi di bawah ini ya 🙏',
            },
            {
                type: 'incoming file',
                text: '<i class="ri-file-android-line"></i><div><span>LIHAT_FOTO_PAKET.apk</span><small>2.4 MB</small></div>',
            },
        ],
        choices: [
            {
                id: 1,
                label: 'Klik Filenya',
                isSafe: false,
                response: 'Oke aku klik ya kak...',
            },
            {
                id: 2,
                label: 'Block & Report',
                isSafe: true,
                response: 'Gak mau. Ini penipuan .APK kan? Bye!',
            },
        ],
        failMessage: 'HP ANDA DIHACK! Saldo M-Banking: Rp 0',
        passMessage: 'MISSION PASSED: ANDA CERDAS!',
    },
    // Add more levels as needed
];

export default function Simulation() {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [gameActive, setGameActive] = useState(true);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [status, setStatus] = useState("STATUS: MENUNGGU KEPUTUSAN...");
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        loadLevel(currentLevel);
    }, [currentLevel]);

    const loadLevel = (levelId: number) => {
        const level = LEVELS.find(l => l.id === levelId);
        if (!level) return;
        setChatMessages(level.chat);
        setStatus("STATUS: MENUNGGU KEPUTUSAN...");
        setGameActive(true);
        setShowNext(false);
    };

    const playGame = (choiceId: number) => {
        if (!gameActive) return;
        setGameActive(false);
        const level = LEVELS.find(l => l.id === currentLevel);
        if (!level) return;
        const choice = level.choices.find(c => c.id === choiceId);
        if (!choice) return;

        setChatMessages(prev => [...prev, { type: 'outgoing', text: choice.response }]);

        setTimeout(() => {
            if (choice.isSafe) {
                setChatMessages(prev => [...prev, { type: 'incoming', text: "Nomor ini memblokir Anda." }]);
                setStatus(level.passMessage);
                if (currentLevel < LEVELS.length) setShowNext(true);
            } else {
                setChatMessages([{ type: 'fail', text: level.failMessage }]);
                setStatus("GAME OVER: ANDA TERKECOH!");
                setShowNext(true);
            }
        }, 1000);
    };

    const level = LEVELS.find(l => l.id === currentLevel);

    if (!level) return <div>Level not found</div>;

    return (
        <>
            <Header />

            <div className="sim-body">
                

                <div className="sim-fullscreen">
                    <div className="sim-instruction">
                        <div className="badge-level">{level.badge}</div>
                        <h1 dangerouslySetInnerHTML={{ __html: level.title }} />
                        <p dangerouslySetInnerHTML={{ __html: level.desc }} />
                        <div id="game-status" className="status-box">
                            {status}
                        </div>
                        {showNext && (
                            <div className="next-level-btn">
                                <a href={`/simulation?level=${currentLevel + 1}`} className="btn-primary">
                                    LANJUT LEVEL BERIKUTNYA <i className="ri-skip-forward-line"></i>
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="phone-mockup tilt-element">
                        <div className="phone-header">
                            <div className="avatar"></div>
                            <div>
                                <h4>+62 812-xxxx-xxxx</h4>
                                <small>Online</small>
                            </div>
                        </div>
                        <div className="chat-area" id="chat-box">
                            {chatMessages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`msg ${msg.type}`}
                                    dangerouslySetInnerHTML={{ __html: msg.text }}
                                />
                            ))}
                        </div>
                        {gameActive && (
                            <div className="choices" id="choices-area">
                                {level.choices.map((choice) => (
                                    <button
                                        key={choice.id}
                                        onClick={() => playGame(choice.id)}
                                        className={choice.isSafe ? 'btn-safe' : 'btn-danger'}
                                    >
                                        {choice.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
