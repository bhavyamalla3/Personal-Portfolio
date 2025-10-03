function showSection(sectionId){
    document.getElementById('welcome').style.display = 'none';
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    // Animate skills when opening skills section
    if(sectionId === 'skills'){
        let bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            let finalWidth = bar.getAttribute("style").match(/width:\s*([0-9]+%)/)[1];
            bar.style.width = "0"; // reset
            setTimeout(() => { bar.style.width = finalWidth; }, 100);
        });
    }
}

function backToWelcome(){
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('welcome').style.display = 'flex';
}
