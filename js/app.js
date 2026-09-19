console.log("Portfolio Arantza cargado correctamente");
/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        revealObserver.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});
/* =========================
   HEADER ON SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }

});