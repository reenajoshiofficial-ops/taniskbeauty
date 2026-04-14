
(function(){
  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  const slides = qsa('.slide');
  if(slides.length){
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = qs('.menu-toggle');
    const mobileMenu = qs('.mobile-menu');
    if(toggle && mobileMenu){
      toggle.addEventListener('click', function(e){
        e.stopPropagation();
        mobileMenu.classList.toggle('open');
      });
      qsa('a', mobileMenu).forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
      document.addEventListener('click', (e) => {
        if(!mobileMenu.contains(e.target) && !toggle.contains(e.target)){
          mobileMenu.classList.remove('open');
        }
      });
    }

    if(window.innerWidth > 768){
      document.body.classList.add('has-desktop-sticky');
      const pop = qs('#bookingPopup');
      if(pop){
        setTimeout(() => pop.classList.add('active'), 5000);
        pop.addEventListener('click', (e) => {
          if(e.target === pop) pop.classList.remove('active');
        });
      }
    }

    const form = qs('#bookingForm');
    if(form){
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = qs('#customerName').value.trim();
        const phone = qs('#customerPhone').value.trim();
        const service = qs('#serviceType').value.trim();
        const date = qs('#bookingDate').value.trim();
        const address = qs('#customerAddress').value.trim();
        const message = qs('#customerMessage').value.trim();
        if(!name || !phone || !service || !date || !address){
          alert('Please fill all required details.');
          return;
        }
        const text = `Hello Tanisk Beauty Zone,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0APreferred Date: ${encodeURIComponent(date)}%0AArea/Address: ${encodeURIComponent(address)}%0AExtra Details: ${encodeURIComponent(message || 'N/A')}`;
        window.open(`https://wa.me/919627189407?text=${text}`, '_blank');
      });
    }
  });

  window.openBookingPopup = function(){
    const pop = document.getElementById('bookingPopup');
    if(pop && window.innerWidth > 768) pop.classList.add('active');
  };
  window.closeBookingPopup = function(){
    const pop = document.getElementById('bookingPopup');
    if(pop) pop.classList.remove('active');
  };
})();
