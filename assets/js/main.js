const swiper = new Swiper(".swiper", {
   loop: true,
   slidesPerView: 5,
   spaceBetween: 20,
   centeredSlides: true,
   grabCursor: true,
   autoplay: {
      delay: 4000,
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
