const btnMobile = document.getElementById('btn-mobile');
        
function toggleMenu(event){
    if(event.type === 'touchstart') {
        event.preventDefault()
    }
    
const div = document.getElementById('div');
div.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)