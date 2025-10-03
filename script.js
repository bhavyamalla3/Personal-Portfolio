// Scroll to section from welcome buttons
function scrollToSection(sectionId){
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior:'smooth'});
}

// Burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Animate skill bars
const skillsSection = document.querySelector('.skills');
const skillLevels = document.querySelectorAll('.skill-level');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if(sectionPos < screenPos){
        skillLevels.forEach(skill => { skill.style.width = skill.style.width; });
    }
});

// Fade-in sections
const allSections = document.querySelectorAll('.section');
const revealSection = () => {
    allSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < window.innerHeight - 100){
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Highlight active nav link
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(scrollY >= sectionTop - 60){ current = section.getAttribute('id'); }
    });
    navLi.forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('href') === `#${current}`){ a.classList.add('active'); }
    });
});
