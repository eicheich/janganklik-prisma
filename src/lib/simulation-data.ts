export interface ChatMessage {
    type: string;
    text: string;
    isTrap?: boolean;
}

export interface Level {
    id: number;
    interfaceType: string;
    simulationType: 'chat'| 'browser'| 'popup';
    badge: string;
    title: string;
    desc: string;
    sender?: string;
    url?: string;
    audioSrc?: string;
    videoSrc?: string;
    chat?: ChatMessage[];

    headerAction?: {
        icon: string;
        label: string;
        actionType: 'block'| 'report'| 'close'| 'inspect';
    }

    ;
    failMessage: string;
    passMessage: string;
    clue?: string;
    educationalContent?: string;
}

export const SCENARIOS: Level[]=[ {

    id: 1,
    interfaceType: 'whatsapp',
    simulationType: 'chat',
    badge: 'PHISHING APK',
    title: "JANGAN ASAL <span class='text-gradient'>KLIK!</span>",
    desc: 'Ada nomor asing kirim file <strong>.apk</strong>. <br>Klik bagian yang <strong>mencurigakan</strong> atau <strong>amankan</strong> diri Anda!',
    sender: '+62 812-xxxx-xxxx',
    clue: 'Perhatikan ekstensi file yang dikirimkan. Apakah wajar kurir mengirim file jenis ini?',
    educationalContent: '<strong>Modus Penipuan APK (Sniffing):</strong><br>Penipu mengirimkan file aplikasi (.apk) yang disamarkan sebagai foto paket, undangan nikah, atau surat tilang. Jika diinstal, aplikasi ini akan meminta izin membaca SMS (OTP) dan data pribadi. Akibatnya, penipu bisa membobol m-banking Anda.',
    headerAction: {
        icon: 'ri-prohibited-line', label: 'Block', actionType: 'block'
    }

    ,
    chat: [ {
        type: 'incoming', text: 'Permisi kak, paket J&T sudah sampai alamat. Mohon cek foto resi di bawah ini ya 🙏'
    }

    ,
        {
        type: 'incoming file', text: '<i class="ri-file-android-line"></i><div><span>LIHAT_FOTO_PAKET.apk</span><small>2.4 MB</small></div>', isTrap: true
    }

    ,
    ],
    failMessage: 'HP ANDA DIHACK! Anda menginstall malware pencuri SMS!',
    passMessage: 'BLOCKED! Anda berhasil menghindari malware.',
}

,
    {

    id: 2,
    interfaceType: 'phone',
    simulationType: 'chat',
    badge: 'VOICE PHISHING',
    title: "TELEPON <span class='text-gradient'>DARURAT!</span>",
    desc: 'Ada telepon mengaku dari Bank ABC. Dengarkan dan putuskan!',
    sender: '+62 21-500-xxx (Bank ABC)',
    audioSrc: '/voicecall.m4a',
    clue: 'Bank resmi TIDAK PERNAH meminta OTP, PIN, atau password via telepon.',
    educationalContent: '<strong>Modus Vishing (Voice Phishing):</strong><br>Penipu menelepon mengaku dari bank/instansi resmi. Mereka menggunakan teknik spoofing agar nomor terlihat resmi. Biasanya menciptakan kepanikan ("rekening dibobol", "kartu diblokir") agar korban memberikan OTP atau data sensitif.',
    headerAction: {
        icon: 'ri-phone-off-line', label: 'Tutup Telepon', actionType: 'close'
    }

    ,
    chat: [],
    failMessage: 'REKENING DIBOBOL! OTP Anda digunakan untuk menguras saldo!',
    passMessage: 'AMAN! Anda tidak terpancing memberikan OTP ke penipu.',


}

,
    {

    id: 3,
    interfaceType: 'videocall',
    simulationType: 'chat',
    badge: 'DEEPFAKE SCAM',
    title: "VIDEO CALL <span class='text-gradient'>PALSU!</span>",
    desc: 'Ayah video call minta transfer darurat. Asli atau deepfake?',
    sender: 'Ayah',
    videoSrc: '/videocall-deepfake.mp4',
    clue: 'Perhatikan gerakan wajah, sinkronisasi bibir, dan pencahayaan yang tidak natural. Verifikasi dengan telepon langsung!',
    educationalContent: '<strong>Modus Deepfake Video Call:</strong><br>Penipu menggunakan AI untuk membuat video palsu real-time yang meniru wajah dan suara orang yang Anda kenal (orang tua, keluarga). Mereka menciptakan situasi "darurat" agar korban panik dan transfer tanpa verifikasi. Selalu telepon balik ke nomor asli untuk konfirmasi!',
    headerAction: {
        icon: 'ri-phone-off-line', label: 'End Call', actionType: 'close'
    }

    ,
    chat: [ {
        type: 'system', text: '📹 Video Call dari "Ayah" - WhatsApp'
    }

    ,
        {
        type: 'incoming', text: '<div class="video-preview"><i class="ri-vidicon-line"></i><span>Video Call Aktif</span><small>⚠️ Wajah sedikit blur, suara delay</small></div>'
    }

    ,
        {
        type: 'incoming', text: '🔊 "Nak, ini Ayah! Ayah lagi di kantor polisi, Ayah nabrak orang. Ayah butuh uang Rp 25 juta SEKARANG buat damai, nanti Ayah ganti. Jangan bilang Mama dulu ya!"'
    }

    ,
        {
        type: 'incoming', text: '<div class="phone-btn-trap"><i class="ri-send-plane-fill"></i> TRANSFER KE AYAH</div>', isTrap: true
    }

    ,
    ],
    failMessage: 'TERTIPU DEEPFAKE! Uang Rp 25 juta melayang ke penipu yang menyamar jadi Ayah!',
    passMessage: 'SELAMAT! Anda tidak terpancing dan memilih verifikasi dulu ke nomor asli Ayah!',

}

,
    {

    id: 5,
    interfaceType: 'ecommerce',
    simulationType: 'chat',
    badge: 'E-COMMERCE FRAUD',
    title: "TRANSAKSI DI LUAR <span class='text-gradient'>APLIKASI!</span>",
    desc: 'Penjual maksa minta transfer langsung? Hati-hati!',
    sender: 'Toko Elektronik Murah',
    clue: 'Mengapa penjual ingin mengalihkan transaksi keluar dari platform resmi?',
    educationalContent: '<strong>Modus Direct Transfer:</strong><br>Penipu membujuk korban untuk bertransaksi di luar aplikasi resmi (misal: via WhatsApp) dengan iming-iming diskon. Tujuannya agar mereka bisa kabur membawa uang tanpa bisa dilacak atau diklaim garansinya oleh pihak e-commerce.',
    headerAction: {
        icon: 'ri-flag-line', label: 'Report Toko', actionType: 'report'
    }

    ,
    chat: [ {
        type: 'incoming', text: 'Kak, kalau transfer langsung ke rekening toko diskon 500rb + free ongkir lho.'
    }

    ,
        {
        type: 'incoming', text: 'Minat kak? <span class="link-trap">CHAT WA ADMIN DISINI</span>', isTrap: true
    }

    ,
    ],
    failMessage: 'FRAUD! Barang tidak dikirim, uang tidak bisa kembali.',
    passMessage: 'REPORTED! Anda menyelamatkan pembeli lain.',
}

,
    {

    id: 6,
    interfaceType: 'browser',
    simulationType: 'browser',
    badge: 'FAKE LOGIN',
    title: "LOGIN <span class='text-gradient'>PALSU!</span>",
    desc: 'Halaman login Facebook ini terlihat aneh. Temukan kejanggalannya!',
    url: 'https://www.faceb00k-security-check.com/login',
    clue: 'Perhatikan bilah alamat (URL) dengan seksama sebelum memasukkan data pribadi.',
    educationalContent: '<strong>Modus Web Phishing:</strong><br>Penipu membuat tiruan halaman login situs populer (Facebook, Google, Bank). Jika Anda memasukkan username dan password, data tersebut langsung terkirim ke penipu. Selalu periksa URL (alamat web) sebelum login.',
    headerAction: {
        icon: 'ri-search-eye-line', label: 'Inspect URL', actionType: 'inspect'
    }

    ,
    failMessage: 'HACKED! Password Anda terkirim ke hacker.',
    passMessage: 'SAFE! Anda teliti memeriksa URL.',
}

,
    {

    id: 7,
    interfaceType: 'popup',
    simulationType: 'popup',
    badge: 'SCAREWARE',
    title: "VIRUS <span class='text-gradient'>DETECTED?</span>",
    desc: 'Popup berisik muncul! Mana tombol yang aman?',
    clue: 'Jangan panik. Cari cara teraman untuk menutup peringatan tanpa berinteraksi dengan kontennya.',
    educationalContent: '<strong>Modus Scareware:</strong><br>Teknik menakut-nakuti korban dengan peringatan virus palsu agar mereka panik dan mengunduh "antivirus" yang sebenarnya adalah malware. Jangan pernah klik tombol di dalam popup peringatan seperti ini.',
    headerAction: {
        icon: 'ri-close-circle-line', label: 'Close Tab', actionType: 'close'
    }

    ,
    failMessage: 'INFECTED! Mengklik tombol popup mengunduh malware.',
    passMessage: 'SAFE! Popup scareware berhasil ditutup.',
}

,
    {

    id: 8,
    interfaceType: 'email',
    simulationType: 'chat',
    badge: 'EMAIL PHISHING',
    title: "CEK <span class='text-gradient'>PENGIRIMNYA!</span>",
    desc: 'Tagihan palsu! Temukan tombol jebakan atau laporkan email ini.',
    sender: 'billing@netfIix-support.com',
    clue: 'Periksa alamat email pengirim dengan teliti. Apakah ada karakter yang tidak biasa?',
    educationalContent: '<strong>Modus Email Phishing:</strong><br>Penipu membuat email yang terlihat resmi (spoofing) dengan logo perusahaan besar. Mereka menciptakan rasa urgensi (misal: "Akun akan ditutup") agar korban panik dan mengklik link palsu yang akan mencuri data login atau kartu kredit.',
    headerAction: {
        icon: 'ri-spam-2-line', label: 'Report Spam', actionType: 'report'
    }

    ,
    chat: [ {
        type: 'incoming', text: '<strong>Subject: Peringatan Penangguhan Akun</strong><br><br>Yth. Pelanggan,<br>Pembayaran langganan Anda gagal. Akun akan ditutup dalam 24 jam.'
    }

    ,
        {
        type: 'incoming', text: '<div class="email-btn-trap">PERBARUI PEMBAYARAN</div>', isTrap: true
    }

    ,
    ],
    failMessage: 'PHISHING! Data kartu kredit Anda dicuri situs palsu.',
    passMessage: 'REPORTED! Email phishing berhasil diidentifikasi.',
}

,
    {

    id: 9,
    interfaceType: 'whatsapp',
    simulationType: 'chat',
    badge: 'PINJOL ILEGAL',
    title: "DANA <span class='text-gradient'>INSTAN?</span>",
    desc: 'Tawaran pinjaman cepat cair masuk ke WA Anda. Ambil atau abaikan?',
    sender: '+62 899-xxxx-xxxx',
    clue: 'Pinjol resmi tidak pernah menawarkan pinjaman via jalur pribadi (SMS/WA) tanpa persetujuan nasabah.',
    educationalContent: '<strong>Ciri Pinjol Ilegal:</strong><br>1. Menawarkan via SMS/WA pribadi.<br>2. Syarat sangat mudah (cuma KTP).<br>3. Meminta akses seluruh kontak HP.<br>4. Identitas pengurus/alamat kantor tidak jelas.<br>Selalu cek legalitas di OJK (Hubungi 157).',
    headerAction: {
        icon: 'ri-prohibited-line', label: 'Block & Report', actionType: 'block'
    }

    ,
    chat: [ {
        type: 'incoming', text: 'Halo Kak, selamat ya! Nomor kakak terpilih mendapatkan limit pinjaman tunai s/d 50 Juta Rupiah. Bunga rendah 0,02%, tenor panjang.'
    }

    ,
        {
        type: 'incoming', text: 'Syarat mudah cukup KTP, pasti cair 100%. Klik link untuk pencairan dana: <span class="link-trap">bit.ly/Dana-Cepat-Cair-OJK</span>', isTrap: true
    }

    ,
    ],
    failMessage: 'TERJEBAK UTANG! Data Anda disalahgunakan dan diteror debt collector.',
    passMessage: 'AMAN! Anda menghindari jeratan lintah darat online.',

}

,
    {

    id: 4,
    interfaceType: 'instagram',
    simulationType: 'chat',
    badge: 'SOCIAL MEDIA SCAM',
    title: "GIVEAWAY <span class='text-gradient'>BODONG!</span>",
    desc: 'Artis minta transfer buat ongkir giveaway? Masuk akal gak?',
    sender: 'raffinagita1717_giveaway',
    clue: 'Verifikasi keaslian akun dan waspadai permintaan biaya di muka untuk hadiah.',
    educationalContent: '<strong>Modus Giveaway Palsu:</strong><br>Penipu membuat akun tiruan (fake account) artis atau influencer. Mereka meminta "biaya administrasi" atau "ongkir" di muka. Ingat: Giveaway asli tidak pernah memungut biaya apapun dari pemenang.',
    headerAction: {
        icon: 'ri-user-forbid-line', label: 'Block User', actionType: 'block'
    }

    ,
    chat: [ {
        type: 'incoming', text: 'Halo kak! Selamat kamu menang Giveaway iPhone 15 Pro Max! 😍 Ongkir ditanggung pemenang ya kak 200rb aja.'
    }

    ,
        {
        type: 'incoming', text: 'Transfer ke OVO 081234567890 a.n Admin Giveaway. <span class="link-trap">KLIK UNTUK TRANSFER</span>', isTrap: true
    }

    ,
    ],
    failMessage: 'SCAMMED! Uang melayang, iPhone tak datang.',
    passMessage: 'BLOCKED! Akun penipu berhasil diblokir.',
}

,
];
