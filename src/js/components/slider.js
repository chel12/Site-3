import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.project-min__swiper', {
  slidesPerView: '1',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
