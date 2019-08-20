import $ from 'jquery';
import { $HTMLBODY, $DOC } from '../constants';

export default function scrollTo() {
  const downBtn = 'js-scroll-down';

  function scrollDown(e) {
    e.preventDefault();
    const $parentSection = $(e.currentTarget).closest('section');
    const $nextSection = $parentSection.next('section');
    $HTMLBODY.animate({
      scrollTop: $nextSection.offset().top,
    }, 800);
  }

  $DOC.on('click', `.${downBtn}`, scrollDown);
}
