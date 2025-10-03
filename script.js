function showSection(sectionId){
    document.getElementById('welcome').style.display = 'none';
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    // Animate circular skill graphs
    if(sectionId === 'skills'){
        const circles = document.querySelectorAll('.skill-circle');
        circles.forEach(circle => {
            let percent = circle.getAttribute('data-percent');
            let angle = (percent/100)*360;
            circle.style.background = `conic-gradient(#f39c12 0deg ${angle}deg, #ddd ${angle}deg 360deg)`;
        });
    }
}

function backToWelcome(){
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('welcome').style.display = 'flex';
}
