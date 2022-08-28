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
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
    },
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

var justin = new Swiper(".justin", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".jtn-rgt-btn",
    prevEl: ".jtn-lft-btn",
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
    },
  },
});

var toppicks = new Swiper(".toppicks", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".tpw-rgt-btn",
    prevEl: ".tpw-lft-btn",
  },
});

var gifting = new Swiper(".gifting", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".gft-rgt-btn",
    prevEl: ".gft-lft-btn",
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
    },
  },
});

var savers = new Swiper(".savers", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".sv-rgt-btn",
    prevEl: ".sv-lft-btn",
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
    },
  },
});

var crs_2 = new Swiper(".crs-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".my-custom-pagination-div-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".crs-2-rgt-btn",
    prevEl: ".crs-2-lft-btn",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var skincare = new Swiper(".skincare", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".skn-rgt-btn",
    prevEl: ".skn-lft-btn",
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
    },
  },
});

var sugar_beauty = new Swiper(".sugar-beauty", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".sbb-rgt-btn",
    prevEl: ".sbb-lft-btn",
  },
});

var crs_3 = new Swiper(".crs-3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".my-custom-pagination-div-3",
    clickable: true,
  },
  navigation: {
    nextEl: ".crs-3-rgt-btn",
    prevEl: ".crs-3-lft-btn",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var explore = new Swiper(".explore", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".exp-rgt-btn",
    prevEl: ".exp-lft-btn",
  },
});

function newPage() {
  window.location.href = "../html/indivisualPage.html";
}

document.getElementById("select_cart").addEventListener("click", () => {
  window.location.href = "./cart.html";
});
