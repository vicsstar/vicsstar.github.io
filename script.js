/* ==========================================
   Victor Igbokwe Portfolio
   script.js
========================================== */

/* Smooth scrolling for navigation */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   Active Navigation Highlight
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   Scroll Reveal Animation
========================================== */

const revealItems = document.querySelectorAll(

    ".timeline-item, .project-card, .skill-group, .expertise-card, .education-card, .development-card"

);

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

revealItems.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});


/* ==========================================
   Back To Top Button
========================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   Header Shadow
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   Typing Effect
========================================== */

const subtitle = document.querySelector(".tag");

if(subtitle){

    const text = subtitle.textContent;

    subtitle.textContent="";

    let i=0;

    function type(){

        if(i<text.length){

            subtitle.textContent += text.charAt(i);

            i++;

            setTimeout(type,35);

        }

    }

    type();

}


/* ==========================================
   Floating Hero Image
========================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth/2-e.clientX)/70;

    const y = (window.innerHeight/2-e.clientY)/70;

    heroImage.style.transform=

        `translate(${x}px,${y}px)`;

});


/* ==========================================
   Current Year
========================================== */

const year = document.querySelector("#currentYear");

if(year){

    year.textContent = new Date().getFullYear();

}


/* ==========================================
   Console Signature
========================================== */

console.log(

"%cVictor Igbokwe Portfolio",

"color:#3b82f6;font-size:20px;font-weight:bold"

);

console.log(

"Built with HTML, CSS & JavaScript"

);
