/* eslint-disable react-hooks/immutability */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
        desc: 'Ada nomor asing kirim file mencurigakan berformat <strong>.apk</strong>. Tugas lo: <strong>Amankan data pribadi!</strong>',
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
        failMessage: 'HP ANDA DIHACK! Saldo M-Banking: Rp 0 - Data Pribadi Dicuri!',
        passMessage: 'MISSION PASSED: ANDA CERDAS!',
    },
    {
        id: 2,
        badge: 'LEVEL 2: SOCIAL ENGINEERING',
        title: "STOP! <span class='text-gradient'>THINK!</span> ACT!",
        desc: 'Anak Anda kirim pesan butuh uang darurat. Apa yang Anda lakukan? <strong>Verifikasi dulu sebelum transfer!</strong>',
        chat: [
            {
                type: 'incoming',
                text: 'Ma, anak Mama kecelakaan motor. Butuh uang cepet buat ganti rugi. Transfer ke rekening ini ya: BCA 1234567890 a.n Ahmad',
            },
            {
                type: 'incoming',
                text: 'Mama tolong ya, udah urgent banget. Nanti Mama ganti kalau ada uang. Please Ma 😭',
            },
        ],
        choices: [
            {
                id: 1,
                label: 'Transfer Segera',
                isSafe: false,
                response: 'Iya nak, Mama transfer sekarang ya. Tunggu sebentar...',
            },
            {
                id: 2,
                label: 'Telepon Langsung',
                isSafe: true,
                response: 'Nak, Mama telepon dulu ya. Pastiin ini beneran kamu.',
            },
        ],
        failMessage: 'DUIT ANDA HILANG! Penipu Kabur dengan Rp 5.000.000 - Keluarga Terancam!',
        passMessage: 'MISSION PASSED: ANDA TELITI!',
    },
    {
        id: 3,
        badge: 'LEVEL 3: OTP PHISHING',
        title: "OTP adalah <span class='text-gradient'>RAHASIA!</span>",
        desc: 'Bank Anda minta kode OTP via chat? <strong>WASPADA!</strong> Bank asli tidak pernah minta OTP lewat WhatsApp.',
        chat: [
            {
                type: 'incoming',
                text: 'Selamat pagi Bpk/Ibu. Dari Bank Mandiri. Ada transaksi mencurigakan di rekening Anda. Mohon konfirmasi dengan kirim kode OTP yang masuk ke HP Bpk/Ibu.',
            },
            {
                type: 'incoming',
                text: 'Untuk keamanan rekening, kami perlu verifikasi OTP sekarang juga. Terima kasih atas kerjasamanya.',
            },
        ],
        choices: [
            {
                id: 1,
                label: 'Kirim Kode OTP',
                isSafe: false,
                response: 'Baik, kode OTP saya: 123456',
            },
            {
                id: 2,
                label: 'Hubungi Bank Resmi',
                isSafe: true,
                response: 'Saya akan hubungi call center Bank Mandiri langsung. Terima kasih.',
            },
        ],
        failMessage: 'REKENING ANDA DIHACK! Semua Uang Dicuri - Identitas Dijual di Dark Web!',
        passMessage: 'MISSION PASSED: ANDA WASPADA!',
    },
    {
        id: 4,
        badge: 'LEVEL 4: INVESTASI PALSU',
        title: "JANGAN TERTIPU <span class='text-gradient'>KEUNTUNGAN!</span>",
        desc: 'Ada tawaran investasi dengan return 100% dalam sebulan. <strong>Realistis kah?</strong> Cek kredibilitas dulu!',
        chat: [
            {
                type: 'incoming',
                text: 'Selamat! Anda terpilih sebagai member VIP program investasi CryptoElite. Modal awal Rp 1jt return 300% dalam 30 hari!',
            },
            {
                type: 'incoming',
                text: 'Program terbatas, buruan daftar sekarang. Transfer ke rekening berikut: BCA 9876543210 a.n PT CryptoElite',
            },
        ],
        choices: [
            {
                id: 1,
                label: 'Transfer Sekarang',
                isSafe: false,
                response: 'Wah menarik! Saya transfer sekarang ya.',
            },
            {
                id: 2,
                label: 'Cek OJK & BI',
                isSafe: true,
                response: 'Saya akan cek dulu di website OJK dan BI apakah legal.',
            },
        ],
        failMessage: 'MODAL ANDA HILANG! Investasi Palsu - Perusahaan Kabur Tanpa Jejak!',
        passMessage: 'MISSION PASSED: ANDA CERMAT!',
    },
    {
        id: 5,
        badge: 'LEVEL 5: CUSTOMER SERVICE PALSU',
        title: "VERIFIKASI <span class='text-gradient'>NOMOR RESMI!</span>",
        desc: 'Shopee kirim pesan komplain produk? <strong>Cek nomornya!</strong> Scammer sering pakai nomor mirip tapi beda.',
        chat: [
            {
                type: 'incoming',
                text: 'Halo Customer, dari Shopee Care. Pesanan Anda #SP123456 ada komplain. Mohon konfirmasi data untuk refund.',
            },
            {
                type: 'incoming',
                text: 'Kirim foto KTP dan nomor rekening untuk proses refund sebesar Rp 500.000. Segera ya, batas waktu 24 jam.',
            },
        ],
        choices: [
            {
                id: 1,
                label: 'Kirim Data Pribadi',
                isSafe: false,
                response: 'Baik, saya kirim foto KTP dan nomor rekening ya.',
            },
            {
                id: 2,
                label: 'Cek Aplikasi Resmi',
                isSafe: true,
                response: 'Saya akan cek langsung di aplikasi Shopee resmi. Terima kasih.',
            },
        ],
        failMessage: 'DATA ANDA DICURI! Identitas Digunakan untuk Kejahatan Lain - Anda Jadi Korban Berikutnya!',
        passMessage: 'MISSION PASSED: ANDA JUARA KEAMANAN SIBER!',
    },
];

function SimulationContent() {
    const searchParams = useSearchParams();
    const [currentLevel, setCurrentLevel] = useState(1);
    const [gameActive, setGameActive] = useState(true);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [status, setStatus] = useState("STATUS: MENUNGGU KEPUTUSAN...");
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        const levelParam = searchParams.get('level');
        const level = levelParam ? parseInt(levelParam) : 1;
        setCurrentLevel(level);
    }, [searchParams]);

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

                    <div className={`phone-mockup tilt-element ${chatMessages.some(msg => msg.type === 'fail') ? 'danger' : ''}`}>
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
                        {chatMessages.some(msg => msg.type === 'fail') && (
                            <div className="retry-section">
                                <button
                                    className="retry-btn-phone"
                                    onClick={() => setCurrentLevel(1)}
                                >
                                    <i className="ri-refresh-line"></i> MULAI DARI AWAL
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default function Simulation() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SimulationContent />
        </Suspense>
    );
}
