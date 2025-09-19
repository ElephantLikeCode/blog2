import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [animatedStats, setAnimatedStats] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedStats) {
            setAnimatedStats(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [animatedStats]);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title neon-text">
              {'<'}ABOUT_ME{'/>'} 
            </h2>
            <div className="about-description">
              <p className="intro-text">
                你好！我是孫晟赫，大家都喜歡叫我大象 🐘
              </p>
              <p>
                我是澳門大學科技學院計算機科學專業的在讀學生，目前GPA 3.64/4.0。
                我的學習之路充滿了挑戰與成長，從大一的3.25逐步提升到大三的3.89，
                展現了強大的學習適應能力和持續進步的決心。
              </p>
              <p>
                在學術探索中，我不僅專注於計算機科學核心領域，更積極拓展跨學科視野。
                曾在新加坡南洋理工大學（NTU）和北京大學參加夏季交流項目，
                分别在網絡安全和情感智能機器人、新結構經濟學等領域深入學習。
              </p>
              <p>
                在網絡安全領域，我取得了包括長城杯全國Top 10%、PWC CTF港澳第六等多項競賽成績。
                目前正在進行與PWC合作的畢業設計項目——基於CTFd平台的三方陣營網絡安全攻防系統，
                該項目因創新性和實用價值被提前一年啟動。
              </p>
              <p>
                我相信技術的力量能夠構築更安全的數字世界，同時注重多元發展，
                在商業思維、團隊協作等方面也不斷提升自己。
                讓我們一起在網絡安全和技術創新的前沿探索無限可能！
              </p>
            </div>
            <div className="skills-preview">
              <h3>核心技能預覽：</h3>
              <div className="skill-categories">
                <div className="skill-category">
                  <span className="category-name">網絡安全</span>
                  <div className="skill-bar">
                    <div className={`skill-progress ${animatedStats ? 'animated' : ''}`} style={{'--skill-width': '90%'}}></div>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="category-name">全棧開發</span>
                  <div className="skill-bar">
                    <div className={`skill-progress ${animatedStats ? 'animated' : ''}`} style={{'--skill-width': '80%'}}></div>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="category-name">AI/機器學習</span>
                  <div className="skill-bar">
                    <div className={`skill-progress ${animatedStats ? 'animated' : ''}`} style={{'--skill-width': '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="profile-card cyber-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <div className="avatar-placeholder">
                    {'</>'}
                  </div>
                  <div className="status-indicator"></div>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">孫晟赫 (大象)</h3>
                  <p className="profile-title">澳門大學 · 計算機科學系 · 2026屆</p>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className={`stat-value ${animatedStats ? 'animated' : ''}`}>3.89</span>
                  <span className="stat-label">大三GPA</span>
                </div>
                <div className="stat-item">
                  <span className={`stat-value ${animatedStats ? 'animated' : ''}`}>9+</span>
                  <span className="stat-label">競賽獲獎</span>
                </div>
                <div className="stat-item">
                  <span className={`stat-value ${animatedStats ? 'animated' : ''}`}>3</span>
                  <span className="stat-label">交流經歷</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
