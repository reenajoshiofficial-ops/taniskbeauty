(function () {
  const body = document.body;
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const overlay = document.querySelector('[data-overlay]');

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('open');
    overlay && overlay.classList.remove('show');
    body.classList.remove('menu-open');
    navToggle && navToggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    if (!nav) return;
    nav.classList.add('open');
    overlay && overlay.classList.add('show');
    body.classList.add('menu-open');
    navToggle && navToggle.setAttribute('aria-expanded', 'true');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });
    overlay && overlay.addEventListener('click', closeMenu);
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) closeMenu();
  });

  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length > 1) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 4000);
  }

  const modal = document.querySelector('[data-modal]');
  const modalBackdrop = document.querySelector('[data-modal-backdrop]');
  const modalClose = document.querySelectorAll('[data-modal-close]');
  const openModalButtons = document.querySelectorAll('[data-open-booking]');

  function openModal() {
    if (!modal) return;
    modal.classList.add('show');
    body.classList.add('modal-open');
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('show');
    body.classList.remove('modal-open');
  }

  openModalButtons.forEach((btn) => btn.addEventListener('click', function (e) {
    if (btn.getAttribute('href') === '#book') e.preventDefault();
    openModal();
  }));
  modalBackdrop && modalBackdrop.addEventListener('click', closeModal);
  modalClose.forEach((btn) => btn.addEventListener('click', closeModal));
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeMenu();
    }
  });

  if (modal && document.body.dataset.page === 'home') {
    const modalSeen = sessionStorage.getItem('taniskBookingModalSeen');
    if (!modalSeen) {
      setTimeout(() => {
        openModal();
        sessionStorage.setItem('taniskBookingModalSeen', '1');
      }, 1800);
    }
  }

  function toWhatsAppMessage(form) {
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const service = (fd.get('service') || '').toString().trim();
    const date = (fd.get('date') || '').toString().trim();
    const area = (fd.get('area') || '').toString().trim();
    const note = (fd.get('note') || '').toString().trim();

    const text = [
      'Hello Tanisk Beauty Zone,',
      'I want to book a home salon service in Dehradun.',
      '',
      'Name: ' + name,
      'Phone: ' + phone,
      'Service: ' + service,
      'Preferred Date: ' + date,
      'Area / Address: ' + area,
      'Extra Details: ' + note,
    ].join('\n');

    return 'https://wa.me/919627189407?text=' + encodeURIComponent(text);
  }

  document.querySelectorAll('[data-whatsapp-form]').forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const phone = form.querySelector('[name="phone"]');
      const service = form.querySelector('[name="service"]');
      if (!name.value.trim() || !phone.value.trim() || !service.value.trim()) {
        alert('Please enter your name, phone number and service first.');
        return;
      }
      window.open(toWhatsAppMessage(form), '_blank');
      closeModal();
    });
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    const trigger = item.querySelector('.faq-question');
    if (!trigger) return;
    trigger.addEventListener('click', function () {
      item.classList.toggle('open');
    });
  });

  document.querySelectorAll('img[data-hide-on-error="true"]').forEach((img) => {
    img.addEventListener('error', function () {
      const card = img.closest('.gallery-card');
      if (card) card.classList.add('hidden-by-error');
    });
  });
})();
