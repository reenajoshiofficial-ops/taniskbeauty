
const REVIEW_LINK = "https://g.page/r/CXUpmQvVoq_kEBM/review";
const WHATSAPP_NUMBER = "919627189407";
const GOOGLE_PROFILE_LINK = "https://www.google.com/search?q=Tanisk+Beauty+Zone+Dehradun";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  if (slides.length > 1) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3500);
  }

  const modal = document.getElementById("bookingModal");
  const serviceField = document.getElementById("serviceInput");
  const bookButtons = document.querySelectorAll("[data-book]");
  const closeModalBtn = document.getElementById("closeModal");
  const cancelModalBtn = document.getElementById("cancelModal");
  const bookingForm = document.getElementById("bookingForm");

  const openModal = (serviceName = "") => {
    if (!modal) return;
    if (serviceField) serviceField.value = serviceName;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  bookButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(btn.dataset.book || "");
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  const buildWhatsAppMessage = (data) => {
    const parts = [
      "Hello Tanisk Beauty Zone, I want to book a home service in Dehradun.",
      data.service ? `Service: ${data.service}` : "",
      data.name ? `Name: ${data.name}` : "",
      data.phone ? `Phone: ${data.phone}` : "",
      data.date ? `Preferred Date: ${data.date}` : "",
      data.area ? `Area: ${data.area}` : "",
      data.note ? `Details: ${data.note}` : ""
    ].filter(Boolean);
    return encodeURIComponent(parts.join("\n"));
  };

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        name: document.getElementById("nameInput")?.value.trim() || "",
        phone: document.getElementById("phoneInput")?.value.trim() || "",
        service: document.getElementById("serviceInput")?.value.trim() || "",
        date: document.getElementById("dateInput")?.value || "",
        area: document.getElementById("areaInput")?.value.trim() || "",
        note: document.getElementById("noteInput")?.value.trim() || ""
      };
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(data)}`;
      window.open(url, "_blank");
      closeModal();
    });
  }

  document.querySelectorAll("[data-whatsapp-service]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const service = btn.dataset.whatsappService || "Beauty service";
      const msg = encodeURIComponent(`Hello Tanisk Beauty Zone, I want to book ${service} at home in Dehradun.`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    });
  });

  document.querySelectorAll("[data-google-reviews]").forEach(a => a.href = REVIEW_LINK);
  document.querySelectorAll("[data-google-profile]").forEach(a => a.href = GOOGLE_PROFILE_LINK);
});
