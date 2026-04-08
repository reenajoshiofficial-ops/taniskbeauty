
:root{
  --rose-gold:#E8B4B8;--deep-rose:#D4A5A9;--cream:#FDF6F0;--dark-cream:#F5EDE4;
  --charcoal:#2D1B1C;--accent-gold:#D4A059;--white:#fff;--soft-text:#5f4d4f;
  --line:rgba(212,165,169,.45);--shadow:0 15px 35px rgba(0,0,0,.08)
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--cream);color:var(--charcoal);line-height:1.6;overflow-x:hidden}
img{max-width:100%;display:block}
a{text-decoration:none;color:inherit}
button,input,select,textarea{font:inherit}
header{position:sticky;top:0;z-index:2000;background:rgba(253,246,240,.96);backdrop-filter:blur(14px);border-bottom:1px solid var(--deep-rose)}
.nav{max-width:1220px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;gap:1rem;position:relative}
.brand{display:flex;align-items:center;gap:.8rem;min-width:0}
.brand img{width:56px;height:56px;border-radius:14px;object-fit:cover;flex:0 0 auto}
.logo{font-family:'Playfair Display',serif;font-size:1.75rem;font-weight:700;background:linear-gradient(135deg,var(--rose-gold),var(--accent-gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}
.nav-links{display:flex;gap:1.1rem;align-items:center}
.nav-link{font-weight:600;font-size:1rem}
.nav-link:hover{color:var(--accent-gold)}
.mobile-toggle{display:none;background:transparent;border:none;font-size:2rem;line-height:1;color:var(--charcoal);cursor:pointer}

.hero{position:relative;min-height:88vh;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;overflow:hidden}
.hero-slider{position:absolute;inset:0;z-index:-2}
.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1.2s ease}
.slide.active{opacity:1}
.hero-overlay{position:absolute;inset:0;background:rgba(45,27,28,.58);z-index:-1}
.hero-content{max-width:980px;padding:0 1.25rem}
.hero-subtitle{display:inline-block;padding:.6rem 1.1rem;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(255,255,255,.07);font-size:.95rem;font-weight:700;letter-spacing:.5px;color:#ffd9dc;text-transform:uppercase;margin-bottom:1rem}
.hero h1{font-family:'Playfair Display',serif;font-size:4rem;line-height:1.05;margin-bottom:1rem}
.hero p{font-size:1.15rem;max-width:860px;margin:0 auto 1rem}
.hero-location{font-size:1rem;margin-bottom:1.5rem}
.hero-points{display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;max-width:920px;margin:0 auto 1.8rem}
.hero-point{padding:.85rem;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.12);border-radius:18px;font-weight:700}
.hero-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn{display:inline-block;padding:1rem 2rem;border-radius:50px;font-weight:700;text-transform:uppercase;border:none;cursor:pointer;text-align:center}
.btn-primary{background:linear-gradient(135deg,var(--rose-gold),var(--accent-gold));color:var(--charcoal)}
.btn-outline{background:transparent;border:2px solid rgba(255,255,255,.88);color:#fff}

.quick-info{background:var(--dark-cream);padding:1rem 1.25rem;border-top:1px solid rgba(212,165,169,.4);border-bottom:1px solid rgba(212,165,169,.4)}
.quick-info-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;text-align:center;font-weight:600;color:#4A3A3B}

.section{max-width:1200px;margin:0 auto;padding:5rem 1.25rem}
.page-hero{max-width:1200px;margin:0 auto;padding:3rem 1.25rem 1rem;text-align:center}
.page-hero h1,.section-title{font-family:'Playfair Display',serif;font-size:3rem;line-height:1.15;margin-bottom:1rem;background:linear-gradient(135deg,var(--charcoal),#4A3A3B);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.page-hero p,.section-subtext{color:var(--soft-text);max-width:900px;margin:0 auto 1rem}
.grid-2,.grid-3,.services-grid,.gallery-grid,.contact-grid,.faq-grid,.local-grid{display:grid;gap:1.6rem}
.grid-2{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.grid-3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.services-grid{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.gallery-grid{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.contact-grid{grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.faq-grid,.local-grid{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.card,.service-card,.gallery-item,.contact-card,.faq-card,.local-card,.booking-form,.map-card,.review-card{
  background:#fff;border:1px solid var(--line);border-radius:24px;box-shadow:var(--shadow)
}
.card,.service-card,.contact-card,.faq-card,.local-card,.review-card{padding:1.6rem}
.about-img img{width:100%;height:100%;object-fit:cover;border-radius:24px}
.badges,.tags{display:flex;flex-wrap:wrap;gap:.65rem;margin-top:1rem}
.badge,.tag{background:#fff4f4;border:1px solid var(--line);border-radius:999px;padding:.55rem .9rem;font-size:.86rem;font-weight:700;color:#69484b}

.filters{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.filter-btn{padding:.8rem 1.4rem;border:2px solid var(--deep-rose);background:var(--dark-cream);border-radius:50px;font-weight:600;cursor:pointer}
.filter-btn.active{background:var(--rose-gold);border-color:var(--accent-gold)}
.service-card{display:none;text-align:center}
.service-card.active{display:block}
.service-icon{font-size:3rem;margin-bottom:.8rem}
.service-price{font-size:1.8rem;font-family:'Playfair Display',serif;color:var(--accent-gold);font-weight:700;margin:.5rem 0}
.service-note{color:var(--soft-text);font-size:.92rem;margin-top:.7rem}

.gallery-item{overflow:hidden;padding:0}
.gallery-item img{width:100%;height:340px;object-fit:cover;border-radius:24px 24px 0 0}
.gallery-caption{padding:1rem 1rem 1.2rem;font-weight:700;color:var(--soft-text)}

.booking-form{max-width:920px;margin:0 auto;padding:2rem}
.booking-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}
.form-group label{display:block;font-weight:600;margin-bottom:.45rem}
.form-group input,.form-group select,.form-group textarea{
  width:100%;padding:.95rem 1rem;border:2px solid var(--deep-rose);border-radius:12px;background:#fff
}
.form-group.full{grid-column:1/-1}
.contact-card{text-align:center}
.contact-icon{font-size:3rem;margin-bottom:1rem}
.service-area-box{max-width:1100px;margin:2rem auto 0;background:#fff;border:1px solid var(--deep-rose);border-radius:20px;padding:1.4rem 1.6rem;text-align:center;color:var(--soft-text);box-shadow:0 10px 25px rgba(0,0,0,.04)}
.review-card{border-left:5px solid var(--rose-gold)}
.stars{color:var(--accent-gold);font-size:1.25rem;margin-bottom:.8rem}
.faq-item{border-top:1px solid var(--line);padding:1rem 0}
.faq-item:first-child{border-top:0}
.faq-item summary{list-style:none;cursor:pointer;font-weight:700}
.faq-item p{color:var(--soft-text);margin-top:.7rem}
.map-frame{width:100%;height:420px;border:0;border-radius:24px 24px 0 0}
.map-note{padding:1rem 1.25rem;color:var(--soft-text)}

.popup-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;z-index:4000;padding:1rem}
.popup-backdrop.active{display:flex}
.popup-card{width:100%;max-width:620px;background:#fff;border-radius:24px;padding:2rem;position:relative;border:1px solid var(--deep-rose);box-shadow:0 25px 60px rgba(0,0,0,.18)}
.popup-close{position:absolute;top:12px;right:16px;border:none;background:transparent;font-size:1.8rem;cursor:pointer}
.popup-title{font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:.4rem}
.popup-subtext{color:var(--soft-text);margin-bottom:1rem}
.popup-actions{display:flex;gap:.8rem;flex-wrap:wrap}

.sticky-booking{position:fixed;left:0;right:0;bottom:0;z-index:2500;background:rgba(255,255,255,.98);backdrop-filter:blur(12px);border-top:1px solid var(--line);box-shadow:0 -8px 30px rgba(0,0,0,.08)}
.sticky-inner{max-width:1200px;margin:0 auto;padding:.8rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}
.sticky-text strong{display:block}
.sticky-text span{font-size:.92rem;color:var(--soft-text)}
.sticky-actions{display:flex;gap:.7rem;flex-wrap:wrap}
.wa-float{position:fixed;right:24px;bottom:88px;width:70px;height:70px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;background:linear-gradient(135deg,var(--rose-gold),var(--accent-gold));box-shadow:0 15px 35px rgba(232,180,184,.4);z-index:2600}
footer{background:#2D1B1C;color:#f5e7e7;text-align:center;padding:2rem;font-size:.95rem;margin-top:2rem}
body{padding-bottom:110px}

@media (max-width: 900px){
  .logo{font-size:1.45rem}
  .mobile-toggle{display:block}
  .nav-links{
    display:none;
    position:absolute;
    top:calc(100% + .4rem);
    right:1rem;
    left:1rem;
    flex-direction:column;
    align-items:stretch;
    gap:.6rem;
    background:#fff;
    border:1px solid var(--line);
    border-radius:18px;
    box-shadow:var(--shadow);
    padding:1rem;
  }
  .nav-links.open{display:flex}
  .nav-link{display:block;padding:.8rem 1rem;background:#fff7f7;border-radius:12px}
  .hero h1,.page-hero h1,.section-title{font-size:2.4rem}
  .hero-points,.quick-info-inner{grid-template-columns:1fr 1fr}
}
@media (min-width: 901px){
  .mobile-toggle{display:none !important}
  .nav-links{display:flex !important}
}
@media (max-width: 768px){
  body{padding-bottom:0}
  .sticky-booking,.wa-float{display:none}
  .brand img{width:50px;height:50px}
  .logo{font-size:1.15rem;max-width:180px;white-space:normal;line-height:1.05}
  .nav{padding:.85rem 1rem}
  .hero{min-height:78vh}
  .hero-content{padding:0 1rem}
  .hero h1{font-size:2.15rem}
  .hero-subtitle{font-size:.82rem;padding:.55rem .9rem}
  .hero p{font-size:1rem}
  .hero-location{font-size:.92rem}
  .hero-points,.quick-info-inner,.booking-grid{grid-template-columns:1fr}
  .hero-buttons,.popup-actions{justify-content:center}
  .btn{width:100%;max-width:330px}
  .section,.page-hero{padding-left:1rem;padding-right:1rem}
  .page-hero{padding-top:2rem}
  .gallery-item img{height:260px}
}
