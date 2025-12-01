/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import HackerText from '@/components/HackerText';

const statsData = [{
  icon: 'ri-virus-line',
  counter: 221,
  suffix: 'Juta',
  title: 'Target Empuk di Indonesia',
  details: ['🔴 60%+ akses lewat smartphone yang rentan',
    '🔴 Mayoritas gak aktifin 2FA & jarang update sistem',
    '💡 Hacker cari yang lemah duluan - jangan jadi korban!'
  ]
}

  ,
{
  icon: 'ri-lock-password-line',
  counter: 403,
  suffix: 'M',
  title: 'Serangan Siber Tercatat',
  details: ['⚠️ Phishing, ransomware, & credential stuffing mendominasi',
    '⏰ Jam sibuk = jam rawan (pagi & malam hari)',
    '🛡️ Kamu butuh: Password kuat + 2FA + waspada selalu!'
  ]
}

  ,
{
  icon: 'ri-spy-line',
  counter: 65,
  suffix: '%',
  title: 'Gen Z & Milenial Jadi Korban',
  details: ['💸 Giveaway palsu, investasi instan, APK kiriman "kurir"',
    '🧠 Mereka mainkan FOMO & kepercayaanmu ke influencer',
    '✅ Cek link, jangan install APK sembarangan, waspada urgent!'
  ]
}

];

export default function Home() {
  return (<> <Header /> <header id="hero"> <div className="hero-content"> <div className="status-indicator"> <span className="blink"></span> SYSTEM: UNSECURED </div> <HackerText text="ARE YOU SAFE?" className="hacker-text" /> <p> Di tahun 2024, Indonesia mengalami <strong>1.2 Miliar+</strong> anomali trafik siber. Jangan jadi korban berikutnya. </p> <a href="#simulation-teaser" className="btn-primary"> Tes Kepekaan <i className="ri-gamepad-line"></i> </a> </div> </header> <div className="marquee-wrapper"> <div className="marquee-content"> DATA PRIVACY • WASPADA PHISHING • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • KENALI MODUS SIBER • DATA PRIVACY • WASPADA PHISHING • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • KENALI MODUS SIBER • DATA PRIVACY • WASPADA PHISHING • STOP PINJOL ILEGAL • SARING SEBELUM SHARING • KENALI MODUS SIBER • </div> </div> <section id="stats" className="stats-section"> <div className="section-title"> <h2> REALITA ANCAMAN DIGITAL <span className="accent"> ///</span>

  </h2> <p>Data berdasarkan laporan BSSN & APJII 2024</p> </div> <div className="stats-grid"> {
    statsData.map((stat, index) => (<StatCard key={
      index
    }

      icon={
        stat.icon
      }

      counter={
        stat.counter
      }

      suffix={
        stat.suffix
      }

      title={
        stat.title
      }

      details={
        stat.details
      }

    />))
  }

    </div> <div className="data-source"> <small> <i className="ri-information-line"></i> Sumber: {
      ' '
    }

      <a href="https://apjii.or.id/" target="_blank"> APJII 2024 </a> {
        ' '
      }

      & {
        ' '
      }

      <a href="https://www.bssn.go.id/" target="_blank"> BSSN 2023 </a> </small> </div> </section> <section id="threats" className="threats-section"> <div className="section-title center-title"> <h2>ANCAMAN POPULER ⚠️</h2> <p>Kenali modus-modus yang paling sering menjerat korban.</p> </div> <div className="threats-grid"> <a href="/education#phishing" className="threat-card"> <i className="ri-mail-line"></i> <h3>Phishing / APK Scam</h3> <p>Mengincar data bank/OTP via tautan atau file berbahaya.</p> </a> <a href="/education#soceng" className="threat-card"> <i className="ri-user-star-line"></i> <h3>Social Engineering</h3> <p>Manipulasi psikologis untuk mendapatkan informasi rahasia.</p> </a> <a href="/education#password" className="threat-card"> <i className="ri-lock-password-line"></i> <h3>Password Hygiene</h3> <p>Kelola kata sandi dengan aman untuk mencegah kebocoran.</p> </a> </div> </section> <section id="simulation-teaser" className="teaser-section"> <div className="teaser-content"> <h2>🛑 DETEKSI SCAM LEVEL UP</h2> <p> Seberapa pintar kamu menghadapi scammer? Ikuti simulasi chat interaktif dan buktikan kamu kebal dari modus penipuan. </p> <a href="/simulation" className="btn-glitch big-btn"> MULAI SIMULASI <i className="ri-arrow-right-up-line"></i> </a> </div> </section> <Footer /> </>);
}
