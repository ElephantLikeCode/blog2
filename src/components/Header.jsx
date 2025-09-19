import React, { useEffect } from 'react';
import { initializeNavigation } from '../utils/navigation';
import './Header.css';

const Header = () => {
  useEffect(() => {
    initializeNavigation();
    
    // 清理函数
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="cyber-header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo neon-text" onClick={(e) => handleNavClick(e, 'home')}>
            {'<'}ELEPHANT_BLOG{'/>'} 
          </h1>
          <nav className="nav-menu">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#education" className="nav-link" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#awards" className="nav-link" onClick={(e) => handleNavClick(e, 'awards')}>Awards</a>
            <a href="#blog" className="nav-link" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a>
          </nav>
          <div className="header-scanner cyber-scan">
            <span className="scanner-line"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
