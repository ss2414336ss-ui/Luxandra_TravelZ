// === Mobile Hamburger Drawer Menu ===
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    // Closing with stagger fade-out
    navLinks.classList.add("closing");
    document.body.classList.remove("menu-open");
    menuToggle.classList.remove("active");

    setTimeout(() => {
      navLinks.classList.remove("active", "closing");
    }, 400);
  } else {
    // Opening
    navLinks.classList.add("active");
    document.body.classList.add("menu-open");
    menuToggle.classList.add("active");
  }
});

// Close when clicking overlay
document.body.addEventListener("click", (e) => {
  if (document.body.classList.contains("menu-open") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    menuToggle.click();
  }
});

// === Back to Top Button ===
let backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// === Scroll Progress Bar ===
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// === Sticky Shrinking Header ===
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
