const WHATSAPP_NUMBER="201220597999";const DELIVERY_FEE=100;let currentLang="ar";let selectedProductId="smart";const products=[{id:"smart",oldPrice:799,price:550,image:"smart-wallet.jpg",featured:true,ar:{name:"Modo Smart Wallet",tag:"الأكثر طلباً",desc:"محفظة ذكية من جلد طبيعي بتتبع ضد الفقد وتنبيه عند الابتعاد. لا تحتوي على socket، ويتم تغيير البطارية يدويًا عند الحاجة.",features:["تتبع ضد الفقد", "تنبيه عند الخروج من النطاق", "صوت إنذار للعثور عليها", "جلد طبيعي فاخر", "لا تحتوي على socket للشحن", "تغيير البطارية يدويًا عند الحاجة", "التوصيل خلال يوم إلى يومين"]},en:{name:"Modo Smart Wallet",tag:"Best Seller",desc:"A smart natural leather wallet with anti-loss tracking and out-of-range alerts. It does not include a charging socket, and the battery is replaced manually when needed.",features:["Anti-loss tracking", "Out-of-range alert", "Alarm sound finder", "Premium natural leather", "No charging socket", "Battery is replaced manually when needed", "Delivery within 1–2 days"]}},{id:"classic",oldPrice:499,price:370,image:"classic-wallet.jpg",featured:false,ar:{name:"Modo Classic Wallet",tag:"كلاسيك",desc:"محفظة جلد طبيعي بتصميم بسيط وراقي للاستخدام اليومي.",features:["جلد طبيعي","تصميم كلاسيكي","خياطة عالية الجودة","مناسبة للاستخدام اليومي","شكل احترافي"]},en:{name:"Modo Classic Wallet",tag:"Classic",desc:"A clean premium natural leather wallet for everyday use.",features:["Natural leather","Classic design","Premium stitching","Daily use","Professional look"]}},{id:"premium",oldPrice:1999,price:1500,image:"premium-wallet.jpg",featured:false,ar:{name:"Modo Premium Wallet",tag:"فاخر",desc:"محفظة بريميوم ذكية أصغر حجمًا، مزودة بـ socket للشحن يأتي معها داخل الـ box، وبطارية تُشحن مرة كل 3 شهور تقريبًا، مع مغناطيس لإغلاق المحفظة. تُصنع حسب الطلب وتأتي في box فاخر.",features:["أصغر حجمًا من محفظتي Modo Smart وClassic", "مزودة بـ socket للشحن", "شحنة واحدة تكفي حتى 3 شهور تقريبًا", "مغناطيس لإغلاق المحفظة بإحكام", "تتبع ضد الفقد وتنبيه عند الابتعاد", "تشطيب فاخر وجلد طبيعي", "تُصنع حسب الطلب", "التوصيل خلال يومين إلى 4 أيام"]},en:{name:"Modo Premium Wallet",tag:"Premium",desc:"A smaller premium smart wallet with a charging socket included in the box, a battery that lasts around 3 months per charge, and a magnetic closure. Made to order and delivered in a premium box.",features:["Smaller than Modo Smart and Classic wallets", "Charging socket included", "One charge lasts up to around 3 months", "Magnetic wallet closure", "Anti-loss tracking and out-of-range alert", "Luxury natural leather finish", "Made to order", "Delivery within 2–4 days"]}}];const translations={"ar":{"topOffer":"عرض لفترة محدودة — شحن سريع والدفع عند الاستلام داخل مصر","navProducts":"المنتجات","navStory":"قصتنا","navHow":"طريقة الاستخدام","navReviews":"التقييمات","navOrder":"اطلب الآن","navCTA":"اطلب الآن","heroUrgency":"عرض لفترة محدودة","heroTitle":"محفظتك مش هتضيع تاني","heroSubtitle":"محفظة جلد طبيعي بتتبع ذكي، تنبيه عند الابتعاد، وصوت إنذار يساعدك تلاقيها بسهولة.","heroCTA":"اطلب الآن والدفع عند الاستلام","heroExplore":"شوف المنتجات","badgeCOD":"الدفع عند الاستلام","badgeFast":"شحن سريع","badgeCustomers":"+100 عميل في مصر","countdownTitle":"العرض ينتهي خلال","hours":"ساعة","minutes":"دقيقة","seconds":"ثانية","discountPill":"وفر 249 جنيه","proofRating":"تقييم العملاء","proofCustomers":"عميل في مصر","proofCOD":"الدفع عند الاستلام","proofDelivery":"توصيل سريع","seoBadge":"MODO Wallet Egypt","seoTitle":"المحفظة الذكية الأولى في مصر","seoP1":"لو بتدور على Modo Wallet أو Modo Smart Wallet، فـ MODO بتقدم لك محفظة ذكية من الجلد الطبيعي بتصميم فخم، مع تتبع بلوتوث يساعدك تلاقي محفظتك بسهولة لو ضاعت أو اتنسيت.","seoP2":"محفظة مودو مناسبة للي عايز ستايل شيك + أمان + استخدام عملي يومي، مع الدفع عند الاستلام داخل مصر.","seoTag1":"جلد طبيعي","seoTag2":"تتبع بلوتوث","seoTag3":"الدفع عند الاستلام","productsEyebrow":"اختار محفظتك","productsTitle":"منتجات Modo","productsSubtitle":"تصميم فاخر، جلد طبيعي، وتجربة طلب بسيطة وسريعة.","chooseProduct":"اختار واطلب الآن","howEyebrow":"للمحفظة الذكية","howTitle":"بتشتغل إزاي؟","howSubtitle":"ثلاث خطوات بسيطة تساعدك تحافظ على محفظتك.","step1Title":"حمّل التطبيق","step1Text":"استخدم تطبيق iSearching على iOS أو Android.","step2Title":"وصّل بالبلوتوث","step2Text":"اربط المحفظة بالموبايل بسهولة خلال ثواني.","step3Title":"استقبل التنبيهات","step3Text":"تنبيه عند الابتعاد وصوت إنذار للعثور عليها.","trustEyebrow":"ليه تختار Modo؟","trustTitle":"شراء آمن وتجربة مريحة","trustText":"كل التفاصيل مصممة لتخلي قرار الشراء أسهل: دفع عند الاستلام، دعم واتساب، وسياسة استبدال واضحة.","trust1Title":"ضمان جودة","trust1Text":"فحص المنتج قبل الشحن وتغليف مناسب.","trust2Title":"استبدال خلال 7 أيام","trust2Text":"في حالة وجود عيب تصنيع.","trust3Title":"الدفع عند الاستلام","trust3Text":"ادفع لما تستلم المنتج.","trust4Title":"دعم واتساب","trust4Text":"تواصل سريع قبل وبعد الطلب.","storyEyebrow":"قصتنا في Modo","storyTitle":"الموضوع مبدأش كـ بيزنس… بدأ من مشكلة حقيقية.","storyP1":"أنا يوسف رشوان، وفي يوم ضاعت محفظتي بكل اللي فيها… كروت، فلوس، وكل حاجة مهمة.","storyP2":"وقتها حسّيت قد إيه إحنا معتمدين على حاجة بسيطة زي المحفظة… ومع ذلك مفيش أمان حقيقي.","storyP3":"من هنا بدأت الفكرة: ليه مفيش محفظة تبقى شيك، وفي نفس الوقت تحميك وتخليك مطمن؟","storyF1":"تصميم فخم يليق بيك","storyF2":"جلد طبيعي بجودة عالية","storyF3":"تكنولوجيا ذكية تساعدك تلاقيها لو ضاعت","storyHighlight":"Modo مش مجرد محفظة… دي حماية يومية بتصميم فخم وجودة تعيش معاك.","storyNote":"إحنا مش شركة كبيرة مجهولة… إحنا ناس حقيقيين في مصر، وهدفنا نقدم منتج بجد يعيش معاك.","storyContactSmall":"لو عندك أي سؤال، تقدر تكلمني أنا شخصيًا","storyCTA":"اطلب دلوقتي والدفع عند الاستلام","reviewsEyebrow":"آراء العملاء","reviewsTitle":"تقييمات عملاء Modo","reviewsSubtitle":"آراء حقيقية من عملاء جربوا Modo وبيشاركوا تجربتهم.","writeReviewTitle":"اكتب تقييمك","reviewNameLabel":"الاسم","reviewCityLabel":"المدينة","reviewRatingLabel":"التقييم","reviewTextLabel":"رأيك في المنتج","reviewImageLabel":"صورة اختيارية للمنتج","submitReview":"نشر التقييم مباشرة","reviewStatusReady":"التقييم سيظهر مباشرة بعد النشر.","latestReviews":"أحدث التقييمات","review1":"الخامة شيك جداً والمحفظة حجمها مناسب. وصلت بسرعة والدفع كان عند الاستلام.","reviewer1":"أحمد من القاهرة","review2":"ميزة التنبيه ممتازة. أكتر حاجة عجبتني إن شكلها مش تقني زيادة، شكلها فخم.","reviewer2":"عمر من الجيزة","review3":"اشتريتها هدية وكانت ممتازة. التغليف والجلد شكلهم راقي.","reviewer3":"كريم من الإسكندرية","faqEyebrow":"أسئلة مهمة","faqTitle":"أسئلة عن Modo Wallet","faqSubtitle":"إجابات سريعة تساعدك تفهم المحفظة الذكية ومميزاتها قبل الطلب.","faq1Q":"ما هي محفظة Modo الذكية؟","faq1A":"هي محفظة جلد طبيعي بتتبع بلوتوث تساعدك تعرف مكانها وتخليها ترن لو كانت مخفية أو ضايعة.","faq2Q":"هل MODO Wallet بديل AirTag؟","faq2A":"هي ليست AirTag من Apple، لكنها تقدم فكرة عملية مشابهة للتتبع والتنبيه عبر تطبيق على الهاتف.","faq3Q":"هل يوجد دفع عند الاستلام في مصر؟","faq3A":"نعم، الدفع عند الاستلام متاح داخل مصر، مع شحن سريع حسب نوع المنتج والمنطقة.","faq4Q":"ما الفرق بين Modo Smart Wallet وPremium؟","faq4A":"البريميوم أصغر، فيها socket شحن يأتي معها داخل box فاخر، ومغناطيس للإغلاق، وتكون بالطلب.","orderEyebrow":"اطلب الآن","orderTitle":"املأ بياناتك وسيتم إرسال الطلب على واتساب","orderSubtitle":"سنراجع الطلب معك على واتساب. الدفع عند الاستلام متاح.","paymentTitle":"طرق الدفع","paymentCOD":"الدفع عند الاستلام","formProduct":"اختار المنتج","formName":"الاسم","formPhone":"رقم الموبايل","formAddress":"العنوان بالتفصيل","formPayment":"طريقة الدفع","formNotes":"ملاحظات اختيارية","submitOrder":"إرسال الطلب على واتساب","formNote":"بياناتك تستخدم لتأكيد الطلب فقط.","footerAbout":"محافظ جلد طبيعي بتصميم فاخر ومميزات ذكية.","footerContact":"التواصل","footerSocial":"تابعنا","copyright":"© 2026 Modo Smart Wallets. جميع الحقوق محفوظة.","stickyCTA":"اطلب الآن والدفع عند الاستلام","seoHeroLine":"المحفظة الذكية الأولى في مصر — MODO Wallet ضد الضياع"},"en":{"topOffer":"Limited-time offer — fast delivery and Cash on Delivery in Egypt","navProducts":"Products","navStory":"Our Story","navHow":"How it works","navReviews":"Reviews","navOrder":"Order Now","navCTA":"Order Now","heroUrgency":"Limited-time offer","heroTitle":"Never lose your wallet again","heroSubtitle":"Premium natural leather wallet with smart tracking, out-of-range alerts, and alarm sound finder.","heroCTA":"Order Now — Cash on Delivery","heroExplore":"View Products","badgeCOD":"Cash on Delivery","badgeFast":"Fast delivery","badgeCustomers":"+100 customers in Egypt","countdownTitle":"Offer ends in","hours":"Hours","minutes":"Minutes","seconds":"Seconds","discountPill":"Save 249 EGP","proofRating":"Customer rating","proofCustomers":"Customers in Egypt","proofCOD":"Cash on Delivery","proofDelivery":"Fast delivery","seoBadge":"MODO Wallet Egypt","seoTitle":"Egypt’s first smart wallet","seoP1":"If you are looking for a Modo Wallet or Modo Smart Wallet, MODO offers a premium natural leather smart wallet with Bluetooth tracking to help you find it easily if it is lost or left behind.","seoP2":"Modo Wallet is made for people who want premium style, daily protection, and practical everyday use, with Cash on Delivery available in Egypt.","seoTag1":"Natural leather","seoTag2":"Bluetooth tracking","seoTag3":"Cash on Delivery","productsEyebrow":"Choose your wallet","productsTitle":"Modo Products","productsSubtitle":"Premium design, natural leather, and easy ordering.","chooseProduct":"Choose & Order","howEyebrow":"For the smart wallet","howTitle":"How does it work?","howSubtitle":"Three simple steps to protect your wallet.","step1Title":"Download the app","step1Text":"Use iSearching app on iOS or Android.","step2Title":"Connect Bluetooth","step2Text":"Pair the wallet with your phone in seconds.","step3Title":"Get alerts","step3Text":"Out-of-range alerts and alarm sound to find it.","trustEyebrow":"Why choose Modo?","trustTitle":"Safe purchase and easy experience","trustText":"Everything is designed to make ordering easier: Cash on Delivery, WhatsApp support, and a clear replacement policy.","trust1Title":"Quality guarantee","trust1Text":"Product checked before shipping and packed properly.","trust2Title":"7-day replacement","trust2Text":"For manufacturing defects.","trust3Title":"Cash on Delivery","trust3Text":"Pay only when you receive your order.","trust4Title":"WhatsApp support","trust4Text":"Fast support before and after ordering.","storyEyebrow":"Our story at Modo","storyTitle":"It did not start as a business… it started from a real problem.","storyP1":"I am Youssef Rashwan. One day, I lost my wallet with everything inside: cards, money, and important items.","storyP2":"That moment made me realize how much we depend on something as simple as a wallet, yet it has no real protection.","storyP3":"That is where the idea started: why not create a wallet that looks premium and helps you feel secure?","storyF1":"Premium design that fits your style","storyF2":"High-quality natural leather","storyF3":"Smart technology to help you find it if lost","storyHighlight":"Modo is more than a wallet: daily protection, premium design, and long-lasting quality.","storyNote":"We are not a faceless big company. We are real people in Egypt, building a product that lives with you.","storyContactSmall":"If you have any question, you can call me personally","storyCTA":"Order now — Cash on Delivery","reviewsEyebrow":"Customer reviews","reviewsTitle":"Modo Customer Reviews","reviewsSubtitle":"Real reviews from customers who tried Modo and shared their experience.","writeReviewTitle":"Write your review","reviewNameLabel":"Name","reviewCityLabel":"City","reviewRatingLabel":"Rating","reviewTextLabel":"Your review","reviewImageLabel":"Optional product photo","submitReview":"Publish review live","reviewStatusReady":"Your review will appear live after publishing.","latestReviews":"Latest reviews","review1":"Very elegant wallet and great size. It arrived quickly and I paid on delivery.","reviewer1":"Ahmed from Cairo","review2":"The alert feature is excellent. It looks premium, not too techy.","reviewer2":"Omar from Giza","review3":"I bought it as a gift. The packaging and leather look premium.","reviewer3":"Karim from Alexandria","faqEyebrow":"Important questions","faqTitle":"Questions about Modo Wallet","faqSubtitle":"Quick answers to help you understand the smart wallet and its features before ordering.","faq1Q":"What is Modo Smart Wallet?","faq1A":"It is a natural leather wallet with Bluetooth tracking that helps you locate it and make it ring if it is hidden or lost.","faq2Q":"Is MODO Wallet an AirTag alternative?","faq2A":"It is not an Apple AirTag, but it offers a practical similar idea for tracking and alerts through a phone app.","faq3Q":"Is Cash on Delivery available in Egypt?","faq3A":"Yes, Cash on Delivery is available in Egypt, with fast delivery depending on the product and area.","faq4Q":"What is the difference between Modo Smart Wallet and Premium?","faq4A":"The Premium version is smaller, includes a charging socket in a premium box, has magnetic closure, and is made to order.","orderEyebrow":"Order now","orderTitle":"Fill your details and send the order on WhatsApp","orderSubtitle":"We will confirm your order on WhatsApp. Cash on Delivery is available.","paymentTitle":"Payment methods","paymentCOD":"Cash on Delivery","formProduct":"Choose product","formName":"Name","formPhone":"Phone number","formAddress":"Detailed address","formPayment":"Payment method","formNotes":"Optional notes","submitOrder":"Send order on WhatsApp","formNote":"Your details are used only to confirm the order.","footerAbout":"Premium leather wallets with smart features.","footerContact":"Contact","footerSocial":"Follow us","copyright":"© 2026 Modo Smart Wallets. All rights reserved.","stickyCTA":"Order Now — Cash on Delivery","seoHeroLine":"Egypt’s first smart wallet — MODO Wallet anti-loss protection"}};function t(k){return translations[currentLang][k]||k}function money(v){return `${v.toLocaleString()} EGP`}function applyTranslations(){
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("en", currentLang === "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = t(key);
    }
  });

  const placeholderMap = {
    reviewName: currentLang === "ar" ? "مثال: أحمد" : "Example: Ahmed",
    reviewCity: currentLang === "ar" ? "مثال: القاهرة" : "Example: Cairo",
    reviewText: currentLang === "ar" ? "اكتب تقييمك هنا..." : "Write your review here...",
    customerName: currentLang === "ar" ? "اكتب اسمك بالكامل" : "Write your full name",
    customerPhone: currentLang === "ar" ? "01XXXXXXXXX" : "01XXXXXXXXX",
    customerAddress: currentLang === "ar" ? "المحافظة، المنطقة، الشارع، رقم العمارة" : "Governorate, area, street, building number",
    customerNotes: currentLang === "ar" ? "أي ملاحظات للتوصيل؟" : "Any delivery notes?"
  };

  Object.entries(placeholderMap).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (input) input.placeholder = value;
  });

  document.querySelectorAll("#reviewRating option").forEach(option => {
    const value = option.value;
    option.textContent = "★".repeat(Number(value)) + "☆".repeat(5 - Number(value)) + " " + value;
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.textContent = currentLang === "ar" ? "English" : "العربية";

  renderProducts();
  renderProductOptions();
  updateSelectedProduct();
}function renderProducts(){const grid=document.getElementById("productsGrid");if(!grid)return;grid.innerHTML="";products.forEach(p=>{const d=p[currentLang];const card=document.createElement("article");card.className=`product-card reveal ${p.featured?"featured":""}`;card.innerHTML=`<span class="product-tag">${d.tag}</span><img src="${p.image}" alt="${d.name}"><h3>${d.name}</h3><p>${d.desc}</p><ul class="product-features">${d.features.map(f=>`<li>${f}</li>`).join("")}</ul><div class="price-row"><span class="old-price">${money(p.oldPrice)}</span><span class="new-price">${money(p.price)}</span></div><div class="product-actions"><button class="btn btn-primary choose-btn" type="button" onclick="chooseProduct('${p.id}')">${t("chooseProduct")}</button></div>`;grid.appendChild(card)});setupReveal()}function renderProductOptions(){const s=document.getElementById("productSelect");if(!s)return;s.innerHTML=products.map(p=>`<option value="${p.id}">${p[currentLang].name} — ${money(p.price)}</option>`).join("");s.value=selectedProductId}function chooseProduct(id){selectedProductId=id;renderProductOptions();updateSelectedProduct();document.getElementById("order").scrollIntoView({behavior:"smooth"})}function updateSelectedProduct(){const p=products.find(i=>i.id===selectedProductId);const img=document.getElementById("selectedProductImg");const name=document.getElementById("selectedProductName");const oldP=document.getElementById("selectedOldPrice");const price=document.getElementById("selectedPrice");if(!p||!img||!name||!oldP||!price)return;img.src=p.image;name.textContent=p[currentLang].name;oldP.textContent=money(p.oldPrice);price.textContent=money(p.price)}function setupGallery(){const main=document.getElementById("mainGalleryImage");if(!main)return;document.querySelectorAll(".thumb").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));b.classList.add("active");main.src=b.dataset.img}))}function setupCountdown(){
  const key = "modoOfferEndTimeV2";
  const duration = 24 * 60 * 60 * 1000;
  let end = Number(localStorage.getItem(key));

  if (!end || Number.isNaN(end)) {
    end = Date.now() + duration;
    localStorage.setItem(key, String(end));
  }

  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const update = () => {
    const remaining = Math.max(0, end - Date.now());
    const hours = Math.floor(remaining / 36e5);
    const minutes = Math.floor((remaining / 6e4) % 60);
    const seconds = Math.floor((remaining / 1e3) % 60);

    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  };

  update();
  setInterval(update, 1000);
}function setupReveal(){const els=document.querySelectorAll(".reveal");const reveal=()=>els.forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight-70)e.classList.add("active")});reveal();window.addEventListener("scroll",reveal)}function setupMenu(){const btn=document.getElementById("menuBtn"),links=document.getElementById("navLinks");if(!btn||!links)return;btn.addEventListener("click",()=>links.classList.toggle("open"));links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")))}function setupOrderForm(){const select=document.getElementById("productSelect");const orderForm=document.getElementById("orderForm");if(!select||!orderForm)return;select.addEventListener("change",()=>{selectedProductId=select.value;updateSelectedProduct()});orderForm.addEventListener("submit",e=>{e.preventDefault();const p=products.find(i=>i.id===selectedProductId);const name=document.getElementById("customerName").value.trim(),phone=document.getElementById("customerPhone").value.trim(),address=document.getElementById("customerAddress").value.trim(),payment=document.getElementById("paymentMethod").value,notes=document.getElementById("customerNotes").value.trim()||"-",total=p.price+DELIVERY_FEE;const msg=`🛍️ New Modo Order%0A%0AProduct: ${p[currentLang].name}%0APrice: ${p.price} EGP%0ADelivery: ${DELIVERY_FEE} EGP%0ATotal: ${total} EGP%0A%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0APayment: ${payment}%0ANotes: ${notes}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank")})}document.getElementById("langToggle").addEventListener("click",()=>{currentLang=currentLang==="ar"?"en":"ar";applyTranslations()});renderProducts();renderProductOptions();applyTranslations();setupGallery();setupCountdown();setupReveal();setupMenu();setupOrderForm();

