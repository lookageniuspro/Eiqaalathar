    // ===== DATA =====
    const WA_NUMBER = '971507044578';
    let currentLang = 'en';

    const waMessages = {
      en: {
        default: 'Hello EIQAA Al Athar 👋, I visited your website and I would like to book a free strategy session to discuss my business growth.',
        blueprint: 'Hello EIQAA Al Athar 👋,\nI would like to download the Free Business Growth Blueprint.\n\nName: ',
        calc: 'Hello EIQAA Al Athar 👋, I used your ROI calculator on the website and I would like to book a strategy session to discuss my growth opportunity.',
        popup: 'Hello EIQAA Al Athar 👋, I saw your free strategy session offer on the website and I would like to book my session now.',
        plan: 'Hello EIQAA Al Athar 👋, I am interested in the {PLAN} plan and I would like to request a custom proposal for my business.'
      },
      ar: {
        default: 'مرحباً إيقاع الأثر 👋، اطلعت على موقعكم وأرغب في حجز جلسة استراتيجية مجانية لمناقشة نمو أعمالي.',
        blueprint: 'مرحباً إيقاع الأثر 👋،\nأرغب في تحميل دليل نمو الأعمال المجاني.\n\nالاسم: ',
        calc: 'مرحباً إيقاع الأثر 👋، استخدمت حاسبة العائد على موقعكم وأرغب في حجز جلسة استراتيجية لمناقشة فرصة نمو أعمالي.',
        popup: 'مرحباً إيقاع الأثر 👋، رأيت عرض الجلسة الاستراتيجية المجانية على موقعكم وأرغب في حجز جلستي الآن.',
        plan: 'مرحباً إيقاع الأثر 👋، أنا مهتم بباقة {PLAN} وأرغب في طلب عرض مخصص لأعمالي.'
      }
    };

    function waLink(text) {
      return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    }

    // ===== TYPEWRITER (HERO) =====
    const typePhrases = {
      en: [
        'New clients every single week.',
        'Measurable results from day one.',
        'ROI on every dirham you invest.',
        'A strategy built around YOUR business.',
        'Marketing that works while you sleep.',
        'Your competitors are already growing.',
        'Turning visitors into loyal buyers.',
        'Your trusted growth partner in Dubai.',
        'From strategy to revenue — faster.',
        'More leads. More sales. More growth.'
      ],
      ar: [
        'عملاء جدد كل أسبوع.',
        'نتائج قابلة للقياس من اليوم الأول.',
        'عائد استثمار على كل درهم تنفقه.',
        'استراتيجية مصممة لبيزنسك أنت.',
        'تسويق يعمل وأنت نائم.',
        'منافسوك يتقدمون بالفعل.',
        'نحوّل الزوار إلى مشترين أوفياء.',
        'شريك نموك الموثوق في دبي.',
        'من الاستراتيجية إلى الإيرادات — أسرع.',
        'مبيعات أكثر. نمو حقيقي. راحة بال.'
      ]
    };
    let typeIndex = 0, typeChar = 0, typeDeleting = false, typeTimer = null;

    function typeLoop() {
      const typeEl = document.getElementById('typewriter');
      if (!typeEl) return;
      const phrases = typePhrases[currentLang];
      const current = phrases[typeIndex];
      typeEl.textContent = current.slice(0, typeChar);
      if (!typeDeleting) {
        if (typeChar < current.length) { typeChar++; typeTimer = setTimeout(typeLoop, 55); }
        else { typeDeleting = true; typeTimer = setTimeout(typeLoop, 2300); }
      } else {
        if (typeChar > 0) { typeChar--; typeTimer = setTimeout(typeLoop, 26); }
        else { typeDeleting = false; typeIndex = (typeIndex + 1) % phrases.length; typeTimer = setTimeout(typeLoop, 450); }
      }
    }
    typeLoop();

    // ===== WA LINKS =====
    function updateWaLinks() {
      document.querySelectorAll('a[href="#contact"]').forEach(a => { if (a.id === '') a.href = waLink(waMessages[currentLang].default); });
      ['heroWaBtn','navWaBtn','mobileWaBtn','waFloatBtn','finalWaBtn','footerWaBtn','popupWaBtn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = waLink(waMessages[currentLang][id === 'popupWaBtn' ? 'popup' : 'default']);
      });
      const calcBtn = document.getElementById('calcWaBtn');
      if (calcBtn) calcBtn.href = waLink(waMessages[currentLang].calc);
      document.querySelectorAll('[data-wa-plan]').forEach(a => {
        a.href = waLink(waMessages[currentLang].plan.replace('{PLAN}', a.dataset.waPlan));
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
      document.querySelectorAll('[data-ph-ar][data-ph-en]').forEach(el => {
        el.placeholder = isAr ? el.dataset.phAr : el.dataset.phEn;
      });
      const popupTitle = document.getElementById('popupTitle');
      if (popupTitle) popupTitle.innerHTML = isAr ? popupTitle.dataset.ar : popupTitle.dataset.en;
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', (btn.textContent.trim() === 'AR' && isAr) || (btn.textContent.trim() === 'EN' && !isAr));
      });
      if (typeTimer) clearTimeout(typeTimer);
      typeChar = 0; typeDeleting = false;
      typeLoop();
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
      updateStepper();
    });

    // ===== JOURNEY STEPPER =====
    const stepSections = [
      ['home'],
      ['problem','solution','why','about','services'],
      ['results','process','stories','pricing','calculator'],
      ['testimonials','faq','blueprint','contact']
    ];
    function updateStepper() {
      const dots = document.querySelectorAll('.stepper-dot');
      let active = 0;
      stepSections.forEach((ids, idx) => {
        ids.forEach(id => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) active = Math.max(active, idx);
        });
      });
      dots.forEach(d => d.classList.toggle('active', parseInt(d.dataset.step) === active));
    }
    updateStepper();

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

    // ===== COUNTERS =====
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const update = () => {
            current += step;
            if (current < target) {
              el.textContent = prefix + (Math.round(current * 10) / 10).toLocaleString() + suffix;
              requestAnimationFrame(update);
            } else {
              el.textContent = prefix + target.toLocaleString() + suffix;
            }
          };
          update();
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter-num').forEach(c => counterObserver.observe(c));

    // ===== FAQ =====
    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }

    // ===== ROI CALCULATOR =====
    function formatAED(n) {
      if (!isFinite(n) || n < 0) n = 0;
      return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : Math.round(n).toLocaleString();
    }
    function calcROI() {
      const revenue = parseFloat(document.getElementById('calcRevenue').value) || 0;
      const sale = parseFloat(document.getElementById('calcSale').value) || 0;
      const leads = parseFloat(document.getElementById('calcLeads').value) || 0;
      const conv = parseFloat(document.getElementById('calcConv').value) || 0;
      const customers = leads * conv / 100;
      const avgValue = sale > 0 ? sale : (customers > 0 ? revenue / customers : 0);

      const scenarios = [
        { leads: 1.10, conv: 1.00, id: 'Conserv' },
        { leads: 1.20, conv: 1.15, id: 'Moderate' },
        { leads: 1.35, conv: 1.25, id: 'Aggressive' }
      ];
      let maxExtra = 0;
      const results = {};
      scenarios.forEach(s => {
        const newCustomers = leads * s.leads * conv * s.conv / 100;
        const extra = (newCustomers - customers) * avgValue;
        results[s.id] = isFinite(extra) && extra > 0 ? extra : 0;
        maxExtra = Math.max(maxExtra, results[s.id]);
      });
      document.getElementById('calcResult').textContent = '+AED ' + formatAED(results.Aggressive);
      document.getElementById('calcConserv').textContent = '+AED ' + formatAED(results.Conserv);
      document.getElementById('calcModerate').textContent = '+AED ' + formatAED(results.Moderate);
      document.getElementById('calcAggressive').textContent = '+AED ' + formatAED(results.Aggressive);
      if (maxExtra > 0) {
        document.getElementById('calcConservBar').style.width = Math.max(5, results.Conserv / maxExtra * 100) + '%';
        document.getElementById('calcModerateBar').style.width = Math.max(8, results.Moderate / maxExtra * 100) + '%';
        document.getElementById('calcAggressiveBar').style.width = '100%';
      } else {
        document.getElementById('calcConservBar').style.width = '0%';
        document.getElementById('calcModerateBar').style.width = '0%';
        document.getElementById('calcAggressiveBar').style.width = '0%';
      }
    }
    ['calcRevenue','calcSale','calcLeads','calcConv'].forEach(id => {
      document.getElementById(id).addEventListener('input', calcROI);
    });
    calcROI();

    // ===== BLUEPRINT FORM =====
    document.getElementById('blueprintForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bpName').value;
      const email = document.getElementById('bpEmail').value;
      const phone = document.getElementById('bpPhone').value;
      const company = document.getElementById('bpCompany').value || '-';
      const suffix = currentLang === 'ar'
        ? `\nالبريد: ${email}\nالهاتف: ${phone}\nالشركة: ${company}`
        : `\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}`;
      window.open(waLink(waMessages[currentLang].blueprint + name + suffix), '_blank');
    });

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

    // ===== RIPPLE STAGE (WATER DROP BALL) =====
    const rippleStage = document.getElementById('rippleStage');
    const ballFollow = document.getElementById('ballFollow');
    const rippleBall = document.getElementById('rippleBall');
    const orbitSlots = Array.from(document.querySelectorAll('.orbit-slot'));
    const ringColors = ['rgba(139,92,246,0.55)','rgba(94,234,212,0.4)','rgba(245,183,0,0.4)','rgba(139,92,246,0.35)','rgba(125,211,252,0.45)'];
    let ripplePaused = false;
    let rippleAngle = 0;
    let rippleTimer = null;
    let rippleRaf = null;

    function spawnRipple() {
      if (ripplePaused || !rippleStage) return;
      const ring = document.createElement('span');
      ring.className = 'ripple-ring';
      const maxSpan = Math.min(rippleStage.clientWidth, rippleStage.clientHeight);
      ring.style.setProperty('--scale', Math.max(20, Math.round(maxSpan * 0.95 / 18)).toString());
      ring.style.setProperty('--dur', (2.6 + Math.random() * 1.4).toFixed(2) + 's');
      ring.style.borderColor = ringColors[Math.floor(Math.random() * ringColors.length)];
      rippleStage.appendChild(ring);
      setTimeout(() => ring.remove(), 4500);
    }

    function startRipples() {
      clearInterval(rippleTimer);
      spawnRipple();
      rippleTimer = setInterval(spawnRipple, 3800);
    }

    function layoutOrbit() {
      const w = rippleStage.clientWidth;
      const h = rippleStage.clientHeight;
      const isMobile = w < 640;
      const rx = Math.min(w * (isMobile ? 0.33 : 0.29), isMobile ? 130 : 240);
      const ry = Math.min(h * (isMobile ? 0.20 : 0.22), 130);
      orbitSlots.forEach((slot, i) => {
        const a = rippleAngle + (i * Math.PI) / 3;
        const x = w / 2 + rx * Math.cos(a) - slot.offsetWidth / 2;
        const y = h / 2 + ry * Math.sin(a) - slot.offsetHeight / 2;
        slot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        slot.classList.toggle('flip', y < h / 2 - slot.offsetHeight / 2);
      });
    }

    function orbitLoop() {
      if (!ripplePaused) rippleAngle += 0.004;
      layoutOrbit();
      rippleRaf = requestAnimationFrame(orbitLoop);
    }

    function restartRipple() {
      rippleBall.classList.remove('idle', 'fall');
      void rippleBall.offsetWidth;
      rippleBall.classList.add('fall');
      clearInterval(rippleTimer);
      setTimeout(startRipples, 2400);
    }

    rippleBall.addEventListener('animationend', () => {
      if (rippleBall.classList.contains('fall')) {
        rippleBall.classList.remove('fall');
        rippleBall.classList.add('idle');
      }
    });

    rippleStage.addEventListener('mouseenter', () => {
      ripplePaused = true;
      rippleBall.style.animationPlayState = 'paused';
      clearInterval(rippleTimer);
    });
    rippleStage.addEventListener('mouseleave', () => {
      ripplePaused = false;
      rippleBall.style.animationPlayState = 'running';
      startRipples();
    });

    rippleStage.addEventListener('mousemove', (e) => {
      if (ripplePaused) return;
      const r = rippleStage.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / r.width;
      const dy = (e.clientY - r.top - r.height / 2) / r.height;
      ballFollow.style.transform = `translate(-50%, -50%) translate(${(dx * 20).toFixed(1)}px, ${(dy * 14).toFixed(1)}px)`;
    });
    rippleStage.addEventListener('mouseleave', () => {
      ballFollow.style.transform = 'translate(-50%, -50%)';
    });

    window.addEventListener('resize', layoutOrbit);
    setTimeout(startRipples, 2400);
    orbitLoop();

    // ===== FREE STRATEGY POPUP =====
    const popupOverlay = document.getElementById('popupOverlay');
    let popupShown = false;

    function showPopup() {
      if (popupShown || !popupOverlay) return;
      popupShown = true;
      sessionStorage.setItem('eqPopupShown', '1');
      popupOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closePopup() {
      if (!popupOverlay) return;
      popupOverlay.classList.remove('show');
      document.body.style.overflow = '';
    }

    if (popupOverlay) {
      popupOverlay.addEventListener('click', (e) => { if (e.target === popupOverlay) closePopup(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePopup(); });
      if (!sessionStorage.getItem('eqPopupShown')) {
        setTimeout(showPopup, 18000);
        document.addEventListener('mouseout', (e) => {
          if (!e.relatedTarget && e.clientY <= 0) showPopup();
        });
      }
    }

    // ===== EIQAA ASSISTANT CHATBOT =====
    const eqEls = {
      launcher: document.getElementById('eqChatLauncher'),
      win: document.getElementById('eqChatWindow'),
      msgs: document.getElementById('eqChatMessages'),
      quick: document.getElementById('eqChatQuick'),
      form: document.getElementById('eqChatForm'),
      input: document.getElementById('eqChatInput'),
      close: document.getElementById('eqChatClose'),
      status: document.getElementById('eqChatStatus')
    };
    const eqState = {
      open: false, greeted: false, step: 'greet',
      lead: { name: '', email: '', phone: '', company: '' },
      reask: '', lang: currentLang, timers: []
    };

    const eqKB = [
      { k: ['services', 'service', 'خدمات', 'الخدمات', 'استراتيجية التسويق', 'سوشيال', 'اعلانات', 'إعلانات', 'ads', 'seo', 'crm', 'email', 'محتوى', 'هوية', 'قمع', 'funnel', 'automation', 'أتمتة'],
        ar: 'نقدم 12 خدمة متكاملة: استراتيجية التسويق، استشارات الأعمال، الهوية البصرية، تسويق المحتوى، إدارة السوشيال ميديا، الإعلانات المدفوعة (جوجل، ميتا، تيك توك، لينكد إن)، قمع المبيعات، التسويق عبر البريد، أتمتة واتساب، إعداد CRM، SEO، والتحليلات.',
        en: 'We offer 12 integrated services: Marketing Strategy, Business Consulting, Brand Identity, Content Marketing, Social Media Management, Paid Ads (Google, Meta, TikTok, LinkedIn), Sales Funnels, Email Marketing, WhatsApp Automation, CRM Setup, SEO, and Analytics.' },
      { k: ['growth system', 'نظام إيقاع الأثر', 'نظام ايقاع', 'خطوات', 'framework', '10 خطوات', '10 steps'],
        ar: 'نعمل بنظام إيقاع الأثر للنمو™ — 10 خطوات متكاملة: 1) تدقيق الأعمال 2) بحث السوق 3) استراتيجية النمو 4) المحتوى والإبداع 5) الإعلانات المدفوعة 6) توليد العملاء 7) قمع المبيعات 8) أتمتة CRM 9) التحسين المستمر 10) التوسع — كلها تعمل كنظام واحد وليست تكتيكات عشوائية.',
        en: 'We work with the EIQAA Growth System™ — 10 integrated steps: 1) Business Audit, 2) Market Research, 3) Growth Strategy, 4) Content & Creative, 5) Paid Advertising, 6) Lead Generation, 7) Sales Funnel, 8) CRM Automation, 9) Optimization, 10) Scaling — all working as one system, not random tactics.' },
      { k: ['process', 'منهجية', 'طريقة العمل', 'مسار', 'كيف تعملون', 'how do you work'],
        ar: 'مسار عملنا: مكالمة استكشاف ← تدقيق أعمال ← تطوير استراتيجية بمؤشرات واضحة ← تنفيذ ← تحسين مستمر ← توسع.',
        en: 'Our process: Discovery Call → Business Audit → Strategy Development with clear KPIs → Execution → Optimization → Scaling.' },
      { k: ['price', 'pricing', 'cost', 'سعر', 'الأسعار', 'تكلفة', 'باقة', 'باقات', 'plan', 'plans', 'starter', 'growth', 'scale', 'enterprise', 'budget', 'ميزانية', 'كم التكلفة'],
        ar: 'لدينا 4 باقات: Starter للشركات الجديدة، Growth للشركات النامية (الأكثر طلباً)، Scale للعلامات الراسخة، وEnterprise للمؤسسات الكبيرة. الأسعار تعتمد على أهدافك ونطاق العمل — لذلك نبدأ دائماً بجلسة استراتيجية مجانية ثم نرسل عرضاً مفصلاً وشفافاً.',
        en: 'We have 4 plans: Starter for new businesses, Growth for growing businesses (most popular), Scale for established brands, and Enterprise for large organizations. Pricing depends on your goals and scope — that\'s why we always start with a free strategy session, then send a transparent, itemized proposal.' },
      { k: ['timeline', 'how long', 'كم يستغرق', 'متى النتائج', '60', '90', 'أسابيع'],
        ar: 'معظم العملاء يشاهدون تحسناً ملموساً خلال 30–60 يوماً؛ أساسيات النظام (التتبع، قمع المبيعات، الأتمتة) تُجهز في الأسابيع الأولى، والتوسع الكبير يحدث عادة خلال 90 يوماً.',
        en: 'Most clients see meaningful improvement within 30–60 days; foundations (tracking, funnels, automation) are in place in the first weeks, and significant scaling typically happens within 90 days.' },
      { k: ['industry', 'industries', 'قطاع', 'قطاعات', 'متجر', 'عقار', 'مطعم', 'saas'],
        ar: 'نعمل مع جميع القطاعات: التجارة الإلكترونية، العقارات، SaaS، التجزئة، المطاعم، الخدمات المهنية وغيرها.',
        en: 'We work with all industries: e-commerce, real estate, SaaS, retail, F&B, professional services and more.' },
      { k: ['results', 'result', 'نتائج', 'عملاء', '15', '30', '95', '4.5', 'proof', 'إثبات', 'أدلة', 'مصداقية'],
        ar: 'نفخر بـ 15+ عميل، 30+ مشروع منجز، رضا عملاء 95%، وتقييم 4.5/5. والأهم: نضمن العملية والشفافية بمؤشرات أداء واضحة متفق عليها قبل أن نبدأ.',
        en: 'We\'re proud of 15+ clients, 30+ delivered projects, 95% satisfaction, and a 4.5/5 client rating. Most importantly: we guarantee process and transparency with clear KPIs agreed before we start.' },
      { k: ['guarantee', 'تضمنون', 'ضمان', 'do you guarantee'],
        ar: 'نضمن العملية والشفافية والتنفيذ المبني على البيانات — لا وعود عامة. كل عرض يتضمن مؤشرات أداء (KPIs) ونتائج متوقعة متفق عليها قبل البدء.',
        en: 'We guarantee process, transparency, and data-driven execution — no generic promises. Every proposal includes clear KPIs and expected outcomes agreed before we start.' },
      { k: ['free', 'مجاني', 'مجانية', 'audit', 'تدقيق', 'blueprint', 'دليل', 'هدية'],
        ar: 'نقدم جلسة استراتيجية مجانية (30 دقيقة) تبدأ بتدقيق لفرص نموك، بالإضافة لدليل نمو الأعمال المجاني: قائمة تدقيق تسويقي، قالب قمع مبيعات، دليل توليد عملاء، وخارطة طريق للنمو.',
        en: 'We offer a free 30-minute strategy session that starts with a growth audit, plus our free Business Growth Blueprint: marketing audit checklist, sales funnel template, lead generation guide, and growth roadmap.' },
      { k: ['contact', 'تواصل', 'اتصال', 'واتساب', 'ايميل', 'بريد', 'رقم', 'phone', 'email', 'location', 'مقر', 'دبي', 'dubai', 'أين'],
        ar: 'يمكنك التواصل عبر واتساب +971 50 704 4578 أو البريد Info@eiqaathar.com — مقرنا في دبي، الإمارات العربية المتحدة، ومتوسط وقت الرد أقل من ساعتين.',
        en: 'You can reach us on WhatsApp +971 50 704 4578 or email Info@eiqaathar.com — we\'re based in Dubai, UAE, with an average response time under 2 hours.' },
      { k: ['why', 'لماذا', 'شريك', 'agency', 'وكالة', 'ميزة'],
        ar: 'لسنا مجرد وكالة — بل شريك نمو: قرارات مبنية على البيانات، ذكاء اصطناعي وأتمتة، استراتيجية تركّز على العائد، وأنظمة قابلة للتوسع بدل حملات تتلاشى.',
        en: 'We\'re not just an agency — we\'re a growth partner: data-driven decisions, AI & automation, ROI-focused strategy, and scalable systems instead of fading campaigns.' }
    ];

    function eqDetectLang(t) {
      if (/[\u0600-\u06FF]/.test(t)) return 'ar';
      if (/@/.test(t) || /^[+0-9\s()\-]{6,}$/.test(t.trim())) return eqState.lang;
      return 'en';
    }

    function eqAddMsg(txt, who) {
      const d = document.createElement('div');
      d.className = 'eq-msg ' + who;
      d.textContent = txt;
      eqEls.msgs.appendChild(d);
      eqEls.msgs.scrollTop = eqEls.msgs.scrollHeight;
    }
    function eqChips(list) {
      eqEls.quick.innerHTML = '';
      (list || []).forEach(c => {
        const b = document.createElement('button');
        b.className = 'eq-chip';
        b.textContent = c.t;
        b.onclick = () => eqSubmit(c.v);
        eqEls.quick.appendChild(b);
      });
    }
    function eqTyping() {
      if (!eqEls.msgs.querySelector('.eq-typing')) {
        const t = document.createElement('div');
        t.className = 'eq-msg bot eq-typing';
        t.innerHTML = '<span></span><span></span><span></span>';
        eqEls.msgs.appendChild(t);
        eqEls.msgs.scrollTop = eqEls.msgs.scrollHeight;
      }
    }
    function eqStopTyping() {
      const t = eqEls.msgs.querySelector('.eq-typing');
      if (t) t.remove();
    }
    function eqClearTimers() {
      eqState.timers.forEach(t => clearTimeout(t));
      eqState.timers = [];
      eqStopTyping();
    }
    function eqBot(txt, chips, delay) {
      eqStopTyping();
      if (delay) {
        eqTyping();
        eqState.timers.push(setTimeout(() => { eqStopTyping(); eqAddMsg(txt, 'bot'); eqChips(chips); }, delay));
      } else {
        eqAddMsg(txt, 'bot');
        eqChips(chips);
      }
    }
    function eqAsk(step) {
      const L = eqState.lang === 'ar';
      const qs = {
        name: L ? 'قبل أن أوصلك للشخص المناسب، ممكن أعرف اسمك الكريم؟' : 'Before I connect you with the right person, may I know your name?',
        email: L ? 'ممتاز! 📩 لأرسل لك العرض التفصيلي والدليل المجاني — ما هو بريدك الإلكتروني؟' : 'Great! 📩 To send you the detailed proposal and the free blueprint — what\'s your email?',
        phone: L ? 'شكراً! ولأتمكن من متابعة طلبك — ما هو رقم الواتساب الخاص بك؟' : 'Thanks! And to follow up on your request — what\'s your WhatsApp number?',
        company: L ? 'وأخيراً: ما اسم شركتك؟ (أو اكتب "تخطي")' : 'Last one: what\'s your company name? (or type "skip")'
      };
      eqState.step = step;
      eqState.reask = qs[step];
      eqBot(qs[step], null, 600);
    }
    function eqExtractName(t) {
      const m = t.match(/(?:my name is|name is|اسمي|الاسم|أنا)\s*[:：]?\s*([A-Za-z\u0600-\u06FF .'\-]{2,40})/i);
      if (m) return m[1].trim();
      if (t.length <= 40 && !/[?؟]/.test(t)) return t.trim();
      return null;
    }
    function eqMatchKB(t) {
      const low = t.toLowerCase();
      const looksQ = /[?؟]/.test(t) || /^(what|how|why|when|which|who|do you|can you|tell|is|are|كم|ما هو|ما هي|كيف|هل|متى|أين|عندكم|تعمل)/i.test(low);
      if (!looksQ) return null;
      for (let i = 0; i < eqKB.length; i++) {
        for (let j = 0; j < eqKB[i].k.length; j++) {
          if (low.indexOf(eqKB[i].k[j].toLowerCase()) > -1) return eqKB[i];
        }
      }
      return null;
    }
    function eqMatchObj(t) {
      const low = t.toLowerCase();
      if (/(too expensive|expensive|غالي|مكلف|ميزانية|budget|cant afford)/i.test(low))
        return { ar: 'تفهمتك تماماً. لهذا نبدأ دائماً بجلسة استراتيجية مجانية — تقيّم القيمة بنفسك قبل أي التزام، ونصمم عرضاً يناسب ميزانيتك.', en: 'Totally understand. That\'s why we always start with a free strategy session — you evaluate the value before any commitment, and we design a proposal that fits your budget.' };
      if (/(trust|trustworthy|proof|خبرة|experienced|جديدة|ثقة|إثبات|اثبات)/i.test(low))
        return { ar: 'سؤال عادل! أفضل إثبات هو التدقيق المجاني: نراجع وضعك التسويقي الحالي ونريك الفرص الملموسة قبل أي التزام — وكل عرض يتضمن مؤشرات أداء واضحة.', en: 'Fair question! The best proof is our free audit: we review your current marketing and show you concrete opportunities before any commitment — and every proposal includes clear KPIs.' };
      if (/(tried|جربت|failed|فشل|خيبة|previous agency|وكالة سابقة)/i.test(low))
        return { ar: 'نسمع هذا كثيراً — ولهذا بنينا نظام إيقاع الأثر للنمو™: نظام واحد متكامل (تدقيق ← استراتيجية ← تنفيذ ← تحسين مستمر) بدل حملات متفرقة تتلاشى. التدقيق المجاني سيوضح لك الفرق.', en: 'We hear this often — that\'s exactly why we built the EIQAA Growth System™: one integrated system (audit → strategy → execution → continuous optimization) instead of scattered tactics. The free audit will show you the difference.' };
      if (/(later|بعدين|لاحقاً|بفكر|تفكير|soon|قريبا)/i.test(low))
        return { ar: 'لا ضغط إطلاقاً. خذ التدقيق المجاني أو دليل النمو المجاني الآن، وقرر متى تشاء.', en: 'No pressure at all. Take the free audit or the free Growth Blueprint now, and decide whenever you\'re ready.' };
      return null;
    }
    function eqRoute(t) {
      const L = eqState.lang === 'ar';
      const low = t.toLowerCase();
      if (/(job|career|hiring|vacancy|cv|work with|وظيفة|وظائف|توظيف|سيرة ذاتية|انضم)/i.test(low)) {
        eqState.step = 'done';
        eqBot(L ? 'شكراً لاهتمامك بالانضمام لفريق إيقاع الأثر! حالياً لا نعلن عن وظائف شاغرة، لكن يسعدنا استقبال سيرتك الذاتية على Info@eiqaathar.com، وتابع صفحتنا على LinkedIn لأي فرص قادمة. هل أساعدك بشيء آخر؟' : 'Thanks for your interest in joining EIQAA Al Athar! We\'re not currently advertising open roles, but we\'re happy to receive your CV at Info@eiqaathar.com, and you can follow our LinkedIn page for future openings. Anything else I can help with?', null, 800);
        return;
      }
      if (/(partnership|partner|media|press|supplier|collab|شراكة|شريك|إعلام|صحافة|مورد)/i.test(low)) {
        eqState.step = 'done';
        eqBot(L ? 'شكراً لتواصلك! لمواضيع الشراكات والإعلام، يُفضل التواصل مباشرة عبر Info@eiqaathar.com أو واتساب +971 50 704 4578، وسيتولى الفريق المناسب الرد خلال ساعتين. هل أساعدك بشيء آخر؟' : 'Thanks for reaching out! For partnership and media topics, please contact us directly at Info@eiqaathar.com or WhatsApp +971 50 704 4578 — the right team will reply within 2 hours. Anything else I can help with?', null, 800);
        return;
      }
      eqState.step = 'client-qualify';
      eqBot(L ? 'سعيد بمساعدتك! 🚀\nلأفهم احتياجك بشكل أفضل: ما هو أكبر تحدٍ تسويقي تواجهه حالياً؟' : 'Happy to help! 🚀\nTo understand your needs better: what\'s your biggest marketing challenge right now?', null, 800);
    }
    function eqFinish() {
      const L = eqState.lang === 'ar';
      const d = eqState.lead;
      eqState.step = 'client-cta';
      const summary = L
        ? 'شكراً لك! 🎉 سجلت بياناتك:\nالاسم: ' + d.name + '\nالإيميل: ' + d.email + '\nالواتساب: ' + d.phone + (d.company ? '\nالشركة: ' + d.company : '') + '\n\nسيتواصل معك الفريق خلال ساعتين كحد أقصى. اختر ما يناسبك:'
        : 'Thank you! 🎉 I\'ve recorded your details:\nName: ' + d.name + '\nEmail: ' + d.email + '\nWhatsApp: ' + d.phone + (d.company ? '\nCompany: ' + d.company : '') + '\n\nThe team will reach out within 2 hours. Choose an option:';
      eqBot(summary, [
        { t: L ? '📅 احجز جلسة استراتيجية مجانية' : '📅 Book Free Strategy Session', v: '__book' },
        { t: L ? '📄 أرسل بياناتي واطلب عرضاً' : '📄 Send Details & Request Proposal', v: '__proposal' }
      ], 800);
    }
    function eqLeadMessage(kind) {
      const L = eqState.lang === 'ar';
      const d = eqState.lead;
      const head = L ? 'مرحباً إيقاع الأثر 👋\nبيانات عميل محتمل من بوت الموقع:\n' : 'Hello EIQAA Al Athar 👋\nLead captured by the website chatbot:\n';
      const body = L
        ? 'الاسم: ' + d.name + '\nالإيميل: ' + d.email + '\nالواتساب: ' + d.phone + '\nالشركة: ' + (d.company || '-')
        : 'Name: ' + d.name + '\nEmail: ' + d.email + '\nWhatsApp: ' + d.phone + '\nCompany: ' + (d.company || '-');
      const cta = kind === 'book'
        ? (L ? '\nالطلب: حجز جلسة استراتيجية مجانية' : '\nRequest: Book a free strategy session')
        : (L ? '\nالطلب: عرض مخصص للباقات' : '\nRequest: Custom proposal');
      return head + body + cta;
    }
    function eqAction(a) {
      const L = eqState.lang === 'ar';
      if (a === '__book' || a === '__proposal') {
        window.open(waLink(eqLeadMessage(a === '__book' ? 'book' : 'proposal')), '_blank');
        eqState.step = 'done';
        eqBot(L ? 'تم فتح واتساب! 👋 إن لم يفتح تلقائياً، أرسل رسالة مباشرة إلى +971 50 704 4578.' : 'WhatsApp is opening! 👋 If it didn\'t open, send us a message directly at +971 50 704 4578.', null, 700);
      }
    }
    function eqHandle(t) {
      const L = eqState.lang === 'ar';
      const kb = eqMatchKB(t);
      const obj = eqMatchObj(t);
      if (kb) {
        eqBot(kb[eqState.lang], null, 800);
        if (['name', 'email', 'phone', 'company'].indexOf(eqState.step) > -1) {
          eqState.timers.push(setTimeout(() => eqBot(eqState.reask, null, 700), 1700));
        }
        return;
      }
      if (obj && ['greet', 'route', 'client-qualify', 'done', 'client-cta'].indexOf(eqState.step) > -1) {
        eqBot(obj[eqState.lang], null, 800);
        if (eqState.step === 'client-qualify') {
          eqState.step = 'qualify-done';
          eqState.timers.push(setTimeout(() => eqAsk('name'), 1800));
        }
        return;
      }
      if (/(شكراً|شكرا|thanks|thank you|تمام|حسناً|حسنا|ok|bye|وداعا|مع السلامة)/i.test(t) && ['done', 'client-cta', 'greet', 'route'].indexOf(eqState.step) > -1) {
        eqState.step = 'done';
        eqBot(L ? 'على الرحب والسعة! شكراً لزيارتك — نحن هنا متى احتجتنا. 🚀' : 'You\'re most welcome! Thanks for visiting — we\'re here whenever you need us. 🚀', null, 600);
        return;
      }
      switch (eqState.step) {
        case 'greet':
        case 'route':
        case 'done':
        case 'client-cta':
          eqRoute(t);
          break;
        case 'client-qualify':
          eqState.step = 'qualify-done';
          eqBot(L ? 'شكراً لمشاركتك! 👌 هذا بالتحديد ما نعالجه من خلال نظام إيقاع الأثر للنمو™ — بدءاً بتدقيق مجاني لوضعك الحالي.' : 'Thanks for sharing! 👌 That\'s exactly what the EIQAA Growth System™ addresses — starting with a free audit of your current situation.', null, 800);
          eqState.timers.push(setTimeout(() => eqAsk('name'), 1700));
          break;
        case 'name': {
          const n = eqExtractName(t);
          if (!n) { eqBot(L ? 'يمكنك كتابة اسمك مباشرة، مثال: "أحمد محمد"' : 'You can simply type your full name, e.g. "Ahmed Mohammed"', null, 600); break; }
          eqState.lead.name = n;
          eqAsk('email');
          break;
        }
        case 'email': {
          const m = t.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
          if (!m) { eqBot(L ? 'هذا البريد غير صحيح — يرجى المحاولة مرة أخرى.' : 'That email doesn\'t look right — could you try again?', null, 600); break; }
          eqState.lead.email = m[0];
          eqAsk('phone');
          break;
        }
        case 'phone': {
          let p = t.replace(/[^0-9]/g, '');
          if (p.length < 7 || p.length > 15) { eqBot(L ? 'يرجى إرسال رقم واتساب صحيح (مع رمز الدولة إن أمكن).' : 'Please send a valid WhatsApp number (with country code if possible).', null, 600); break; }
          if (p.charAt(0) === '0' && p.length === 10) p = '971' + p.slice(1);
          eqState.lead.phone = '+' + p;
          eqAsk('company');
          break;
        }
        case 'company': {
          if (!/^(skip|تخطي|لا يوجد|none|-)$/i.test(t)) eqState.lead.company = t;
          eqFinish();
          break;
        }
        default:
          eqBot(L ? 'أريد أن أتأكد أنك تحصل على الإجابة الصحيحة. هل يمكنك مشاركة اسمك وسيتواصل معك فريقنا خلال ساعتين؟' : 'I want to make sure you get the right answer. Could you share your name and the team will follow up within 2 hours?', null, 700);
          eqState.timers.push(setTimeout(() => eqAsk('name'), 1500));
          break;
      }
    }
    function eqSubmit(raw) {
      const t = (raw || '').trim();
      if (!t) return;
      if (t.indexOf('__') === 0) { eqAction(t); return; }
      eqClearTimers();
      eqAddMsg(t, 'user');
      eqEls.input.value = '';
      eqChips([]);
      eqState.lang = eqDetectLang(t);
      eqHandle(t);
    }
    function eqOpen() {
      if (eqState.open) { eqClose(); return; }
      eqState.open = true;
      eqState.lang = currentLang;
      eqEls.win.classList.add('open');
      eqEls.launcher.style.display = 'none';
      const L = eqState.lang === 'ar';
      eqEls.status.textContent = L ? 'متصل الآن' : 'Online now';
      eqEls.input.placeholder = L ? 'اكتب رسالتك...' : 'Type your message...';
      if (!eqState.greeted) {
        eqState.greeted = true;
        eqBot(
          L ? 'مرحباً بك في إيقاع الأثر! 👋\nأنا EIQAA Assistant — مساعدكم الافتراضي.\nكيف يمكنني مساعدتك في تنمية أعمالك اليوم؟'
            : 'Welcome to EIQAA Al Athar! 👋\nI\'m EIQAA Assistant — your virtual assistant.\nHow can I help you grow your business today?',
          [
            { t: L ? '🚀 أريد تنمية أعمالي' : '🚀 I want to grow my business', v: L ? 'أريد تنمية أعمالي' : 'I want to grow my business' },
            { t: L ? '💰 معرفة الأسعار' : '💰 Pricing', v: L ? 'ما هي الأسعار؟' : 'What are your prices?' },
            { t: L ? '📞 التواصل معكم' : '📞 Contact', v: L ? 'كيف أتواصل معكم؟' : 'How can I contact you?' }
          ],
          700
        );
      }
      setTimeout(() => eqEls.input.focus(), 400);
    }
    function eqClose() {
      eqState.open = false;
      eqEls.win.classList.remove('open');
      eqEls.launcher.style.display = 'flex';
    }
    eqEls.launcher.addEventListener('click', eqOpen);
    eqEls.close.addEventListener('click', eqClose);
    eqEls.form.addEventListener('submit', (e) => { e.preventDefault(); eqSubmit(eqEls.input.value); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') eqClose(); });

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