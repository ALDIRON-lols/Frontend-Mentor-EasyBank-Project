const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeEelems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
    console.log('console hamburger.');

    if(header.classList.contains('open')){//closing
        header.classList.remove('open');
        body.classList.remove('noScroll');
        fadeEelems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })        
    }
    else{//opening
        header.classList.add('open');   
        body.classList.add('noScroll');
        fadeEelems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })        
    }
})