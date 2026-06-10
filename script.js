/* =====================================================
   أكاديمية الحساني للتدريب – STEP 2026 Store
   Main Script – Modern Edition with AI Chatbot
   ===================================================== */

'use strict';

const TELEGRAM_USERNAME = 'qiyas_2026_2030';

const COURSES = {
  premium: {
    slug: 'premium',
    badge: 'الأكثر تميزًا',
    icon: '💎',
    artClass: 'course-art-premium',
    name: 'دورة STEP الحساني المميزة بنسختها الحديثة لاختبار كفايات اللغة الإنجليزية STEP 2026',
    short: 'هدفك درجة عالية +90… فهنا البداية الصح!',
    brief: 'شرح مبسط من الصفر + أحدث النماذج + تدريبات وكويزات ومحاكيات + خطة مذاكرة جاهزة مع تحديثات مستمرة لمدة 90 يوم.',
    price: 349,
    oldPrice: 749,
    access: '90 يوم',
    updateNote: 'كل التحديثات الجديدة + النماذج القادمة لمدة 90 يوم بدون رسوم إضافية.',
    features: [
      'شرح مبسط من الصفر (Grammar + Reading + Listening)',
      'أحدث النماذج 50 - 51 - 52',
      'تدريبات + كويزات + محاكيات للاختبار',
      'خطة مذاكرة جاهزة تمشي عليها',
      'محتوى منظم يوفر عليك وقتك ويختصر لك الطريق',
      'تحديثات مستمرة لمدة 90 يوم من تاريخ الاشتراك'
    ],
    contentBlocks: [
      { title: 'شرح تأسيسي واضح', text: 'مناسب لمن يريد بناء فهم قوي من الصفر بطريقة مرتبة وسهلة.' },
      { title: 'تركيز على النماذج الحديثة', text: 'يغطي النماذج 50 و51 و52 مع أسئلة وتطبيقات قريبة من بيئة الاختبار.' },
      { title: 'تدريب ومحاكاة', text: 'اختبارات قصيرة وكويزات ومحاكيات ترفع الجاهزية قبل موعد STEP.' },
      { title: 'خطة تنفيذ جاهزة', text: 'مسار مذاكرة مرتب حتى لا تحتار من أين تبدأ وماذا تراجع أولًا.' }
    ]
  },
  intensive: {
    slug: 'intensive',
    badge: 'خطة سريعة',
    icon: '❤️‍🔥',
    artClass: 'course-art-intensive',
    name: 'دورة STEP الحساني المكثفة خطة 10 أيام (تحديث 2026)',
    short: 'مثالية إذا وقتك ضيق وتحتاج نتيجة سريعة قبل الاختبار.',
    brief: 'برنامج مكثف للمقبلين على الاختبار قريبًا، يركز على المتكرر + التثبيت + حل أكبر عدد من الأسئلة خلال 10 أيام.',
    price: 299,
    oldPrice: 549,
    access: '90 يوم',
    updateNote: 'مدة وصول المحتوى 90 يوم، مع تركيز على السرعة والنتيجة قبل الاختبار.',
    features: [
      'خطة مكثفة خلال 10 أيام',
      'تركيز على المتكرر والمهم في الاختبار',
      'تثبيت سريع لأبرز النقاط',
      'حل أكبر عدد من الأسئلة',
      'مناسبة للوقت الضيق والاستعداد السريع',
      'وصول للمحتوى لمدة 90 يوم'
    ],
    contentBlocks: [
      { title: 'خطة يومية واضحة', text: 'كل يوم له هدف ومهام محددة حتى تنجز أكبر قدر في وقت قصير.' },
      { title: 'تركيز على الأهم', text: 'لا تشتت، بل مراجعة سريعة للمفاهيم والأنماط المتكررة.' },
      { title: 'أسئلة عملية كثيرة', text: 'تدريب مكثف على عدد كبير من الأسئلة لترسيخ السرعة والثقة.' },
      { title: 'مناسبة قبل الاختبار', text: 'حل مثالي لمن تبقى له أيام قليلة ويريد دفعة قوية ومنظمة.' }
    ]
  },
  comprehensive: {
    slug: 'comprehensive',
    badge: 'أساس قوي',
    icon: '📘',
    artClass: 'course-art-comprehensive',
    name: 'دورة STEP الحساني الشاملة (تحديث 2026)',
    short: 'مناسبة تبني أساس قوي وتراجع خطوة بخطوة.',
    brief: 'شرح مفصل لكل أقسام الاختبار (Grammar – Reading – Listening – Structure) مع نماذج سابقة وخطط مذاكرة مرنة 5/10/30 يوم.',
    price: 249,
    oldPrice: 399,
    access: 'تحديثات مدى الحياة',
    updateNote: 'خيار مناسب لمن يريد تأسيسًا متدرجًا وخطة مرنة بحسب وقته.',
    features: [
      'شرح مفصل لكل أقسام الاختبار',
      'Grammar – Reading – Listening – Structure',
      'نماذج سابقة للمراجعة والتدريب',
      'خطط مذاكرة مرنة 5 / 10 / 30 يوم',
      'مناسبة لبناء أساس قوي خطوة بخطوة',
      'تحديثات مدى الحياة'
    ],
    contentBlocks: [
      { title: 'شرح شامل', text: 'كل قسم في STEP له مساحة واضحة بالشرح والفهم والتطبيق.' },
      { title: 'مرونة في الخطة', text: 'سواء كان وقتك 5 أيام أو 30 يوم ستجد خطة مناسبة تنطلق منها.' },
      { title: 'مراجعة على مهل', text: 'مسار مثالي لمن يريد التأسيس بدون استعجال مع مراجعة مرتبة.' },
      { title: 'نماذج وتطبيقات', text: 'أمثلة ونماذج سابقة تساعدك على تثبيت المعلومات وتحسين الأداء.' }
    ]
  }
};

