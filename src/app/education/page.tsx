/* eslint-disable @next/next/no-html-link-for-pages */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Education() {
    return (
        <div className="edu-body">
            <Header />

            <div className="edu-content">
                <h1>EDUKASI: KUNCI KEAMANAN SIBER</h1>
                <p>
                    Keamanan siber bukan hanya urusan pakar IT, tapi tanggung jawab kita
                    semua. Berikut adalah ancaman digital paling umum dan cara mencegahnya.
                </p>

                <div className="alert-box">
                    <i className="ri-alert-line"></i> Ingat: Data adalah Emas Digital Anda. Jaga
                    kerahasiaannya!
                </div>

                <h2 id="phishing">1. Phishing & APK Scam (Modus 'Paket Resi')</h2>
                <h3>Apa itu?</h3>
                <p>
                    **Phishing** adalah upaya penipu untuk mendapatkan informasi sensitif
                    (seperti username, password, nomor kartu kredit, atau kode OTP) dengan
                    menyamar sebagai entitas terpercaya (bank, kurir, kantor). **APK Scam**
                    adalah variasi di Indonesia di mana penipu mengirim *malware* (aplikasi
                    berbahaya) dalam format file **.apk** atau **.zip** melalui chat.
                </p>
                <h3>Cara Menghindari:</h3>
                <ul>
                    <li>
                        **JANGAN KLIK:** Jangan pernah mengklik file dengan ekstensi
                        **`.apk`**, **`.zip`**, **`.exe`**, **`.scr`** dari pengirim yang
                        tidak dikenal.
                    </li>
                    <li>
                        **Cek Format File:** Perhatikan ekstensi file. Foto resi asli pasti
                        berupa **`.jpg`** atau **`.png`**.
                    </li>
                    <li>
                        **Waspada OTP/PIN:** Bank tidak pernah meminta kode OTP atau PIN
                        Anda melalui telepon atau chat.
                    </li>
                </ul>

                <h2 id="soceng">2. Social Engineering (Manipulasi Psikologis)</h2>
                <h3>Apa itu?</h3>
                <p>
                    Seni memanipulasi orang agar secara sukarela membocorkan informasi
                    rahasia. Penipu sering menggunakan emosi, seperti rasa takut (ancaman
                    diblokir), rasa ingin tahu (undangan), atau rasa gembira (hadiah).
                </p>
                <h3>Contoh Modus:</h3>
                <ul>
                    <li>**Pesan Anak/Kerabat Kecelakaan:** Meminta transfer dana segera.</li>
                    <li>
                        **Hadiah/Undian Palsu:** Meminta biaya administrasi atau data
                        rekening untuk mencairkan hadiah.
                    </li>
                </ul>
                <h3>Cara Menghindari:</h3>
                <ul>
                    <li>
                        **Verifikasi Kontak:** Hubungi langsung kerabat/lembaga terkait
                        melalui nomor telepon resminya (jangan nomor yang tertera di pesan
                        penipu).
                    </li>
                    <li>**Stop, Think, Act:** Jangan bertindak gegabah karena tekanan emosi.</li>
                </ul>

                <h2 id="password">3. Manajemen Kata Sandi (Password Hygiene)</h2>
                <h3>Tantangan:</h3>
                <p>
                    Sebagian besar kebocoran data terjadi karena pengguna menggunakan kata
                    sandi yang lemah dan sama untuk banyak akun. Ini seperti menggunakan satu
                    kunci untuk semua rumah dan brankas Anda!
                </p>
                <h3>Solusi Terbaik:</h3>
                <ul>
                    <li>
                        **Multi-Factor Authentication (MFA):** Selalu aktifkan verifikasi
                        dua langkah di semua akun penting (Google, Instagram, WhatsApp, E-wallet). Ini adalah lapisan pertahanan terakhir. Meskipun password ketahuan, peretas tetap butuh kode OTP di HP Anda.
                    </li>
                    <li>
                        **Gunakan Password Manager:** Jangan paksa otak menghafal 50 password rumit. Gunakan fitur penyimpan sandi di HP atau aplikasi seperti Bitwarden/Google Password Manager.
                    </li>
                    <li>
                        **Rumus Password Kuat:** Minimal 12 karakter, gabungan Huruf Besar + Kecil + Angka + Simbol. Hindari tanggal lahir!
                    </li>
                </ul>

                <h2 id="emergency">4. Terlanjur Klik? Lakukan Ini Segera! 🚨</h2>
                <p>Jangan panik. Jika Anda tidak sengaja mengklik link phising atau menginstal APK bodong, kecepatan adalah kunci keselamatan.</p>

                <div className="alert-box" style={{ borderColor: 'var(--neon-blue)', color: 'var(--neon-blue)', background: 'rgba(0, 243, 255, 0.1)' }}>
                    <i className="ri-alarm-warning-line"></i> LANGKAH PERTOLONGAN PERTAMA:
                </div>

                <ol style={{ marginLeft: '20px', lineHeight: '1.8', color: '#ccc', marginBottom: '30px' }}>
                    <li>
                        <strong>Matikan Koneksi Internet:</strong> Segera aktifkan <em>Airplane Mode</em> atau cabut kabel WiFi/LAN. Ini memutus akses peretas yang sedang mencoba mencuri data dari HP Anda.
                    </li>
                    <li>
                        <strong>Uninstall Aplikasi Mencurigakan:</strong> Masuk ke Pengaturan &gt; Aplikasi. Cari aplikasi yang tidak ada iconnya atau bernama aneh, lalu uninstall segera.
                    </li>
                    <li>
                        <strong>Ganti Password (Dari Perangkat Lain):</strong> Jangan ganti password di HP yang kena hack! Pinjam HP teman/keluarga, login ke akun penting (M-Banking, Email, WA), dan ganti password serta logout dari semua perangkat.
                    </li>
                    <li>
                        <strong>Hubungi Bank:</strong> Telepon Call Center bank resmi untuk memblokir sementara rekening atau kartu kredit jika ada indikasi kebocoran data keuangan.
                    </li>
                    <li>
                        <strong>Factory Reset:</strong> Jika HP bertingkah aneh (panas, baterai boros, iklan muncul sendiri), reset ke pengaturan pabrik adalah cara paling ampuh membersihkan malware sampai ke akarnya.
                    </li>
                </ol>

                <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px', paddingTop: '40px', borderTop: '1px dashed #333' }}>
                    <h3>Sudah Paham Teorinya?</h3>
                    <p>Sekarang saatnya praktek. Jangan sampai teori doang jago tapi praktek nol.</p>
                    <br />
                    <a href="/simulation" className="btn-primary">
                        UJI ILMU DI SIMULASI <i className="ri-arrow-right-up-line"></i>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}
