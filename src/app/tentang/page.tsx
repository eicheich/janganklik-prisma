import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Tentang() {
    return (
        <div className="edu-body">
            <Header />

            <div className="edu-content">
                <h1>TENTANG JANGANKLIK!</h1>
                <p>
                    <strong>JanganKlik!</strong> adalah platform edukasi interaktif yang dirancang khusus untuk meningkatkan kesadaran masyarakat Indonesia terhadap ancaman keamanan siber.
                </p>

                <div className="alert-box" style={{ borderColor: 'var(--neon-red)', color: 'var(--neon-red)', background: 'rgba(255, 0, 85, 0.1)' }}>
                    <i className="ri-alert-line"></i> Platform ini dibuat karena tingginya kasus kejahatan digital di Indonesia. Menurut data Kapolri 2024, kerugian masyarakat akibat penipuan online mencapai Rp 2,7 triliun dalam setahun.
                </div>

                <h2>Tujuan Kami</h2>
                <p>
                    Di era digital saat ini, Indonesia menghadapi tantangan keamanan siber yang semakin kompleks. Menurut data dari BSSN dan APJII 2024:
                </p>
                <ul>
                    <li>221 juta pengguna internet Indonesia menjadi target empuk</li>
                    <li>403 juta serangan siber tercatat dalam 2 tahun terakhir</li>
                    <li>65% korban penipuan online adalah generasi Z dan milenial</li>
                </ul>

                <p>
                    <strong>JanganKlik!</strong> hadir untuk mengubah angka-angka tersebut melalui edukasi interaktif yang menyenangkan dan mudah dipahami.
                </p>

                <h2>Fitur Utama</h2>

                <h3>Data Fakta Real-time</h3>
                <p>
                    Statistik terkini tentang kondisi keamanan siber di Indonesia, berdasarkan sumber terpercaya seperti BSSN dan APJII.
                </p>

                <h3>Edukasi Komprehensif</h3>
                <p>
                    Panduan lengkap tentang berbagai jenis ancaman siber:
                </p>
                <ul>
                    <li><strong>Phishing & APK Scam</strong> - Modus penipuan melalui tautan dan file berbahaya</li>
                    <li><strong>Social Engineering</strong> - Manipulasi psikologis untuk mendapatkan data</li>
                    <li><strong>Password Hygiene</strong> - Manajemen kata sandi yang aman</li>
                    <li><strong>Emergency Response</strong> - Langkah-langkah jika terlanjur menjadi korban</li>
                </ul>

                <h3>Simulasi Interaktif</h3>
                <p>
                    Pengalaman belajar yang unik melalui simulasi chat phishing. Uji kemampuan Anda mengenali penipuan dalam skenario nyata yang sering terjadi di Indonesia.
                </p>

                <h2>Tim Pengembang</h2>
                <p>
                    Platform ini dikembangkan oleh tim yang passionate tentang keamanan siber dan edukasi digital. Kami percaya bahwa pengetahuan adalah pertahanan terbaik terhadap ancaman siber.
                </p>

                <h2>Komitmen Kami</h2>
                <ul>
                    <li><strong>Edukasi Berkelanjutan:</strong> Konten yang selalu update mengikuti perkembangan ancaman terbaru</li>
                    <li><strong>Akses Gratis:</strong> Semua materi tersedia secara gratis untuk semua kalangan</li>
                    <li><strong>Interaktif & Menarik:</strong> Metode pembelajaran yang tidak membosankan</li>
                    <li><strong>Lokal & Relevan:</strong> Konten yang disesuaikan dengan konteks Indonesia</li>
                </ul>

                <h2>Hubungi Kami</h2>
                <p>
                    Punya pertanyaan, saran, atau ingin berkontribusi? Kami terbuka untuk diskusi dan kolaborasi.
                </p>

                <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px', paddingTop: '40px', borderTop: '1px dashed #333' }}>
                    <h3>Siap Belajar Keamanan Siber?</h3>
                    <p>Mulai dari halaman edukasi atau langsung uji kemampuan Anda di simulasi!</p>
                    <br />
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/education" className="btn-primary">
                            PELAJARI EDUKASI <i className="ri-book-open-line"></i>
                        </a>
                        <a href="/simulation" className="btn-glitch">
                            COBA SIMULASI <i className="ri-gamepad-line"></i>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
