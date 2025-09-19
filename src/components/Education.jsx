import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      period: "2022.8 - 2026.6",
      institution: "澳門大學",
      institutionEn: "University of Macau",
      degree: "理學士學位（計算機科學）",
      degreeEn: "Bachelor of Science in Computer Science",
      gpa: "3.64 / 4.0",
      highlights: [
        "科技學院計算機科學專業",
        "GPA逐年提升：大一3.25 → 大二3.51 → 大三3.89",
        "大三學年平均GPA 3.89，可能專業第一名",
        "提前一年開始畢業項目（與PWC合作）",
        "畢業設計：基於CTFd平台的三方陣營網絡安全攻防系統"
      ],
      courses: [
        "Machine Learning (A-)",
        "Computer Vision (A-)", 
        "Algorithm Design and Analysis (A)",
        "Software Engineering Principles (A-)",
        "Cloud Computing and Big Data Systems (A)",
        "Information Retrieval and Web Search (A)",
        "Computer Graphics (A)",
        "Multimedia Computing (A)"
      ]
    },
    {
      period: "2024.7 - 2024.7",
      institution: "北京大學",
      institutionEn: "Peking University",
      degree: "夏季交流項目",
      degreeEn: "Summer Program",
      gpa: "86.5 / 100",
      highlights: [
        "情感智能機器人引論課程探索AI前沿",
        "新結構經濟學國際實踐獲得A-成績",
        "跨學科學習拓展學術視野",
        "與全國優秀學生交流學習"
      ],
      courses: [
        "Introduction to Affective Intelligent Robotics (P)",
        "International Practice from New Structural Economics (A-)"
      ]
    },
    {
      period: "2023.6 - 2023.7", 
      institution: "新加坡南洋理工大學",
      institutionEn: "Nanyang Technological University",
      degree: "夏季交流項目",
      degreeEn: "Summer Program", 
      gpa: "5.0 / 5.0",
      highlights: [
        "網絡安全專業課程獲得滿分A等級",
        "國際化教育環境體驗",
        "提升英語學術表達能力",
        "建立國際同行學習網絡"
      ],
      courses: [
        "EE5084 Cyber Security (Grade: A)"
      ]
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title neon-text">
          {'<'}EDUCATION{'/>'} 
        </h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card cyber-card">
              <div className="education-header">
                <div className="period-badge">{edu.period}</div>
                <div className="gpa-badge">GPA: {edu.gpa}</div>
              </div>
              
              <div className="institution-info">
                <h3 className="institution-name">{edu.institution}</h3>
                <h4 className="institution-name-en">{edu.institutionEn}</h4>
                <p className="degree">{edu.degree}</p>
                <p className="degree-en">{edu.degreeEn}</p>
              </div>

              <div className="education-content">
                <div className="highlights">
                  <h4 className="highlights-title">主要亮點</h4>
                  <ul className="highlights-list">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="courses">
                  <h4 className="courses-title">核心課程</h4>
                  <div className="courses-grid">
                    {edu.courses.map((course, idx) => (
                      <span key={idx} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="growth-story">
          <div className="growth-card cyber-card">
            <h3 className="growth-title">學術成長軌跡</h3>
            <p className="growth-description">
              從大一初入校園時的GPA 3.25，到大二的3.51，再到大三平均GPA 3.89的飛躍，
              我的學習之路展現了持續的進步與成長。這不僅體現了我的學習能力和適應性，
              更證明了在挑戰面前永不放棄的品質。
            </p>
            <div className="gpa-progression">
              <div className="gpa-item">
                <span className="gpa-year">大一</span>
                <div className="gpa-bar">
                  <div className="gpa-fill" style={{width: '65%'}}></div>
                  <span className="gpa-value">3.25</span>
                </div>
              </div>
              <div className="gpa-item">
                <span className="gpa-year">大二</span>
                <div className="gpa-bar">
                  <div className="gpa-fill" style={{width: '70.2%'}}></div>
                  <span className="gpa-value">3.51</span>
                </div>
              </div>
              <div className="gpa-item">
                <span className="gpa-year">大三</span>
                <div className="gpa-bar">
                  <div className="gpa-fill" style={{width: '97.25%'}}></div>
                  <span className="gpa-value">3.89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
