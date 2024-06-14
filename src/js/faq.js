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
const faqListItems = document.querySelectorAll('.faq-list-item');

faqList.addEventListener('click', function (event) {
  const faqRow = event.target.closest('.faq-row');
  if (faqRow) {
    faqRow.parentElement.classList.toggle('faq-list-item-active');

    faqListItems.forEach(elem => {
      if (
        elem.classList.contains('faq-list-item-active') &&
        elem != faqRow.parentElement
      ) {
        elem.classList.remove('faq-list-item-active');
      }
      // if (
      //   elem == faqRow.parentElement &&
      //   faqRow.parentElement.classList.contains('faq-list-item-active')
      // ) {
      //   faqRow.parentElement.previousElementSibling.style.borderBottom = 'none';
      //   console.log('none');
      // } else if (
      //   elem == faqRow.parentElement &&
      //   !faqRow.parentElement.classList.contains('faq-list-item-active')
      // ) {
      //   faqRow.parentElement.previousElementSibling.style.borderBottom =
      //     '1px solid #ff0000';
      //   console.log('else');
      // }
    });
  }
});
