import React, { useState } from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "从初赛第一到半决赛突破 - 长城杯的成长之路",
      date: "2025-03-15",
      category: "競賽心得",
      excerpt: "記錄我在第二届長城杯信息安全铁人三项赛中从澳门排名第一到破格进入半决赛的成长历程，以及获得NISP-1证书的感悟。",
      tags: ["長城杯", "網絡安全", "競賽", "成長"]
    },
    {
      id: 2,
      title: "澳门大学到NTU再到北大的交流学习体验",
      date: "2024-08-01",
      category: "學習經歷",
      excerpt: "分享在新加坡南洋理工大學和北京大學夏季交流項目的學習體驗，从网络安全到情感智能机器人的跨学科探索。",
      tags: ["交流學習", "NTU", "北大", "跨學科"]
    },
    {
      id: 3,
      title: "我的CTF竞赛之路：从澳门第一到港澳第六",
      date: "2024-11-20",
      category: "技術分享",
      excerpt: "回顾参加PWC Hackaday CTF比赛的经历，分享从2023年首次参赛到2024年获得港澳第六名的技术成长过程。",
      tags: ["CTF", "網絡安全", "PWC", "競賽心得"]
    },
    {
      id: 4,
      title: "基于CTFd的三方阵营攻防平台设计思路",
      date: "2024-10-10",
      category: "畢業項目",
      excerpt: "详细介绍我的毕业设计项目：基于CTFd平台的三方阵营网络安全攻防系统设计与实现，与PWC合作的商业化应用前景。",
      tags: ["CTFd", "攻防平台", "畢業設計", "PWC"]
    },
    {
      id: 5,
      title: "从3.25到3.89：我的GPA逆袭之路",
      date: "2024-12-15",
      category: "學習心得",
      excerpt: "分享我從大一GPA 3.25逐步提升到大三3.89的學習方法和心得體會，以及如何在逆境中保持持續成長的動力。",
      tags: ["學習方法", "成長心得", "GPA提升", "大學生活"]
    },
    {
      id: 6,
      title: "跨國學習體驗：從南大到北大的學術之旅",
      date: "2024-08-20",
      category: "交流經歷",
      excerpt: "記錄在新加坡南洋理工大學和北京大學的暑期交流經歷，分享國際化學習環境帶來的思維碰撞與學術啟發。",
      tags: ["國際交流", "學術體驗", "跨文化學習", "視野拓展"]
    },
    {
      id: 7,
      title: "多元發展的重要性：技術人的軟技能修煉",
      date: "2024-09-30",
      category: "職場思考",
      excerpt: "探討為什麼技術人員需要培養商業思維、團隊協作等軟技能，以及如何在專業學習之外實現多元化發展。",
      tags: ["軟技能", "多元發展", "職場規劃", "個人成長"]
    },
    {
      id: 8,
      title: "为什么大家都叫我大象？我的昵称故事",
      date: "2024-09-05",
      category: "個人分享",
      excerpt: "分享我的昵称「大象」的来源故事，以及它在我的学习生活和技术成长路上的特殊意义。",
      tags: ["個人故事", "昵稱", "生活分享", "大象"]
    }
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const fullContent = {
    1: "這篇文章記錄了我在第二届長城杯信息安全铁人三项赛中的完整經歷。從初赛澳门排名第一（1/11），到全国排名765/4240（全国top20%），再到破格進入廣東賽區半決賽的整個過程。在半決賽中，面對來自全國各地的強隊，我們最終獲得了廣東賽區中間位置的成績，綜合來看應該是全國top10%的水平。這次比賽不僅讓我獲得了國家信息安全水平證書（NISP-1），更重要的是驗證了我在網絡安全領域的技能水平和成長潛力。",
    2: "在新加坡南洋理工大學的夏季項目中，我獲得了5.0/5.0的滿分成績，完成了EE5084 Cyber Security課程。這段經歷讓我接觸到了國際前沿的網絡安全理論和實踐。隨後在北京大學的交流項目中，我學習了情感智能機器人引論和新結構經濟學國際實踐，獲得了86.5/100的優秀成績。這些跨學科的學習經歷不僅拓展了我的知識面，也培養了我的國際化視野。",
    3: "從2023年首次參加PWC Hackaday CTF比賽獲得澳門第一名，到2024年在港澳地區獲得第六名的突破，這一年的成長讓我深刻體會到持續學習和實踐的重要性。CTF競賽不僅考驗技術能力，更考驗邏輯思維和團隊協作。每一次比賽都是學習的機會，每一個挑戰都是成長的階梯。",
    4: "我的畢業設計項目與PWC合作，旨在基於CTFd開源平台構建一個支持攻擊方、檢測方和修復方三方陣營的攻防系統。與傳統的兩方對抗平台不同，三方陣營的設計更能模擬真實的網絡安全環境。這個項目預計在大四下學期完成，PWC可能會將其商業化應用，這對我來說是一個很大的榮譽和責任。",
    5: "大學期間，我的GPA經歷了一個完整的蛻變過程。大一剛入學時，面對全新的大學生活節奏和學習方式，我的GPA只有3.25，這讓我深刻反思自己的學習方法。大二開始，我逐步摸索出適合自己的學習節奏，GPA提升到3.51。到了大三，我的平均GPA達到了3.89，這可能讓我成為專業第一名。這個過程教會了我堅持的力量和方法改進的重要性，也證明了我具有很強的學習適應能力和持續成長的潛力。",
    6: "我在新加坡南洋理工大學和北京大學的兩次交流經歷，為我打開了全新的學術視野。在NTU，我接觸到了國際化的網絡安全教育體系，5.0/5.0的滿分成績讓我對自己的專業能力更加自信。在北大，我跨出舒適圈，學習了情感智能機器人和新結構經濟學等跨學科內容，86.5分的成績證明了我在多元學習方面的能力。這些經歷不僅豐富了我的知識結構，更培養了我的國際化思維和跨文化交流能力。",
    7: "作為一名計算機科學專業的學生，我深刻認識到僅有技術能力是不夠的。在學習專業課程的同時，我積極培養商業思維、團隊協作、項目管理等軟技能。通過參加各種競賽和項目，我學會了如何與不同背景的人協作，如何在壓力下保持冷靜，如何從商業角度思考技術問題。這種多元發展不僅讓我在學術上更加全面，也為我未來的職業發展奠定了堅實基礎。我相信，真正優秀的技術人員應該具備全面的綜合素質。",
    8: "其實「大象」這個暱稱的來源很簡單，但對我來說卻有着特殊的意義。在我的學習和生活中，大象代表着記憶力好、踏實穩重的品質。就像大象一樣，我希望能夠在學習的道路上穩扎穩打，記住每一個重要的知識點，在技術的世界裡留下自己的足跡。這個暱稱也提醒我要保持謙遜和包容的心態，像大象一樣溫和而有力量。"
  };

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="section-title neon-text">
          {'<'}BLOG_POSTS{'/>'} 
        </h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card cyber-card">
              <div className="card-header">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
              <div className="card-footer">
                <button 
                  className="cyber-button small"
                  onClick={() => handleReadMore(post)}
                >
                  {'>'} 閱讀更多
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="blog-actions">
          <button 
            className="cyber-button primary"
            onClick={() => {
              alert('更多文章功能開發中，敬請期待！\n\n目前可以點擊各個文章的「閱讀更多」按鈕查看完整內容。');
            }}
          >
            {'>'} 查看所有文章
          </button>
        </div>

        {/* 文章詳情模態框 */}
        {selectedPost && (
          <div className="blog-modal" onClick={closeModal}>
            <div className="modal-content cyber-card" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">{selectedPost.title}</h2>
                <button className="close-button" onClick={closeModal}>×</button>
              </div>
              <div className="modal-meta">
                <span className="modal-date">{selectedPost.date}</span>
                <span className="modal-category">{selectedPost.category}</span>
              </div>
              <div className="modal-content-text">
                <p>{fullContent[selectedPost.id] || selectedPost.excerpt}</p>
              </div>
              <div className="modal-tags">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
              <div className="modal-footer">
                <button className="cyber-button secondary" onClick={closeModal}>
                  {'<'} 返回列表
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
