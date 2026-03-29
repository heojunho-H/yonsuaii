'use client';

import Spline from '@splinetool/react-spline/next';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid lines overlay */}
      <div className="grid-overlay" />

      {/* Left: text content */}
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot" />
          AI-Powered
        </div>

        <h1 className="hero-title">
          Meet <span className="gradient-text">GENKUB</span>
          <br />
          Greeting Robot
        </h1>

        <p className="hero-subtitle">
          차세대 AI 인사 로봇. 자연스러운 대화와 스마트한 인터랙션으로
          <br />
          당신의 공간을 더욱 특별하게 만들어드립니다.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            시작하기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary">
            더 알아보기
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">인식 정확도</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">0.3s</span>
            <span className="stat-label">응답 속도</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">지원 언어</span>
          </div>
        </div>
      </div>

      {/* Right: Spline 3D scene */}
      <div className="spline-wrapper">
        <Spline scene="https://prod.spline.design/Ucp7PWPw2Qa19dJxWCY6sMTW/scene.splinecode" />
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
