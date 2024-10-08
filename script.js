document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有產品卡片
    const productCards = document.querySelectorAll('.product-card');

    // 為每個產品卡片添加點擊事件
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            const productPrice = this.querySelector('.price').textContent;
            alert(`您選擇了 ${productName}，價格為 ${productPrice}`);
        });
    });

    // 獲取所有導航項目，包括新添加的語言選項
    const navItems = document.querySelectorAll('.nav-links > li');

    // 為每個導航項目添加鼠標事件
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-content');

        // 鼠標進入事件
        item.addEventListener('mouseenter', function() {
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        // 鼠標離開事件
        item.addEventListener('mouseleave', function() {
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });

        // 點擊主導航連結事件
        if (link) {
            link.addEventListener('click', function(e) {
                if (dropdown) {
                    // 如果有下拉選單，阻止默認行為
                    e.preventDefault();
                    // 切換下拉選單的顯示狀態
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
        }

        // 為下拉選單中的連結添加點擊事件
        if (dropdown) {
            const dropdownLinks = dropdown.querySelectorAll('a');
            dropdownLinks.forEach(dropdownLink => {
                dropdownLink.addEventListener('click', function(e) {
                    // 這裡可以添加額外的處理邏輯
                    console.log('Clicked dropdown link:', this.textContent);
                    
                    // 語言切換邏輯
                    if (item.classList.contains('language-selector')) {
                        e.preventDefault();
                        const selectedLanguage = this.textContent.trim();
                        console.log('切換語言到:', selectedLanguage);
                        // 這裡添加實際的語言切換邏輯
                        // changeLanguage(selectedLanguage);
                    }
                });
            });
        }
    });

    // 添加語言切換功能（示例）
    function changeLanguage(language) {
        // 這裡添加實際的語言切換邏輯
        console.log('切換語言到:', language);
        // 可能需要重新加載頁面或動態更新頁面內容
    }
});
// 翻譯資源
const translations = {
    'zh-TW': {
      siteName: '自動販賣機商城',
      nav: {
        home: '首頁',
        popularMachines: '熱門販賣機',
        newModels: '最新機型',
        specialOffers: '特惠活動',
        products: '商品',
        beverageMachines: '飲料販賣機',
        foodMachines: '食品販賣機',
        combinationMachines: '綜合販賣機',
        about: '關於我們',
        companyProfile: '公司簡介',
        businessPhilosophy: '經營理念',
        serviceTeam: '服務團隊',
        language: '語言',
        contact: '聯絡我們',
        customerService: '客戶服務',
        technicalSupport: '技術支援',
        salesInquiry: '銷售諮詢'
      }
    },
    'en': {
      siteName: 'Vending Machine Mall',
      nav: {
        home: 'Home',
        popularMachines: 'Popular Machines',
        newModels: 'New Models',
        specialOffers: 'Special Offers',
        products: 'Products',
        beverageMachines: 'Beverage Machines',
        foodMachines: 'Food Machines',
        combinationMachines: 'Combination Machines',
        about: 'About Us',
        companyProfile: 'Company Profile',
        businessPhilosophy: 'Business Philosophy',
        serviceTeam: 'Service Team',
        language: 'Language',
        contact: 'Contact Us',
        customerService: 'Customer Service',
        technicalSupport: 'Technical Support',
        salesInquiry: 'Sales Inquiry'
      }
    },
    'ja': {
      siteName: '自動販売機モール',
      nav: {
        home: 'ホーム',
        popularMachines: '人気の自販機',
        newModels: '新機種',
        specialOffers: '特別オファー',
        products: '商品',
        beverageMachines: '飲料自販機',
        foodMachines: '食品自販機',
        combinationMachines: '複合自販機',
        about: '会社概要',
        companyProfile: '会社プロフィール',
        businessPhilosophy: '経営理念',
        serviceTeam: 'サービスチーム',
        language: '言語',
        contact: 'お問い合わせ',
        customerService: 'カスタマーサービス',
        technicalSupport: '技術サポート',
        salesInquiry: '販売に関するお問い合わせ'
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    // ... 原有的代碼 ...
  
    // 語言切換功能
    const languageLinks = document.querySelectorAll('.language-selector .dropdown-content a');
    languageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  
    // 初始化語言
    changeLanguage('zh-TW');
  });
  
  function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = getNestedTranslation(translations[lang], key);
      if (translation) {
        el.textContent = translation;
      }
    });
    document.documentElement.lang = lang;
  }
  
  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((p, c) => p && p[c] || null, obj);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // ... 原有的代碼 ...

    // 確保頁腳鏈接也有正確的事件監聽器
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果需要，這裡可以添加特定的處理邏輯
            console.log('Clicked footer link:', this.textContent);
        });
    });

    // ... 其餘的代碼 ...
});
document.addEventListener('DOMContentLoaded', function() {
  // 原有的代碼保持不變

  // 幻燈片背景控制
  const slides = document.querySelectorAll('.background-slideshow .slide');
  let currentSlide = 0;

  function showSlide(index) {
      slides[currentSlide].classList.remove('active');
      slides[index].classList.add('active');
      currentSlide = index;
  }

  function nextSlide() {
      let nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
  }

  // 初始顯示第一張幻燈片
  showSlide(0);

  // 每 5 秒切換一次幻燈片
  setInterval(nextSlide, 5000);

  // 原有的其他代碼
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.background-slideshow .slide');
  const controlButtons = document.querySelectorAll('.control-button');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    controlButtons[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    controlButtons[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  controlButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  // 初始化
  showSlide(0);
  startSlideshow();

  // 滑鼠懸停時暫停幻燈片
  document.querySelector('.background-slideshow-container').addEventListener('mouseenter', stopSlideshow);
  document.querySelector('.background-slideshow-container').addEventListener('mouseleave', startSlideshow);
});
document.addEventListener('DOMContentLoaded', function() {
  const introAnimation = document.getElementById('intro-animation');
  const mainContent = document.getElementById('main-content');

  // 開場動畫持續時間
  const animationDuration = 3000; // 3秒

  // 顯示開場動畫
  setTimeout(() => {
      introAnimation.style.animation = 'fadeOut 1s ease forwards';
      
      // 動畫結束後隱藏動畫元素並顯示主要內容
      setTimeout(() => {
          introAnimation.style.display = 'none';
          mainContent.style.display = 'block';
          
          // 在這裡初始化其他功能，如背景幻燈片
          initializeBackgroundSlideshow();
      }, 1000);
  }, animationDuration);

  // 初始化背景幻燈片功能
  function initializeBackgroundSlideshow() {
      // 這裡放置之前的背景幻燈片相關代碼
      // ...
  }

  // 其他現有的 JavaScript 代碼
  // ...
});