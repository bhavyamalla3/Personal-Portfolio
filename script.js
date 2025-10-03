window.onload = () => {
    const circles = document.querySelectorAll('.skill-circle');
    circles.forEach(circle=>{
        let percent = circle.getAttribute('data-percent');
        let color = circle.style.getPropertyValue('--color') || '#f39c12';
        let current = 0;
        let interval = setInterval(()=>{
            if(current>=percent) clearInterval(interval);
            else {
                current++;
                let angle = (current/100)*360;
                circle.style.background = `conic-gradient(${color} 0deg ${angle}deg,#ddd ${angle}deg 360deg)`;
            }
        },15);
    });
};
