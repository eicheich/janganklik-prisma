import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import TypingText from "@/components/TypingText";

const terminalLines = [
  { text: 'JanganKlik! Portal: ONLINE', type: 'output' as const, delay: 500 },
  { text: 'Memuat modul edukasi keamanan siber...', type: 'output' as const, delay: 1000 },
  { text: 'janganklik --init --educate', type: 'command' as const, delay: 1500 },
  { text: '✓ Modul Phishing Detection: READY', type: 'output' as const, delay: 2000 },
  { text: '✓ Simulasi Penipuan Interaktif: READY', type: 'output' as const, delay: 2500 },
  { text: '✓ AI Link Scanner: READY', type: 'output' as const, delay: 3000 },
  { text: 'Semua sistem edukasi aktif!', type: 'success' as const, delay: 3500 },
  { text: 'Siap melindungi pengguna digital Indonesia...', type: 'output' as const, delay: 4000 }
];

export default function Tentang() {
  return (
    <div className="edu-body">
      <Header />

      <div className="edu-content">
        {/* Header Section */}
        <div className="sim-header-section">
          <h1 className="sim-page-title">TENTANG <TypingText text="JANGANKLIK!" speed={100} className="text-gradient" /></h1>
          <p className="sim-page-desc">
            Portal edukasi interaktif untuk meningkatkan kesadaran masyarakat Indonesia terhadap ancaman keamanan siber.
          </p>
        </div>

        {/* Terminal Section */}
        <section className="system-status-section">
          <div className="system-status-content">
            <h2>PORTAL EDUKASI AKTIF</h2>
            <p>Sistem edukasi keamanan siber untuk masyarakat Indonesia</p>
            <Terminal lines={terminalLines} title="JanganKlik! Education System" className="home-terminal" />
          </div>
        </section>

        {/* Mission */}
        <div className="tentang-grid">
          <div className="tentang-card mission-card">
            <div className="tentang-card-icon">
              <i className="ri-shield-check-line"></i>
            </div>
            <h3>Misi Kami</h3>
            <p>Melindungi <strong>221 juta</strong> pengguna internet Indonesia dari ancaman siber melalui edukasi yang mudah dipahami semua kalangan.</p>
          </div>
        </div>

        {/* Features */}
        <section className="tentang-features">
          <h2>Fitur Utama</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="ri-book-open-line"></i>
              <h4>Edukasi Komprehensif</h4>
              <p>Phishing, Social Engineering, Password Hygiene, Emergency Response</p>
            </div>
            <div className="feature-item">
              <i className="ri-gamepad-line"></i>
              <h4>Simulasi Interaktif</h4>
              <p>Uji kemampuan mengenali penipuan dalam skenario nyata</p>
            </div>
            <div className="feature-item">
              <i className="ri-shield-check-line"></i>
              <h4>AI Link Scanner</h4>
              <p>Periksa keamanan tautan secara real-time dengan AI</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="tentang-team">
          <h2>Tim Pengembang</h2>
          <div className="team-section">
            <div className="team-member">
              <div className="member-avatar">
                <i className="ri-user-line"></i>
              </div>
              <h4>Husnul Khotimah</h4>
              <p>Developer & AI Enthusiast</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <i className="ri-user-line"></i>
              </div>
              <h4>Salsabila</h4>
              <p>Developer & UI/UX Designer</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="tentang-contact">
          <h2>Hubungi Kami</h2>
          <div className="contact-item">
            <i className="ri-mail-line"></i>
            <div>
              <h4>Email</h4>
              <a href="mailto:husulkhotimah110106@gmail.com">husulkhotimah110106@gmail.com</a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
