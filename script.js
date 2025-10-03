const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Animate skill bars when in view
const skillsSection = document.querySelector('.skills');
const skillLevels = document.querySelectorAll('.skill-level');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos){
        skillLevels.forEach(skill => {
            skill.style.width = skill.style.width; // triggers CSS transition
        });
    }
});
