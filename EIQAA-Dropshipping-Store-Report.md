# تقرير تنفيذي: متجر إلكتروني ونظام دروب شيبينغ عالمي لعلامة "إيقاع الأثر"

**الهدف:** تصميم وبناء صفحة تجارة إلكترونية + دروب شيبينغ موثوقة تنطلق من موقع إيقاع الأثر الحالي، تعمل بالعربية والإنجليزية وتستهدف الأسواق العربية والعالمية.
**الموقع الحالي:** GitHub Pages — `https://lookageniuspro.github.io/Eiqaalathar/`
**الهوية البصرية:** بنفسجي `#7C3AED` / ذهبي `#F5B700` / داكن `#0D0018` + خط Cairo (عربي) / Inter (إنجليزي).

---

## 1. البنية اللغوية (عربي / إنجليزي)

### 1.1 التصميم التقني
1. **زر تبديل اللغة** أعلى الصفحة (يظهر في اليمين في الوضع العربي، واليسار في الإنجليزي) بنفس نمط موقع إيقاع الأثر الحالي:
   - كل نص داخل وسم يحمل `data-ar="..." data-en="..."`.
   - دالة `setLang()` تبدّل `dir="rtl|ltr"` و `lang="ar|en"` وتلوّن زر اللغة النشط.
2. **الخطوط:** Cairo للعربية و Inter للإنجليزية (Google Fonts) — التحميل مع `display=swap`.

### 1.2 قواعد الترجمة الاحترافية
| القاعدة | مثال |
|---|---|
| ترجم "المعنى" لا "اللفظ" | Add to Cart = أضف إلى السلة (وليس "أضف للعربة") |
| الأسطر العربية أطول قليلاً | زيادة `line-height` في العربي إلى 1.7+ |
| الأرقام والعملة ثابتة اللغة | `AED 98` تبقى كما هي في الجملة العربية |
| المصطلحات التقنية تُكتب بالإنجليزي بين قوسين | "دروب شيبينغ (Dropshipping)" عند أول ذكر |

### 1.3 نص جاهز للترجمة (Hero)
| العنصر | العربية | الإنجليزية |
|---|---|---|
| العنوان | متجرك العالمي… من المورّد إلى باب بيتك | Your global store — from supplier to your door |
| الوصف | منتجات أصلية، أسعار تنافسية، شحن عالمي ودفع آمن | Original products, competitive prices, global shipping, secure checkout |
| CTA الأول | تسوّق الآن | Shop Now |
| CTA الثاني | ابدأ متجرك الآن | Start Your Store Now |

---

## 2. هيكل الصفحة ومكوّناتها

| # | القسم | الهدف | عناصر أساسية |
|---|---|---|---|
| 1 | Hero | انطباع أول + تحويل فوري | عنوان، شريط ثقة (شحن سريع/دفع آمن/دعم 24/7)، زرّان CTA، صورة/video المنتجات |
| 2 | Trust Bar | إزالة الشكوك | أيقونات الدفع، شحن عالمي، ضمان استرجاع 14-30 يوماً، تقييمات |
| 3 | Categories | تصفّح سهل | إلكترونيات، أزياء، مستلزمات منزلية، عناية شخصية |
| 4 | Featured Products | بيع مباشر | 6-8 منتجات: صورة، تقييم نجوم، سعر، شارة "شحن سريع"، زر "عرض الكل" |
| 5 | Dropshipping System | توضيح نموذج العمل | شعارات موثوقية (AliExpress، CJ، Spocket)، معايير اختيار الموردين |
| 6 | How It Works | تبسيط الطلب | 4 خطوات: اختر المنتج ← أضف للسلة ← أتم الدفع ← استلم طلبك |
| 7 | Shipping Table | إزالة شكوك الشحن | جدول: المنطقة / الزمن / التكلفة |
| 8 | Testimonials | دليل اجتماعي | 6-8 شهادات مع أسماء وصور |
| 9 | FAQ | إزالة شكوك الدفع والشحن | 6 أسئلة بنظام Accordion |
| 10 | CTA أخير | تحويل نهائي | "ابدأ متجرك الآن" أو قسيمة ترحيب 10% |
| 11 | Footer | مصداقية | روابط سريعة، سياسات (خصوصية/استرجاع/شحن)، طرق دفع Visa/Mastercard/PayPal/Apple Pay |