const courseList = Object.values(COURSES);

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavScroll();
  initCartCount();
  initRevealAnimations();
  initFAQ();
  initCounters();
  renderPageByType();
  initAIChatbot();

  // Auto-open chatbot after delay on first visit
  const chatOpened = sessionStorage.getItem('chatOpened');
  if (!chatOpened) {
    setTimeout(() => {
      sessionStorage.setItem('chatOpened', '1');
    }, 500);
  }
});

/* ─── SCROLL PROGRESS ─── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
}

/* ─── NAVBAR SCROLL ─── */
function initNavScroll() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ─── REVEAL ANIMATIONS ─── */
function initRevealAnimations() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  items.forEach(item => observer.observe(item));
}

/* ─── COUNTERS ─── */
function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

/* ─── FAQ ─── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ─── PAGE ROUTER ─── */
function renderPageByType() {
  const page = document.body.dataset.page;
  if (page === 'home') renderFeaturedCourses('featuredCourses', 3);
  if (page === 'courses') renderAllCourses('allCourses');
  if (page === 'course') renderCoursePage();
  if (page === 'cart') renderCartPage();
  if (page === 'checkout') renderCheckoutPage();
  if (page === 'success') renderSuccessPage();
}

/* ─── UTILS ─── */
function formatPrice(value) {
  return `${value.toLocaleString('ar-SA')} ريال`;
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('hassani_cart')) || []; } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('hassani_cart', JSON.stringify(cart));
  initCartCount();
}

function initCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
  });
}

function addToCart(slug) {
  const cart = getCart();
  const existing = cart.find(item => item.slug === slug);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ slug, quantity: 1 });
  }
  saveCart(cart);
  showToast('✅ تمت إضافة الدورة إلى السلة');
}

function changeQuantity(slug, delta) {
  const cart = getCart()
    .map(item => item.slug === slug ? { ...item, quantity: item.quantity + delta } : item)
    .filter(item => item.quantity > 0);
  saveCart(cart);
  renderCartPage();
}

function removeFromCart(slug) {
  saveCart(getCart().filter(item => item.slug !== slug));
  renderCartPage();
}

function getCartDetails() {
  return getCart().map(item => ({
    ...item,
    course: COURSES[item.slug],
    lineTotal: COURSES[item.slug]?.price * item.quantity
  })).filter(item => item.course);
}

function getCartTotal() {
  return getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
}

function getCartOldTotal() {
  return getCartDetails().reduce((sum, item) => sum + (item.course.oldPrice * item.quantity), 0);
}

