'use strict';

const currentYear = new Date().getFullYear();
const yearEl = document.querySelector('.year');
yearEl.textContent = currentYear;

const header = document.querySelector('.header');
const mobileHeaderBtn = document.querySelector('.btn-mobile-nav');
const heroSectionEl = document.querySelector('.section-hero')

mobileHeaderBtn.addEventListener('click',() => header.classList.toggle('nav-open'))

// smooth scrolling animation
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        if(href === "#") {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        }

        if(href !== "#" && href.startsWith("#")) {
            const scrollToEl = document.querySelector(href);
            scrollToEl.scrollIntoView({behavior: "smooth"})
        }

        if(link.classList.contains('main-nav-link')) header.classList.toggle('nav-open');
    })
})

// Steaky navigation

const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    console.log(ent.isIntersecting);

    if(ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    }
    else document.body.classList.remove('sticky')
}, {
    root: null,
    threshold: 0,
});
observer.observe(heroSectionEl);