// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-section');
const options = {threshold:0.1};
const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, options);
faders.forEach(fader => appearOnScroll.observe(fader));

// Skill circle animation on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-circle').forEach(circle=>{
        let percent = circle.getAttribute('data-percent');
        let color = circle.style.getPropertyValue('--color') || '#e67e22';
        let current = 0;
        let interval = setInterval(()=>{
            if(current >= percent) clearInterval(interval);
            else{
                current++;
                let angle = (current/100)*360;
                circle.style.background = `conic-gradient(${color} 0deg ${angle}deg, #ddd ${angle}deg 360deg)`;
            }
        },10);
    });
});
