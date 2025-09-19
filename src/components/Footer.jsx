import React from 'react';
import './Footer.css';
import { scrollToSection } from '../utils/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  
  return (
    <footer className="cyber-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">大象的賽博空間</h3>
            <p className="footer-description">
              持續學習，持續探索，持續創造。
              在代碼的世界裡尋找無限可能。
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">快速導航</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link" onClick={(e) => handleNavClick(e, 'home')}>首頁</a>
              <a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, 'about')}>關於</a>
              <a href="#education" className="footer-link" onClick={(e) => handleNavClick(e, 'education')}>教育</a>
              <a href="#skills" className="footer-link" onClick={(e) => handleNavClick(e, 'skills')}>技能</a>
              <a href="#awards" className="footer-link" onClick={(e) => handleNavClick(e, 'awards')}>獲獎</a>
              <a href="#blog" className="footer-link" onClick={(e) => handleNavClick(e, 'blog')}>博客</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">聯繫方式</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">dc22956@um.edu.mo</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <span className="contact-text">澳門大學計算機科學系</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐘</span>
                <span className="contact-text">我是大象，很高興認識你！</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>© {currentYear} 孫晟赫 (大象). Made with 💻 and lots of ☕</p>
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-separator">·</span>
              <span className="tech-item">Vite</span>
              <span className="tech-separator">·</span>
              <span className="tech-item">CSS3</span>
              <span className="tech-separator">·</span>
              <span className="tech-item">Cyber Style</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
