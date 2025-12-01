import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TypingText from '@/components/TypingText';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Tentang() {
    return (<div className="edu-body"> <Header /> <div className="edu-content"> <TypingText text="TENTANG JANGANKLIK!"

        speed={
            80
        }

        className="typing-main-title"

    /> <p className="intro-text"> <strong>JanganKlik !</strong> adalah portal edukasi interaktif yang dirancang khusus untuk meningkatkan kesadaran masyarakat Indonesia terhadap ancaman keamanan siber. </p> <div className="alert-box alert-pulse" style={
        {
            borderColor: 'var(--neon-red)', color: 'var(--neon-red)', background: 'rgba(255, 0, 85, 0.1)'
        }
    }

    > <i className="ri-alert-line"></i> <strong>CRITICAL ALERT:</strong> Portal ini dibuat karena tingginya kasus kejahatan digital di Indonesia. Menurut data Kapolri 2024, kerugian masyarakat akibat penipuan online mencapai <AnimatedCounter end={
        2700000000000
    }

        suffix=" triliun" /> dalam setahun. </div> <h2 className="section-title">Tujuan Kami</h2> <div className="mission-statement"> <div className="mission-content"> <div className="mission-icon"> <i className="ri-shield-check-line"></i> </div> <h3>MISI KRITIS</h3> <p>Mengubah Indonesia menjadi negara yang lebih aman di dunia digital melalui edukasi keamanan siber yang dapat diakses semua orang.</p> </div> </div> <div className="threat-landscape"> <h3>LANDSKAP ANCAMAN INDONESIA</h3> <p>Data terbaru menunjukkan skala masalah yang kita hadapi:</p> <div className="threat-stats"> <div className="threat-stat"> <div className="threat-number"> <AnimatedCounter end={
            221
        }

            suffix="M" /> </div> <div className="threat-label">Pengguna Rentan</div> <div className="threat-desc">Target potensial penjahat siber</div> </div> <div className="threat-stat"> <div className="threat-number"> <AnimatedCounter end={
                403
            }

                suffix="M" /> </div> <div className="threat-label">Serangan Siber</div> <div className="threat-desc">Dalam 2 tahun terakhir</div> </div> <div className="threat-stat"> <div className="threat-number"> <AnimatedCounter end={
                    65
                }

                    suffix="%" /> </div> <div className="threat-label">Korban Muda</div> <div className="threat-desc">Gen Z & Milenial</div> </div> </div> </div> <div className="impact-statement"> <div className="impact-content"> <h4>DAMPAK YANG INGIN DICAPAI</h4> <p><strong>JanganKlik !</strong> hadir untuk mengubah statistik tersebut melalui pendekatan edukasi yang revolusioner - bukan lagi teori kering, tapi pengalaman interaktif yang benar-benar berdampak.</p> <div className="impact-highlight"> <i className="ri-target-line"></i> <span>Mengurangi korban penipuan online hingga 50% dalam 2 tahun</span> </div> </div> </div> <h2 className="section-title">Fitur Utama</h2> <h3>Data Fakta</h3> <p> Statistik terkini tentang kondisi keamanan siber di Indonesia, berdasarkan sumber terpercaya seperti BSSN dan APJII. </p> <h3>Edukasi Komprehensif</h3> <p> Panduan lengkap tentang berbagai jenis ancaman siber: </p> <ul> <li><strong>Phishing & APK Scam</strong> - Modus penipuan melalui tautan dan file berbahaya</li> <li><strong>Social Engineering</strong> - Manipulasi psikologis untuk mendapatkan data</li> <li><strong>Password Hygiene</strong> - Manajemen kata sandi yang aman</li> <li><strong>Emergency Response</strong> - Langkah-langkah jika terlanjur menjadi korban</li> </ul> <h3>Simulasi Interaktif</h3> <p> Pengalaman belajar yang unik melalui simulasi chat phishing. Uji kemampuan Anda mengenali penipuan dalam skenario nyata yang sering terjadi di Indonesia. </p> <h2 className="section-title">Tim Pengembang</h2> <p> Portal ini dikembangkan oleh tim yang passionate tentang keamanan siber dan edukasi digital. Kami percaya bahwa pengetahuan adalah pertahanan terbaik terhadap ancaman siber. </p> <h2 className="section-title">Hubungi Kami</h2> <p> Punya pertanyaan, saran, atau ingin berkontribusi? Kami terbuka untuk diskusi dan kolaborasi. </p> <div className="cta-section"> <h3>Siap Belajar Keamanan Siber?</h3> <p>Mulai dari halaman edukasi atau langsung uji kemampuan Anda di simulasi !</p> <br /> <div className="cta-buttons"> <a href="/education" className="btn-primary"> PELAJARI EDUKASI <i className="ri-book-open-line"></i> </a> <a href="/simulation" className="btn-glitch"> COBA SIMULASI <i className="ri-gamepad-line"></i> </a> </div> </div> </div> <Footer /> </div>);
}
