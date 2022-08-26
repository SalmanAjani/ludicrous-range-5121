var bestsellers = new Swiper(".bestsellers", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".bst-rgt-btn",
    prevEl: ".bst-lft-btn",
  },
});

var head = new Swiper(".head", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".my-custom-pagination-div",
    clickable: true,
  },
  navigation: {
    nextEl: ".crs-rgt-btn",
    prevEl: ".crs-lft-btn",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var hotdeals = new Swiper(".hotdeals", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".htd-rgt-btn",
    prevEl: ".htd-lft-btn",
  },
});
