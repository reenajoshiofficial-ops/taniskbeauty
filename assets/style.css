
:root{
  --bg:#fdf7f2;
  --bg-soft:#fffaf7;
  --text:#2c1f1f;
  --muted:#6a5656;
  --line:#e9cfc8;
  --rose:#e7b6b9;
  --gold:#d8a257;
  --white:#ffffff;
  --shadow:0 16px 38px rgba(42,25,25,.08);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Arial, Helvetica, sans-serif;
  background:var(--bg);
  color:var(--text);
  overflow-x:hidden;
}
img{max-width:100%;display:block}
a{text-decoration:none;color:inherit}
.container{width:min(1200px,calc(100% - 32px));margin:0 auto}

/* Header */
.site-header{
  position:sticky;top:0;z-index:1000;
  background:rgba(253,247,242,.98);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}
.navbar{
  min-height:86px;
  display:flex;align-items:center;justify-content:space-between;gap:16px;
}
.brand{display:flex;align-items:center;gap:14px;min-width:0}
.brand img{width:54px;height:54px;border-radius:16px;object-fit:cover;flex:0 0 auto}
.brand-text{
  font-size:24px;font-weight:700;line-height:1.1;
  background:linear-gradient(135deg,var(--rose),var(--gold));
  -webkit-background-clip:text;background-clip:text;color:transparent;
  white-space:nowrap;
}
.nav-links{
  display:flex;align-items:center;gap:26px;
}
.nav-links a{font-weight:700;font-size:16px}
.nav-links a:hover{color:var(--gold)}

.menu-toggle{
  display:none;
  width:56px;height:56px;
  border:2px solid var(--line);
  border-radius:18px;
  background:var(--white);
  align-items:center;justify-content:center;
  cursor:pointer;
  flex-direction:column;
  gap:6px;
}
.menu-toggle span{
  display:block;width:24px;height:3px;border-radius:999px;background:var(--text);
}
.mobile-menu{
  display:none;
  background:var(--white);
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.mobile-menu.open{display:block}
.mobile-menu .container{padding:10px 0}
.mobile-menu a{
  display:block;padding:14px 12px;border-radius:12px;font-weight:700;
}
.mobile-menu a:hover{background:var(--bg-soft)}

/* Hero */
.hero{
  position:relative;
  min-height:78vh;
  display:flex;align-items:center;
  color:var(--white);
  overflow:hidden;
}
.hero-slider,.hero-overlay{
  position:absolute;inset:0;
}
.hero-slider .slide{
  position:absolute;inset:0;
  background-size:cover;background-position:center;
  opacity:0;transition:opacity 1.2s ease;
}
.hero-slider .slide.active{opacity:1}
.hero-overlay{background:rgba(27,17,17,.50)}
.hero-content{
  position:relative;z-index:1;
  width:min(980px,100%);
  margin:0 auto;
  text-align:center;
  padding:82px 0 92px;
}
.eyebrow{
  display:inline-block;
  padding:14px 28px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.35);
  color:#ffd6db;
  background:rgba(255,255,255,.08);
  font-weight:700;
  font-size:15px;
  letter-spacing:.4px;
  margin-bottom:22px;
}
.hero h1{
  margin:0 0 18px;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:78px;
  line-height:1.02;
  font-weight:700;
}
.hero p{
  font-size:18px;
  line-height:1.7;
  margin:0 auto 18px;
  max-width:900px;
}
.hero-meta{
  font-size:17px;
  margin-bottom:26px;
}
.hero-badges{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
  margin:0 auto 28px;
  max-width:940px;
}
.hero-badge{
  border:1px solid rgba(255,255,255,.28);
  background:rgba(255,255,255,.10);
  border-radius:22px;
  padding:16px 14px;
  font-weight:700;
}
.hero-actions{
  display:flex;justify-content:center;gap:14px;flex-wrap:wrap;
}
.btn{
  display:inline-flex;align-items:center;justify-content:center;
  padding:15px 26px;border-radius:999px;font-weight:700;border:none;cursor:pointer;
}
.btn-primary{
  background:linear-gradient(135deg,var(--rose),var(--gold));
  color:var(--text);
}
.btn-outline{
  background:transparent;border:2px solid rgba(255,255,255,.75);color:var(--white);
}

