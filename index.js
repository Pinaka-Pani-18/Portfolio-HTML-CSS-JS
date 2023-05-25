const aEls = document.querySelectorAll("nav ul li a");

aEls.forEach((aEl)=>{
    aEl.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        aEl.classList.add("active");
    })
})

var typed = new Typed('.text-type', {
    strings: ["Web Developer", "Programmer", "Open Source Contributor", "Youtuber"],
    typeSpeed: 100,
    // backSpeed: 150,
    loop: true,
  });