/* ─── COURSE CARD TEMPLATE ─── */
function courseCardTemplate(course, full = false) {
  const discount = Math.round(((course.oldPrice - course.price) / course.oldPrice) * 100);
  return `
    <article class="course-card reveal">
      <div style="position:absolute; top:16px; left:16px; background:linear-gradient(135deg,#dc2626,#ef4444); color:white; padding:5px 12px; border-radius:999px; font-size:0.75rem; font-weight:900; z-index:10;">
        خصم ${discount}%
      </div>
      <div class="course-art ${course.artClass}">
        <div class="course-art-inner">
          <span class="card-chip">${course.badge}</span>
          <div class="course-icon">${course.icon}</div>
          <h3>${course.name}</h3>
          <p>${course.short}</p>
        </div>
      </div>
      <span class="card-tag">✨ تحديث 2026</span>
      <div class="course-meta">
        <span>⏱ مدة الوصول: ${course.access}</span>
        <span>🎯 عرض خاص محدود</span>
      </div>
      <p class="course-brief">${full ? course.brief : course.short}</p>
      <ul class="course-mini-list">
        ${course.features.slice(0, 4).map(item => `<li>${item}</li>`).join('')}
      </ul>
      <div class="card-footer">
        <div class="price-row">
          <strong class="price-now">${formatPrice(course.price)}</strong>
          <span class="price-old">${formatPrice(course.oldPrice)}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-secondary" href="course.html?slug=${course.slug}">التفاصيل</a>
          <button class="btn btn-primary add-to-cart" data-slug="${course.slug}">🛒 أضف للسلة</button>
        </div>
      </div>
    </article>
  `;
}

function bindAddButtons() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.slug));
  });
  initRevealAnimations();
}

function renderFeaturedCourses(targetId, limit) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = courseList.slice(0, limit).map(c => courseCardTemplate(c)).join('');
  bindAddButtons();
}

function renderAllCourses(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = courseList.map(c => courseCardTemplate(c, true)).join('');
  bindAddButtons();
}

/* ─── COURSE DETAIL PAGE ─── */
function renderCoursePage() {
  const target = document.getElementById('courseDetails');
  if (!target) return;
  const slug = new URLSearchParams(window.location.search).get('slug') || 'premium';
  const course = COURSES[slug];
  if (!course) {
    target.innerHTML = `<div class="empty-state course-panel"><h2>الدورة غير موجودة</h2><a class="btn btn-primary" href="courses.html">العودة للدورات</a></div>`;
    return;
  }
  document.title = `${course.name} | أكاديمية الحساني`;
  target.innerHTML = `
    <div class="course-detail-layout">
      <div>
        <div class="course-hero-copy">
          <span class="card-chip">${course.badge}</span>
          <h1 style="margin-top:10px; font-size:clamp(1.6rem,2.5vw,2.4rem);">${course.name}</h1>
          <p class="course-short" style="margin-top:12px;">${course.short}</p>
          <div class="course-meta">
            <span>💰 السعر الخاص: ${formatPrice(course.price)}</span>
            <span>بدل ${formatPrice(course.oldPrice)}</span>
            <span>⏱ الوصول: ${course.access}</span>
          </div>
        </div>

        <div class="detail-grid">
          ${course.contentBlocks.map(block => `
            <article class="course-panel reveal">
              <h3>${block.title}</h3>
              <p>${block.text}</p>
            </article>
          `).join('')}
        </div>

        <article class="course-panel reveal" style="margin-top:22px;">
          <span class="notice-tag">✨ ما يميز دورتنا</span>
          <ul class="detail-list">
            ${course.features.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      </div>

      <aside class="course-side-panel sticky">
        <div class="course-art ${course.artClass}" style="min-height:160px;">
          <div class="course-art-inner">
            <div class="course-icon">${course.icon}</div>
            <h3>${course.badge}</h3>
            <p>${course.short}</p>
          </div>
        </div>
        <div class="price-row" style="margin-top:18px;">
          <strong class="price-now">${formatPrice(course.price)}</strong>
          <span class="price-old">${formatPrice(course.oldPrice)}</span>
        </div>
        <p style="margin-top:10px; color:var(--muted); font-size:0.9rem; line-height:1.7;">${course.updateNote}</p>
        <button class="btn btn-primary add-to-cart" data-slug="${course.slug}" style="margin-top:16px;">🛒 أضف الدورة إلى السلة</button>
        <a class="btn btn-secondary" href="cart.html" style="margin-top:10px;">عرض السلة</a>
      </aside>
    </div>
  `;
  bindAddButtons();
  initRevealAnimations();
}

