
:root{--rose-gold:#E8B4B8;--deep-rose:#D4A5A9;--cream:#FDF6F0;--dark-cream:#F5EDE4;--charcoal:#2D1B1C;--accent-gold:#D4A059;--white:#fff;--soft-text:#5f4d4f;--line:rgba(212,165,169,.45);--shadow:0 15px 35px rgba(0,0,0,.08)}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;background:var(--cream);color:var(--charcoal);line-height:1.6}img{max-width:100%;display:block}a{text-decoration:none;color:inherit}button,input,select,textarea{font:inherit}
header{position:sticky;top:0;z-index:1000;background:rgba(253,246,240,.95);backdrop-filter:blur(18px);border-bottom:1px solid var(--deep-rose);padding:1rem 0}
.nav{max-width:1220px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 2rem;gap:1rem}.brand{display:flex;align-items:center;gap:.8rem}.brand img{width:52px;height:52px;border-radius:14px;object-fit:cover}.logo{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;background:linear-gradient(135deg,var(--rose-gold),var(--accent-gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}.nav-links{display:flex;gap:1.2rem;flex-wrap:wrap}.nav-link{font-weight:600;font-size:.95rem}.nav-link:hover{color:var(--accent-gold)}
.hero{position:relative;min-height:92vh;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;overflow:hidden}.hero-slider{position:absolute;inset:0;z-index:-1}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1.5s ease-in-out}.slide.active{opacity:1}.hero-overlay{position:absolute;inset:0;background:rgba(45,27,28,.58)}.hero-content{position:relative;z-index:1;max-width:1000px;padding:0 2rem}.hero h1{font-family:'Playfair Display',serif;font-size:4.1rem;margin-bottom:1rem;line-height:1.08}.hero-subtitle{display:inline-block;font-size:.95rem;font-weight:700;letter-spacing:1px;color:#ffd9dc;text-transform:uppercase;margin-bottom:1rem;border:1px solid rgba(255,255,255,.28);padding:.5rem 1rem;border-radius:999px;background:rgba(255,255,255,.08)}.hero p{font-size:1.18rem;margin-bottom:1rem}.hero-location{margin-bottom:1.4rem}.hero-points{display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;margin:1.4rem auto 2rem;max-width:940px}.hero-point{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:.85rem;font-size:.92rem;font-weight:700}.hero-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn{padding:1rem 2rem;border-radius:50px;font-weight:700;text-transform:uppercase;display:inline-block;transition:.3s;border:none;font-size:.92rem;text-align:center}.btn-primary{background:linear-gradient(135deg,var(--rose-gold),var(--accent-gold));color:var(--charcoal)}.btn-outline{background:transparent;border:2px solid rgba(255,255,255,.85);color:#fff}
.quick-info{background:var(--dark-cream);padding:1rem 2rem;border-top:1px solid rgba(212,165,169,.4);border-bottom:1px solid rgba(212,165,169,.4)}.quick-info-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;text-align:center;font-weight:600;color:#4A3A3B}
.section{padding:5.5rem 2rem;max-width:1200px;margin:0 auto}.section-title{font-family:'Playfair Display',serif;font-size:3rem;text-align:center;margin-bottom:1.2rem;background:linear-gradient(135deg,var(--charcoal),#4A3A3B);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.section-subtext{max-width:900px;margin:0 auto 3rem;text-align:center;color:var(--soft-text);font-size:1.05rem}
.grid-2,.grid-3,.services-grid,.gallery-grid,.contact-grid,.faq-grid,.local-grid{display:grid;gap:1.6rem}.grid-2{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.grid-3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}.services-grid{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}.gallery-grid{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}.contact-grid{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}.faq-grid,.local-grid{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.card,.service-card,.gallery-item,.review-card,.contact-card,.faq-card,.local-card,.booking-form,.map-card{background:#fff;border:1px solid var(--line);border-radius:24px;box-shadow:var(--shadow)}.card,.service-card,.review-card,.contact-card,.faq-card,.local-card{padding:1.6rem}.card h3,.service-card h3,.contact-card h3,.faq-card h3,.local-card h3{font-family:'Playfair Display',serif}.about-wrap .about-img img{width:100%;height:100%;object-fit:cover;border-radius:24px}
.badges,.tags{display:flex;flex-wrap:wrap;gap:.65rem;margin-top:1rem}.badge,.tag{background:#fff4f4;border:1px solid var(--line);border-radius:999px;padding:.55rem .9rem;font-size:.86rem;font-weight:700;color:#69484b}
.services-wrap,.reviews-wrap,.local-wrap{background:var(--dark-cream)}.filters{display:flex;justify-content:center;gap:1rem;margin-bottom:3rem;flex-wrap:wrap}.filter-btn{padding:.8rem 1.5rem;background:var(--dark-cream);border:2px solid var(--deep-rose);border-radius:50px;cursor:pointer;font-weight:600;font-size:.95rem;color:var(--charcoal)}.filter-btn.active{background:var(--rose-gold);border-color:var(--accent-gold)}.service-card{padding:2rem 1.4rem;text-align:center;display:none}.service-card.active{display:block}.service-icon{font-size:3rem;margin-bottom:1rem;display:block}.service-price{font-size:1.8rem;font-weight:700;color:var(--accent-gold);margin:.6rem 0;font-family:'Playfair Display',serif}.service-note{margin-top:.7rem;color:var(--soft-text);font-size:.92rem}
.gallery-item{overflow:hidden}.gallery-item img{width:100%;height:340px;object-fit:cover;border-radius:24px 24px 0 0}.gallery-caption{padding:1rem 1rem 1.2rem;font-weight:700;color:var(--soft-text)}
.booking-form{max-width:900px;margin:0 auto;padding:2rem}.booking-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.form-group{margin-bottom:1rem}.form-group.full{grid-column:1/-1}.form-group label{display:block;margin-bottom:.5rem;font-weight:600}.form-group input,.form-group select,.form-group textarea{width:100%;padding:.95rem 1rem;border:2px solid var(--deep-rose);border-radius:12px;background:#fff}
.contact-card{text-align:center}.contact-icon{font-size:3rem;margin-bottom:1rem;display:block}.service-area-box{max-width:1100px;margin:2rem auto 0;background:#fff;border:1px solid var(--deep-rose);border-radius:20px;padding:1.4rem 1.6rem;text-align:center;box-shadow:0 10px 25px rgba(0,0,0,.04);color:var(--soft-text)}
.faq-item{border-top:1px solid var(--line);padding:1rem 0}.faq-item:first-child{border-top:0}.faq-item summary{list-style:none;cursor:pointer;font-weight:700}.faq-item p{color:var(--soft-text);margin-top:.7rem}
.page-hero{padding:4rem 2rem 1rem;max-width:1200px;margin:0 auto;text-align:center}.page-hero h1{font-family:'Playfair Display',serif;font-size:3rem;margin-bottom:.8rem}.page-hero p{max-width:900px;margin:0 auto;color:var(--soft-text)}
.map-frame{width:100%;height:420px;border:0;border-radius:24px 24px 0 0}.map-note{padding:1rem 1.3rem;color:var(--soft-text);font-size:.95rem;background:#fff;border-radius:0 0 24px 24px}
.popup-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;z-index:3000;padding:1rem}.popup-backdrop.active{display:flex}.popup-card{width:100%;max-width:620px;background:#fff;border-radius:24px;padding:2rem;box-shadow:0 25px 60px rgba(0,0,0,.18);position:relative;border:1px solid var(--deep-rose)}.popup-close{position:absolute;top:14px;right:16px;background:transparent;border:none;font-size:1.8rem;cursor:pointer}.popup-title{font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:.5rem}.popup-subtext{color:var(--soft-text);margin-bottom:1.3rem}.popup-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1rem}
.sticky-booking{position:fixed;left:0;right:0;bottom:0;z-index:2000;background:rgba(255,255,255,.98);backdrop-filter:blur(14px);border-top:1px solid var(--line);box-shadow:0 -8px 30px rgba(0,0,0,.08)}.sticky-inner{max-width:1200px;margin:0 auto;padding:.8rem 1rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}.sticky-text span{color:var(--soft-text);font-size:.92rem}.sticky-actions{display:flex;gap:.7rem;flex-wrap:wrap}.wa-float{position:fixed;bottom:88px;right:24px;background:linear-gradient(135deg,var(--rose-gold),var(--accent-gold));width:70px;height:70px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;box-shadow:0 15px 35px rgba(232,180,184,.4);z-index:2100}
footer{background:#2D1B1C;color:#f5e7e7;text-align:center;padding:2rem;font-size:.95rem;margin-top:2rem}
@media (max-width:900px){.nav-links{display:none}.hero h1,.page-hero h1{font-size:2.7rem}.hero-points,.quick-info-inner,.booking-grid{grid-template-columns:1fr 1fr}}
@media (max-width:768px){.hero h1,.page-hero h1,.section-title{font-size:2.2rem}.hero-points,.quick-info-inner,.booking-grid{grid-template-columns:1fr}.btn{width:100%;max-width:330px}.hero-buttons,.popup-actions,.sticky-actions{justify-content:center}.sticky-inner{text-align:center;justify-content:center}}


/* Mobile navigation and spacing fixes */
.mobile-toggle{
  display:none;
  background:transparent;
  border:none;
  font-size:2rem;
  line-height:1;
  color:var(--charcoal);
  cursor:pointer;
  padding:.2rem .4rem;
}

main{display:block}

@media (max-width: 900px){
  .mobile-toggle{display:block}
  .nav{position:relative}
  .nav-links{
    display:none !important;
    position:absolute;
    top:calc(100% + .6rem);
    left:1rem;
    right:1rem;
    background:#fff;
    border:1px solid var(--line);
    border-radius:18px;
    box-shadow:var(--shadow);
    padding:1rem;
    flex-direction:column;
    gap:.75rem;
    z-index:3001;
  }
  .nav-links.open{display:flex !important}
  .nav-link{
    display:block;
    padding:.8rem 1rem;
    border-radius:12px;
    background:#fff7f7;
  }
}

/* Prevent sticky booking bar from hiding page content on mobile */
body{padding-bottom:112px}
@media (max-width: 768px){
  body{padding-bottom:200px}
  .section,.page-hero{padding-left:1rem;padding-right:1rem}
  .page-hero{padding-top:2.2rem}
  .hero{min-height:78vh}
  .hero-content{padding:0 1rem}
  .hero h1{font-size:2.4rem}
  .hero p{font-size:1rem}
  .hero-point{font-size:.88rem}
  .gallery-item img{height:260px}
  .sticky-booking{padding-bottom:env(safe-area-inset-bottom)}
  .sticky-inner{gap:.75rem}
  .sticky-actions{width:100%;justify-content:center}
  .sticky-actions .btn{max-width:none}
  .wa-float{bottom:150px}
}
