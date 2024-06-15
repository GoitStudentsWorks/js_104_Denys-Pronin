import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const according = document.querySelector('.faq-list');
const listItemAc = document.querySelectorAll('.ac');

new Accordion(according, {
  duration: 400,
  showMultiple: false,
  beforeOpen: function (currentElement) {
    if (currentElement.previousElementSibling) {
      currentElement.previousElementSibling.classList.add('no-border-bottom');
    }
    currentElement.classList.add('no-border-bottom');
  },
  beforeClose: function () {
    listItemAc.forEach(elem => {
      elem.classList.remove('no-border-bottom');
    });
  },
});
