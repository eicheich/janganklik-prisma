'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen((v) => !v);
    const closeMenu = () => setOpen(false);

    return (
        <nav>
            <div className="logo">
                JanganKlik<span className="dot">!</span>
            </div>

            <button
                className="menu-toggle"
                aria-label="Buka menu"
                aria-expanded={open}
                aria-controls="primary-menu"
                onClick={toggleMenu}
            >
                <i className={open ? 'ri-close-line' : 'ri-menu-line'} />
            </button>

            <ul id="primary-menu" className={`menu ${open ? 'open' : ''}`}>
                <li>
                    <a href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMenu}>Beranda</a>
                </li>
                <li>
                    <a href="/tentang" className={pathname === '/tentang' ? 'active' : ''} onClick={closeMenu}>Tentang</a>
                </li>
                <li>
                    <a href="/education" className={pathname === '/education' ? 'active' : ''} onClick={closeMenu}>Edukasi</a>
                </li>
                {/* Mobile-only CTA */}
                <li className="mobile-only">
                    <a href="/simulation" className={pathname === '/simulation' ? 'active' : ''} onClick={closeMenu}>
                        Simulasi
                    </a>
                </li>
            </ul>

            {/* Desktop CTA */}
            <a href="/simulation" className={`btn-glitch desktop-only ${pathname === '/simulation' ? 'active' : ''}`}>
                SIMULASI
            </a>
        </nav>
    );
}
