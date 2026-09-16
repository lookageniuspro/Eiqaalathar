// ===== LANGUAGE =====
    let currentLang = 'en';
    function setLang(lang) {
      currentLang = lang;
      const isAr = lang === 'ar';
      document.documentElement.lang = lang;
      document.documentElement.dir = isAr ? 'rtl' : 'ltr';
      document.body.classList.toggle('font-cairo', isAr);
      document.body.classList.toggle('font-inter', !isAr);
      document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.innerHTML = isAr ? el.dataset.ar : el.dataset.en;
      });
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', (btn.textContent.trim() === 'AR' && isAr) || (btn.textContent.trim() === 'EN' && !isAr));
      });
    }
    setLang('en');

    // ===== THEME =====
    function toggleTheme() {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light-mode', !document.body.classList.contains('dark'));
    }

    // ===== BRAND COLOR FOR QR =====
    const QR_DARK = '#2E1065';
    const QR_LIGHT = '#FFFFFF';

    // ===== QR CODE (encodes this page's URL) =====
    const CONNECT_URL = 'https://www.eiqaathar.com/connect';
    function qrTargetUrl() {
      if (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1' || /\.(vercel\.app|pages\.dev)$/i.test(location.hostname)) {
        return location.origin + location.pathname;
      }
      const clean = (location.origin + location.pathname).replace(/\/?connect\.html$/, '/connect').replace(/\/$/, '');
      return clean || CONNECT_URL;
    }

    function buildQR() {
      const target = qrTargetUrl();
      const win = document.getElementById('qrcode');
      if (!win) return;
      const size = Math.min(240, Math.max(190, Math.floor(Math.min(window.innerWidth, 520) * 0.5)));
      win.innerHTML = '';
      if (typeof QRCode === 'undefined') {
        const img = document.createElement('img');
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&margin=8&qzone=2&color=2E1065&bgcolor=ffffff&data=' + encodeURIComponent(target);
        img.alt = 'QR Code to connect page';
        win.appendChild(img);
        return;
      }
      new QRCode(win, {
        text: target,
        width: size,
        height: size,
        colorDark: QR_DARK,
        colorLight: QR_LIGHT,
        correctLevel: QRCode.CorrectLevel.M
      });
    }

    // ===== REVEAL ON LOAD =====
    function revealAll() {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => el.classList.add('active'));
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      buildQR();
      setTimeout(revealAll, 120);
    } else {
      window.addEventListener('DOMContentLoaded', () => {
        buildQR();
        setTimeout(revealAll, 120);
      });
    }
    window.addEventListener('load', () => { if (!document.querySelector('#qrcode img, #qrcode canvas')) buildQR(); });

    // ===== REBUILD QR ON ORIENTATION CHANGE (mobile) =====
    let qrResizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(qrResizeTimer);
      qrResizeTimer = setTimeout(buildQR, 350);
    });