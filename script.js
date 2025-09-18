// Smooth scrolling
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Contact form submission with success message
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // Let Netlify handle submission, but show confirmation
      setTimeout(() => {
        alert("Thank you! Your message has been sent.");
      }, 200);
    });
  }
}

// Lightbox effect
function setupLightbox() {
  document.querySelectorAll(".lightbox").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0,0,0,0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "1001";
      overlay.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%;">`;
      
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}

// Gallery filter
function setupGalleryFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      galleryItems.forEach(item => {
        item.style.display = (filter === "all" || item.classList.contains(filter)) ? "block" : "none";
      });
    });
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll();
  setupContactForm();
  setupLightbox();
  setupGalleryFilter();
  setupMobileMenu();
});