/* ===== Live Review System: Firebase Firestore + Cloudinary image upload =====
   Replace these placeholders to make reviews live for everyone.
   If you leave them unchanged, it will work as a local demo on your browser only.
*/
const firebaseConfigLiveReviews = {
  apiKey: "AIzaSyDJF6D0MrFt8TsXsMcTpu8EqVp0deRh9aQ",
  authDomain: "modo-smart-wallets.firebaseapp.com",
  projectId: "modo-smart-wallets",
  storageBucket: "modo-smart-wallets.firebasestorage.app",
  messagingSenderId: "229690155538",
  appId: "1:229690155538:web:4ec04258e5880485892ecb",
  measurementId: "G-H402HQ36YF"
};

const CLOUDINARY_CLOUD_NAME = "di3fqqtn1";
const CLOUDINARY_UPLOAD_PRESET = "modosmartwallets";

let liveReviewsDb = null;
let liveReviewsEnabled = false;

const defaultReviews = [
  { name: "أحمد", city: "القاهرة", rating: 5, text: "الخامة شيك جداً والمحفظة حجمها مناسب. وصلت بسرعة والدفع كان عند الاستلام.", imageUrl: "", createdAtText: "اليوم" },
  { name: "عمر", city: "الجيزة", rating: 5, text: "ميزة التنبيه ممتازة. شكلها فخم ومش تقني زيادة.", imageUrl: "", createdAtText: "أمس" },
  { name: "كريم", city: "الإسكندرية", rating: 5, text: "اشتريتها هدية وكانت ممتازة. التغليف والجلد شكلهم راقي.", imageUrl: "", createdAtText: "هذا الأسبوع" }
];

