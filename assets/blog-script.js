    // ===== DATA =====
    const WA_NUMBER = '971507044578';
    let currentLang = 'en';

    const waMessages = {
      en: {
        default: 'Hello EIQAA Al Athar 👋, I visited your blog and I would like to book a free strategy consultation.'
      },
      ar: {
        default: 'مرحباً إيقاع الأثر 👋، اطلعت على مدونتكم وأرغب في حجز استشارة مجانية.'
      }
    };

    function waLink(text) {
      return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    }

    // ===== WA LINKS =====
    function updateWaLinks() {
      ['heroWaBtn','navWaBtn','mobileWaBtn','waFloatBtn','finalWaBtn','footerWaBtn','articleWaBtn','topicWaBtn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = waLink(waMessages[currentLang].default);
      });
    }

    // ===== LANGUAGE =====
    function setLang(lang) {
      currentLang = lang;
      const isAr = lang === 'ar';
      document.documentElement.lang = lang;
      document.documentElement.dir = isAr ? 'rtl' : 'ltr';
      document.body.classList.toggle('font-cairo', isAr);
      document.body.classList.toggle('font-inter', !isAr);
      document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.textContent = isAr ? el.dataset.ar : el.dataset.en;
      });
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', (btn.textContent.trim() === 'AR' && isAr) || (btn.textContent.trim() === 'EN' && !isAr));
      });
      updateWaLinks();
    }
    setLang('en');

    // ===== THEME =====
    function toggleTheme() {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light-mode', !document.body.classList.contains('dark'));
    }

    // ===== MOBILE MENU =====
    function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }

    // ===== NEWSLETTER =====
    function newsletterSubmit(e) {
      e.preventDefault();
      const msg = document.getElementById('newsletterMsg');
      msg.classList.remove('hidden');
      e.target.querySelector('input').value = '';
      setTimeout(() => msg.classList.add('hidden'), 5000);
    }

    // ===== SCROLL PROGRESS =====
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      document.getElementById('progressBar').style.width = pct + '%';
    });

    // ===== REVEAL =====
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ===== FAQ =====
    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        if (this.getAttribute('target') === '_blank') return;
        const t = document.querySelector(this.getAttribute('href'));
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // ===== SLIDESHOW =====
    document.querySelectorAll('.slider-shell').forEach((shell) => {
      const track = shell.querySelector('.slider-track');
      if (!track) return;
      const total = track.children.length;
      const dotsBox = shell.querySelector('.slider-dots');
      let index = 0, timer = null;
      const dots = [];
      for (let i = 0; i < total; i++) {
        const d = document.createElement('button');
        d.className = 'slider-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        d.onclick = () => goToSlide(i);
        dotsBox.appendChild(d);
        dots.push(d);
      }
      function goToSlide(i) {
        index = (i + total) % total;
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        dots.forEach((d, j) => d.classList.toggle('active', j === index));
      }
      function slideMove(dir) { goToSlide(index + dir); }
      const btnPrev = shell.querySelector('.slider-btn.prev');
      const btnNext = shell.querySelector('.slider-btn.next');
      if (btnPrev) btnPrev.addEventListener('click', () => slideMove(-1));
      if (btnNext) btnNext.addEventListener('click', () => slideMove(1));
      function startAuto() { stopAuto(); timer = setInterval(() => goToSlide(index + 1), 4500); }
      function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }
      shell.addEventListener('mouseenter', stopAuto);
      shell.addEventListener('mouseleave', startAuto);
      let touchX = null;
      shell.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
      shell.addEventListener('touchend', e => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) slideMove(dx < 0 ? 1 : -1);
        touchX = null;
      }, { passive: true });
      startAuto();
    });

    // ===== INIT =====
    updateWaLinks();