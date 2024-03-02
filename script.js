let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
// Scroll section
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar---------
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window > 100);
};
//  remove toggle and navbar-------
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");
// scroll show-----------

ScrollReveal({
  distance: "8-px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".homeimage, .service-container,.portfolio-box,contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1", { origin: "left" });
ScrollReveal().reveal(".home-contact p,.about-content", { origin: "right" });
// typed js------

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
