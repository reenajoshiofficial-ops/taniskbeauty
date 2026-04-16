
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", mobileMenu.classList.contains("show") ? "true" : "false");
    });
  }

  const slides = document.querySelectorAll(".hero .slide");
  if (slides.length > 1) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 4500);
  }

  const popup = document.getElementById("bookingPopup");
  const openers = document.querySelectorAll("[data-open-popup]");
  const closers = document.querySelectorAll("[data-close-popup]");
  openers.forEach(btn => btn.addEventListener("click", () => popup && popup.classList.add("show")));
  closers.forEach(btn => btn.addEventListener("click", () => popup && popup.classList.remove("show")));
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.classList.remove("show");
    });
  }

  const form = document.getElementById("whatsappBookingForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const get = id => (document.getElementById(id)?.value || "").trim();
      const name = get("name");
      const phone = get("phone");
      const service = get("service");
      const date = get("date");
      const area = get("area");
      const details = get("details");

      const lines = [
        "Hello Tanisk Beauty Zone, I want to book a home salon service.",
        name ? `Name: ${name}` : "",
        phone ? `Phone: ${phone}` : "",
        service ? `Service: ${service}` : "",
        date ? `Preferred Date: ${date}` : "",
        area ? `Area/Address: ${area}` : "",
        details ? `Extra Details: ${details}` : ""
      ].filter(Boolean).join("\n");

      const url = "https://wa.me/919627189407?text=" + encodeURIComponent(lines);
      window.open(url, "_blank");
    });
  }
});