/* Sections */
.section{padding:72px 0}
.section-title{
  text-align:center;
  margin:0 0 14px;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:48px;
  color:var(--text);
}
.section-sub{
  text-align:center;
  color:var(--muted);
  max-width:840px;
  margin:0 auto 32px;
  line-height:1.75;
}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:28px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.card{
  background:var(--white);
  border:1px solid var(--line);
  border-radius:28px;
  padding:26px;
  box-shadow:var(--shadow);
}
.about-photo img,.gallery-card img{
  width:100%;height:100%;object-fit:cover;border-radius:26px;
}
.badges{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.badge{
  padding:10px 14px;border-radius:999px;background:#fff4f1;border:1px solid var(--line);font-size:14px;font-weight:700;color:var(--muted);
}
.service-card{text-align:center}
.service-icon{font-size:40px;margin-bottom:8px}
.service-card h3{margin:0 0 8px}
.price{font-family:Georgia, 'Times New Roman', serif;font-size:34px;color:var(--gold);font-weight:700;margin-bottom:8px}
.small-muted{font-size:14px;color:var(--muted)}
.gallery-card{overflow:hidden;padding:0}
.gallery-card img{height:340px;border-radius:26px 26px 0 0}
.gallery-card .caption{padding:16px 18px;font-weight:700;color:var(--muted)}
.contact-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:26px}
.form-card label{display:block;font-weight:700;margin-bottom:8px}
.form-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.form-full{grid-column:1/-1}
input,select,textarea{
  width:100%;padding:15px 16px;border-radius:16px;border:2px solid var(--line);background:var(--white);font:inherit;
}
textarea{min-height:120px;resize:vertical}
.info-list{display:grid;gap:16px}
.info-item{
  border:1px solid var(--line);border-radius:22px;padding:18px;background:var(--bg-soft);
}
.review-row{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.review-card{border-left:5px solid var(--gold)}
.stars{color:var(--gold);font-size:22px;margin-bottom:10px}
.faq details{
  border-top:1px solid var(--line);
  padding:14px 0;
}
.faq details:first-child{border-top:none}
.faq summary{cursor:pointer;font-weight:700}
.faq p{color:var(--muted);line-height:1.7}
.map-box iframe{width:100%;height:420px;border:none;border-radius:24px}

/* Footer / sticky */
footer{
  background:#2b1d1d;color:#f7eded;text-align:center;padding:28px 16px;margin-top:32px
}
body.has-desktop-sticky{padding-bottom:106px}
.sticky-cta{
  position:fixed;left:0;right:0;bottom:0;z-index:999;
  background:rgba(255,255,255,.97);
  border-top:1px solid var(--line);
  box-shadow:0 -10px 28px rgba(35,20,20,.08);
}
.sticky-cta .inner{
  width:min(1200px,calc(100% - 32px));
  margin:0 auto;
  padding:14px 0;
  display:flex;align-items:center;justify-content:space-between;gap:16px;
}
.sticky-copy strong{display:block;font-size:18px}
.sticky-copy span{color:var(--muted);font-size:14px}
.sticky-actions{display:flex;gap:12px;flex-wrap:wrap}
.chat-float{
  position:fixed;right:26px;bottom:96px;z-index:1001;
  width:72px;height:72px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,var(--rose),var(--gold));
  color:var(--text);font-size:34px;box-shadow:0 20px 40px rgba(216,162,87,.35);
}
.popup-backdrop{
  position:fixed;inset:0;z-index:1002;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.5)
}
.popup-backdrop.active{display:flex}
.popup{
  width:min(560px,100%);background:var(--white);border-radius:28px;padding:28px;border:1px solid var(--line);box-shadow:0 20px 44px rgba(0,0,0,.18);position:relative;
}
.popup h3{margin:0 0 8px;font-size:32px;font-family:Georgia, 'Times New Roman', serif}
.popup p{margin:0 0 18px;color:var(--muted)}
.popup .close{
  position:absolute;right:16px;top:10px;background:none;border:none;font-size:34px;cursor:pointer
}

/* Responsive */
@media (max-width: 1024px){
  .hero h1{font-size:62px}
  .hero-badges{grid-template-columns:repeat(2,1fr)}
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .contact-grid{grid-template-columns:1fr}
}
@media (max-width: 768px){
  .container{width:min(100% - 24px,1200px)}
  .nav-links{display:none}
  .menu-toggle{display:flex}
  .brand img{width:48px;height:48px}
  .brand-text{
    font-size:18px;
    max-width:180px;
    white-space:normal;
  }
  .hero{
    min-height:auto;
  }
  .hero-content{
    padding:34px 0 42px;
  }
  .eyebrow{
    width:100%;
    font-size:14px;
    line-height:1.4;
    padding:12px 18px;
    margin-bottom:18px;
  }
  .hero h1{
    font-size:34px;
    line-height:1.16;
    margin-bottom:16px;
  }
  .hero p{
    font-size:15px;
    line-height:1.7;
    margin-bottom:16px;
  }
  .hero-meta{
    font-size:14px;
    line-height:1.7;
    margin-bottom:18px;
  }
  .hero-badges{
    grid-template-columns:1fr;
    gap:10px;
    margin-bottom:20px;
  }
  .hero-badge{
    padding:14px 12px;
    font-size:14px;
  }
  .hero-actions .btn{
    width:100%;
  }
  .section{padding:52px 0}
  .section-title{font-size:34px}
  .grid-2,.grid-3,.grid-4,.review-row,.form-grid{grid-template-columns:1fr}
  .gallery-card img{height:270px}
  .map-box iframe{height:320px}
  body.has-desktop-sticky{padding-bottom:0}
  .sticky-cta,.chat-float,.popup-backdrop{display:none !important}
}
