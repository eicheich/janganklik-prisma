'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const materiData = [
    {
        id: 'phishing',
        icon: 'ri-mail-send-line',
        color: '#ff0055',
        title: 'Phishing & APK Scam',
        subtitle: 'Modus "Paket Resi" & Link Berbahaya',
        desc: 'Penipu menyamar sebagai kurir, bank, atau instansi terpercaya untuk mencuri data Anda melalui link atau file APK berbahaya.',
        realCase: '📱 "Paket Anda tertahan di gudang. Klik link untuk cek resi..." - Chat dari nomor tidak dikenal yang mengirim file .apk',
        prevention: [
            { icon: 'ri-delete-bin-line', text: 'Hapus langsung chat/file dari nomor tidak dikenal' },
            { icon: 'ri-file-search-line', text: 'Cek ekstensi file: .jpg/.png = foto, .apk/.exe = BAHAYA!' },
            { icon: 'ri-lock-password-line', text: 'OTP adalah RAHASIA - Bank/Kurir tidak pernah minta OTP via chat' },
            { icon: 'ri-link-unlink', text: 'Jangan klik link dari sumber tidak dikenal' }
        ],
        stats: { victims: '32%', loss: 'Rp 2.7T', method: 'Chat/SMS' }
    },
    {
        id: 'soceng',
        icon: 'ri-user-voice-line',
        color: '#9d00ff',
        title: 'Social Engineering',
        subtitle: 'Manipulasi Psikologis',
        desc: 'Penipu memanfaatkan emosi manusia - rasa takut, senang, penasaran, atau panik - agar korban memberikan data rahasia secara sukarela.',
        realCase: '📞 "Mama, aku nabrak mobil! Butuh transfer cepat!" - Padahal nomornya palsu (spoofed)',
        prevention: [
            { icon: 'ri-phone-line', text: 'Verifikasi langsung - Telepon nomor resmi keluarga/bank' },
            { icon: 'ri-brain-line', text: 'STOP-THINK-ACT: Tarik napas, jangan langsung transfer!' },
            { icon: 'ri-question-line', text: 'Terlalu bagus/buruk = kemungkinan besar penipuan' },
            { icon: 'ri-timer-line', text: 'Waspada pesan "urgent" yang menekan waktu' }
        ],
        stats: { victims: '28%', loss: 'Rp 1.8T', method: 'Telepon/Chat' }
    },
    {
        id: 'password',
        icon: 'ri-key-2-line',
        color: '#00f3ff',
        title: 'Password Hygiene',
        subtitle: 'Rahasia Digital Anda',
        desc: '80% kebocoran data dimulai dari password lemah. Bayangkan satu kunci untuk semua pintu - jika diketahui orang, semuanya bisa dibobol!',
        realCase: '🔓 Password "123456" atau tanggal lahir masih digunakan jutaan orang - dan hacker tahu itu!',
        prevention: [
            { icon: 'ri-shield-check-line', text: 'Aktifkan 2FA di semua akun penting' },
            { icon: 'ri-apps-line', text: 'Gunakan Password Manager (Bitwarden, LastPass)' },
            { icon: 'ri-text', text: 'Minimal 12 karakter: Huruf + Angka + Simbol' },
            { icon: 'ri-refresh-line', text: 'Password berbeda untuk setiap akun' }
        ],
        stats: { victims: '45%', loss: 'Data Pribadi', method: 'Credential Stuffing' }
    }
];

const emergencySteps = [
    {
        step: 1,
        icon: 'ri-wifi-off-line',
        title: 'Putus Koneksi',
        desc: 'Aktifkan Airplane Mode atau cabut WiFi. Ini memutus akses hacker yang sedang mencuri data.',
        time: '30 detik',
        color: '#ff0055'
    },
    {
        step: 2,
        icon: 'ri-delete-bin-2-line',
        title: 'Hapus Malware',
        desc: 'Buka Settings > Apps. Cari aplikasi tanpa icon atau nama aneh - HAPUS SEGERA!',
        time: '2 menit',
        color: '#ff6b00'
    },
    {
        step: 3,
        icon: 'ri-lock-password-line',
        title: 'Ganti Password',
        desc: 'JANGAN ganti di HP yang terkena! Pinjam HP lain, ganti semua password, logout dari semua perangkat.',
        time: '5 menit',
        color: '#ffaa00'
    },
    {
        step: 4,
        icon: 'ri-bank-card-line',
        title: 'Blokir Rekening',
        desc: 'Telepon call center bank resmi untuk membekukan rekening/kartu sementara.',
        time: '5 menit',
        color: '#9d00ff'
    },
    {
        step: 5,
        icon: 'ri-restart-line',
        title: 'Factory Reset',
        desc: 'Jika HP panas, baterai boros, iklan muncul sendiri - reset ke pengaturan pabrik.',
        time: 'Terakhir',
        color: '#00f3ff'
    }
];

