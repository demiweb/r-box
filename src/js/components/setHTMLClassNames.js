import { isTouch, isIE } from '../helpers';
import { NO_TOUCH, IS_READY } from '../constants';

export function setTouch() {
  if (!isTouch) {
    document.documentElement.classList.add(NO_TOUCH);
  }
}

export function detectIE() {
  if (isIE) {
    document.documentElement.classList.add('is-ie');
  }
}

export function setReady() {
  document.body.classList.add(IS_READY);
}
