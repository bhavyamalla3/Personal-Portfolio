document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-circle').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const color = circle.style.getPropertyValue('--color') || '#e67e22';
        let current = 0;

        const percentSpan = document.createElement('span');
        percentSpan.classList.add('percent');
        percentSpan.innerText = '0%';
        circle.appendChild(percentSpan);

        const interval = setInterval(() => {
            if(current >= percent) {
                clearInterval(interval);
                percentSpan.innerText = percent + '%';
            } else {
                current++;
                percentSpan.innerText = current + '%';
                const angle = (current/100)*360;
                circle.style.background = `conic-gradient(${color} 0deg ${angle}deg, #ddd ${angle}deg 360deg)`;
            }
        }, 10);
    });
});
