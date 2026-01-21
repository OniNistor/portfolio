// currrent year in copyright
document.querySelector(".copyright-year").textContent =
  new Date().getFullYear();

//mobile nav
const headerEl = document.querySelector(".header");
const mobileNavBtnEl = document.querySelector(".mobile-nav-btn");

mobileNavBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  headerEl.classList.toggle("nav-open");
  console.log("clicled");
});

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
