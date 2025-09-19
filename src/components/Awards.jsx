import React from 'react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      date: "2025.3",
      title: "第二届长城杯信息安全铁人三项赛",
      titleEn: "2nd Great Wall Cup Information Security Competition",
      level: "国家级",
      rank: "广东赛区半决赛 · 全国Top 10%",
      description: "初赛澳门排名1/11，全国排名765/4240。破格进入半决赛，获得NISP-1证书",
      category: "cybersecurity"
    },
    {
      date: "2024.11",
      title: "PWC's Hackaday 2024 CTF",
      titleEn: "PWC's Hackaday 2024 CTF Competition", 
      level: "區域級",
      rank: "澳門第一 · 港澳第六",
      description: "相比上一年有显著成长，在港澳地区取得第六名的好成绩",
      category: "cybersecurity"
    },
    {
      date: "2024.9",
      title: "羊城杯 GBA 網絡安全競賽",
      titleEn: "GBA Cyber Security Competition",
      level: "區域級", 
      rank: "優勝獎",
      description: "代表学校出战，进入决赛获得优胜奖",
      category: "cybersecurity"
    },
    {
      date: "2024.9",
      title: "第二届香港网络安全职业技能大赛",
      titleEn: "2nd Hong Kong CyberSecurity Skills Competition",
      level: "區域級",
      rank: "參與獎",
      description: "首次数字取证实战经历，在网络安全和数字取证两个比赛中获得参与奖",
      category: "cybersecurity"
    },
    {
      date: "2024.2",
      title: "美国大学生数学建模竞赛",
      titleEn: "MCM/ICM Mathematical Contest in Modeling",
      level: "國際級",
      rank: "S獎 · 發表EI論文",
      description: "获得S奖并将论文发表至EI会议，担任通讯作者",
      category: "academic"
    },
    {
      date: "2023.12",
      title: "华为ICT大赛亚太区澳门网络赛道三等奖",
      titleEn: "Huawei ICT Competition 2023-2024 Asia Pacific - Macao",
      level: "區域級",
      rank: "三等獎 · Top 10%",
      description: "全澳各大高校学生参与，网络赛道大学组第三名",
      category: "ict"
    },
    {
      date: "2023.12", 
      title: "Active Participation Scholarship",
      titleEn: "Residential College Active Participation Scholarship",
      level: "校級",
      rank: "積極參與獎學金",
      description: "书院积极参与奖学金，表彰多方面积极参与书院活动的同学",
      category: "scholarship"
    },
    {
      date: "2023.11",
      title: "道元智能AI创新比赛",
      titleEn: "Zenta Intelligent AI Innovation Project Competition", 
      level: "區域級",
      rank: "最有趣項目獎",
      description: "全澳门AI创新项目比赛，获得最有趣项目奖",
      category: "ai"
    },
    {
      date: "2023.11",
      title: "PWC's Hackaday 2023 CTF",
      titleEn: "PWC's Hackaday 2023 CTF Competition",
      level: "區域級", 
      rank: "澳門第一 · 參與獎",
      description: "首次CTF实战尝试，在澳门两支队伍中排名第一",
      category: "cybersecurity"
    }
  ];

  const categoryColors = {
    cybersecurity: "var(--cyber-neon-cyan)",
    ict: "var(--cyber-neon-purple)", 
    scholarship: "var(--cyber-neon-green)",
    ai: "var(--cyber-neon-orange)",
    academic: "var(--cyber-neon-blue)"
  };

  const categoryNames = {
    cybersecurity: "網絡安全",
    ict: "ICT競賽",
    scholarship: "獎學金", 
    ai: "AI創新",
    academic: "學術競賽"
  };

  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <h2 className="section-title neon-text">
          {'<'}AWARDS_&_HONORS{'/>'} 
        </h2>
        
        <div className="awards-stats">
          <div className="stat-card cyber-card">
            <div className="stat-number">9+</div>
            <div className="stat-label">競賽獲獎</div>
          </div>
          <div className="stat-card cyber-card">
            <div className="stat-number">3</div>
            <div className="stat-label">國際/國家級</div>
          </div>
          <div className="stat-card cyber-card">
            <div className="stat-number">5</div>
            <div className="stat-label">網絡安全競賽</div>
          </div>
          <div className="stat-card cyber-card">
            <div className="stat-number">Top 10%</div>
            <div className="stat-label">長城杯全國</div>
          </div>
        </div>

        <div className="awards-timeline">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="award-card cyber-card"
            >
              <div className="award-header">
                <div className="award-date">{award.date}</div>
                <div 
                  className="award-category"
                  style={{ backgroundColor: categoryColors[award.category] }}
                >
                  {categoryNames[award.category]}
                </div>
              </div>
              
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <h4 className="award-title-en">{award.titleEn}</h4>
                
                <div className="award-meta">
                  <span className="award-level">{award.level}</span>
                  <span className="award-rank">{award.rank}</span>
                </div>
                
                <p className="award-description">{award.description}</p>
              </div>

              {award.highlight && (
                <div className="highlight-badge">
                  <span>🏆</span>
                  <span>重點成就</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="growth-note">
          <div className="note-card cyber-card">
            <h3 className="note-title">競賽成長軌跡</h3>
            <p className="note-content">
              從2023年首次參加PWC CTF獲得澳門第一，到2024年港澳第六的進步；
              從第一届长城杯止步初赛，到第二届破格进入半决赛并获得全国前10%。
              每一次比赛都是成长的足迹，每一个奖项都见证着技术能力的提升。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
