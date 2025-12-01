'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <nav>
            <div className="logo">
                JanganKlik<span className="dot">!</span>
            </div>
            <ul className="menu">
                <li>
                    <a href="/" className={pathname === '/' ? 'active' : ''}>Beranda</a>
                </li>
                <li>
                    <a href="/tentang" className={pathname === '/tentang' ? 'active' : ''}>Tentang</a>
                </li>
                <li>
                    <a href="/education" className={pathname === '/education' ? 'active' : ''}>Edukasi</a>
                </li>
            </ul>
            <a href="/simulation" className={`btn-glitch ${pathname === '/simulation' ? 'active' : ''}`}>
                SIMULASI
            </a>
        </nav>
    );
}
