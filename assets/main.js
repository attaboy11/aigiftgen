// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  // Mark nav as JS-controlled, so CSS can switch layout
  mainNav.classList.add("js-nav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav when clicking a link (mobile)
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Smooth scroll for internal anchors
document.addEventListener("click", (e) => {
  const target = e.target.closest("a[href^='#']");
  if (!target) return;

  const href = target.getAttribute("href");
  if (!href || href === "#") return;

  const id = href.slice(1);
  const section = document.getElementById(id);
  if (!section) return;

  e.preventDefault();
  const top = section.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
