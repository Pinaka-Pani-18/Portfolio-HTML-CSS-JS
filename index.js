// Navbar active button 
const aEls = document.querySelectorAll("nav ul li a");

aEls.forEach((aEl)=>{
    aEl.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        aEl.classList.add("active");
    })
})


// Hamburger 
const menuEl = document.querySelector("#hamburger");
const navEL = document.querySelector("header nav")

menuEl.addEventListener("click",()=>{
    menuEl.classList.toggle('fa-times');
    navEL.classList.toggle('checked');
});


// Text Typing
var typed = new Typed('.text-type', {
    strings: ["Web Developer", "Programmer", "Open Source Contributor", "Youtuber"],
    typeSpeed: 100,
    // backSpeed: 150,
    loop: true,
  });


//   Projects filtering
const btnEls =document.querySelectorAll("#projects .menu .btn");
const projectBoxEls =document.querySelectorAll(".project-box");

// for(let i=1; i<btnEls.length; i++){
//     btnEls[i].addEventListener("click",filterableFun);
// }

// function setActive(e){
//     btnEls.forEach(btn=>{
//         btn.classList.remove("activeProject");
//     })
//     e.target.classList.add("activeProject");
// }

// function filterableFun(e){
//     setActive(e);

//     projectBoxEls.forEach(projects =>{
//         projects.classList.remove("projects-shrink");
//         projects.classList.add("projects-expand");

//         const btnType = e.target.dataset.name;
//         console.log(btnType)
//         const projectType = projects.dataset.project;
//         console.log(projectType)

//         if(btnType!==projectType){
//             projects.classList.remove("projects-expand");
//             projects.classList.add("projects-shrink");

//         console.log("came")
//         }
//     })
// }

// btnEls[0].addEventListener("click",(e)=>{
//     setActive(e);
//     projectBoxEls.forEach(pro=>{
//         pro.classList.remove("projects-shrink");
//         pro.classList.add("projects-expand");
//     })
// })

btnEls.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

document.querySelector(".activeProject").classList.remove("activeProject");
        btn.classList.add("activeProject");

        const name = e.target.dataset.name;
        
        projectBoxEls.forEach((itemEl)=>{
            // itemEl.classList.remove("projects-shrink");
            // itemEl.classList.add("projects-expand");
            if(name==="all"){
                itemEl.style.display = "block"
            }else{
                if(itemEl.classList.contains(name)){
                    itemEl.style.display = "block"
                    // itemEl.classList.add("projects-expand");
                    // itemEl.classList.remove("projects-shrink");

                }else{
                    itemEl.style.display = "none";
                    // itemEl.classList.remove("projects-expand");
                    // itemEl.classList.add("projects-shrink");

                }
            }
        })
    })
})


// Disabling Inspect Element 
// document.onkeydown = function(e) {
//     if(event.keyCode == 123) {
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
//         return false;
//         }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//     return false;
//     }
//     }


// Scroll Spy
// var section = document.querySelectorAll("section");
// var sections = {};
// var i = 0;

// Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
// });

// window.onscroll = function () {
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     console.log("Start")

//     for (i in sections) {
//         console.log(i)
//         console.log(sections)
//         console.log(scrollPosition)
//         console.log(sections[i])
//     if (sections[i] <= scrollPosition) {
//         document.querySelector(".active").setAttribute("class", "");
//         document.querySelector("a[href*=" + i + "]").setAttribute("class", "active");
//     }
//     }
// };


// reload
// window.onresize =()=>{
//     x = window.innerWidth; 
//     y= window.innerHeight;
//     e = false;
//     if( x>850 && x<900 || x>650 && x<700 ){
//         e = true;
//     }
//     if(e){
//         location.reload();
//         e = false;
//     }
// }
