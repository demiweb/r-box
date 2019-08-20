import $ from 'jquery';
import 'slick-carousel';
import setLazy from './setLazy';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if (!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.dataset.slider;
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');
    const options = {
      projects: {
        prevArrow: $prev,
        nextArrow: $next,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };

    $(slider).on('init', setLazy);
    $(slider).slick(options[name]);
  });
}
