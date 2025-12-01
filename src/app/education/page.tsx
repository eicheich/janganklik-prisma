/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Terminal from '@/components/Terminal';
import TypingText from '@/components/TypingText';

const homeTerminalLines=[ {
    text: 'System Status: ACTIVE', type: 'output'as const, delay: 500
}

,
    {
    text: 'Scanning global threat database...', type: 'output'as const, delay: 1000
}

,
    {
    text: 'analyze --threats --indonesia', type: 'command'as const, delay: 1500
}

,
    {
    text: '221 million vulnerable endpoints detected', type: 'output'as const, delay: 2000
}

,
    {
    text: '403 million cyber attacks in 2023-2024', type: 'output'as const, delay: 2500
}

,
    {
    text: '65% Gen Z/Millennial at high risk', type: 'output'as const, delay: 3000
}

,
    {
    text: 'Defense protocols: ENGAGED', type: 'success'as const, delay: 3500
}

,
    {
    text: 'Ready to protect digital citizens...', type: 'output'as const, delay: 4000
}

];

export default function Education() {
    return (<div className="edu-body"> <Header /> <div className="edu-content"> <TypingText text="EDUKASI KEAMANAN SIBER"

        speed= {
            80
        }

        className="typing-main-title"

        /> <p> Keamanan siber bukan hanya urusan pakar IT, tapi tanggung jawab kita semua. Berikut adalah ancaman digital paling umum dan cara mencegahnya. </p> <div className="alert-box alert-pulse"style= {
                {
                borderColor: 'var(--neon-red)', color: 'var(--neon-red)', background: 'rgba(0, 243, 255, 0.1)'
            }
        }

        > <i className="ri-alert-line"></i> Ingat: Data adalah Emas Digital Anda. Jaga kerahasiaannya ! </div> <section className="system-status-section"> <div className="system-status-content"> <h2>SISTEM KEAMANAN DIGITAL</h2> <p>Monitor real-time ancaman siber yang mengintai masyarakat Indonesia</p> <Terminal lines= {
            homeTerminalLines
        }

        title="Cybersecurity Defense System"className="home-terminal"/> </div> </section> <h2 id="phishing">1. Phishing & APK Scam (Modus 'Paket Resi')</h2> <h3>Apa sih Phishing itu?</h3> <p> Bayangkan Anda sedang asyik browsing media sosial, tiba-tiba mendapat chat dari "kurir"yang mengatakan paket Anda tersangkut di gudang. Mereka mengirim link untuk "cek resi"atau file APK yang katanya untuk tracking paket. Klik saja, ternyata itu jebakan ! </p> <p> <strong>Phishing</strong>=Teknik penipu yang menyamar sebagai orang/bank terpercaya untuk mencuri data Anda. <strong>APK Scam</strong>=Versi Indonesia-nya, di mana penipu mengirim aplikasi berbahaya melalui chat yang Anda kira aman. </p> <h3>Cara Mencegah:</h3> <ul> <li> <strong>Blokir Otomatis:</strong> Hapus langsung chat/file dari nomor yang tidak dikenal. </li> <li> <strong>Periksa File:</strong> Cek ekstensi file. Foto asli=.jpg/.png. File mencurigakan=.apk/.zip/.exe dari orang tidak dikenal. </li> <li> <strong>OTP adalah Rahasia:</strong> Bank/Kurir TIDAK PERNAH meminta OTP/PIN melalui chat. Jika diminta, itu pasti penipu. </li> </ul> <h2 id="soceng">2. Social Engineering (Manipulasi Pikiran)</h2> <h3>Teknik Manipulasi:</h3> <p> Ini bukan hacking komputer, tapi manipulasi psikologis. Penipu memanfaatkan emosi manusia agar korban secara sukarela memberikan data rahasia. Mereka sangat ahli dalam menekan tombol psikologis: rasa takut, senang, penasaran, atau panik. </p> <h3>Modus yang Umum:</h3> <ul> <li><strong>"Anak/Kerabat Kecelakaan":</strong> "Mama, aku nabrak mobil! Butuh transfer cepet!"- Padahal nomornya spoofed.</li> <li><strong>"Hadiah/Undian Palsu":</strong> "Selamat! Kamu menang iPhone! Bayar admin dulu ya"- Yang ada duit kamu yang hilang.</li> <li><strong>"Pekerjaan Impian":</strong> "Ada lowongan gaji tinggi, kirim CV + data rekening"- CV masuk, rekening kamu yang kena.</li> </ul> <h3>Cara Mencegah:</h3> <ul> <li> <strong>Verifikasi Langsung:</strong> Telepon nomor resmi keluarga/bank, jangan gunakan nomor dari pesan penipu. </li> <li><strong>STOP-THINK-ACT:</strong> Terima pesan urgent? Tarik napas dulu, jangan langsung mentransfer !</li> <li><strong>Curiga=Aman:</strong> Jika terlalu bagus/buruk untuk menjadi kenyataan, kemungkinan besar penipuan.</li> </ul> <h2 id="password">3. Password Hygiene (Rahasia Digital)</h2> <h3>Kenapa Password Penting?</h3> <p> Bayangkan Anda memiliki satu kunci untuk rumah, mobil, brankas, dan semua pintu di dunia. Jika kunci itu diketahui orang, semuanya bisa dibobol ! Nah, itu yang terjadi jika Anda menggunakan password sama di semua akun. </p> <p> 80% kebocoran data dimulai dari password lemah. Jangan menjadi korban karena malas membuat password berbeda-beda. </p> <h3>Langkah-langkah Keamanan:</h3> <ul> <li> <strong>Verifikasi Dua Langkah (2FA):</strong> Aktifkan verifikasi 2 langkah di semua akun penting. Password diketahui? Tenang, masih ada OTP di HP Anda sebagai benteng terakhir. </li> <li> <strong>Penggunaan Password Manager:</strong> Jangan memaksakan otak Anda menghafal 50 password rumit. Gunakan Bitwarden, LastPass, atau fitur penyimpan password di HP Anda. </li> <li> <strong>Kriteria Password Kuat:</strong> Minimal 12 karakter=Huruf Besar + Kecil + Angka + Simbol. Contoh: "KopiHitam2024!"bukan "password123"atau tanggal lahir Anda. </li> <li> <strong>Password Unik Per Akun:</strong> Instagram berbeda dengan Gojek, Gojek berbeda dengan Bank. Jika satu diketahui, yang lain aman. </li> </ul> <h2 id="emergency">4. Terlanjur Terkena? Langkah Penanganan Darurat</h2> <p> Klik link penipuan atau install APK berbahaya? JANGAN PANIK ! 90% masalah dapat diselamatkan jika Anda bertindak cepat. Ini bukan akhir dunia, tapi kesempatan untuk meningkatkan keamanan Anda. </p> <div className="alert-box"style= {
                {
                borderColor: 'var(--neon-blue)', color: 'var(--neon-blue)', background: 'rgba(0, 243, 255, 0.1)'
            }
        }

        > <i className="ri-alarm-warning-line"></i> PROTOKOL PENANGANAN DARURAT - LAKUKAN DALAM 5 MENIT: </div> <ol style= {
                {
                marginLeft: '20px', lineHeight: '1.8', color: '#ccc', marginBottom: '30px'
            }
        }

        > <li> <strong>Putus Koneksi Segera:</strong> Aktifkan Airplane Mode atau cabut WiFi/LAN. Ini memutus akses hacker yang sedang mencoba mencuri data Anda. </li> <li> <strong>Bersihkan Malware:</strong> Masuk Settings &gt; Apps. Cari aplikasi yang tidak ada icon atau nama aneh - hapus ! </li> <li> <strong>Ganti Password (Dari Perangkat Aman):</strong> Jangan ganti di HP yang terkena hack ! Pinjam HP teman/keluarga, ganti password semua akun penting, lalu logout dari semua perangkat. </li> <li> <strong>Blokir Rekening:</strong> Telepon call center bank resmi untuk membekukan rekening/kartu kredit sementara. </li> <li> <strong>Factory Reset (Jika Parah):</strong> HP panas, baterai boros, iklan muncul sendiri? Reset ke pengaturan pabrik - ini cara terakhir membersihkan malware sampai ke akar. </li> </ol> <div className="alert-box"style= {
                {
                borderColor: 'var(--neon-green)', color: 'var(--neon-green)', background: 'rgba(0, 255, 85, 0.1)'
            }
        }

        > <i className="ri-lightbulb-line"></i> <strong>TIPS:</strong> Simpan nomor emergency bank di kontak HP Anda. Lebih cepat daripada mencari-cari di Google saat panik. </div> <div style= {
                {
                textAlign: 'center', marginTop: '60px', marginBottom: '40px', paddingTop: '40px', borderTop: '1px dashed #333'
            }
        }

        > <h3>Siap Menerapkan Pengetahuan?</h3> <p>Jangan hanya paham teori saja. Buktikan Anda bisa mendeteksi penipuan dalam skenario nyata yang sering terjadi di Indonesia.</p> <br /> <a href="/simulation"className="btn-primary"> UJI KEAHLIAN DI SIMULASI <i className="ri-arrow-right-up-line"></i> </a> </div> </div> <Footer /> </div>);
}
