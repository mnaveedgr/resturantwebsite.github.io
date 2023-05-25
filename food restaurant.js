let navbar=document.querySelector('.navbar');
document.querySelector('#menu').onclick=()=>{
navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    
}
document.querySelector('#search').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
});



