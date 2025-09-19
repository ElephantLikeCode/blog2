import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section cyber-scan" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="glitch-text">HELLO, I'M 大象</span>
            </h1>
            <p className="hero-subtitle">
              孫晟赫 · 澳門大學計算機科學系 · 網絡安全愛好者
            </p>
            <p className="hero-description">
              歡迎來到我的賽博空間！我是大象，澳門大學計算機科學專業在讀學生，
              熱愛網絡安全競賽與技術探索。從澳大到NTU再到北大，
              在學習與競賽中不斷成長，用代碼構築數字世界的防線。
            </p>
            <div className="hero-buttons">
              <button 
                className="cyber-button primary"
                onClick={() => {
                  const blogSection = document.getElementById('blog');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {'>'} 進入博客
              </button>
              <button 
                className="cyber-button secondary"
                onClick={() => {
                  const awardsSection = document.getElementById('awards');
                  if (awardsSection) {
                    awardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {'>'} 查看成就
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="cyber-terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <span className="terminal-title">cyber_blog@matrix:~$</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">whoami</span>
                </div>
                <div className="terminal-line">
                  <span className="output">孫晟赫 @ 澳門大學計算機科學系</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">cat achievements.txt</span>
                </div>
                <div className="terminal-line">
                  <span className="output typing">GPA 3.64 | CTF競賽 | 網絡安全 | 全栈開發...</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
