const swiper = new Swiper(".swiper", {
   loop: true,
   slidesPerView: 2,
   spaceBetween: 10,
   centeredSlides: true,
   grabCursor: true,
   autoplay: {
      delay: 4000,
   },
   breakpoints: {
      312: {
         slidesPerView: 2,
         spaceBetween: 10,
         centeredSlides: true,
      },
      662: {
         slidesPerView: 3,
         spaceBetween: 15,
         centeredSlides: true,
      },
      992: {
         slidesPerView: 5,
         spaceBetween: 15,
         centeredSlides: true,
      },
   },

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