### 2.1 قسم المنتجات المميزة (بطاقة المنتج)
كل بطاقة تحتوي: صورة (مع `loading="lazy"`)، الاسم بالعربي والإنجليزي، التقييم (4.5-5 نجوم)، السعر الحالي + السعر القديم المشطوب (اختياري)، شارة "الأكثر مبيعاً" أو "شحن سريع"، زر "أضف للسلة".

---

## 3. نظام الدروب شيبينغ العالمي

### 3.1 معايير اختيار الموردين (Checklist)
1. **التقييم وحجم الطلبات:** 4.5+ نجوم و5,000+ طلب للمنتج.
2. **سرعة التجهيز (Dispatch Time):** 2-5 أيام من الصين؛ 24-48 ساعة من المستودعات المحلية.
3. **جودة البيانات:** صور 1000px+، مواصفات كاملة، Barcode/GTIN للمنتج.
4. **المرونة:** رقم تتبع فعلي (Tracking)، سياسة إرجاع، توفر مخزون.
5. **التحقق اليدوي:** اطلب عينة واحدة قبل إدراج المنتج في المتجر.

### 3.2 أدوات الربط بالمتجر
| المورد | الأداة | الميزة الرئيسية |
|---|---|---|
| AliExpress | **DSers** (البديل الحديث لـ Oberlo) | آلاف المنتجات، مزامنة يومية، أسعار منخفضة |
| AliExpress + تحسين تجربة | **Zendrop** | جودة أعلى وتعبئة أفضل |
| موردون أمريكا/أوروبا | **Spocket** | توصيل 2-7 أيام، منتجات مميزة |
| موردون صينيون مباشرة | **CJ Dropshipping** | مرونة، عينات، منتجات حصرية |

> ملاحظة: منصة Oberlo توقفت عن العمل؛ DSers هي الأداة القياسية حالياً لربط AliExpress بـ Shopify.

### 3.3 جدول الشحن التقديري (شحن من الصين، بالدولار)
| المنطقة | الطريقة الافتراضية | الزمن التقديري | التكلفة التقريبية | ملاحظات |
|---|---|---|---|---|
| دول الخليج (الإمارات/السعودية/قطر/الكويت) | AliExpress Standard / e-Express | 10-20 يوم | 3-8$ | تتبع متوفر |
| مصر وباقي الدول العربية | AliExpress Standard | 14-25 يوم | 4-9$ | خفيفة وميسورة |
| أوروبا (EU/UK) | EUB / AliExpress Standard | 10-18 يوم | 4-7$ | جمارك تُدفع عند الاستلام |
| الولايات المتحدة | AliExpress Standard / SpeedPAK | 8-18 يوم | 4-10$ | الأسرع بين الخيارات |
| كندا | SpeedPAK / ePacket | 10-20 يوم | 5-10$ | — |
| آسيا (اليابان/كوريا/جنوب شرق آسيا) | AliExpress Standard | 8-15 يوم | 2-5$ | الأرخص |
| **خيار سريع (اختياري)** | **DHL / FedEx Express** | **3-7 أيام** | **15-30$** | يُعرض كخيار "شحن سريع" عند الدفع |

> إرشاد: اعرض في صفحة المنتج "التوصيل المتوقع: 12-20 يوماً" ولا تعد بشحن أسرع مما يستطيع المورد تنفيذه.

### 3.4 سياسة الاسترجاع والإرجاع (نص جاهز)
```
فترة الاسترجاع: 30 يوماً من تاريخ الاستلام.
- منتج تالف أو ناقص: استرداد كامل يشمل رسوم الشحن.
- تغيير الرأي: استرداد قيمة المنتج فقط، الشحن الأصلي غير مسترد ورسوم الإرجاع على العميل.
- بعد الشحن لا يمكن إلغاء الطلب؛ يتبع الإجراء القياسي أعلاه.
- طلب الاسترداد: نموذج "طلب استرداد" مع صورة المنتج ورقم الطلب.
- الرد خلال 24-48 ساعة، والاسترداد خلال 5-10 أيام عمل.
```

---

## 4. تجربة المستخدم (UX)

