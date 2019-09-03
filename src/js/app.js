// import '@babel/polyfill';
import $ from 'jquery';
import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setScrollbar from './components/setScrollbar';
// import setInputMask from './components/setInputMask';
import toggleMenu from './components/toggleMenu';
import scrollTo from './components/scrollTo';
import setSelects from './components/setSelects';
import setTextareaAutoheight from './components/setTextareaAutoheight';
import toggleFormLabels from './components/toggleFormLabels';
import setGallery from './components/setGallery';

$(() => {
  sayHello();
  setHTMLClassNames();
  setLazy();
  setSliders();
  setScrollbar();
  // setInputMask();
  toggleMenu();
  scrollTo();
  setSelects();
  setTextareaAutoheight();
  toggleFormLabels();
  setGallery();
});
