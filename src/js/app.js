// import '@babel/polyfill';
import $ from 'jquery';
import sayHello from './lib/sayHello';
import { setTouch, detectIE } from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setScrollbar from './components/setScrollbar';
import setInputMask from './components/setInputMask';
import toggleMenu from './components/toggleMenu';
import scrollTo from './components/scrollTo';

$(() => {
  sayHello();
  setTouch();
  detectIE();
  setLazy();
  setSliders();
  setScrollbar();
  setInputMask();
  toggleMenu();
  scrollTo();
});
