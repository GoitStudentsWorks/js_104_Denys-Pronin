import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// const container = document.querySelector('.faq-list');
// const accordion = new Accordion(container, {
//   showMultiple: true,
//   onOpen: currEl => console.log('Open!', currEl),
// });
// console.log(accordion);

// const faqSubText = document.querySelectorAll('.faq-sub-text');

// const faqList = document.querySelector('faq-list');
// const itemFaqRow = document.querySelectorAll('.faq-row');
// const faqListItems = document.querySelectorAll('.faq-list-item');

// faqList.addEventListener('click', event => {});

const faqList = document.querySelector('.faq-list');
const fqaSubTextElements = document.querySelectorAll('.faq-sub-text');

faqList.addEventListener('click', function (event) {
  const faqRow = event.target.closest('.faq-row');
  if (faqRow) {
    const subText = faqRow.nextElementSibling;
    subText.classList.toggle('faq-sub-text-active');

    fqaSubTextElements.forEach(elem => {
      if (elem.classList.contains('faq-sub-text-active') && elem != subText) {
        elem.classList.remove('faq-sub-text-active');
      }
    });
  }
});
