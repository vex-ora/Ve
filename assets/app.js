const WA='212778878421';
const T={
n1:{ar:'الخدمات',en:'Services'},n2:{ar:'طريقة العمل',en:'Process'},n3:{ar:'نماذجنا',en:'Demos'},n4:{ar:'أسئلة شائعة',en:'FAQ'},n5:{ar:'تواصل',en:'Contact'},n6:{ar:'اطلب عرض سعر',en:'Get a Quote'},
ho:{ar:'وكالة رقمية عالمية',en:'Global Digital Agency'},
h1a:{ar:'المستقبل الرقمي',en:'Your Digital Future'},h1b:{ar:'يبدأ من هنا',en:'Starts Here'},
hs:{ar:'نصمم ونطور مواقع وتطبيقات ومتاجر إلكترونية وأنظمة إدارة لعملائنا حول العالم. استكشف نماذجنا التجريبية وتعرّف على جودة التنفيذ قبل أن تبدأ مشروعك.',en:'We design & develop websites, apps, e-commerce stores and business systems for clients worldwide. Explore our demo projects and see the quality before you start.'},
hc1:{ar:'ابدأ مشروعك على واتساب',en:'Start on WhatsApp'},hc2:{ar:'شاهد نماذجنا التجريبية',en:'View Demo Projects'},
t1:{ar:'10 نماذج تجريبية',en:'10 demo projects'},t2:{ar:'دعم ومتابعة',en:'Support & follow-up'},t3:{ar:'رد على طلبك',en:'Reply to your request'},t4:{ar:'التزام بالمواعيد',en:'Deadline commitment'},
so:{ar:'خدماتنا',en:'Services'},st:{ar:'كل ما تحتاجه لنجاحك الرقمي',en:'Everything Your Business Needs'},ss:{ar:'ست خدمات متكاملة تحت سقف واحد، بجودة عالمية وأسعار واضحة.',en:'Six integrated services under one roof — global quality, clear pricing.'},
s1t:{ar:'مواقع إلكترونية احترافية',en:'Professional Websites'},s1d:{ar:'مواقع سريعة وآمنة متوافقة مع جميع الأجهزة ومحركات البحث.',en:'Fast, secure, SEO-ready websites for every device.'},
s2t:{ar:'تطبيقات Android و iOS',en:'Android & iOS Apps'},s2d:{ar:'تطبيقات ذكية بتجربة استخدام عصرية وأداء عالٍ.',en:'Smart apps with modern UX and high performance.'},
s3t:{ar:'متاجر إلكترونية',en:'E-Commerce Stores'},s3d:{ar:'متاجر كاملة: دفع، طلبات، مخزون وتتبع — جاهزة للبيع من اليوم الأول.',en:'Complete stores: payments, orders, inventory & tracking.'},
s4t:{ar:'تصميم UI/UX',en:'UI/UX Design'},s4d:{ar:'هوية بصرية وتجربة استخدام تميّزك عن منافسيك.',en:'Visual identity & UX that set you apart.'},
s5t:{ar:'أنظمة إدارة مخصصة',en:'Custom Business Systems'},s5d:{ar:'لوحات تحكم للمشتركين والفواتير والتحصيل واللوجستيك حسب نشاطك.',en:'Dashboards for subscribers, billing, collections & logistics.'},
s6t:{ar:'دعم وصيانة',en:'Support & Maintenance'},s6d:{ar:'تحديثات ومراقبة ودعم مستمر بعد الإطلاق — لا نختفي بعد التسليم.',en:'Updates, monitoring & support after launch — we stay with you.'},
po:{ar:'منهجيتنا',en:'Method'},pt:{ar:'أربع خطوات من الفكرة إلى الإطلاق',en:'Four Steps From Idea to Launch'},
p1t:{ar:'نقاش مجاني',en:'Free Consultation'},p1d:{ar:'نفهم فكرتك ومتطلباتك بدون أي التزام.',en:'We understand your idea — no commitment.'},
p2t:{ar:'عرض سعر شفاف',en:'Transparent Quote'},p2d:{ar:'ثمن ومدة محدّدان كتابةً قبل البدء.',en:'Fixed price & timeline in writing.'},
p3t:{ar:'تنفيذ ومعاينات',en:'Build & Previews'},p3d:{ar:'تصميم وتطوير تتابعه خطوة بخطوة عبر معاينات مستمرة.',en:'Design & development with ongoing previews.'},
p4t:{ar:'إطلاق ودعم',en:'Launch & Support'},p4d:{ar:'نشر وتدريب ودعم مستمر بعد التسليم.',en:'Deployment, training & ongoing support.'},
wo:{ar:'معرض النماذج',en:'Demo Portfolio'},wt:{ar:'نماذج تجريبية — استكشفها بنفسك',en:'Demo Projects — Explore Them Yourself'},ws:{ar:'مجموعة من النماذج التجريبية التي توضح أسلوبنا في التصميم والتطوير. افتح أي نموذج للتعرف على التجربة.',en:'A collection of demo projects that shows our approach to design and development. Open any demo to explore the experience.'},
wl:{ar:'عرض النموذج',en:'View Demo'},demoBadge:{ar:'نموذج تجريبي',en:'DEMO'},
w1:{ar:'متجر إلكتروني عصري للمنتجات والخدمات الرقمية مع تجربة تصفح واضحة.',en:'A modern e-commerce concept for digital products and services with a clear browsing experience.'},w1g:{ar:'متجر إلكتروني',en:'E-Commerce'},w2:{ar:'نموذج منصة خدمات محلية بهوية واضحة وتجربة استخدام عملية.',en:'A local-services platform concept with a clear identity and practical user experience.'},w2g:{ar:'منصة خدمات',en:'Services Platform'},w3:{ar:'متجر عطور فاخر يركز على العرض البصري وتفاصيل المنتج.',en:'A luxury perfume store concept focused on visual presentation and product detail.'},w3g:{ar:'متجر فاخر',en:'Luxury Store'},w4:{ar:'نموذج رقمي بواجهة مرنة وحضور بصري قوي لمشروع معاصر.',en:'A flexible digital concept with a strong visual presence for a modern project.'},w4g:{ar:'تجربة رقمية',en:'Digital Experience'},w5:{ar:'نموذج واجهة تفاعلية بطابع حيوي ومسارات استخدام مباشرة.',en:'An interactive interface concept with an energetic feel and direct user journeys.'},w5g:{ar:'واجهة تفاعلية',en:'Interactive UI'},w6:{ar:'مساعد سفر ذكي يقدّم تجربة منظمة لاستكشاف الخيارات والرحلات.',en:'A smart travel companion concept designed to organize trip discovery.'},w6g:{ar:'تطبيق سفر',en:'Travel App'},w7:{ar:'نموذج متجر منتجات احترافي مع كتالوج مرتب وتجربة شراء سلسة.',en:'A professional product-store concept with an organized catalog and smooth buying flow.'},w7g:{ar:'متجر منتجات',en:'Product Store'},w8:{ar:'نموذج علامة رقمية مرنة يجمع بين البساطة والحضور المميز.',en:'A flexible digital-brand concept balancing simplicity with a distinctive presence.'},w8g:{ar:'علامة رقمية',en:'Digital Brand'},w9:{ar:'تجربة بث وتواصل اجتماعي بواجهة غنية بالتفاصيل والتفاعل.',en:'A streaming and social-communication concept with a detailed interactive interface.'},w9g:{ar:'منصة اجتماعية',en:'Social Platform'},w10:{ar:'نموذج متجر مستوحى من تجربة المقاهي والعلامات الاستهلاكية العالمية.',en:'A store concept inspired by global café and consumer-brand experiences.'},w10g:{ar:'تجربة متجر',en:'Store Experience'},go:{ar:'لماذا نحن',en:'Why Us'},gt:{ar:'ضمانات مكتوبة، لا وعود كلامية',en:'Written Guarantees, Not Verbal Promises'},
g1t:{ar:'تعديلات حتى الرضا التام',en:'Revisions Until Fully Satisfied'},g1d:{ar:'لا نسلّم المشروع إلا وأنت راضٍ عنه 100%.',en:'We don\'t deliver until you are 100% happy.'},
g2t:{ar:'سرية تامة',en:'Full Confidentiality'},g2d:{ar:'فكرتك وبياناتك وعملاؤك ملكك وحدك.',en:'Your idea, data and customers remain yours alone.'},
g3t:{ar:'دعم بعد التسليم',en:'Post-Delivery Support'},g3d:{ar:'فترة دعم مجانية ثم باقات صيانة اختيارية.',en:'Free support period, then optional maintenance plans.'},
ot:{ar:'عرض الإطلاق: لأول 3 عملاء فقط',en:'Launch Offer: First 3 Clients Only'},os:{ar:'نبني علاقات طويلة الأمد — احجز مكانك قبل انتهاء العرض.',en:'We build long-term relationships — claim your spot now.'},oc:{ar:'احجز العرض على واتساب',en:'Claim Offer on WhatsApp'},
ft:{ar:'أسئلة شائعة',en:'Frequently Asked Questions'},
f1q:{ar:'كم يستغرق تنفيذ مشروعي؟',en:'How long will my project take?'},f1a:{ar:'حسب النطاق: الموقع 3–7 أيام، المتجر 1–3 أسابيع، التطبيق 2–6 أسابيع. المدة تُكتب وتُلتزم في عرض السعر.',en:'By scope: websites 3–7 days, stores 1–3 weeks, apps 2–6 weeks. The deadline is written and committed in the quote.'},
f2q:{ar:'كيف تتم الدفعات؟',en:'How do payments work?'},f2a:{ar:'دفعة عند البدء ودفعة عند التسليم، عبر الحساب البنكي للشركة أو PayPal أو البطاقة.',en:'A deposit to start and the rest on delivery — via company bank account, PayPal or card.'},
f3q:{ar:'هل أدفع تكلفة استضافة أو دومين؟',en:'Do I pay for hosting or a domain?'},f3a:{ar:'نطلق مشروعك أولاً على استضافة مجانية سريعة، وتربط دومين باسمك متى شئت لاحقاً.',en:'We launch on fast free hosting first; connect your own domain whenever you like.'},
f4q:{ar:'أين يُنشر مشروعي ومن يملكه؟',en:'Where is my project published, and who owns it?'},f4a:{ar:'يُنشر باسمك وعلى حساباتك، وتسلم كل الشيفرات والتصاميم — الملكية لك بالكامل.',en:'Published under your name and accounts; you receive all code & designs — full ownership is yours.'},
co:{ar:'تواصل معنا',en:'Contact'},ct:{ar:'لنبنِ مشروعك القادم',en:'Let\'s Build Your Next Project'},cs:{ar:'أرسل فكرتك الآن وستصلك دراسة أولية وعرض سعر واضح خلال 48 ساعة — بدون أي التزام.',en:'Send your idea now and receive an initial study and a clear quote within 48 hours — no commitment.'},
fnl:{ar:'الاسم الكامل',en:'Full name'},sl:{ar:'الخدمة المطلوبة',en:'Requested service'},ml:{ar:'تفاصيل المشروع',en:'Project details'},fn:{ar:'اسمك الكريم',en:'Your name'},fm:{ar:'حدّثنا عن فكرتك أو مشروعك...',en:'Tell us about your idea or project...'},fs:{ar:'إرسال الطلب عبر واتساب',en:'Send Request via WhatsApp'},
o1:{ar:'موقع إلكتروني',en:'Website'},o2:{ar:'تطبيق موبايل',en:'Mobile App'},o3:{ar:'متجر إلكتروني',en:'E-Commerce Store'},o4:{ar:'نظام إدارة / لوحة تحكم',en:'Business System / Dashboard'},o5:{ar:'خدمة أخرى',en:'Other'},
langLabel:{ar:'تغيير اللغة',en:'Change language'},menuLabel:{ar:'فتح قائمة التنقل',en:'Open navigation menu'},waLabel:{ar:'تواصل معنا عبر واتساب',en:'Contact us on WhatsApp'},fr1:{ar:'وكالة رقمية مستقلة نصمم ونطور حلولاً عالمية: مواقع، تطبيقات، متاجر وأنظمة إدارة — بجودة عالية والتزام كامل.',en:'An independent digital agency crafting global solutions: websites, apps, stores & business systems — high quality, full commitment.'},
fr2:{ar:'روابط سريعة',en:'Quick Links'},fr3:{ar:'خدماتنا',en:'Services'},fr4:{ar:'جميع الحقوق محفوظة',en:'All rights reserved'}
};
let cur='ar';
try{cur=localStorage.getItem('vx_lang')||'ar';}catch{}
function setLang(l){cur=l;try{localStorage.setItem('vx_lang',l);}catch{}
 const r=document.getElementById('root');r.lang=l;r.dir=l==='ar'?'rtl':'ltr';
 const title=l==='ar'?'VEXORA — حلول رقمية لعصر أذكى':'VEXORA — Digital Solutions for a Smarter Tomorrow';
 const description=l==='ar'?'وكالة VEXORA الرقمية: مواقع وتطبيقات ومتاجر وأنظمة مخصصة مع نماذج تجريبية قابلة للعرض.':'VEXORA digital agency: websites, apps, e-commerce and custom systems with demo projects you can explore.';
 document.title=title;
 document.querySelector('meta[name="description"]')?.setAttribute('content',description);
 document.querySelector('meta[property="og:title"]')?.setAttribute('content',title);
 document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
 document.getElementById('langBtn').textContent=l==='ar'?'EN':'عربي';
 document.querySelectorAll('[data-t]').forEach(e=>{if(T[e.dataset.t])e.textContent=T[e.dataset.t][l];});
 document.querySelectorAll('[data-tp]').forEach(e=>{if(T[e.dataset.tp])e.placeholder=T[e.dataset.tp][l];});
 document.querySelectorAll('[data-aria]').forEach(e=>{if(T[e.dataset.aria])e.setAttribute('aria-label',T[e.dataset.aria][l]);});
 fixWa();}
const waLink=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
function fixWa(){const m=cur==='ar'?'مرحباً VEXORA، أريد مناقشة مشروع جديد.':'Hello VEXORA, I would like to discuss a new project.';
 ['waTop','waOffer','waFloat','waBig'].forEach(id=>{const e=document.getElementById(id);if(e)e.href=waLink(m);});}
function sendWa(e){e.preventDefault();
 const n=document.getElementById('cName').value.trim(),select=document.getElementById('cServ'),s=select.options[select.selectedIndex]?.textContent.trim()||'',m=document.getElementById('cMsg').value.trim();
 const t=cur==='ar'?`مرحباً VEXORA
الاسم: ${n}
الخدمة المطلوبة: ${s}
التفاصيل: ${m}`:`Hello VEXORA
Name: ${n}
Service: ${s}
Details: ${m}`;
 const destination=waLink(t),popup=window.open(destination,'_blank','noopener,noreferrer');
 if(!popup) window.location.href=destination;
 e.target.reset();}document.getElementById('mq').innerHTML+=document.getElementById('mq').innerHTML;
function toggleMenu(button){const menu=document.getElementById('mnav');const open=!menu.classList.contains('open');menu.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));}
function closeMenu(){const menu=document.getElementById('mnav');const button=document.querySelector('.burger');menu.classList.remove('open');if(button)button.setAttribute('aria-expanded','false');}
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll('.rv').forEach(el=>io.observe(el));}else{document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'));}
setLang(cur);