### 4.1 التصميم المتجاوب
- **الموبايل:** شريط سفلي ثابت (Sticky): إضافة للسلة + واتساب + قائمة Hamburger. أزرار لا تقل عن 48px.
- **التابلت:** شبكة 2-3 أعمدة بدل 4.
- **الكمبيوتر:** شبكة 4 أعمدة، شريط بحث مركزي.

### 4.2 سرعة التحميل
1. `loading="lazy"` + `decoding="async"` لجميع الصور.
2. تنسيقات حديثة: WebP/AVIF مع `srcset` بأحجام متعددة.
3. صورة الـ Hero خفيفة (LCP أقل من 2.5 ثانية).
4. ضغط HTML/CSS/JS (Minify) وبناء Tailwind محلي بدل CDN.
5. فتح الفيديو عند الطلب (Lazy load) وعدم تشغيله تلقائياً في قسم Hero.

### 4.3 البحث والفلاتر
- شريط بحث مباشر (نتائج فورية بدون إعادة تحميل).
- فلاتر: **السعر** (min-max)، **الفئة**، **التقييم** (4+ نجوم)، **الترتيب** (الأحدث/الأكثر مبيعاً/السعر).
- حفظ حالة الفلاتر في URL (`history.pushState`) حتى يعمل زر الرجوع.

---

## 5. المنصة والأدوات

### 5.1 Shopify مقابل WooCommerce
| المعيار | Shopify | WooCommerce (WordPress) |
|---|---|---|
| التكلفة | 29-299$ شهرياً + رسوم معاملات 2.9%+0.30$ | مجانية + استضافة (5-30$) + إضافات |
| سرعة الإطلاق | أيام | أسابيع + إدارة تقنية |
| الدروب شيبينغ (DSers/Zendrop) | ممتاز ومباشر | ممكن عبر إضافات لكن أقل سلاسة |
| الدفع المحلي (Mada/Tabby/Tamara) | ممتاز عبر تطبيقات | ممكن عبر إضافات |
| التحكم التقني | متوسط | عالي |
| **التوصية** | **نقطة البداية (سريع وموثوق)** | لمن يريد تحكماً كاملاً لاحقاً |

**الخلاصة:** ابدأ بـ Shopify للإطلاق السريع مع أدوات دروب شيبينغ جاهزة، وانتقل لاحقاً إلى WooCommerce إذا نمت الحاجة للتحكم التقني الكامل.

### 5.2 بوابات الدفع المقترحة
| البوابة | التغطية | ملاحظات |
|---|---|---|
| PayPal | عالمي وقوي بالخليج | ثقة عالية، إعداد سريع |
| Stripe | عالمي | رسوم شفافة، يعمل مع Shopify |
| PayTabs / Tap / HyperPay / Moyasar | السعودية/الخليج/مصر | بطاقات **Mada** ومدى — ضرورية للسوق الخليجي |
| Telr | الإمارات/السعودية | دعم واسع للبطاقات |
| Apple Pay / Google Pay | عالمي | يرفع معدل التحويل بشكل ملحوظ |
| Tabby / Tamara / Valo (اشترِ الآن وادفع لاحقاً) | الخليج/مصر | "ادفع على 4 دفعات" يرفع متوسط قيمة الطلب |

**التوصية للمرحلة الأولى:** PayTabs أو Tap للسوق العربي + PayPal/Stripe للعالم + Tabby/Tamara لاحقاً.

### 5.3 إدارة الشحن والتوصيل
- **ShipStation** — إدارة الطلبات والشحن من مكان واحد (مثالي للبداية).
- **Easyship** — أسعار شحن مسبقة لـ 200+ منطقة (ممتاز للدروب شيبينغ).
- **للمنطقة:** Aramex (التسليم في الخليج) + DHL eCommerce للطلبات العالمية السريعة.

### 5.4 تطبيقات تحسين المتجر (Shopify App Store)
- **DSers / Zendrop** — مزامنة الدروب شيبينغ.
- **Vitals / Smart Product Filter** — فلاتر متقدمة وتقييمات.
- **Klaviyo** — بريد/واتساب أتمتة: سلة متروكة، تذكيرات، ولاء.
- **Loop Returns** — إدارة الاسترجاع بشكل احترافي.
- **طبق البيع المتقاطع:** "المنتجات المشتراة معاً" + Upsell بعد الدفع (Post-Purchase Upsell) لرفع متوسط الطلب.

---

