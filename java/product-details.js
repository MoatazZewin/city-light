let swiperRelatedProduct;

swiperRelatedProduct = swiperArticles = new Swiper(".swiper-related-product", {
  slidesPerView: 4, // Show 3 slides at a time
  spaceBetween: 10, // Space between slides (optional)
  loop: true, // Enable infinite looping

  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3, // Show 3 slides on tablets and larger
    },
    0: {
      slidesPerView: 2, // Show 1 slide on phones
    },
  },
});
