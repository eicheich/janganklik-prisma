export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>JanganKlik!</h3>
                    <p>Securing the Future</p>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Edukasi</h4>
                        <ul>
                            <li><a href="/education">Ancaman Siber</a></li>
                            <li><a href="/simulation">Simulasi</a></li>
                            <li><a href="/tentang">Tentang Kami</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Sumber</h4>
                        <ul>
                            <li><a href="https://www.ojk.go.id" target="_blank" rel="noopener noreferrer">OJK</a></li>
                            <li><a href="https://www.bi.go.id" target="_blank" rel="noopener noreferrer">Bank Indonesia</a></li>
                            <li><a href="https://www.kominfo.go.id" target="_blank" rel="noopener noreferrer">Kominfo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 JanganKlik! - Portal Edukasi Keamanan Siber. Semua hak dilindungi.</p>
                <div className="footer-disclaimer">
                    <small>Data dan statistik bersumber dari laporan resmi lembaga terkait</small>
                </div>
            </div>
        </footer>
    );
}
