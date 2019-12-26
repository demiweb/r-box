import 'lightgallery.js';
import 'lg-zoom.js';
import 'lg-fullscreen.js';
import 'lg-autoplay.js';
import 'lg-share.js';
import 'lg-thumbnail.js';

export default function setgallery() {
  const lgs = [].slice.call(document.querySelectorAll('.js-lightgallery'));

  if (!lgs.length) return;

  lgs.forEach((lg) => {
    // eslint-disable-next-line
    lightGallery(lg, {
      exThumbImage: 'data-exthumbimage',
    });
  });
}
