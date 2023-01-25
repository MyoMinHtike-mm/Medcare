const navBar = document.querySelector('nav');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}


