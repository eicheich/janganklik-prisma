/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <header id="hero">
        <div className="hero-content">
          <div className="status-indicator">
            <span className="blink"></span> SYSTEM: UNSECURED
          </div>
          <h1 className="hacker-text" data-value="ARE YOU SAFE?">
            ARE YOU SAFE?
          </h1>
          <p>
            Di tahun 2024, Indonesia mengalami <strong>1.2 Miliar+</strong> anomali trafik siber. Jangan jadi korban berikutnya.
          </p>
          <a href="#simulation-teaser" className="btn-primary">
            Tes Kepekaan <i className="ri-gamepad-line"></i>
          </a>
        </div>
      </header>
      <div className="marquee-wrapper">
        <div className="marquee-content">
          DATA PRIVACY • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • THINK BEFORE YOU POST • NO HOAX • DATA PRIVACY • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • THINK BEFORE YOU POST • NO HOAX • DATA PRIVACY • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • THINK BEFORE YOU POST • NO HOAX • DATA PRIVACY • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • THINK BEFORE YOU POST • NO HOAX •
        </div>
      </div>
      <section id="stats" className="stats-section">
        <div className="section-title">
          <h2>
            KENYATAAN PAHIT <span className="accent"> ///</span>
          </h2>
          <p>Data aktual dari lapang perang digital Indonesia 2024</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card highlight" data-percent="74">
            <div className="icon-stat">
              <i className="ri-virus-line"></i>
            </div>
            <h3 className="counter" data-target="221">
              221
            </h3>
            <span className="suffix">Juta</span>
            <p>Target Empuk di Indonesia</p>
            <div className="stat-progress" aria-hidden="true">
              <div className="bar"></div>
            </div>
            <button className="stat-toggle" aria-expanded={false} aria-controls="stat-detail-1">
              Selengkapnya <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </button>
            <div className="stat-details" id="stat-detail-1" hidden>
              <ul>
                <li>🔴 60%+ akses lewat smartphone yang rentan</li>
                <li>🔴 Mayoritas gak aktifin 2FA & jarang update sistem</li>
                <li>💡 Hacker cari yang lemah duluan - jangan jadi korban!</li>
              </ul>
            </div>
          </div>
          <div className="stat-card highlight" data-percent="80">
            <div className="icon-stat">
              <i className="ri-lock-password-line"></i>
            </div>
            <h3 className="counter" data-target="403">
              403
            </h3>
            <span className="suffix">M</span>
            <p>Serangan Siber Tercatat</p>
            <div className="stat-progress" aria-hidden="true">
              <div className="bar"></div>
            </div>
            <button className="stat-toggle" aria-expanded={false} aria-controls="stat-detail-2">
              Selengkapnya <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </button>
            <div className="stat-details" id="stat-detail-2" hidden>
              <ul>
                <li>⚠️ Phishing, ransomware, & credential stuffing mendominasi</li>
                <li>⏰ Jam sibuk = jam rawan (pagi & malam hari)</li>
                <li>🛡️ Kamu butuh: Password kuat + 2FA + waspada selalu!</li>
              </ul>
            </div>
          </div>
          <div className="stat-card highlight" data-percent="65">
            <div className="icon-stat">
              <i className="ri-spy-line"></i>
            </div>
            <h3 className="counter" data-target="65">
              65
            </h3>
            <span className="suffix">%</span>
            <p>Gen Z & Milenial Jadi Korban</p>
            <div className="stat-progress" aria-hidden="true">
              <div className="bar"></div>
            </div>
            <button className="stat-toggle" aria-expanded={false} aria-controls="stat-detail-3">
              Selengkapnya <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </button>
            <div className="stat-details" id="stat-detail-3" hidden>
              <ul>
                <li>💸 Giveaway palsu, investasi instan, APK kiriman &quot;kurir&quot;</li>
                <li>🧠 Mereka mainkan FOMO & kepercayaanmu ke influencer</li>
                <li>✅ Cek link, jangan install APK sembarangan, waspada urgent!</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="data-source">
          <small>
            <i className="ri-information-line"></i> Sumber:{' '}
            <a href="https://apjii.or.id/" target="_blank">
              APJII 2024
            </a>{' '}
            &{' '}
            <a href="https://www.bssn.go.id/" target="_blank">
              BSSN 2023
            </a>
          </small>
        </div>
      </section>
      <section id="threats" className="threats-section">
        <div className="section-title center-title">
          <h2>ANCAMAN POPULER ⚠️</h2>
          <p>Kenali modus-modus yang paling sering menjerat korban.</p>
        </div>
        <div className="threats-grid">
          <a href="/education#phishing" className="threat-card">
            <i className="ri-mail-line"></i> <h3>Phishing / APK Scam</h3>
            <p>Mengincar data bank/OTP via tautan atau file berbahaya.</p>
          </a>
          <a href="/education#soceng" className="threat-card">
            <i className="ri-user-star-line"></i> <h3>Social Engineering</h3>
            <p>Manipulasi psikologis untuk mendapatkan informasi rahasia.</p>
          </a>
          <a href="/education#password" className="threat-card">
            <i className="ri-lock-password-line"></i> <h3>Password Hygiene</h3>
            <p>Kelola kata sandi dengan aman untuk mencegah kebocoran.</p>
          </a>
        </div>
      </section>
      <section id="simulation-teaser" className="teaser-section">
        <div className="teaser-content">
          <h2>🛑 DETEKSI SCAM LEVEL UP</h2>
          <p>
            Seberapa pintar kamu menghadapi scammer? Ikuti simulasi chat interaktif dan buktikan kamu kebal dari modus penipuan.
          </p>
          <a href="/simulation" className="btn-glitch big-btn">
            MULAI SIMULASI <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