## 6. الجانب التقني

### 6.1 هيكل قاعدة البيانات (Schema)
```sql
CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name_ar VARCHAR(100), name_en VARCHAR(100),
  slug VARCHAR(160) UNIQUE
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sku VARCHAR(64) UNIQUE,
  title_ar VARCHAR(255) NOT NULL,
  title_en VARCHAR(255) NOT NULL,
  description_ar TEXT, description_en TEXT,
  slug VARCHAR(160) UNIQUE,
  category_id INT,
  brand VARCHAR(100),
  price DECIMAL(10,2),
  compare_at DECIMAL(10,2),      -- السعر القديم (لعروض الخصم)
  cost DECIMAL(10,2),            -- تكلفة الشراء (داخلية)
  currency CHAR(3) DEFAULT 'AED',
  rating DECIMAL(2,1) DEFAULT 4.8,
  reviews_count INT DEFAULT 0,
  stock INT DEFAULT 0,
  is_active TINYINT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE product_variants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  variant_title_ar VARCHAR(100), variant_title_en VARCHAR(100),
  sku VARCHAR(64), price DECIMAL(10,2), qty INT,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE product_images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  url VARCHAR(400), alt_ar VARCHAR(150), alt_en VARCHAR(150),
  sort_order INT, is_main TINYINT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE suppliers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150),
  platform ENUM('aliexpress','zendrop','spocket','cj'),
  rating DECIMAL(2,1), orders_count INT,
  ship_days INT, refunds_pct DECIMAL(4,2)
);

CREATE TABLE product_suppliers (
  product_id INT, supplier_id INT,
  supplier_link VARCHAR(400),
  unit_cost DECIMAL(10,2), shipping_cost DECIMAL(10,2),
  last_sync TIMESTAMP,
  PRIMARY KEY (product_id, supplier_id)
);

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(150), email VARCHAR(190) UNIQUE,
  phone VARCHAR(30), country VARCHAR(80), lang CHAR(2), created_at TIMESTAMP
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT,
  total DECIMAL(10,2), shipping DECIMAL(10,2), discount DECIMAL(10,2),
  status ENUM('new','paid','processing','shipped','delivered','refunded'),
  payment_status ENUM('pending','paid','failed','refunded'),
  tracking_number VARCHAR(120),
  created_at TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT, product_id INT, variant_id INT, qty INT,
  price DECIMAL(10,2), cost DECIMAL(10,2), supplier_id INT,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE coupons (
  code VARCHAR(40) PRIMARY KEY,
  type ENUM('pct','flat'),
  value DECIMAL(10,2),
  min_cart DECIMAL(10,2),
  starts_at DATETIME, ends_at DATETIME,
  max_uses INT
);
```

### 6.2 ربط Google Merchant Center (خطوات عملية)
1. أنشئ حساب Google Merchant Center واربطه بحساب Google الخاص بك.
2. تحقق من ملكية الموقع (تأكيد النطاق) عبر إضافة ملف HTML أو وسوم DNS في إعدادات GitHub Pages.
3. فعّل قناة "Google & YouTube" داخل Shopify (أو ارفع ملف Feed منتجات يدوياً).
4. تأكد من حقل `price` بالشكل الصحيح: `"98.00 AED"`.
5. حدد الفئة الإلزامية `google_product_category` لكل منتج.
6. اطلب الموافقة، ثم راجع قسم "Diagnostics" لإصلاح الأخطاء قبل الحملات الإعلانية.
7. أضف عروض ترويجية عبر قسم Promotions (شحن مجاني / خصم%).

