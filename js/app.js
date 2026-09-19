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