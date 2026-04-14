
(function(){
  const slides=document.querySelectorAll('.slide');
  if(slides.length){let current=0;setInterval(()=>{slides[current].classList.remove('active');current=(current+1)%slides.length;slides[current].classList.add('active');},4000);}

  window.filterServices=function(category,event){document.querySelectorAll('.filter-btn').forEach(btn=>btn.classList.remove('active'));if(event&&event.target)event.target.classList.add('active');document.querySelectorAll('.service-card').forEach(card=>{if(category==='all'||card.classList.contains(category))card.classList.add('active');else card.classList.remove('active');});};

  window.openBookingPopup=function(){const p=document.getElementById('bookingPopup');if(p&&window.innerWidth>768)p.classList.add('active');};
  window.closeBookingPopup=function(){const p=document.getElementById('bookingPopup');if(p)p.classList.remove('active');};

  document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth>768){document.body.classList.add('has-desktop-sticky');const popup=document.getElementById('bookingPopup');if(popup){popup.addEventListener('click',e=>{if(e.target===popup)window.closeBookingPopup();});setTimeout(()=>window.openBookingPopup(),5000);}}

    const toggle=document.querySelector('.mobile-toggle');
    const panel=document.querySelector('.mobile-panel');
    if(toggle&&panel){toggle.addEventListener('click',()=>{const open=panel.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>panel.classList.remove('open')));document.addEventListener('click',(e)=>{if(!panel.contains(e.target)&&!toggle.contains(e.target)){panel.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});}

    const bookingForm=document.getElementById('bookingForm');
    if(bookingForm){bookingForm.addEventListener('submit',function(e){e.preventDefault();const name=document.getElementById('customerName').value.trim();const phone=document.getElementById('customerPhone').value.trim();const service=document.getElementById('serviceType').value.trim();const date=document.getElementById('bookingDate').value.trim();const address=document.getElementById('customerAddress').value.trim();const message=document.getElementById('customerMessage').value.trim();if(!name||!phone||!service||!date||!address){alert('Please fill all required booking details.');return;}const text=`Hello Tanisk Beauty Zone,%0A%0AI want to book a home salon service in Dehradun.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0APreferred Date: ${encodeURIComponent(date)}%0AArea/Address: ${encodeURIComponent(address)}%0AExtra Details: ${encodeURIComponent(message||'N/A')}`;window.open(`https://wa.me/919627189407?text=${text}`,'_blank');});}
  });
})();
