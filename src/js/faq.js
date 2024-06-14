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
    const faqListItem = faqRow.parentElement;

    faqListItem.classList.toggle('faq-list-item-active');
    faqListItems.forEach(elem => {
      if (
        elem.classList.contains('faq-list-item-active') &&
        elem != faqListItem
      ) {
        elem.classList.remove('faq-list-item-active');
      }
      if (faqListItem.previousElementSibling) {
        if (
          elem == faqListItem &&
          faqListItem.classList.contains('faq-list-item-active')
        ) {
          faqListItem.previousElementSibling.style.borderBottom = 'none';
          console.log('none');
        } else if (
          elem == faqListItem &&
          !faqListItem.classList.contains('faq-list-item-active')
        ) {
          console.log('else if');
          faqListItem.previousElementSibling.style.borderBottom =
            '1px solid #ff0000';
        }
      }
    });
  }
});

// if (prevListItem && prevListItem.classList.contains('faq-list-item')) {
//   if (faqRow === faqListItem.firstElementChild && isListItemActive) {
//     prevListItem.style.borderBottom = 'none';
//     console.log('First element clicked, borderBottom set to none');
//   } else if (faqRow === faqListItem.firstElementChild && !isListItemActive) {
//     prevListItem.style.borderBottom = '1px solid #ff0000';
//     console.log('First element clicked, borderBottom set to red');
//   } else if (
//     faqRow !== faqListItem.firstElementChild &&
//     prevListItem.style.borderBottom === 'none'
//   ) {
//     prevListItem.style.borderBottom = '1px solid #ff0000';
//     console.log('Previous element, borderBottom set to red');
//   }
// }
