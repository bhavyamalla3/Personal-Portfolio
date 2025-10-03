function showSection(sectionId){
    // Hide welcome
    document.getElementById('welcome').style.display = 'none';
    // Hide all sections first
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
}

function backToWelcome(){
    // Hide all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    // Show welcome screen
    document.getElementById('welcome').style.display = 'flex';
}
