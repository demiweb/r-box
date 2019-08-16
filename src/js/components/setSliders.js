import slick from 'slick-carousel';
import setLazy from '../components/setLazy';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.dataset.slider;
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');
    const options = {
      projects: {
        prevArrow: $prev,
        nextArrow: $next,
        slidesToShow: 4
      }
    };

    $(slider).on('init', () => {
      setLazy();
    });
    $(slider).slick(options[name]);
  });
}
