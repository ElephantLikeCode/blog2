// 平滑滚动到指定元素
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // 考虑固定导航栏的高度
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// 设置当前活跃的导航链接
export const setActiveNavLink = () => {
  const sections = ['home', 'about', 'education', 'skills', 'awards', 'blog'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = 'home';
  
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = sectionId;
      }
    }
  });
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

// 添加导航点击事件监听器
export const initializeNavigation = () => {
  const navLinks = document.querySelectorAll('.nav-link, .footer-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
      }
    });
  });
  
  // 监听滚动事件来更新活跃导航
  window.addEventListener('scroll', setActiveNavLink);
  
  // 初始化时设置活跃导航
  setActiveNavLink();
};

// 类型写效果
export const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  
  typing();
};

// 观察器用于动画触发
export const createIntersectionObserver = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // 为技能条添加动画
        const skillBars = entry.target.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 300);
        });
        
        // 为统计数字添加动画
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        statNumbers.forEach(statNumber => {
          const finalValue = statNumber.textContent;
          const isNumber = !isNaN(parseFloat(finalValue));
          
          if (isNumber) {
            animateNumber(statNumber, 0, parseFloat(finalValue), 1000);
          }
        });
      }
    });
  }, observerOptions);
  
  // 观察所有section
  const sections = document.querySelectorAll('section, .education-card, .award-card, .skill-category-card');
  sections.forEach(section => {
    observer.observe(section);
  });
};

// 数字动画
const animateNumber = (element, start, end, duration) => {
  const startTime = performance.now();
  const originalText = element.textContent;
  
  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(start + (end - start) * progress);
    
    if (originalText.includes('.')) {
      element.textContent = current.toFixed(1);
    } else if (originalText.includes('%')) {
      element.textContent = current + '%';
    } else if (originalText.includes('+')) {
      element.textContent = current + '+';
    } else {
      element.textContent = current;
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = originalText; // 恢复原始文本
    }
  }
  
  requestAnimationFrame(updateNumber);
};