export default function Education() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const toggleCard = (id: string) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <div className="edu-body">
            <Header />

            <div className="edu-content">
                <div className="sim-header-section">
                    <h1 className="sim-page-title">EDUKASI <span className="text-gradient">KEAMANAN SIBER</span></h1>
                    <p className="sim-page-desc">
                        Keamanan siber bukan hanya urusan pakar IT, tapi tanggung jawab kita semua.
                        Pelajari ancaman digital paling umum dan cara melindungi diri.
                    </p>
                </div>

                {/* Materi Cards Section */}
                <section className="edu-materi-section">
                    <div className="edu-section-header">
                        <h2>Kenali Ancaman Digital</h2>
                        <p>Klik untuk mempelajari lebih detail tentang setiap jenis ancaman</p>
                    </div>

                    <div className="edu-materi-grid">
                        {materiData.map((materi) => (
                            <div
                                key={materi.id}
                                id={materi.id}
                                className={`edu-materi-card ${expandedCard === materi.id ? 'expanded' : ''}`}
                                style={{ '--card-color': materi.color } as React.CSSProperties}
                                onClick={() => toggleCard(materi.id)}
                            >
                                <div className="materi-card-header">
                                    <div className="materi-icon-wrapper">
                                        <i className={materi.icon}></i>
                                    </div>
                                    <div className="materi-header-text">
                                        <h3>{materi.title}</h3>
                                        <span className="materi-subtitle">{materi.subtitle}</span>
                                    </div>
                                    <div className="materi-expand-icon">
                                        <i className={expandedCard === materi.id ? 'ri-subtract-line' : 'ri-add-line'}></i>
                                    </div>
                                </div>

                                <p className="materi-desc">{materi.desc}</p>

                                {/* Stats Mini */}
                                <div className="materi-stats-mini">
                                    <div className="stat-mini">
                                        <span className="stat-mini-value">{materi.stats.victims}</span>
                                        <span className="stat-mini-label">Korban</span>
                                    </div>
                                    <div className="stat-mini">
                                        <span className="stat-mini-value">{materi.stats.loss}</span>
                                        <span className="stat-mini-label">Kerugian</span>
                                    </div>
                                    <div className="stat-mini">
                                        <span className="stat-mini-value">{materi.stats.method}</span>
                                        <span className="stat-mini-label">Metode</span>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div className={`materi-expanded-content ${expandedCard === materi.id ? 'show' : ''}`}>
                                    {/* Real Case */}
                                    <div className="materi-case-box">
                                        <div className="case-label">
                                            <i className="ri-error-warning-line"></i> Contoh Kasus Nyata
                                        </div>
                                        <p>{materi.realCase}</p>
                                    </div>

                                    {/* Prevention Tips */}
                                    <div className="materi-prevention">
                                        <h4><i className="ri-shield-check-line"></i> Cara Mencegah:</h4>
                                        <ul className="prevention-list">
                                            {materi.prevention.map((tip, idx) => (
                                                <li key={idx}>
                                                    <i className={tip.icon}></i>
                                                    <span>{tip.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="materi-card-footer">
                                    <span className="click-hint">
                                        {expandedCard === materi.id ? 'Klik untuk menutup' : 'Klik untuk detail'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Emergency Section */}
                <section className="edu-emergency-section" id="emergency">
                    <div className="emergency-header">
                        <div className="emergency-badge">
                            <i className="ri-alarm-warning-line"></i> PROTOKOL DARURAT
                        </div>
                        <h2>Terlanjur Terkena? <span className="text-gradient">Jangan Panik!</span></h2>
                        <p>90% masalah dapat diselamatkan jika Anda bertindak cepat. Ikuti langkah-langkah ini dalam 5 menit pertama:</p>
                    </div>

                    <div className="emergency-timeline">
                        {emergencySteps.map((step, idx) => (
                            <div
                                key={step.step}
                                className="emergency-step"
                                style={{ '--step-color': step.color } as React.CSSProperties}
                            >
                                <div className="step-connector">
                                    <div className="step-number">{step.step}</div>
                                    {idx < emergencySteps.length - 1 && <div className="step-line"></div>}
                                </div>
                                <div className="step-content">
                                    <div className="step-icon">
                                        <i className={step.icon}></i>
                                    </div>
                                    <div className="step-info">
                                        <div className="step-header">
                                            <h4>{step.title}</h4>
                                            <span className="step-time">{step.time}</span>
                                        </div>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="emergency-tip-box">
                        <i className="ri-lightbulb-flash-line"></i>
                        <div>
                            <strong>PRO TIP:</strong> Simpan nomor emergency bank di kontak HP Anda SEKARANG.
                            Lebih cepat daripada mencari di Google saat panik!
                        </div>
                    </div>

                    {/* Bank Emergency Numbers */}
                    <div className="bank-numbers-grid">
                        <div className="bank-number-card">
                            <span className="bank-name">BCA</span>
                            <span className="bank-number">1500888</span>
                        </div>
                        <div className="bank-number-card">
                            <span className="bank-name">Mandiri</span>
                            <span className="bank-number">14000</span>
                        </div>
                        <div className="bank-number-card">
                            <span className="bank-name">BNI</span>
                            <span className="bank-number">1500046</span>
                        </div>
                        <div className="bank-number-card">
                            <span className="bank-name">BRI</span>
                            <span className="bank-number">14017</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="edu-cta-section">
                    <div className="cta-content">
                        <h3>Siap Menguji Pengetahuan Anda?</h3>
                        <p>Jangan hanya paham teori. Buktikan Anda bisa mendeteksi penipuan dalam skenario nyata!</p>
                        <div className="cta-buttons">
                            <a href="/simulation" className="btn-primary">
                                <i className="ri-gamepad-line"></i> MULAI SIMULASI
                            </a>
                            <a href="/ai-checker" className="btn-secondary">
                                <i className="ri-shield-check-line"></i> CEK LINK DENGAN AI
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
