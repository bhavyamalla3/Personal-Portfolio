function showSection(sectionId){
    document.getElementById('welcome').style.display = 'none';
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function backToWelcome(){
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('welcome').style.display = 'flex';
}
