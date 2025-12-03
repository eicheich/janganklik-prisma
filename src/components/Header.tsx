"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setOpen((v) => !v);
    const closeMenu = () => setOpen(false);

    // Check if current path is simulation or its sub-routes
    const isSimulationActive = pathname === "/simulation" || pathname.startsWith("/simulation/");

    return (
        <nav className={scrolled ? 'nav-scrolled' : ''}>
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
                <i className={open ? "ri-close-line" : "ri-menu-line"} />
            </button>

            <ul id="primary-menu" className={`menu ${open ? 'open' : ''}`}>
                <li>
                    <a
                        href="/"
                        className={pathname === "/" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Beranda
                    </a>
                </li>
                <li>
                    <a
                        href="/tentang"
                        className={pathname === "/tentang" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Tentang
                    </a>
                </li>
                <li>
                    <a
                        href="/education"
                        className={pathname === "/education" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Edukasi
                    </a>
                </li>
                <li>
                    <a
                        href="/ai-checker"
                        className={pathname === "/ai-checker" ? "active" : ""}
                        onClick={closeMenu}
                    >
                        AI Cek Link
                    </a>
                </li>

                {/* Mobile-only CTA */}
                <li className="mobile-only">
                    <a
                        href="/simulation"
                        className={isSimulationActive ? "active" : ""}
                        onClick={closeMenu}
                    >
                        Simulasi
                    </a>
                </li>
            </ul>

            {/* Desktop CTA */}
            <a
                href="/simulation"
                className={`btn-glitch desktop-only ${isSimulationActive ? "active" : ""}`}
            >
                SIMULASI
            </a>
        </nav>
    );
}
