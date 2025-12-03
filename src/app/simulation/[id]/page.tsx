'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { SCENARIOS } from '@/lib/simulation-data';

export default function SimulationGamePage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const scenarioId = id ? parseInt(Array.isArray(id) ? id[0] : id) : null;
    const scenario = SCENARIOS.find(s => s.id === scenarioId);

    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost' | 'level-complete'>('playing');
    const [feedback, setFeedback] = useState<{ type: 'success' | 'fail'; message: string } | null>(null);

    // Phone call states
    const [callStatus, setCallStatus] = useState<'ringing' | 'connected' | 'ended'>('ringing');
    const [callDuration, setCallDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Handle phone/video call timer
    useEffect(() => {
        if ((scenario?.interfaceType === 'phone' || scenario?.interfaceType === 'videocall') && callStatus === 'connected') {
            timerRef.current = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [callStatus, scenario?.interfaceType]);

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const answerCall = () => {
        setCallStatus('connected');
        if (audioRef.current) {
            audioRef.current.play();
        }
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const endCall = (result: 'safe' | 'trap') => {
        setCallStatus('ended');
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        if (timerRef.current) clearInterval(timerRef.current);
        handleInteraction(result);
    };

    if (!scenario) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Skenario Tidak Ditemukan</h1>
                    <button onClick={() => router.push('/simulation')} className="text-blue-400 hover:underline">Kembali ke Menu</button>
                </div>
            </div>
        );
    }

    const handleInteraction = (type: 'trap' | 'safe', message?: string) => {
        if (gameStatus !== 'playing') return;

        if (type === 'trap') {
            setFeedback({ type: 'fail', message: message || scenario.failMessage });
            setGameStatus('lost');
        } else {
            setFeedback({ type: 'success', message: message || scenario.passMessage });
            setGameStatus('level-complete');
        }
    };

    const restartGame = () => {
        setGameStatus('playing');
        setFeedback(null);
    };

    const FeedbackOverlay = feedback ? (
        <div className={`sim-feedback-overlay ${feedback.type}`} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            zIndex: 50,
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center'
        }}>
            <style>{`
                .btn-ulang:hover {
                    color: white !important;
                    background-color: #dc2626 !important;
                    border-color: #dc2626 !important;
                    box-shadow: 0 0 20px rgba(220, 38, 38, 0.6) !important;
                }
                .btn-main:hover {
                    color: white !important;
                    background-color: #16a34a !important;
                    border-color: #16a34a !important;
                    box-shadow: 0 0 20px rgba(22, 163, 74, 0.6) !important;
                }
            `}</style>
            <div className="feedback-content relative w-full flex flex-col items-center" style={{ maxWidth: '280px' }}>
                <div className="feedback-icon" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                    <i className={feedback.type === 'success' ? 'ri-shield-check-fill' : 'ri-alarm-warning-fill'}></i>
                </div>
                <div className="feedback-title" style={{ fontSize: '1.4rem', marginBottom: '8px', fontWeight: '800', letterSpacing: '1px' }}>
                    {feedback.type === 'success' ? 'AMAN!' : 'BAHAYA!'}
                </div>
                <div className="feedback-text mb-8" style={{ fontSize: '0.85rem', lineHeight: '1.4', color: '#fff', maxWidth: '100%', marginBottom: '30px' }}>
                    {feedback.message}
                </div>

                {gameStatus === 'lost' ? (
                    <div style={{ width: '100%' }}>
                        <button
                            onClick={restartGame}
                            className="btn-popup-close btn-ulang"
                            style={{
                                margin: 0,
                                width: '100%',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                padding: '10px',
                                background: 'rgba(220, 38, 38, 0.2)',
                                borderColor: 'rgba(239, 68, 68, 0.5)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <i className="ri-refresh-line" style={{ fontSize: '0.9rem' }}></i> ULANG
                        </button>
                    </div>
                ) : gameStatus === 'level-complete' ? (
                    <div style={{ width: '100%' }}>
                        <button
                            onClick={restartGame}
                            className="btn-popup-close btn-main"
                            style={{
                                margin: 0,
                                width: '100%',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                padding: '10px',
                                background: 'rgba(22, 163, 74, 0.2)',
                                borderColor: 'rgba(34, 197, 94, 0.5)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <i className="ri-refresh-line" style={{ fontSize: '0.9rem' }}></i> ULANG
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setFeedback(null)}
                        className="btn-popup-close"
                        style={{ fontSize: '0.8rem', padding: '8px 20px', borderRadius: '50px' }}
                    >
                        <i className="ri-close-line"></i> TUTUP
                    </button>
                )}
            </div>
        </div>
    ) : null;

    return (
        <div className="sim-body">
            {/* HUD */}
            <div className="sim-hud" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => router.push('/simulation')} className="hud-exit-btn">
                    <i className="ri-arrow-left-line"></i>
                    <span>MENU</span>
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>CURRENT MISSION</span>
                    <span style={{ color: 'var(--neon-blue)', fontWeight: 'bold', fontSize: '1.1rem', textShadow: '0 0 10px rgba(0, 243, 255, 0.3)' }} dangerouslySetInnerHTML={{ __html: scenario.title }}></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ margin: 0, fontSize: '0.9rem', color: 'var(--neon-red)', fontWeight: 'bold', letterSpacing: '1px', textShadow: '0 0 10px rgba(255, 0, 85, 0.5)' }}>
                        {scenario.badge}
                    </div>
                </div>
            </div>

            <div className="sim-fullscreen">
                {/* Instruction Panel */}
                <div className="sim-instruction">
                    <div className="sim-content-scroll" style={{ overflowY: 'auto', paddingRight: '10px', height: '100%' }}>
                        <div className="mb-6">
                            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                                <i className="ri-flag-fill" style={{ color: 'var(--neon-blue)', marginRight: '10px' }}></i>
                                SIMULASI
                            </h3>
                            <p dangerouslySetInnerHTML={{ __html: scenario.desc }} style={{ lineHeight: '1.6', color: '#ccc' }} />
                        </div>

                        {scenario.clue && (
                            <div className="sim-info-box clue" style={{ marginBottom: '20px' }}>
                                <div className="info-icon">
                                    <i className="ri-lightbulb-flash-line"></i>
                                </div>
                                <div className="info-content">
                                    <div className="info-title">PETUNJUK</div>
                                    <div className="info-text">{scenario.clue}</div>
                                </div>
                            </div>
                        )}

                        {scenario.educationalContent && (
                            <div className="sim-info-box edu">
                                <div className="info-icon">
                                    <i className="ri-shield-keyhole-line"></i>
                                </div>
                                <div className="info-content">
                                    <div className="info-title">ANALISIS KEAMANAN</div>
                                    <div className="info-text" dangerouslySetInnerHTML={{ __html: scenario.educationalContent }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Interactive Area */}
                <div className="relative flex justify-center items-center">
                    {/* Feedback Overlay Removed from here */}

                    {scenario.simulationType === 'chat' ? (
                        scenario.interfaceType === 'videocall' && scenario.videoSrc ? (
                            // Video Call Interface with Video Player
                            <div className="phone-mockup phone-interface videocall-ui">
                                {FeedbackOverlay}

                                <div className="videocall-screen">
                                    {/* Video Display Area */}
                                    <div className="videocall-video-container">
                                        {callStatus === 'ringing' && (
                                            <div className="videocall-ringing">
                                                <div className="videocall-avatar-ring">
                                                    <div className="videocall-avatar">
                                                        <i className="ri-user-fill"></i>
                                                    </div>
                                                </div>
                                                <h3 className="videocall-caller-name">+62 813-xxxx-xxxx</h3>
                                                <p className="videocall-status">📹 Video Call Masuk...</p>
                                            </div>
                                        )}
                                        {callStatus === 'connected' && (
                                            <>
                                                <video
                                                    ref={videoRef}
                                                    src={scenario.videoSrc}
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    className="videocall-video"
                                                />
                                                <div className="videocall-overlay-info">
                                                    <div className="videocall-duration">
                                                        <span className="recording-dot"></span>
                                                        {formatDuration(callDuration)}
                                                    </div>
                                                    <div className="videocall-name">"Ayah" (Deepfake)</div>
                                                </div>
                                                <div className="videocall-warning">
                                                    <i className="ri-error-warning-line"></i>
                                                    <span>Minta transfer Rp 25 juta SEKARANG!</span>
                                                </div>
                                            </>
                                        )}
                                        {callStatus === 'ended' && (
                                            <div className="videocall-ended">
                                                <i className="ri-vidicon-off-line"></i>
                                                <p>Video Call Berakhir</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Call Actions */}
                                    <div className="videocall-actions">
                                        {callStatus === 'ringing' && (
                                            <>
                                                <button className="call-btn decline" onClick={() => endCall('safe')}>
                                                    <i className="ri-close-line"></i>

                                                    <span>Tolak</span>
                                                </button>
                                                <button className="call-btn answer video" onClick={answerCall}>
                                                    <i className="ri-vidicon-line"></i>
                                                    <span>Angkat</span>
                                                </button>
                                            </>
                                        )}
                                        {callStatus === 'connected' && (
                                            <>
                                                <button className="call-btn decline" onClick={() => endCall('safe')}>
                                                    <i className="ri-close-line"></i>
                                                    <span>Tutup</span>
                                                </button>
                                                <button className="call-btn danger" onClick={() => endCall('trap')}>
                                                    <i className="ri-money-dollar-circle-line"></i>
                                                    <span>Transfer</span>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : scenario.interfaceType === 'phone' && scenario.audioSrc ? (
                            // Phone Call Interface with Audio
                            <div className="phone-mockup phone-interface phone-call-ui">
                                {FeedbackOverlay}
                                {scenario.audioSrc && <audio ref={audioRef} src={scenario.audioSrc} />}

                                <div className="phone-call-screen">
                                    {/* Caller Info */}
                                    <div className="caller-info">
                                        <div className="caller-avatar">
                                            <i className="ri-bank-line"></i>
                                        </div>
                                        <h3 className="caller-name">{scenario.sender}</h3>
                                        <p className="call-status-text">
                                            {callStatus === 'ringing' && '📞 Panggilan Masuk...'}
                                            {callStatus === 'connected' && `🔴 ${formatDuration(callDuration)}`}
                                            {callStatus === 'ended' && 'Panggilan Berakhir'}
                                        </p>
                                    </div>

                                    {/* Audio Visualizer when connected */}
                                    {callStatus === 'connected' && (
                                        <div className="audio-visualizer">
                                            <div className="audio-bar"></div>
                                            <div className="audio-bar"></div>
                                            <div className="audio-bar"></div>
                                            <div className="audio-bar"></div>
                                            <div className="audio-bar"></div>
                                        </div>
                                    )}

                                    {/* Warning when connected */}
                                    {callStatus === 'connected' && (
                                        <div className="call-warning">
                                            <i className="ri-error-warning-line"></i>
                                            <span>Penelepon meminta kode OTP Anda!</span>
                                        </div>
                                    )}

                                    {/* Call Actions */}
                                    <div className="call-actions">
                                        {callStatus === 'ringing' && (
                                            <>
                                                <button className="call-btn decline" onClick={() => endCall('safe')}>
                                                        <i className="ri-close-line"></i>
                                                    <span>Tolak</span>
                                                </button>
                                                <button className="call-btn answer" onClick={answerCall}>
                                                    <i className="ri-phone-line"></i>
                                                    <span>Angkat</span>
                                                </button>
                                            </>
                                        )}
                                        {callStatus === 'connected' && (
                                            <>
                                                <button className="call-btn decline" onClick={() => endCall('safe')}>
                                                        <i className="ri-close-line"></i>
                                                    <span>Tutup</span>
                                                </button>
                                                <button className="call-btn danger" onClick={() => endCall('trap')}>
                                                    <i className="ri-message-2-line"></i>
                                                    <span>Beri OTP</span>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`phone-mockup ${scenario.interfaceType} ${scenario.interfaceType === 'phone' ? 'phone-interface' : ''} ${scenario.interfaceType === 'videocall' ? 'videocall-interface' : ''}`}>
                                {FeedbackOverlay}
                                <div className="phone-header">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            {scenario.interfaceType === 'phone' && <i className="ri-phone-fill" style={{ fontSize: '1.2rem' }}></i>}
                                            {scenario.interfaceType === 'videocall' && <i className="ri-vidicon-fill" style={{ fontSize: '1.2rem' }}></i>}
                                        </div>
                                        <div>
                                            <h4>{scenario.sender}</h4>
                                            <small>
                                                {scenario.interfaceType === 'email' ? 'To: me' :
                                                    scenario.interfaceType === 'phone' ? '📞 Panggilan Aktif' :
                                                        scenario.interfaceType === 'videocall' ? '📹 Video Call Aktif' : 'Online'}
                                            </small>
                                        </div>
                                    </div>
                                    {scenario.headerAction && (
                                        <button
                                            className="header-action-btn flex items-center gap-2"
                                            onClick={() => handleInteraction('safe')}
                                            title={scenario.headerAction.label}
                                            style={scenario.interfaceType === 'phone' || scenario.interfaceType === 'videocall' ? {
                                                background: 'rgba(255, 0, 85, 0.2)',
                                                borderColor: 'var(--neon-red)',
                                                color: 'var(--neon-red)'
                                            } : {}}
                                        >
                                            <i className={scenario.headerAction.icon}></i>
                                            <span className="text-xs font-bold">{scenario.headerAction.label}</span>
                                        </button>
                                    )}
                                </div>
                                <div className="chat-area">
                                    {scenario.chat?.map((msg, idx) => (
                                        <div
                                            key={idx}
                                            className={`msg ${msg.type} ${msg.isTrap ? 'trap' : ''}`}
                                            onClick={() => msg.isTrap && handleInteraction('trap')}
                                            dangerouslySetInnerHTML={{ __html: msg.text }}
                                        />
                                    ))}
                                </div>
                                {scenario.interfaceType !== 'phone' && scenario.interfaceType !== 'videocall' && (
                                    <div className="phone-input-area">
                                        <div className="fake-input">Ketik pesan...</div>
                                        <div className="fake-send"><i className="ri-send-plane-fill"></i></div>
                                    </div>
                                )}
                                {(scenario.interfaceType === 'phone' || scenario.interfaceType === 'videocall') && (
                                    <div className="phone-input-area" style={{
                                        background: 'rgba(255, 0, 85, 0.1)',
                                        borderTop: '1px solid rgba(255, 0, 85, 0.3)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '15px'
                                    }}>
                                        <button
                                            onClick={() => handleInteraction('safe')}
                                            style={{
                                                background: 'var(--neon-red)',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '50px',
                                                padding: '12px 30px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <i className="ri-phone-off-line"></i>
                                            {scenario.interfaceType === 'phone' ? 'TUTUP TELEPON' : 'AKHIRI CALL'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    ) : (
                        <div className="browser-mockup">
                            {FeedbackOverlay}
                            <div className="browser-header">
                                <div className="browser-dots">
                                    <div className="browser-dot red"></div>
                                    <div className="browser-dot yellow"></div>
                                    <div className="browser-dot green"></div>
                                </div>
                                <div
                                    className={`browser-address-bar ${scenario.simulationType === 'browser' ? 'interactive' : ''}`}
                                    onClick={() => scenario.simulationType === 'browser' && handleInteraction('safe')}
                                >
                                    <i className="ri-lock-unlock-line text-red-500 mr-2"></i>
                                    {scenario.url || 'http://unknown-site.com'}
                                </div>
                                {scenario.simulationType === 'popup' && scenario.headerAction && (
                                    <button
                                        className="ml-auto text-gray-400 hover:text-white"
                                        onClick={() => handleInteraction('safe')}
                                        title={scenario.headerAction.label}
                                        aria-label={scenario.headerAction.label}
                                    >
                                        <i className={scenario.headerAction.icon}></i>
                                    </button>
                                )}
                            </div>
                            <div className="browser-content relative">
                                {scenario.simulationType === 'browser' && (
                                    <div className="login-container">
                                        <div className="fake-logo">faceb00k</div>
                                        <div className="login-form">
                                            <input type="text" placeholder="Email or Phone Number" className="login-input" />
                                            <input type="password" placeholder="Password" className="login-input" />
                                            <button
                                                className="login-btn-fake"
                                                onClick={() => handleInteraction('trap')}
                                            >
                                                Log In
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {scenario.simulationType === 'popup' && (
                                    <div className="scareware-container">
                                        <div className="scareware-overlay">
                                            <div className="scareware-header">
                                                <span>SYSTEM WARNING</span>
                                                <button onClick={() => handleInteraction('safe')} aria-label="Close Warning"><i className="ri-close-line"></i></button>
                                            </div>
                                            <div className="scareware-body">
                                                <i className="ri-alarm-warning-fill scareware-icon"></i>
                                                <div className="scareware-title">VIRUS DETECTED!</div>
                                                <div className="scareware-text">
                                                    Your computer is infected with Trojan.Win32.
                                                    <br />
                                                    Data loss is imminent.
                                                </div>
                                                <button
                                                    className="scareware-btn"
                                                    onClick={() => handleInteraction('trap')}
                                                >
                                                    REMOVE VIRUS NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
