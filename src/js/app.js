import sayHello from './lib/sayHello';
import { setTouch, detectIE } from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';


$(function() {
  sayHello();
  setTouch();
  detectIE();
  setLazy();
  setSliders();
});
