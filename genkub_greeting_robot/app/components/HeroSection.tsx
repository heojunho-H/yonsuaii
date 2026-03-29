'use client';

import FloatingIcon from './FloatingIcon';

const icons = [
  // Robot / AI
  {
    id: 'robot',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="18" width="24" height="20" rx="4" fill="currentColor" opacity="0.9"/>
        <rect x="18" y="10" width="12" height="10" rx="3" fill="currentColor" opacity="0.9"/>
        <line x1="24" y1="10" x2="24" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="5" r="2" fill="currentColor"/>
        <circle cx="19" cy="25" r="3" fill="white" opacity="0.9"/>
        <circle cx="29" cy="25" r="3" fill="white" opacity="0.9"/>
        <circle cx="19" cy="25" r="1.5" fill="#4F46E5"/>
        <circle cx="29" cy="25" r="1.5" fill="#4F46E5"/>
        <path d="M19 32 Q24 36 29 32" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <rect x="8" y="22" width="4" height="8" rx="2" fill="currentColor" opacity="0.7"/>
        <rect x="36" y="22" width="4" height="8" rx="2" fill="currentColor" opacity="0.7"/>
        <rect x="17" y="38" width="4" height="6" rx="2" fill="currentColor" opacity="0.7"/>
        <rect x="27" y="38" width="4" height="6" rx="2" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    color: '#818CF8',
    top: '12%', left: '8%',
    delay: 0, duration: 9, size: 64,
  },
  // Chat bubble
  {
    id: 'chat',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8C6 5.8 7.8 4 10 4H38C40.2 4 42 5.8 42 8V30C42 32.2 40.2 34 38 34H28L20 44V34H10C7.8 34 6 32.2 6 30V8Z" fill="currentColor" opacity="0.9"/>
        <circle cx="16" cy="21" r="2.5" fill="white" opacity="0.85"/>
        <circle cx="24" cy="21" r="2.5" fill="white" opacity="0.85"/>
        <circle cx="32" cy="21" r="2.5" fill="white" opacity="0.85"/>
      </svg>
    ),
    color: '#34D399',
    top: '20%', left: '82%',
    delay: 1.5, duration: 11, size: 54,
  },
  // Sparkle / Star
  {
    id: 'sparkle',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4 L27 18 L41 21 L27 24 L24 38 L21 24 L7 21 L21 18 Z" fill="currentColor"/>
        <circle cx="38" cy="10" r="3" fill="currentColor" opacity="0.6"/>
        <circle cx="10" cy="36" r="2" fill="currentColor" opacity="0.5"/>
        <path d="M38 32 L39.5 36 L43.5 37.5 L39.5 39 L38 43 L36.5 39 L32.5 37.5 L36.5 36 Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    color: '#FBBF24',
    top: '60%', left: '5%',
    delay: 3, duration: 7, size: 44,
  },
  // Code brackets
  {
    id: 'code',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 10 L4 24 L16 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M32 10 L44 24 L32 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="27" y1="8" x2="21" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    color: '#60A5FA',
    top: '75%', left: '78%',
    delay: 0.8, duration: 10, size: 52,
  },
  // Brain / AI
  {
    id: 'brain',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C17.4 8 12 13.4 12 20C12 22.4 12.8 24.6 14.2 26.4C12.8 27.4 12 28.9 12 30.5C12 33.5 14.5 36 17.5 36H24V38H22C21.4 38 21 38.4 21 39C21 39.6 21.4 40 22 40H26C26.6 40 27 39.6 27 39C27 38.4 26.6 38 26 38H24V36H30.5C33.5 36 36 33.5 36 30.5C36 28.9 35.2 27.4 33.8 26.4C35.2 24.6 36 22.4 36 20C36 13.4 30.6 8 24 8Z" fill="currentColor" opacity="0.85"/>
        <circle cx="19" cy="20" r="2" fill="white" opacity="0.7"/>
        <circle cx="29" cy="20" r="2" fill="white" opacity="0.7"/>
        <path d="M18 27 Q24 31 30 27" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    color: '#F472B6',
    top: '40%', left: '88%',
    delay: 2.5, duration: 12, size: 50,
  },
  // Lightning / Bolt
  {
    id: 'bolt',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 4 L12 26 H22 L20 44 L36 22 H26 L28 4Z" fill="currentColor"/>
      </svg>
    ),
    color: '#FBBF24',
    top: '8%', left: '55%',
    delay: 4, duration: 8, size: 40,
  },
  // Circuit / Network
  {
    id: 'network',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="5" fill="currentColor"/>
        <circle cx="8" cy="12" r="3.5" fill="currentColor" opacity="0.7"/>
        <circle cx="40" cy="12" r="3.5" fill="currentColor" opacity="0.7"/>
        <circle cx="8" cy="36" r="3.5" fill="currentColor" opacity="0.7"/>
        <circle cx="40" cy="36" r="3.5" fill="currentColor" opacity="0.7"/>
        <line x1="11" y1="14" x2="21" y2="21" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
        <line x1="37" y1="14" x2="27" y2="21" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
        <line x1="11" y1="34" x2="21" y2="27" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
        <line x1="37" y1="34" x2="27" y2="27" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      </svg>
    ),
    color: '#A78BFA',
    top: '55%', left: '50%',
    delay: 1, duration: 13, size: 46,
  },
  // Waveform / Sound
  {
    id: 'wave',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24 Q8 14 12 24 Q16 34 20 24 Q24 14 28 24 Q32 34 36 24 Q40 14 44 24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    color: '#2DD4BF',
    top: '30%', left: '15%',
    delay: 2, duration: 9, size: 56,
  },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Floating icons */}
      {icons.map((icon) => (
        <FloatingIcon
          key={icon.id}
          delay={icon.delay}
          duration={icon.duration}
          size={icon.size}
          style={{
            position: 'absolute',
            top: icon.top,
            left: icon.left,
            color: icon.color,
          }}
        >
          {icon.svg}
        </FloatingIcon>
      ))}

      {/* Grid lines overlay */}
      <div className="grid-overlay" />

      {/* Main content */}
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

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
