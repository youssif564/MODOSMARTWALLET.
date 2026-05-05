const WHATSAPP_NUMBER="201220597999";const DELIVERY_FEE=100;let currentLang="ar";let selectedProductId="smart";const products=[{id:"smart",oldPrice:799,price:550,image:"smart-wallet.jpg",featured:true,ar:{name:"Modo Smart Wallet",tag:"الأكثر طلباً",desc:"محفظة ذكية من جلد طبيعي بتتبع ضد الفقد وتنبيه عند الابتعاد.",features:["تتبع ضد الفقد","تنبيه عند الخروج من النطاق","صوت إنذار للعثور عليها","جلد طبيعي فاخر","تصميم رفيع وأنيق"]},en:{name:"Modo Smart Wallet",tag:"Best Seller",desc:"A smart leather wallet with anti-loss tracking and out-of-range alerts.",features:["Anti-loss tracking","Out-of-range alert","Alarm sound finder","Premium natural leather","Slim elegant design"]}},{id:"classic",oldPrice:499,price:370,image:"classic-wallet.jpg",featured:false,ar:{name:"Modo Classic Wallet",tag:"كلاسيك",desc:"محفظة جلد طبيعي بتصميم بسيط وراقي للاستخدام اليومي.",features:["جلد طبيعي","تصميم كلاسيكي","خياطة عالية الجودة","مناسبة للاستخدام اليومي","شكل احترافي"]},en:{name:"Modo Classic Wallet",tag:"Classic",desc:"A clean premium natural leather wallet for everyday use.",features:["Natural leather","Classic design","Premium stitching","Daily use","Professional look"]}},{id:"premium",oldPrice:1999,price:1500,image:"premium-wallet.jpg",featured:false,ar:{name:"Modo Premium Wallet",tag:"فاخر",desc:"محفظة بريميوم ذكية بتشطيب فاخر ومميزات تتبع متقدمة.",features:["تشطيب فاخر","تتبع ضد الفقد","تنبيه عند الابتعاد","صوت إنذار","هدية مميزة"]},en:{name:"Modo Premium Wallet",tag:"Premium",desc:"A premium smart wallet with luxury finishing and advanced tracking features.",features:["Luxury finish","Anti-loss tracking","Out-of-range alert","Alarm finder","Great gift"]}}];const translations={ar:{topOffer:"عرض لفترة محدودة — شحن سريع والدفع عند الاستلام داخل مصر",navProducts:"المنتجات",navHow:"طريقة الاستخدام",navReviews:"التقييمات",navOrder:"اطلب الآن",navCTA:"اطلب الآن",heroUrgency:"عرض لفترة محدودة",heroTitle:"محفظتك مش هتضيع تاني",heroSubtitle:"محفظة جلد طبيعي بتتبع ذكي، تنبيه عند الابتعاد، وصوت إنذار يساعدك تلاقيها بسهولة.",heroCTA:"اطلب الآن والدفع عند الاستلام",heroExplore:"شوف المنتجات",badgeCOD:"الدفع عند الاستلام",badgeFast:"شحن سريع",badgeCustomers:"+100 عميل في مصر",countdownTitle:"العرض ينتهي خلال",hours:"ساعة",minutes:"دقيقة",seconds:"ثانية",discountPill:"وفر 249 جنيه",proofRating:"تقييم العملاء",proofCustomers:"عميل في مصر",proofCOD:"الدفع عند الاستلام",proofDelivery:"توصيل سريع",productsEyebrow:"اختار محفظتك",productsTitle:"منتجات Modo",productsSubtitle:"تصميم فاخر، جلد طبيعي، وتجربة طلب بسيطة وسريعة.",chooseProduct:"اختار واطلب الآن",howEyebrow:"للمحفظة الذكية",howTitle:"بتشتغل إزاي؟",howSubtitle:"ثلاث خطوات بسيطة تساعدك تحافظ على محفظتك.",step1Title:"حمّل التطبيق",step1Text:"استخدم تطبيق iSearching على iOS أو Android.",step2Title:"وصّل بالبلوتوث",step2Text:"اربط المحفظة بالموبايل بسهولة خلال ثواني.",step3Title:"استقبل التنبيهات",step3Text:"تنبيه عند الابتعاد وصوت إنذار للعثور عليها.",trustEyebrow:"ليه تختار Modo؟",trustTitle:"شراء آمن وتجربة مريحة",trustText:"كل التفاصيل مصممة لتخلي قرار الشراء أسهل: دفع عند الاستلام، دعم واتساب، وسياسة استبدال واضحة.",trust1Title:"ضمان جودة",trust1Text:"فحص المنتج قبل الشحن وتغليف مناسب.",trust2Title:"استبدال خلال 7 أيام",trust2Text:"في حالة وجود عيب تصنيع.",trust3Title:"الدفع عند الاستلام",trust3Text:"ادفع لما تستلم المنتج.",trust4Title:"دعم واتساب",trust4Text:"تواصل سريع قبل وبعد الطلب.",reviewsEyebrow:"آراء العملاء",reviewsTitle:"عملاء وثقوا في Modo",reviewsSubtitle:"تقييمات حقيقية الشكل يمكنك تعديلها لاحقاً بتقييمات عملائك الفعلية.",review1:"الخامة شيك جداً والمحفظة حجمها مناسب. وصلت بسرعة والدفع كان عند الاستلام.",reviewer1:"أحمد من القاهرة",review2:"ميزة التنبيه ممتازة. أكتر حاجة عجبتني إن شكلها مش تقني زيادة، شكلها فخم.",reviewer2:"عمر من الجيزة",review3:"اشتريتها هدية وكانت ممتازة. التغليف والجلد شكلهم راقي.",reviewer3:"كريم من الإسكندرية",orderEyebrow:"اطلب الآن",orderTitle:"املأ بياناتك وسيتم إرسال الطلب على واتساب",orderSubtitle:"سنراجع الطلب معك على واتساب. الدفع عند الاستلام متاح.",paymentTitle:"طرق الدفع",paymentCOD:"الدفع عند الاستلام",formProduct:"اختار المنتج",formName:"الاسم",formPhone:"رقم الموبايل",formAddress:"العنوان بالتفصيل",formPayment:"طريقة الدفع",formNotes:"ملاحظات اختيارية",submitOrder:"إرسال الطلب على واتساب",formNote:"بياناتك تستخدم لتأكيد الطلب فقط.",footerAbout:"محافظ جلد طبيعي بتصميم فاخر ومميزات ذكية.",footerContact:"التواصل",footerSocial:"تابعنا",copyright:"© 2026 Modo Smart Wallets. جميع الحقوق محفوظة.",stickyCTA:"اطلب الآن والدفع عند الاستلام"},en:{topOffer:"Limited-time offer — fast delivery and Cash on Delivery in Egypt",navProducts:"Products",navHow:"How it works",navReviews:"Reviews",navOrder:"Order Now",navCTA:"Order Now",heroUrgency:"Limited-time offer",heroTitle:"Never lose your wallet again",heroSubtitle:"Premium natural leather wallet with smart tracking, out-of-range alerts, and alarm sound finder.",heroCTA:"Order Now — Cash on Delivery",heroExplore:"View Products",badgeCOD:"Cash on Delivery",badgeFast:"Fast delivery",badgeCustomers:"+100 customers in Egypt",countdownTitle:"Offer ends in",hours:"Hours",minutes:"Minutes",seconds:"Seconds",discountPill:"Save 249 EGP",proofRating:"Customer rating",proofCustomers:"Customers in Egypt",proofCOD:"Cash on Delivery",proofDelivery:"Fast delivery",productsEyebrow:"Choose your wallet",productsTitle:"Modo Products",productsSubtitle:"Premium design, natural leather, and easy ordering.",chooseProduct:"Choose & Order",howEyebrow:"For smart wallet",howTitle:"How does it work?",howSubtitle:"Three simple steps to protect your wallet.",step1Title:"Download the app",step1Text:"Use iSearching app on iOS or Android.",step2Title:"Connect Bluetooth",step2Text:"Pair the wallet with your phone in seconds.",step3Title:"Get alerts",step3Text:"Out-of-range alerts and alarm sound to find it.",trustEyebrow:"Why Modo?",trustTitle:"Safe purchase and easy experience",trustText:"Everything is designed to make ordering easier: Cash on Delivery, WhatsApp support, and clear replacement policy.",trust1Title:"Quality guarantee",trust1Text:"Product checked before shipping.",trust2Title:"7-day replacement",trust2Text:"For manufacturing defects.",trust3Title:"Cash on Delivery",trust3Text:"Pay only when you receive.",trust4Title:"WhatsApp support",trust4Text:"Fast support before and after order.",reviewsEyebrow:"Customer reviews",reviewsTitle:"Customers trust Modo",reviewsSubtitle:"Sample reviews you can replace later with real customer feedback.",review1:"Very elegant wallet and great size. It arrived quickly and I paid on delivery.",reviewer1:"Ahmed from Cairo",review2:"The alert feature is excellent. It looks premium, not too techy.",reviewer2:"Omar from Giza",review3:"I bought it as a gift. The packaging and leather look premium.",reviewer3:"Karim from Alexandria",orderEyebrow:"Order now",orderTitle:"Fill your details and send the order on WhatsApp",orderSubtitle:"We will confirm your order on WhatsApp. Cash on Delivery is available.",paymentTitle:"Payment methods",paymentCOD:"Cash on Delivery",formProduct:"Choose product",formName:"Name",formPhone:"Phone number",formAddress:"Detailed address",formPayment:"Payment method",formNotes:"Optional notes",submitOrder:"Send order on WhatsApp",formNote:"Your details are used only to confirm the order.",footerAbout:"Premium leather wallets with smart features.",footerContact:"Contact",footerSocial:"Follow us",copyright:"© 2026 Modo Smart Wallets. All rights reserved.",stickyCTA:"Order Now — Cash on Delivery"}};function t(k){return translations[currentLang][k]||k}function money(v){return `${v.toLocaleString()} EGP`}function applyTranslations(){document.documentElement.lang=currentLang;document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";document.body.classList.toggle("en",currentLang==="en");document.querySelectorAll("[data-i18n]").forEach(e=>{const k=e.getAttribute("data-i18n");if(translations[currentLang][k])e.textContent=t(k)});document.getElementById("langToggle").textContent=currentLang==="ar"?"English":"العربية";renderProducts();renderProductOptions();updateSelectedProduct()}function renderProducts(){const grid=document.getElementById("productsGrid");grid.innerHTML="";products.forEach(p=>{const d=p[currentLang];const card=document.createElement("article");card.className=`product-card reveal ${p.featured?"featured":""}`;card.innerHTML=`<span class="product-tag">${d.tag}</span><img src="${p.image}" alt="${d.name}"><h3>${d.name}</h3><p>${d.desc}</p><ul class="product-features">${d.features.map(f=>`<li>${f}</li>`).join("")}</ul><div class="price-row"><span class="old-price">${money(p.oldPrice)}</span><span class="new-price">${money(p.price)}</span></div><div class="product-actions"><button class="btn btn-primary choose-btn" type="button" onclick="chooseProduct('${p.id}')">${t("chooseProduct")}</button></div>`;grid.appendChild(card)});setupReveal()}function renderProductOptions(){const s=document.getElementById("productSelect");if(!s)return;s.innerHTML=products.map(p=>`<option value="${p.id}">${p[currentLang].name} — ${money(p.price)}</option>`).join("");s.value=selectedProductId}function chooseProduct(id){selectedProductId=id;renderProductOptions();updateSelectedProduct();document.getElementById("order").scrollIntoView({behavior:"smooth"})}function updateSelectedProduct(){const p=products.find(i=>i.id===selectedProductId);if(!p)return;document.getElementById("selectedProductImg").src=p.image;document.getElementById("selectedProductName").textContent=p[currentLang].name;document.getElementById("selectedOldPrice").textContent=money(p.oldPrice);document.getElementById("selectedPrice").textContent=money(p.price)}function setupGallery(){const main=document.getElementById("mainGalleryImage");document.querySelectorAll(".thumb").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));b.classList.add("active");main.src=b.dataset.img}))}function setupCountdown(){const key="modoOfferEnd";let end=Number(localStorage.getItem(key));if(!end||end<Date.now()){end=Date.now()+24*60*60*1000;localStorage.setItem(key,String(end))}const update=()=>{const diff=Math.max(0,end-Date.now());document.getElementById("hours").textContent=String(Math.floor(diff/36e5)).padStart(2,"0");document.getElementById("minutes").textContent=String(Math.floor(diff/6e4%60)).padStart(2,"0");document.getElementById("seconds").textContent=String(Math.floor(diff/1e3%60)).padStart(2,"0");if(diff<=0){localStorage.removeItem(key);setupCountdown()}};update();setInterval(update,1000)}function setupReveal(){const els=document.querySelectorAll(".reveal");const reveal=()=>els.forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight-70)e.classList.add("active")});reveal();window.addEventListener("scroll",reveal)}function setupMenu(){const btn=document.getElementById("menuBtn"),links=document.getElementById("navLinks");btn.addEventListener("click",()=>links.classList.toggle("open"));links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")))}function setupOrderForm(){const select=document.getElementById("productSelect");select.addEventListener("change",()=>{selectedProductId=select.value;updateSelectedProduct()});document.getElementById("orderForm").addEventListener("submit",e=>{e.preventDefault();const p=products.find(i=>i.id===selectedProductId);const name=document.getElementById("customerName").value.trim(),phone=document.getElementById("customerPhone").value.trim(),address=document.getElementById("customerAddress").value.trim(),payment=document.getElementById("paymentMethod").value,notes=document.getElementById("customerNotes").value.trim()||"-",total=p.price+DELIVERY_FEE;const msg=`🛍️ New Modo Order%0A%0AProduct: ${p[currentLang].name}%0APrice: ${p.price} EGP%0ADelivery: ${DELIVERY_FEE} EGP%0ATotal: ${total} EGP%0A%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0APayment: ${payment}%0ANotes: ${notes}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank")})}document.getElementById("langToggle").addEventListener("click",()=>{currentLang=currentLang==="ar"?"en":"ar";applyTranslations()});renderProducts();renderProductOptions();applyTranslations();setupGallery();setupCountdown();setupReveal();setupMenu();setupOrderForm();

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

setupLiveReviewForm();
initLiveReviews();
