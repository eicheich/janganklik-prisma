'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { checkUrlSafety } from '@/actions/ai-safety';

export default function AIChecker() {
  const [linkInput, setLinkInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeLink = async () => {
    if (!linkInput.trim()) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const aiResult = await checkUrlSafety(linkInput);
      setAnalysisResult(aiResult);
    } catch (error) {
      console.error('Analysis error:', error);
      setAnalysisResult({
        error: true,
        reason: "Terjadi kesalahan sistem saat menghubungi AI."
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getStatusColor = (isSafe: boolean, score: number) => {
    if (isSafe) return 'var(--neon-green)';
    if (score >= 70) return '#ffaa00'; // Warning
    return 'var(--neon-red)'; // Danger
  };

  const getStatusText = (isSafe: boolean, score: number) => {
    if (isSafe) return 'AMAN';
    if (score >= 70) return 'MENCURIGAKAN';
    return 'BERBAHAYA';
  };

  return (
    <div className="edu-body">
      <Header />

      <div className="edu-content" style={{ maxWidth: '1000px' }}>
        <div className="ai-checker-header">
          <h1 className="sim-page-title">
            AI <span className="text-gradient">LINK SCANNER</span>
          </h1>
          <p className="ai-checker-subtitle">
            Analisis keamanan URL menggunakan kecerdasan buatan Google Gemini 2.0 Flash.
            Cepat, akurat, dan real-time.
          </p>
        </div>

        <div className="ai-checker-container" style={{ maxWidth: '100%' }}>
          {/* Input Section */}
          <div className="ai-input-wrapper">
            <div className="ai-input-container">
              <i className="ri-link-m ai-input-icon"></i>
              <input
                type="text"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                placeholder="Tempel link yang ingin diperiksa di sini..."
                className="ai-input-field"
                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
                onKeyDown={(e) => e.key === 'Enter' && analyzeLink()}
              />
              <button
                onClick={analyzeLink}
                disabled={isAnalyzing || !linkInput.trim()}
                className="ai-scan-btn"
              >
                {isAnalyzing ? 'Memindai...' : 'Pindai Link'}
              </button>
            </div>
          </div>

          {/* Result Section */}
          {analysisResult && (
            <div className="ai-result-container" style={{
              border: `1px solid ${analysisResult.error ? 'var(--neon-red)' : '#333'}`
            }}>
              {analysisResult.error ? (
                <div className="ai-error-box">
                  <i className="ri-error-warning-line ai-error-icon"></i>
                  <h3 className="ai-error-title">Analisis Gagal</h3>
                  <p style={{ color: '#ccc' }}>{analysisResult.reason}</p>
                </div>
              ) : (
                <div className="ai-result-grid">
                  {/* Left: Score & Status */}
                  <div className="ai-score-box">
                    <div className="ai-score-circle" style={{
                      borderColor: getStatusColor(analysisResult.isSafe, analysisResult.riskScore),
                      boxShadow: `0 0 30px ${getStatusColor(analysisResult.isSafe, analysisResult.riskScore)}40`
                    }}>
                      <span className="ai-score-text">
                        {analysisResult.riskScore}
                      </span>
                    </div>
                    <h2 className="ai-status-text" style={{
                      color: getStatusColor(analysisResult.isSafe, analysisResult.riskScore)
                    }}>
                      {getStatusText(analysisResult.isSafe, analysisResult.riskScore)}
                    </h2>
                    <span className="ai-score-label">
                      Skor Risiko
                    </span>
                  </div>

                  {/* Right: Details */}
                  <div className="ai-details-box">
                    <div className="ai-detail-item">
                      <h4 className="ai-detail-label">Kategori</h4>
                      <span className="ai-category-badge">
                        {analysisResult.category}
                      </span>
                    </div>

                    <div className="ai-detail-item">
                      <h4 className="ai-detail-label">Analisis AI</h4>
                      <p className="ai-analysis-text">
                        {analysisResult.reason}
                      </p>
                    </div>

                    {!analysisResult.isSafe && (
                      <div className="ai-recommendation-box">
                        <h5 className="ai-recommendation-title">
                          <i className="ri-shield-alert-line"></i> Rekomendasi Keamanan
                        </h5>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>
                          Jangan berikan informasi pribadi, password, atau data finansial pada situs ini. Segera tutup halaman jika sudah terbuka.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Features Grid */}
          <div className="ai-features-grid">
            <div className="ai-feature-card">
              <i className="ri-brain-line ai-feature-icon" style={{ color: 'var(--neon-blue)' }}></i>
              <h3 className="ai-feature-title">Analisis Berbasis AI</h3>
              <p className="ai-feature-desc">
                Menggunakan model bahasa besar (LLM) terbaru untuk mendeteksi pola phishing yang kompleks.
              </p>
            </div>
            <div className="ai-feature-card">
              <i className="ri-time-line ai-feature-icon" style={{ color: 'var(--neon-green)' }}></i>
              <h3 className="ai-feature-title">Pemindaian Real-time</h3>
              <p className="ai-feature-desc">
                Hasil analisis instan dalam hitungan detik tanpa perlu menunggu antrian.
              </p>
            </div>
            <div className="ai-feature-card">
              <i className="ri-shield-check-line ai-feature-icon" style={{ color: 'var(--neon-red)' }}></i>
              <h3 className="ai-feature-title">Pertahanan Proaktif</h3>
              <p className="ai-feature-desc">
                Mendeteksi ancaman zero-day yang belum terdaftar di database blacklist tradisional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