/* ─── CART PAGE ─── */
function renderCartPage() {
  const itemsTarget = document.getElementById('cartItems');
  const summaryTarget = document.getElementById('cartSummary');
  if (!itemsTarget || !summaryTarget) return;

  const details = getCartDetails();

  if (!details.length) {
    itemsTarget.innerHTML = `
      <div class="empty-state course-panel">
        <div style="font-size:3rem; margin-bottom:16px;">🛒</div>
        <h2>السلة فارغة الآن</h2>
        <p>ابدأ بإضافة الدورة المناسبة لك، ثم عد هنا لإتمام الطلب.</p>
        <a class="btn btn-primary" href="courses.html" style="margin-top:20px;">تصفح الدورات</a>
      </div>`;
    summaryTarget.innerHTML = `<h3>ملخص الطلب</h3><p style="color:var(--muted); margin-top:12px;">لا توجد أي دورات في السلة حتى الآن.</p>`;
    return;
  }

  itemsTarget.innerHTML = details.map(item => `
    <article class="cart-item">
      <div class="course-art ${item.course.artClass}" style="min-height:140px;">
        <div class="course-art-inner">
          <div class="course-icon">${item.course.icon}</div>
          <h3>${item.course.badge}</h3>
        </div>
      </div>
      <div>
        <span class="outline-chip">⏱ ${item.course.access}</span>
        <h3 style="margin-top:10px;">${item.course.name}</h3>
        <p>${item.course.short}</p>
        <div class="cart-item-footer" style="margin-top:18px;">
          <div class="qty-controls">
            <button type="button" data-action="decrease" data-slug="${item.slug}">−</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-action="increase" data-slug="${item.slug}">+</button>
          </div>
          <div class="price-row">
            <strong class="price-now">${formatPrice(item.lineTotal)}</strong>
            <span class="price-old">${formatPrice(item.course.oldPrice * item.quantity)}</span>
          </div>
          <button type="button" class="remove-btn" data-action="remove" data-slug="${item.slug}">🗑 حذف</button>
        </div>
      </div>
    </article>
  `).join('');

  summaryTarget.innerHTML = buildSummaryCard(details, 'ملخص الطلب') + `
    <a class="btn btn-primary" href="checkout.html" style="margin-top:18px;">إتمام الطلب ✓</a>
    <a class="btn btn-secondary" href="courses.html" style="margin-top:10px;">إضافة دورات أخرى</a>
  `;

  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const { slug, action } = btn.dataset;
      if (action === 'increase') changeQuantity(slug, 1);
      if (action === 'decrease') changeQuantity(slug, -1);
      if (action === 'remove') removeFromCart(slug);
    });
  });
}

/* ─── CHECKOUT PAGE ─── */
function renderCheckoutPage() {
  const summaryTarget = document.getElementById('checkoutSummary');
  const form = document.getElementById('checkoutForm');
  if (!summaryTarget || !form) return;
  const details = getCartDetails();
  if (!details.length) { window.location.href = 'cart.html'; return; }
  summaryTarget.innerHTML = buildSummaryCard(details, 'تفاصيل الطلب');

  const prev = JSON.parse(localStorage.getItem('hassani_checkout_data') || 'null');
  if (prev) {
    Object.entries(prev).forEach(([k, v]) => {
      if (form.elements[k]) form.elements[k].value = v;
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem('hassani_checkout_data', JSON.stringify(data));
    window.location.href = 'success.html';
  });
}

/* ─── SUCCESS PAGE ─── */
function renderSuccessPage() {
  const preview = document.getElementById('telegramMessagePreview');
  const sendBtn = document.getElementById('telegramSendBtn');
  const copyBtn = document.getElementById('copyMessageBtn');
  const summaryTarget = document.getElementById('successSummary');
  if (!preview || !sendBtn || !copyBtn || !summaryTarget) return;

  const details = getCartDetails();
  const userData = JSON.parse(localStorage.getItem('hassani_checkout_data') || 'null');
  if (!details.length || !userData) { window.location.href = 'cart.html'; return; }

  summaryTarget.innerHTML = buildSummaryCard(details, 'ملخص الطلب المرسل');
  const message = buildTelegramMessage(details, userData);
  preview.textContent = message;
  sendBtn.href = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(message);
      showToast('📋 تم نسخ الرسالة بنجاح');
    } catch {
      showToast('تعذر النسخ التلقائي، انسخ النص يدويًا');
    }
  });
}