function reviewIsConfigured(value) {
  return value && !value.includes("PUT_YOUR");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = String(text || "");
  return div.innerHTML;
}

function starsFromRating(rating) {
  const value = Math.max(1, Math.min(5, Number(rating) || 5));
  return "★".repeat(value) + "☆".repeat(5 - value);
}

function getLocalReviews() {
  const saved = JSON.parse(localStorage.getItem("modoLocalReviews") || "[]");
  return [...saved, ...defaultReviews];
}

function saveLocalReview(review) {
  const saved = JSON.parse(localStorage.getItem("modoLocalReviews") || "[]");
  saved.unshift(review);
  localStorage.setItem("modoLocalReviews", JSON.stringify(saved.slice(0, 30)));
  renderLiveReviews(getLocalReviews());
}

function renderLiveReviews(reviews) {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;

  const list = reviews.slice(0, 30);
  grid.innerHTML = list.map(review => {
    const name = escapeHtml(review.name);
    const city = escapeHtml(review.city);
    const text = escapeHtml(review.text);
    const dateText = escapeHtml(review.createdAtText || "Live");
    const imageUrl = review.imageUrl ? escapeHtml(review.imageUrl) : "";

    return `
      <article class="review-card reveal">
        ${imageUrl ? `<img src="${imageUrl}" alt="Customer review photo" loading="lazy">` : ""}
        <div class="stars">${starsFromRating(review.rating)}</div>
        <p>${text}</p>
        <strong>${name}${city ? " — " + city : ""}</strong>
        <div class="review-meta">${dateText}</div>
      </article>
    `;
  }).join("");

  if (typeof setupReveal === "function") setupReveal();
}

