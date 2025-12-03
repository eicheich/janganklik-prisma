# Setup Gemini AI untuk AI Link Safety Checker

## Langkah-langkah Setup API Key

### 1. Dapatkan Gemini API Key (GRATIS)
1. Buka browser dan kunjungi: https://aistudio.google.com/app/apikey
2. Login dengan akun Google Anda (gmail/hotmail/yahoo)
3. Klik tombol **"Create API key"**
4. Berikan nama untuk API key (contoh: "JanganKlik-AI-Checker")
5. **Copy API key** yang muncul (format: `AIza...`)

### 2. Setup Environment Variable
1. Buat file `.env.local` di root folder project (`nextjs/`)
2. Tambahkan baris berikut:
```
GEMINI_API_KEY=AIzaSyD...[paste_your_api_key_here]
```

### 3. Restart Development Server
```bash
npm run dev
```

## Testing API Key

Setelah setup selesai, test dengan mengunjungi `/ai-checker` dan coba analisis link seperti:
- `https://google.com` (harus aman)
- `https://evil-phishing-site.com` (harus terdeteksi berbahaya)

## Troubleshooting

### Error: "GEMINI_API_KEY is not set"
- Pastikan file `.env.local` ada di folder `nextjs/`
- Pastikan tidak ada spasi sebelum/after `=`
- Restart server dengan `Ctrl+C` lalu `npm run dev`

### Error: "API_KEY_INVALID"
- Periksa apakah API key yang dicopy sudah benar
- Pastikan tidak ada karakter yang missing
- Coba buat API key baru jika masih error

### Error: "Quota exceeded"
- Gemini AI gratis punya limit 60 requests/minute
- Tunggu beberapa menit atau upgrade ke paid plan

## Keamanan
- Jangan bagikan API key ke orang lain
- API key ini aman digunakan untuk development dan production kecil
