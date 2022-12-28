const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');



burger.addEventListner('click' ,()=>{
    navList.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')

})
    
