import Accordion from 'accordion-js';

const according = document.querySelector('.faq-list');
const listItemAc = document.querySelectorAll('.ac');

new Accordion(according, {
  openOnInit: [0],
  collapse: true,
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
