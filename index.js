// Navbar active button
const aEls = document.querySelectorAll("nav ul li a");

aEls.forEach((aEl) => {
  aEl.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    aEl.classList.add("active");
  });
});

// Hamburger
const menuEl = document.querySelector("#hamburger");
const navEL = document.querySelector("header nav");

menuEl.addEventListener("click", () => {
  menuEl.classList.toggle("fa-times");
  navEL.classList.toggle("checked");
});

// Text Typing
var typed = new Typed(".text-type", {
  strings: [
    "Web Developer",
    "Programmer",
    "Open Source Contributor",
    "Blogger",
    "Youtuber",
  ],
  typeSpeed: 100,
  // backSpeed: 150,
  loop: true,
});

//   Projects filtering
const btnEls = document.querySelectorAll("#projects .menu .btn");
const projectBoxEls = document.querySelectorAll(".project-box");

btnEls.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".activeProject").classList.remove("activeProject");
    btn.classList.add("activeProject");

    const name = e.target.dataset.name;
    console.log(name);

    projectBoxEls.forEach((itemEl) => {
      if (name === "all") {
        itemEl.style.display = "block";
      } else {
        if (itemEl.classList.contains(name)) {
          console.log("came");
          itemEl.style.display = "block";
        } else {
          itemEl.style.display = "none";
        }
      }
    });
  });
});

// Disabling Inspect Element
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Scroll to Top
const scrollToTopEl = document.querySelector(".scrollToTop");

function goToTop() {
  window.scrollTo(0, 0);
}

window.onscroll = () => {
  if (window.scrollY > 100) {
    scrollToTopEl.classList.add("activeScrollToTop");
  } else {
    scrollToTopEl.classList.remove("activeScrollToTop");
  }
};

scrollToTopEl.addEventListener("click", goToTop);

// Scroll Reveal Animation
const scrollRev = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 600,
  reset: true,
});

scrollRev.reveal(".home-wrapper h2", { delay: 300 });
scrollRev.reveal(".home-wrapper p", { delay: 300 });
scrollRev.reveal(".home-wrapper .home-logo img", { delay: 600 });
scrollRev.reveal(".home-wrapper .fa-instagram", { delay: 600 });
scrollRev.reveal(".home-wrapper .fa-blogger", { delay: 700 });
scrollRev.reveal(".home-wrapper .fa-linkedin", { delay: 800 });
scrollRev.reveal(".home-wrapper .fa-youtube", { delay: 900 });
scrollRev.reveal(".home-wrapper .fa-telegram", { delay: 1000 });
scrollRev.reveal(".home-wrapper .fa-github", { delay: 1200 });
scrollRev.reveal(".home-wrapper button", { delay: 1200 });

scrollRev.reveal(".about-wrapper h1", { delay: 200 });
scrollRev.reveal(".about-wrapper .about-logo", { delay: 400 });
scrollRev.reveal(".about-wrapper .about-content h2", { delay: 500 });
scrollRev.reveal(".about-wrapper .about-content h4", { delay: 600 });
scrollRev.reveal(".about-wrapper .about-content p", { delay: 700 });
scrollRev.reveal(".about-wrapper .about-content span", { delay: 800 });
scrollRev.reveal(".about-wrapper .about-content button", { delay: 900 });

scrollRev.reveal(".education-wrapper h1", { delay: 200 });
scrollRev.reveal(".education-wrapper .box", { interval: 400 });

scrollRev.reveal(".skills-wrapper h1", { delay: 200 });
scrollRev.reveal(".skills-wrapper .skills-container .skill", { interval: 200 });

scrollRev.reveal(".experience-wrapper h1", { delay: 200 });
scrollRev.reveal(".experience-wrapper .experience-container .experience-box", {
  interval: 300,
});

scrollRev.reveal(".projects-wrapper h1", { delay: 200 });
scrollRev.reveal(".projects-wrapper .menu button", { interval: 200 });
scrollRev.reveal(".projects-wrapper .projects-container .project-box", {
  interval: 150,
});

// scrollRev.reveal(".contact-wrapper h1", { delay: 200 });
// scrollRev.reveal(".contact-wrapper .left-side div", { interval: 100 });
// scrollRev.reveal(".contact-wrapper .right-side .topic-text", { delay: 200 });
// scrollRev.reveal(".contact-wrapper .right-side p", { delay: 200 });
// scrollRev.reveal(".contact-wrapper .right-side form div", { interval: 300 });
