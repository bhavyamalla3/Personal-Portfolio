function showSection(sectionId){
    document.getElementById('welcome').style.display = 'none';
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    // Animate skill bars
    if(sectionId === 'skills'){
        let bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = bar.getAttribute("data-width");
            }, 100);
        });
    }
}

function backToWelcome(){
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('welcome').style.display = 'flex';
}