### 6.3 كود HTML/CSS أساسي (نموذج عمل)
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EIQAA Store | إيقاع الأثر</title>
  <style>
    :root {
      --purple: #7C3AED; --gold: #F5B700; --dark: #0D0018;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Cairo', 'Inter', sans-serif; background: #fff; color: #222; }
    .hdr { display: flex; align-items: center; justify-content: space-between;
      padding: 12px 24px; border-bottom: 1px solid #eee; }
    .brand { font-weight: 800; color: var(--purple); }
    .btn-lang { padding: 8px 14px; border-radius: 8px; border: 1px solid var(--gold);
      background: #fff; cursor: pointer; font-weight: 700; margin-inline-start: 6px; }
    .btn-lang.active { background: var(--purple); color: #fff; border-color: var(--purple); }
    .hero { background: linear-gradient(135deg, var(--dark), #2A0A5E); color: #fff;
      text-align: center; padding: 72px 20px; }
    .hero h1 { color: var(--gold); font-size: clamp(1.8rem, 4vw, 3rem); }
    .hero p { margin-top: 12px; opacity: .9; }
    .cta { display: inline-block; margin-top: 20px; padding: 14px 30px; border-radius: 12px;
      background: linear-gradient(135deg, var(--gold), #D49500); color: var(--dark);
      font-weight: 800; text-decoration: none; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px; padding: 32px 24px; max-width: 1200px; margin: auto; }
    .card { border: 1px solid #eee; border-radius: 14px; overflow: hidden; }
    .card img { width: 100%; height: 220px; object-fit: cover; }
    .card-body { padding: 12px; }
    .price { color: var(--purple); font-weight: 800; }
    .search { display: flex; gap: 6px; max-width: 560px; margin: 24px auto; padding: 0 24px; }
    .search input { flex: 1; padding: 10px 14px; border: 1px solid #ddd; border-radius: 10px; }
    .trust { display: flex; flex-wrap: wrap; gap: 18px; justify-content: center;
      padding: 18px; background: #F7F4FF; font-size: 13px; font-weight: 600; }
  </style>
</head>
<body>
  <header class="hdr">
    <div class="brand">EIQAA Store</div>
    <div>
      <button class="btn-lang active" data-lang="ar">العربية</button>
      <button class="btn-lang" data-lang="en">English</button>
    </div>
  </header>

  <section class="hero">
    <h1 data-ar="متجرك العالمي… من المورّد إلى باب بيتك"
        data-en="Your global store — from supplier to your door">متجرك العالمي… من المورّد إلى باب بيتك</h1>
    <p data-ar="منتجات أصلية، أسعار تنافسية، شحن عالمي ودفع آمن"
       data-en="Original products, competitive prices, global shipping, secure checkout">منتجات أصلية، أسعار تنافسية، شحن عالمي ودفع آمن</p>
    <a class="cta" href="#products" data-ar="تسوّق الآن" data-en="Shop Now">تسوّق الآن</a>
  </section>

  <div class="trust">
    <span data-ar="شحن سريع 10-20 يوم" data-en="Fast shipping 10-20 days">شحن سريع 10-20 يوم</span>
    <span data-ar="دفع آمن 100%" data-en="100% secure checkout">دفع آمن 100%</span>
    <span data-ar="استرجاع خلال 30 يوماً" data-en="30-day returns">استرجاع خلال 30 يوماً</span>
    <span data-ar="دعم 24/7" data-en="24/7 support">دعم 24/7</span>
  </div>

  <div class="search">
    <input type="search" placeholder="ابحث عن منتج..."
      data-ph-ar="ابحث عن منتج..." data-ph-en="Search products...">
  </div>

  <section class="grid" id="products">
    <div class="card">
      <img src="https://picsum.photos/400?random=1" alt="Product" loading="lazy">
      <div class="card-body">
        <h3 data-ar="منتج تجريبي" data-en="Sample Product">منتج تجريبي</h3>
        <p class="price">98.00 AED</p>
      </div>
    </div>
  </section>

  <script>
    function applyLang(isAr) {
      document.documentElement.dir = isAr ? 'rtl' : 'ltr';
      document.documentElement.lang = isAr ? 'ar' : 'en';
      document.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
        if (el.hasAttribute('data-ph-ar')) {
          el.placeholder = isAr ? el.dataset.phAr : el.dataset.phEn;
        } else {
          el.textContent = isAr ? el.dataset.ar : el.dataset.en;
        }
      });
      document.querySelectorAll('.btn-lang').forEach(function (b) {
        b.classList.toggle('active', (b.dataset.lang === 'ar') === isAr);
      });
    }
    document.querySelectorAll('.btn-lang').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.lang === 'ar'); });
    });
  </script>
</body>
</html>
```

---

## 7. استراتيجية التسعير

### 7.1 معادلة حساب الهامش
```
سعر البيع = (تكلفة المنتج + تكلفة الشحن) ÷ (1 - مجموع النسب)
حيث مجموع النسب = رسوم المنصة% + رسوم بوابة الدفع% + تكاليف الإرجاع% + هامش الربح المطلوب%
```

**مثال عملي:**
| البند | القيمة |
|---|---|
| تكلفة المورد (AliExpress) | 12$ |
| الشحن إلى الإمارات | 6$ |
| رسوم المنصة (Shopify) | 2.9% + 0.30$ |
| رسوم الدفع (PayTabs) | 2.9% + 0.30$ |
| تكاليف الإرجاع والمصروفات | 2% |
| هامش الربح المطلوب | 25% |

```
سعر البيع = 18 ÷ (1 - (0.029 + 0.029 + 0.02 + 0.25))
          = 18 ÷ 0.672
          = 26.8$  (≈ 98 AED)
```
النتيجة: تبيع بـ 98 درهم بينما التكلفة الفعلية 66 درهماً — هامش صافٍ 25% تقريباً.

### 7.2 استراتيجيات التسعير
| الاستراتيجية | الوصف | متى تستخدم |
|---|---|---|
| التسعير الاختراقي | سعر منخفض لكسب حصة السوق | منتجات عامة منافسة |
| التسعير المتميز | سعر أعلى مع قيمة إضافية | منتجات مميزة/فاخرة بعلامة خاصة |
| التسعير النفسي | 39.99 بدل 40 | كل المنتجات (الأقوى للمستهلك) |
| التثبيت السعري (Anchoring) | "كان 150 — الآن 99" | العروض والتخفيضات |
| الباقات المجمعة (Bundling) | شراء قطعتين بسعر مخفّض | رفع متوسط قيمة الطلب |

### 7.3 خطة الخصومات والعروض
- **قسيمة ترحيب:** `WELCOME10` بخصم 10% لأول طلب (تظهر في نافذة منبثقة بعد 30 ثانية).
- **شحن مجاني:** للطلبات فوق 50$ أو 200 درهم (شريط تقدم في السلة).
- **عروض موسمية:** تخفيض 15-20% في المواسم (Black Friday، رمضان، الجمعة البيضاء).
- **بيع متقاطع (Cross-Sell):** اقتراح إكسسوار عند إضافة المنتج للسلة.
- **استرداد السلة المتروكة:** إيميل/واتساب تلقائي بعد ساعتين مع كود خصم 10% خاص.
- **برنامج ولاء:** نقاط مقابل كل طلب تُستبدل بخصومات مستقبلية.

---

## 8. قائمة التنفيذ (Checklist)

1. [ ] إنشاء حساب Shopify وتفعيل باقة أساسية + ربط النطاق `eiqaathar.com/store`.
2. [ ] ربط DSers/Zendrop بـ AliExpress واختيار 20-40 منتجاً.
3. [ ] إعداد بوابات الدفع (PayTabs/Tap + PayPal + Apple Pay).
4. [ ] إعداد طرق الشحن لكل منطقة مع جدول التكاليف أعلاه.
5. [ ] كتابة سياسات (خصوصية، شحن، استرجاع) بالعربي والإنجليزي.
6. [ ] إضافة الكود اللغوي (data-ar/data-en) لكل العناصر.
7. [ ] ربط Google Merchant Center ومراجعة Diagnostics.
8. [ ] إعداد Pixel + Google Analytics + تتبع واتساب.
9. [ ] اختبار الطلب الكامل (Checkout تجريبي) على الجوال والكمبيوتر.
10. [ ] إطلاق أول حملة إعلانية بميزانية صغيرة (50$ أسبوعياً) وقياس النتائج قبل التوسع.

---

## 9. نصائح تنفيذية سريعة
1. **لا تبدأ بعشرات المنتجات** — 20-40 منتجاً مختاراً بعناية أفضل من 500 منتج عشوائي.
2. **اختبر المنتج بنفسك** قبل عرضه (الجودة والتغليف يحددان تقييماتك).
3. **التقييمات أهم من السعر** — اجمع 20+ تقييم حقيقي في أول 60 يوماً.
4. **ابدأ بالإعلانات على إعلانات التسوق (Shopping)** وليس فقط الفيسبوك.
5. **التقييم بالنجوم في المتجر** يرفع التحويل 30%+ — فعّل تطبيق مراجعات المنتجات.
6. **خدمة ما بعد البيع** (تتبع + تواصل) هي ما يميز متجرك عن المورد نفسه.
