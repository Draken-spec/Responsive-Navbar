let menue = document.querySelector('#enue-icon');
let navlist = document.querySelector('.navlist');

menue.onclick = () => {
    menue.classList.toggle('bx-x');
    navlist.classList.toggle('open');
     
};