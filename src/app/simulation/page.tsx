'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SCENARIOS } from '@/lib/simulation-data';

export default function Simulation() {
    const router = useRouter();

    return (
        <>
            <Header />
            <div className="sim-menu-container">
                <div className="sim-header-section">
                    <div className="inline-block px-4 py-1 mb-4 border border-cyan-400 rounded-full text-cyan-400 text-sm tracking-widest font-bold bg-cyan-950/30">MODUL SIMULASI</div>
                    <h1 className="sim-page-title">PILIH <span className="text-gradient">SKENARIO</span></h1>
                    <p className="sim-page-desc">
                        Pilih jenis ancaman siber yang ingin Anda pelajari. Uji kemampuan Anda dalam mendeteksi dan pelajari penipuan di berbagai platform digital.
                    </p>
                </div>

                <div className="sim-level-grid">
                    {SCENARIOS.map((lvl) => (
                        <div key={lvl.id} className="sim-level-card group" onClick={() => router.push(`/simulation/${lvl.id}`)}>
                            <div className="card-glow"></div>
                            <div className="level-header">
                                <span className="level-badge">{lvl.badge}</span>
                                <div className="level-icon-small">
                                    {lvl.interfaceType === 'whatsapp' && <i className="ri-whatsapp-fill text-green-500"></i>}
                                    {lvl.interfaceType === 'email' && <i className="ri-mail-fill text-red-500"></i>}
                                    {lvl.interfaceType === 'sms' && <i className="ri-message-2-fill text-blue-500"></i>}
                                    {lvl.interfaceType === 'instagram' && <i className="ri-instagram-fill text-pink-500"></i>}
                                    {lvl.interfaceType === 'ecommerce' && <i className="ri-shopping-bag-3-fill text-orange-500"></i>}
                                    {lvl.interfaceType === 'browser' && <i className="ri-global-fill text-cyan-500"></i>}
                                    {lvl.interfaceType === 'popup' && <i className="ri-window-fill text-yellow-500"></i>}
                                    {lvl.interfaceType === 'phone' && <i className="ri-phone-fill text-emerald-500"></i>}
                                    {lvl.interfaceType === 'videocall' && <i className="ri-vidicon-fill text-purple-500"></i>}
                                </div>
                            </div>

                            <h3 className="level-title" dangerouslySetInnerHTML={{ __html: lvl.title }}></h3>

                            <div className="level-desc">
                                <p dangerouslySetInnerHTML={{ __html: lvl.desc }}></p>
                            </div>

                            <div className="level-footer">
                                <button className="start-btn">
                                    MULAI SIMULASI <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
