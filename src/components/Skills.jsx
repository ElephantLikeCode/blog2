import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      category: "程式語言",
      skills: [
        { name: "Python", level: 85, icon: "PY" },
        { name: "Java", level: 80, icon: "JV" },
        { name: "JavaScript", level: 75, icon: "JS" },
        { name: "C/C++", level: 70, icon: "C+" }
      ]
    },
    {
      category: "網絡安全",
      skills: [
        { name: "滲透測試", level: 85, icon: "PT" },
        { name: "CTF競賽", level: 90, icon: "CF" },
        { name: "數字取證", level: 70, icon: "DF" },
        { name: "安全分析", level: 80, icon: "SA" }
      ]
    },
    {
      category: "Web開發",
      skills: [
        { name: "前端開發", level: 80, icon: "FE" },
        { name: "後端開發", level: 75, icon: "BE" },
        { name: "全棧開發", level: 85, icon: "FS" },
        { name: "數據庫", level: 75, icon: "DB" }
      ]
    },
    {
      category: "AI & 機器學習",
      skills: [
        { name: "機器學習", level: 75, icon: "ML" },
        { name: "計算機視覺", level: 70, icon: "CV" },
        { name: "雲計算", level: 75, icon: "CC" },
        { name: "大數據", level: 70, icon: "BD" }
      ]
    },
    {
      category: "學術研究",
      skills: [
        { name: "情感智能機器人", level: 65, icon: "AI" },
        { name: "新結構經濟學", level: 60, icon: "EC" },
        { name: "學術寫作", level: 70, icon: "AW" },
        { name: "科研方法", level: 75, icon: "RM" }
      ]
    },
    {
      category: "多元發展",
      skills: [
        { name: "商業思維", level: 65, icon: "BS" },
        { name: "團隊協作", level: 85, icon: "TC" },
        { name: "項目管理", level: 80, icon: "PM" },
        { name: "跨文化交流", level: 75, icon: "CC" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                const skillName = item.getAttribute('data-skill');
                setAnimatedSkills(prev => new Set([...prev, skillName]));
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title neon-text">
          {'<'}TECHNICAL_SKILLS{'/>'} 
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card cyber-card">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    data-skill={`${category.category}-${skill.name}`}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${animatedSkills.has(`${category.category}-${skill.name}`) ? 'animated' : ''}`}
                        style={{'--skill-width': `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-note">
          <p className="note-text">
            💡 技能水平基於個人學習經驗和項目實踐，持續學習和成長中...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
