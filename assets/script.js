
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (btn && mobileMenu) {
    btn.addEventListener('click', function () {
      mobileMenu.classList.toggle('show');
      btn.setAttribute('aria-expanded', mobileMenu.classList.contains('show') ? 'true' : 'false');
    });
  }

  const slides = document.querySelectorAll('.slide');
  if (slides.length > 1) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 4200);
  }

  const popup = document.getElementById('bookingPopup');
  const openers = document.querySelectorAll('[data-open-popup]');
  const closers = document.querySelectorAll('[data-close-popup]');

  openers.forEach(el => el.addEventListener('click', () => popup && popup.classList.add('show')));
  closers.forEach(el => el.addEventListener('click', () => popup && popup.classList.remove('show')));
  if (popup) {
    popup.addEventListener('click', (e) => { if (e.target === popup) popup.classList.remove('show'); });
    setTimeout(() => { popup.classList.add('show'); }, 5000);
  }

  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const val = id => (document.getElementById(id)?.value || '').trim();
      const message = [
        'Hello Tanisk Beauty Zone, I want to book a home salon service.',
        val('name') ? 'Name: ' + val('name') : '',
        val('phone') ? 'Phone: ' + val('phone') : '',
        val('service') ? 'Service: ' + val('service') : '',
        val('date') ? 'Preferred Date: ' + val('date') : '',
        val('area') ? 'Area/Address: ' + val('area') : '',
        val('details') ? 'Extra Details: ' + val('details') : ''
      ].filter(Boolean).join('\n');
      window.open('https://wa.me/919627189407?text=' + encodeURIComponent(message), '_blank');
    });
  }
});