async function uploadReviewImage(file) {
  const cloudReady = reviewIsConfigured(CLOUDINARY_CLOUD_NAME) && reviewIsConfigured(CLOUDINARY_UPLOAD_PRESET);
  if (!file || !cloudReady) return "";

  if (!file.type.startsWith("image/")) throw new Error("Please upload an image file.");
  if (file.size > 3 * 1024 * 1024) throw new Error("Image must be less than 3 MB.");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "modo-reviews");

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) throw new Error("Image upload failed.");
  const data = await response.json();
  return data.secure_url || "";
}

async function initLiveReviews() {
  const badge = document.getElementById("reviewModeBadge");
  const firebaseReady =
    reviewIsConfigured(firebaseConfigLiveReviews.apiKey) &&
    reviewIsConfigured(firebaseConfigLiveReviews.authDomain) &&
    reviewIsConfigured(firebaseConfigLiveReviews.projectId) &&
    reviewIsConfigured(firebaseConfigLiveReviews.appId);

  if (!firebaseReady) {
    if (badge) badge.textContent = "Local Demo";
    renderLiveReviews(getLocalReviews());
    return;
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    const firestore = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");

    const app = initializeApp(firebaseConfigLiveReviews);
    liveReviewsDb = firestore.getFirestore(app);
    liveReviewsEnabled = true;
    if (badge) badge.textContent = "Live";

    const reviewsQuery = firestore.query(
      firestore.collection(liveReviewsDb, "modoReviews"),
      firestore.orderBy("createdAt", "desc"),
      firestore.limit(30)
    );

    firestore.onSnapshot(reviewsQuery, snapshot => {
      const reviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      renderLiveReviews(reviews.length ? reviews : defaultReviews);
    }, error => {
      console.error("Firebase review listener error:", error);
      if (badge) badge.textContent = "Local Demo";
      liveReviewsEnabled = false;
      renderLiveReviews(getLocalReviews());
    });

    window.modoFirestore = firestore;
  } catch (error) {
    console.error("Firebase init error:", error);
    if (badge) badge.textContent = "Local Demo";
    renderLiveReviews(getLocalReviews());
  }
}

