const WA_NUMBER = '971507044578';
    let currentLang = 'en';

    const waMessages = {
      en: {
        default: 'Hello EIQAA Al Athar 👋, I would like to book a free strategy consultation.',
        contact: 'Hello EIQAA Al Athar 👋, I have a question about your services.'
      },
      ar: {
        default: 'مرحباً إيقاع الأثر 👋، أرغب في حجز استشارة استراتيجية مجانية.',
        contact: 'مرحباً إيقاع الأثر 👋، لدي استفسار عن خدماتكم.'
      }
    };

    function waLink(text) {
      return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    }

    function updateWaLinks() {
      ['heroWaBtn','navWaBtn','mobileWaBtn','waFloatBtn','finalWaBtn','footerWaBtn','infoWaBtn','sideWaBtn','sideCtaWaBtn'].forEach(id => {
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
        if (el.classList.contains('form-input') && el.tagName === 'TEXTAREA') {
          el.textContent = isAr ? el.dataset.arPlaceholder : el.dataset.enPlaceholder;
        } else {
          el.textContent = isAr ? el.dataset.ar : el.dataset.en;
        }
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
      btn.closest('.faq-item').classList.toggle('open');
    }

    // ===== CONTACT FORM =====
    function contactSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('cName').value.trim();
      const company = document.getElementById('cCompany').value.trim();
      const phone = document.getElementById('cPhone').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const service = document.getElementById('cService').value.trim();
      const message = document.getElementById('cMessage').value.trim();

      const lines = [];
      lines.push(`Hello EIQAA Al Athar 👋`);
      lines.push(`Name: ${name}`);
      if (company) lines.push(`Company: ${company}`);
      lines.push(`Phone: ${phone}`);
      if (email) lines.push(`Email: ${email}`);
      lines.push(`Need: ${service}`);
      if (message) lines.push(`Message: ${message}`);

      window.open(waLink(lines.join('\n')), '_blank');

      const ok = document.getElementById('contactMsg');
      ok.classList.remove('hidden');
      e.target.reset();
      setTimeout(() => ok.classList.add('hidden'), 6000);
    }