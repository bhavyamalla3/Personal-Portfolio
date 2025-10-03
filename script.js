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

// Skill circle animation with counting numbers
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-circle').forEach(circle=>{
        let percent = circle.getAttribute('data-percent');
        let color = circle.style.getPropertyValue('--color') || '#e67e22';
        let current = 0;

        // Add a span for percentage
        const percentSpan = document.createElement('span');
        percentSpan.classList.add('percent');
        percentSpan.innerText = '0%';
        circle.appendChild(percentSpan);

        let interval = setInterval(()=>{
            if(current >= percent) {
                clearInterval(interval);
                percentSpan.innerText = percent + '%';
            } else{
                current++;
                percentSpan.innerText = current + '%';
                let angle = (current/100)*360;
                circle.style.background = `conic-gradient(${color} 0deg ${angle}deg, #ddd ${angle}deg 360deg)`;
            }
        },10);
    });
});