function setupLiveReviewForm() {
  const form = document.getElementById("reviewForm");
  if (!form) return;

  const status = document.getElementById("reviewStatus");
  const submitBtn = document.getElementById("reviewSubmitBtn");

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const city = document.getElementById("reviewCity").value.trim();
    const rating = Number(document.getElementById("reviewRating").value);
    const text = document.getElementById("reviewText").value.trim();
    const imageFile = document.getElementById("reviewImage").files[0];

    if (name.length < 2 || city.length < 2 || text.length < 4) {
      status.textContent = "من فضلك اكتب بيانات صحيحة.";
      return;
    }

    submitBtn.disabled = true;
    status.textContent = "جاري نشر التقييم...";

    try {
      const imageUrl = await uploadReviewImage(imageFile);
      const review = {
        name,
        city,
        rating,
        text,
        imageUrl,
        createdAtText: new Date().toLocaleDateString("ar-EG")
      };

      if (liveReviewsEnabled && liveReviewsDb && window.modoFirestore) {
        await window.modoFirestore.addDoc(window.modoFirestore.collection(liveReviewsDb, "modoReviews"), {
          ...review,
          createdAt: window.modoFirestore.serverTimestamp()
        });
      } else {
        saveLocalReview(review);
      }

      form.reset();
      status.textContent = "تم نشر تقييمك بنجاح.";
    } catch (error) {
      console.error(error);
      status.textContent = "حدث خطأ. حاول مرة أخرى.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

setupLiveReviewForm();
initLiveReviews();

// Safe global function for product buttons when using type="module"
window.chooseProduct = function chooseProduct(id) {
  selectedProductId = id;
  renderProductOptions();
  updateSelectedProduct();

  const orderSection = document.getElementById("order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/* ===== MODO UX refinements override ===== */
translations.ar.productsTitle = "اختار محفظتك";
translations.en.productsTitle = "Choose Your Wallet";
translations.ar.productsSubtitle = "اختار الموديل المناسب ليك واطلبه فورًا داخل مصر.";
translations.en.productsSubtitle = "Choose the model that fits you and order it instantly in Egypt.";
translations.ar.chooseProduct = "اطلب الآن";
translations.en.chooseProduct = "Order Now";
translations.ar.viewAllReviews = "عرض كل التقييمات";
translations.en.viewAllReviews = "View all reviews";
translations.ar.showLessReviews = "عرض أقل";
translations.en.showLessReviews = "Show less";
translations.ar.seoInfoTitle1 = "المادة";
translations.en.seoInfoTitle1 = "Material";
translations.ar.seoInfoText1 = "جلد طبيعي فاخر بتشطيب أنيق للاستخدام اليومي.";
translations.en.seoInfoText1 = "Premium natural leather with an elegant finish for daily use.";
translations.ar.seoInfoTitle2 = "الميزة الذكية";
translations.en.seoInfoTitle2 = "Smart feature";
translations.ar.seoInfoText2 = "تتبع بلوتوث + صوت إنذار + تنبيه عند الابتعاد.";
translations.en.seoInfoText2 = "Bluetooth tracking + alarm sound + out-of-range alerts.";
translations.ar.seoInfoTitle3 = "الطلب داخل مصر";
translations.en.seoInfoTitle3 = "Ordering in Egypt";
translations.ar.seoInfoText3 = "الدفع عند الاستلام، شحن سريع، ودعم واتساب مباشر.";
translations.en.seoInfoText3 = "Cash on Delivery, fast shipping, and direct WhatsApp support.";

let reviewsExpanded = false;
let latestReviewsData = [];
function updateReviewsToggle(){
  const btn = document.getElementById("reviewsToggleBtn");
  const grid = document.getElementById("reviewsGrid");
  if(!btn || !grid) return;
  const hasMore = latestReviewsData.length > 3;
  btn.style.display = hasMore ? "inline-flex" : "none";
  btn.textContent = hasMore ? (reviewsExpanded ? t("showLessReviews") : t("viewAllReviews")) : "";
  grid.classList.toggle("compact", !reviewsExpanded && hasMore);
}

renderProducts = function(){
  const grid=document.getElementById("productsGrid");
  if(!grid) return;
  grid.innerHTML="";
  products.forEach(p=>{
    const d=p[currentLang];
    const card=document.createElement("article");
    card.className=`product-card reveal ${p.featured?"featured":""}`;
    card.innerHTML=`<span class="product-tag">${d.tag}</span><img src="${p.image}" alt="${d.name}"><h3>${d.name}</h3><p>${d.desc}</p><ul class="product-features">${d.features.map(f=>`<li>${f}</li>`).join("")}</ul><div class="price-row"><div class="price-group"><span class="new-price">${money(p.price)}</span><span class="old-price">${money(p.oldPrice)}</span></div></div><div class="product-actions"><button class="btn btn-primary choose-btn" type="button" onclick="chooseProduct('${p.id}')">${t("chooseProduct")}</button></div>`;
    grid.appendChild(card)
  });
  if(typeof setupReveal === "function") setupReveal();
};

renderLiveReviews = function(reviews){
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;
  latestReviewsData = Array.isArray(reviews) ? reviews.slice(0,30) : [];
  grid.innerHTML = latestReviewsData.map(review => {
    const name = escapeHtml(review.name);
    const city = escapeHtml(review.city);
    const text = escapeHtml(review.text);
    const dateText = escapeHtml(review.createdAtText || "Live");
    const imageUrl = review.imageUrl ? escapeHtml(review.imageUrl) : "";
    return `
      <article class="review-card reveal">
        ${imageUrl ? `<img src="${imageUrl}" alt="Customer review photo" loading="lazy">` : ""}
        <div class="stars">${starsFromRating(review.rating)}</div>
        <p>${text}</p>
        <strong>${name}${city ? " — " + city : ""}</strong>
        <div class="review-meta">${dateText}</div>
      </article>
    `;
  }).join("");
  updateReviewsToggle();
  if (typeof setupReveal === "function") setupReveal();
};

const reviewsToggleBtn = document.getElementById("reviewsToggleBtn");
if(reviewsToggleBtn){
  reviewsToggleBtn.addEventListener("click", ()=>{
    reviewsExpanded = !reviewsExpanded;
    updateReviewsToggle();
  });
}

applyTranslations();
renderProducts();
renderLiveReviews(getLocalReviews());
updateReviewsToggle();



/* ===== FAQ separate page translation keys ===== */
translations.ar.navFAQ = "الأسئلة";
translations.en.navFAQ = "FAQ";
translations.ar.faqPageTitle = "كل الأسئلة عن Modo Wallet";
translations.en.faqPageTitle = "All Questions About Modo Wallet";
translations.ar.faqPageSubtitle = "كل ما تحتاج معرفته قبل الطلب: طريقة الاستخدام، الشحن، الدفع، والفرق بين الموديلات.";
translations.en.faqPageSubtitle = "Everything you need before ordering: usage, delivery, payment, and product differences.";
translations.ar.faqCtaTitle = "جاهز تطلب Modo؟";
translations.en.faqCtaTitle = "Ready to order Modo?";
translations.ar.faqCtaText = "اطلب الآن وسيتم تأكيد تفاصيل الطلب معك على واتساب. الدفع عند الاستلام متاح داخل مصر.";
translations.en.faqCtaText = "Order now and we will confirm your order on WhatsApp. Cash on Delivery is available in Egypt.";



/* ===== Story separate page translation keys ===== */
translations.ar.storyPageTitle = "قصة Modo Wallet";
translations.en.storyPageTitle = "The Modo Wallet Story";
translations.ar.storyPageSubtitle = "منتج بدأ من موقف حقيقي: محفظة ضاعت، واحتياج واضح لمحفظة شيك وآمنة في نفس الوقت.";
translations.en.storyPageSubtitle = "A product that started from a real moment: a lost wallet and the need for something stylish and safer.";
translations.ar.storyValue1 = "شكل أنيق يناسب الشغل، الجامعة، الخروج، والهدايا.";
translations.en.storyValue1 = "An elegant look for work, university, daily outings, and gifts.";
translations.ar.storyValue2 = "إحساس premium وخامة تعيش معاك في الاستخدام اليومي.";
translations.en.storyValue2 = "A premium feel and material made to handle everyday use.";
translations.ar.storyValue3 = "تتبع بلوتوث، صوت إنذار، وتنبيه عند الابتعاد.";
translations.en.storyValue3 = "Bluetooth tracking, alarm sound, and out-of-range alerts.";
translations.ar.storyCtaTitle = "جرّب Modo بنفسك";
translations.en.storyCtaTitle = "Try Modo yourself";
translations.ar.storyCtaText = "اطلب الآن والدفع عند الاستلام داخل مصر. ولو عندك أي سؤال، تواصل معنا على واتساب.";
translations.en.storyCtaText = "Order now with Cash on Delivery in Egypt. If you have any question, message us on WhatsApp.";



/* ===== Why page + cleaner reviews controls ===== */
translations.ar.navWhy = "ليه تختار مودو";
translations.en.navWhy = "Why Modo?";
translations.ar.whyPageTitle = "شراء آمن وتجربة مريحة";
translations.en.whyPageTitle = "Safe purchase and easy experience";
translations.ar.whyPageSubtitle = "كل التفاصيل مصممة عشان تطلب وانت مطمن: دفع عند الاستلام، دعم واتساب، وجودة واضحة.";
translations.en.whyPageSubtitle = "Everything is designed so you can order confidently: Cash on Delivery, WhatsApp support, and clear quality.";
translations.ar.whyCtaTitle = "اطلب Modo وأنت مطمن";
translations.en.whyCtaTitle = "Order Modo with confidence";
translations.ar.whyCtaText = "الدفع عند الاستلام متاح، وسيتم تأكيد الطلب معك على واتساب قبل الشحن.";
translations.en.whyCtaText = "Cash on Delivery is available, and your order will be confirmed on WhatsApp before shipping.";

function setupReviewCollapseControls() {
  const toggle = document.getElementById("writeReviewToggle");
  const form = document.getElementById("reviewForm");
  if (!toggle || !form) return;
  toggle.addEventListener("click", () => {
    const isOpen = form.classList.toggle("review-form-open");
    form.classList.toggle("review-form-collapsed", !isOpen);
    if (isOpen) form.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
setupReviewCollapseControls();

updateReviewsToggle = function() {
  const btn = document.getElementById("reviewsToggleBtn");
  const grid = document.getElementById("reviewsGrid");
  if(!btn || !grid) return;
  const hasMore = latestReviewsData.length > 1;
  btn.style.display = hasMore ? "inline-flex" : "none";
  btn.textContent = hasMore ? (reviewsExpanded ? t("showLessReviews") : t("viewAllReviews")) : "";
  grid.classList.toggle("compact-one", !reviewsExpanded && hasMore);
  grid.classList.toggle("compact", false);
};
if (typeof updateReviewsToggle === "function") updateReviewsToggle();