/* ─── HELPERS ─── */
function buildSummaryCard(details, title) {
  return `
    <h3>${title}</h3>
    <ul class="summary-list">
      ${details.map(item => `<li>${item.course.name} × ${item.quantity}</li>`).join('')}
    </ul>
    <div class="summary-subtotal" style="margin-top:16px;">
      <span>إجمالي قبل الخصم</span>
      <strong>${formatPrice(getCartOldTotal())}</strong>
    </div>
    <div class="summary-total">
      <span>الإجمالي النهائي</span>
      <strong>${formatPrice(getCartTotal())}</strong>
    </div>
    <p style="margin-top:14px; color:var(--muted); font-size:0.88rem; line-height:1.7;">بعد إرسال الرسالة للدعم سيتم تزويدك ببيانات التحويل البنكي وتأكيد الاشتراك.</p>
  `;
}

function buildTelegramMessage(details, userData) {
  const orderLines = details.map((item, i) =>
    `${i + 1}. ${item.course.name} × ${item.quantity} = ${formatPrice(item.lineTotal)}`
  ).join('\n');
  return `مرحبًا، أود تأكيد طلب شراء من متجر أكاديمية الحساني للتدريب | 2026 STEP\n\nالاسم: ${userData.name}\nرقم التواصل: ${userData.phone}\nالبريد الإلكتروني: ${userData.email}\nالدرجة المستهدفة: ${userData.targetScore}\nملاحظات: ${userData.notes || 'لا يوجد'}\n\nالدورات المختارة:\n${orderLines}\n\nإجمالي قبل الخصم: ${formatPrice(getCartOldTotal())}\nالإجمالي النهائي: ${formatPrice(getCartTotal())}\n\nأرجو تزويدي ببيانات التحويل البنكي وتأكيد الاشتراك. شكرًا لكم.`;
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ══════════════════════════════════════════
   AI CHATBOT ENGINE
   ══════════════════════════════════════════ */
const AI_KNOWLEDGE = {
  greetings: ['مرحبا', 'السلام', 'هلا', 'هاي', 'hi', 'hello', 'اهلا', 'أهلا'],
  premium_keywords: ['مميزة', 'premium', 'التميز', '349', 'الأكثر طلبا', 'الأكثر طلبًا'],
  intensive_keywords: ['مكثفة', 'intensive', '10 أيام', 'عشرة أيام', 'سريعة', '299'],
  comprehensive_keywords: ['شاملة', 'comprehensive', 'مدى الحياة', 'خطة 30', '249'],
  price_keywords: ['سعر', 'كم', 'تكلفة', 'ثمن', 'مبلغ', 'رسوم', 'تكاليف'],
  cart_keywords: ['سلة', 'شراء', 'أشتري', 'اشتري', 'اضف', 'أضف'],
  telegram_keywords: ['تيليجرام', 'دعم', 'تواصل', 'اتصل', 'ارسل', 'أرسل'],
  duration_keywords: ['مدة', 'وصول', 'كم يوم', 'متى', 'انتهاء'],
  step_keywords: ['step', 'ستيب', 'قياس', 'كفايات', 'اختبار', 'امتحان'],
  update_keywords: ['تحديث', 'جديد', 'نموذج', 'نماذج', 'تحديثات'],
  pay_keywords: ['دفع', 'تحويل', 'بنك', 'فيزا', 'مدى', 'طريقة الدفع'],
  start_keywords: ['كيف', 'ابدأ', 'أبدأ', 'بداية', 'خطوات', 'كيفية'],
};

const AI_RESPONSES = {
  greeting: {
    text: 'أهلاً وسهلاً بك في أكاديمية الحساني للتدريب! 😊\n\nأنا مساعدك الذكي، هنا لمساعدتك في اختيار الدورة المناسبة لاختبار STEP 2026.\n\nكيف يمكنني مساعدتك اليوم؟',
    quick: ['أريد معرفة الدورات', 'ما هي الأسعار؟', 'كيف أشتري؟', 'التواصل عبر تيليجرام']
  },
  all_courses: {
    text: '📚 لدينا ثلاث دورات متخصصة لاختبار STEP 2026:\n\n💎 **الدورة المميزة** – 349 ريال\nشرح من الصفر + النماذج 50-52 + محاكيات + 90 يوم وصول\n\n❤️‍🔥 **الدورة المكثفة** – 299 ريال\nخطة 10 أيام مركزة مثالية للوقت الضيق\n\n📘 **الدورة الشاملة** – 249 ريال\nشرح مفصل لكل الأقسام + تحديثات مدى الحياة\n\nأي دورة تريد معرفة المزيد عنها؟',
    quick: ['الدورة المميزة', 'الدورة المكثفة', 'الدورة الشاملة', 'مقارنة الدورات']
  },
  premium: {
    text: '💎 **الدورة المميزة – 349 ريال** (بدل 749 ريال)\n\n✅ شرح مبسط من الصفر\n✅ Grammar + Reading + Listening\n✅ أحدث النماذج 50 - 51 - 52\n✅ تدريبات + كويزات + محاكيات\n✅ خطة مذاكرة جاهزة\n✅ تحديثات مستمرة لمدة 90 يوم\n\n🎯 مثالية لمن يريد درجة +90\n\n🔗 <a href="course.html?slug=premium">اقرأ التفاصيل الكاملة</a> | <a href="courses.html">أضفها للسلة</a>',
    quick: ['كيف أشتري؟', 'مقارنة الدورات', 'الدورة المكثفة', 'الدورة الشاملة']
  },
  intensive: {
    text: '❤️‍🔥 **الدورة المكثفة – 299 ريال** (بدل 549 ريال)\n\n✅ خطة مكثفة خلال 10 أيام\n✅ تركيز على المتكرر والأهم\n✅ تثبيت سريع لأبرز النقاط\n✅ حل أكبر عدد من الأسئلة\n✅ وصول للمحتوى 90 يوم\n\n🎯 مثالية إذا اختبارك قريب وتريد نتيجة سريعة\n\n🔗 <a href="course.html?slug=intensive">اقرأ التفاصيل الكاملة</a>',
    quick: ['كيف أشتري؟', 'الدورة المميزة', 'الدورة الشاملة']
  },
  comprehensive: {
    text: '📘 **الدورة الشاملة – 249 ريال** (بدل 399 ريال)\n\n✅ شرح مفصل لجميع الأقسام\n✅ Grammar + Reading + Listening + Structure\n✅ نماذج سابقة للمراجعة\n✅ خطط مرنة: 5 / 10 / 30 يوم\n✅ تحديثات مدى الحياة\n\n🎯 مثالية لبناء أساس متين خطوة بخطوة\n\n🔗 <a href="course.html?slug=comprehensive">اقرأ التفاصيل الكاملة</a>',
    quick: ['كيف أشتري؟', 'الدورة المميزة', 'الدورة المكثفة']
  },
  prices: {
    text: '💰 **أسعار دورات STEP 2026:**\n\n💎 الدورة المميزة: **349 ريال** (بدل 749)\n❤️‍🔥 الدورة المكثفة: **299 ريال** (بدل 549)\n📘 الدورة الشاملة: **249 ريال** (بدل 399)\n\n🔥 جميع الأسعار مخفضة لفترة محدودة!\n\nيمكنك أيضًا شراء أكثر من دورة معًا من السلة.',
    quick: ['كيف أشتري؟', 'عرض الدورات', 'التواصل عبر تيليجرام']
  },
  how_to_buy: {
    text: '🛒 **خطوات الشراء بسهولة:**\n\n1️⃣ تصفح الدورات واختر المناسبة\n2️⃣ اضغط "أضف للسلة"\n3️⃣ اذهب للسلة وراجع طلبك\n4️⃣ اضغط "إتمام الطلب"\n5️⃣ أدخل بياناتك\n6️⃣ أرسل الرسالة الجاهزة لتيليجرام\n7️⃣ انتظر تأكيد الاشتراك ✅\n\n🔗 <a href="courses.html">ابدأ التصفح الآن</a>',
    quick: ['عرض الدورات', 'الأسعار', 'التواصل عبر تيليجرام']
  },
  telegram: {
    text: '💬 **للتواصل والدعم:**\n\nحساب تيليجرام: @qiyas_2026_2030\n\nيمكنك التواصل معنا لـ:\n• تأكيد طلبك بعد الدفع\n• الاستفسار عن أي دورة\n• الحصول على رابط الوصول\n• أي استفسار آخر\n\n🔗 <a href="https://t.me/qiyas_2026_2030" target="_blank">فتح تيليجرام</a>',
    quick: ['كيف أشتري؟', 'عرض الدورات', 'الأسعار']
  },
  payment: {
    text: '💳 **طريقة الدفع:**\n\nالدفع يتم عبر التحويل البنكي.\n\nبعد إرسال طلبك عبر تيليجرام، سيتم تزويدك ببيانات الحساب البنكي لإتمام التحويل.\n\nثم يتم تأكيد اشتراكك وإرسال رابط الوصول خلال 24 ساعة كحد أقصى.',
    quick: ['كيف أشتري؟', 'التواصل عبر تيليجرام', 'عرض الدورات']
  },
  duration: {
    text: '⏱ **مدة الوصول للمحتوى:**\n\n💎 الدورة المميزة: **90 يوم**\n   + تحديثات مستمرة خلال المدة\n\n❤️‍🔥 الدورة المكثفة: **90 يوم**\n   مع التركيز على الإنجاز السريع\n\n📘 الدورة الشاملة: **مدى الحياة**\n   تحديثات دائمة بدون انتهاء',
    quick: ['عرض الدورات', 'الأسعار', 'كيف أشتري؟']
  },
  compare: {
    text: '⚖️ **مقارنة سريعة بين الدورات:**\n\n💎 المميزة → للراغب في أعلى درجة (+90)\n❤️‍🔥 المكثفة → للوقت الضيق قبل الاختبار\n📘 الشاملة → للتأسيس القوي والمرونة\n\n📊 انظر جدول المقارنة الكامل في الصفحة الرئيسية!',
    quick: ['الدورة المميزة', 'الدورة المكثفة', 'الدورة الشاملة']
  },
  step_info: {
    text: '📝 **عن اختبار STEP:**\n\nSTEP هو اختبار كفايات اللغة الإنجليزية الصادر عن المركز الوطني للتقويم والاعتماد الأكاديمي (قياس).\n\nيقيس مهارات:\n• القراءة (Reading)\n• القواعد (Grammar & Structure)\n• الاستماع (Listening)\n\nدرجة +90 تُعتبر ممتازة وتفتح أبوابًا كثيرة للقبول والتوظيف.',
    quick: ['عرض الدورات', 'الأسعار', 'كيف أبدأ؟']
  },
  default: {
    text: 'شكرًا لتواصلك! 😊\n\nيمكنني مساعدتك في:\n• معرفة تفاصيل الدورات\n• الأسعار والعروض\n• كيفية الشراء\n• طريقة الدفع\n• التواصل مع الدعم\n\nاختر من الأسئلة أدناه أو اكتب سؤالك بحرية!',
    quick: ['عرض الدورات', 'الأسعار', 'كيف أشتري؟', 'التواصل عبر تيليجرام']
  }
};

function detectIntent(text) {
  const lower = text.toLowerCase();
  const check = (kws) => kws.some(kw => lower.includes(kw));
  if (check(AI_KNOWLEDGE.greetings)) return 'greeting';
  if (lower.includes('مقارنة') || lower.includes('الفرق') || lower.includes('compare')) return 'compare';
  if (check(AI_KNOWLEDGE.premium_keywords)) return 'premium';
  if (check(AI_KNOWLEDGE.intensive_keywords)) return 'intensive';
  if (check(AI_KNOWLEDGE.comprehensive_keywords)) return 'comprehensive';
  if (check(AI_KNOWLEDGE.price_keywords)) return 'prices';
  if (check(AI_KNOWLEDGE.cart_keywords) || check(AI_KNOWLEDGE.start_keywords)) return 'how_to_buy';
  if (check(AI_KNOWLEDGE.telegram_keywords)) return 'telegram';
  if (check(AI_KNOWLEDGE.pay_keywords)) return 'payment';
  if (check(AI_KNOWLEDGE.duration_keywords)) return 'duration';
  if (check(AI_KNOWLEDGE.step_keywords)) return 'step_info';
  if (check(AI_KNOWLEDGE.update_keywords)) return 'premium';
  if (lower.includes('دورة') || lower.includes('برنامج') || lower.includes('كل')) return 'all_courses';
  return 'default';
}

/* ─── CHATBOT UI ─── */
let chatIsOpen = false;
let chatMessages = [];

function initAIChatbot() {
  const btn = document.getElementById('ai-chat-btn');
  const win = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('chatClose');
  const sendBtn = document.getElementById('chatSend');
  const input = document.getElementById('chatInput');
  if (!btn || !win) return;

  btn.addEventListener('click', toggleChat);
  closeBtn?.addEventListener('click', () => {
    chatIsOpen = false;
    win.classList.remove('open');
  });
  sendBtn?.addEventListener('click', sendChatMessage);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });

  // Auto-resize textarea
  input?.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });
}

