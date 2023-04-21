
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



// let search = document.querySelector('.search');
// document.querySelector('#search').onclick=() =>{
//     search.classList.toggle('active');
// } is replaced by below
$(document).ready(function() {
  // Initialize the jQuery UI Autocomplete widget
  $('#search-input').autocomplete({
    source: ['Chocolate Cake ', 'Strawberry Cake', 'Vanilla Cake', 'Date-Walnut Cake', 'Mulberry Cake'],
    autoFocus: true,
    delay: 0,
    minLength: 0
  });
  
  // Bind the click event to toggle the 'active' class on the search field
  $('#search').on('click', function() {
    $('.search').toggleClass('active');
    $('#search-input').focus();
  });
});



var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });