const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    1560: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },

  615: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20
  },
  200: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const swiper__gallery = new Swiper('.swiper-container', {
  onlyExternal: true,

  breakpoints: {
    995: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    615: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination-event',
  },
  navigation: {
    nextEl: '.swiper-evnets-button-next',
    prevEl: '.swiper-evnets-button-prev',
  },
});


const swiper__projects = new Swiper('.swiper__projects-container', {

  breakpoints: {
    1560: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20
    },
    615: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: '.swiper-projects-button-next',
    prevEl: '.swiper-projects-button-prev',
  },
});