function toggleChat() {
  const win = document.getElementById('ai-chat-window');
  const notif = document.querySelector('.chat-notification');
  if (!win) return;
  chatIsOpen = !chatIsOpen;
  win.classList.toggle('open', chatIsOpen);

  // Remove notification dot
  if (chatIsOpen && notif) notif.style.display = 'none';

  // Show welcome message on first open
  if (chatIsOpen && chatMessages.length === 0) {
    setTimeout(() => showTypingThenMessage('greeting'), 600);
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input?.value.trim();
  if (!text) return;
  input.value = '';
  input.style.height = 'auto';

  appendMessage('user', text);
  clearQuickReplies();

  const intent = detectIntent(text);
  setTimeout(() => showTypingThenMessage(intent), 500);
}

function showTypingThenMessage(intent) {
  const messagesEl = document.getElementById('chatMessages');
  if (!messagesEl) return;

  // Show typing indicator
  const typingId = 'typing_' + Date.now();
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot';
  typingEl.id = typingId;
  typingEl.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="msg-bubble" style="background:#f3f4f6; padding:10px 16px;">
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  messagesEl.appendChild(typingEl);
  scrollToBottom();

  const delay = 800 + Math.random() * 600;
  setTimeout(() => {
    const el = document.getElementById(typingId);
    if (el) el.remove();
    const response = AI_RESPONSES[intent] || AI_RESPONSES.default;
    appendMessage('bot', response.text);
    if (response.quick?.length) showQuickReplies(response.quick);
  }, delay);
}

function appendMessage(role, text) {
  const messagesEl = document.getElementById('chatMessages');
  if (!messagesEl) return;

  chatMessages.push({ role, text });
  const msgEl = document.createElement('div');
  msgEl.className = `chat-msg ${role}`;

  if (role === 'bot') {
    msgEl.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble">${text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>
    `;
  } else {
    msgEl.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
  }

  messagesEl.appendChild(msgEl);
  scrollToBottom();
}

function showQuickReplies(replies) {
  const el = document.getElementById('quickReplies');
  if (!el) return;
  el.innerHTML = replies.map(r =>
    `<button class="quick-reply" type="button">${r}</button>`
  ).join('');
  el.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      clearQuickReplies();
      appendMessage('user', text);
      const intent = detectIntent(text);
      setTimeout(() => showTypingThenMessage(intent), 400);
    });
  });
}

function clearQuickReplies() {
  const el = document.getElementById('quickReplies');
  if (el) el.innerHTML = '';
}

function scrollToBottom() {
  const el = document.getElementById('chatMessages');
  if (el) setTimeout(() => el.scrollTop = el.scrollHeight, 50);
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
