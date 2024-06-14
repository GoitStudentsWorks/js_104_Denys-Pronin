import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const mySwiper = document.querySelector('.mySwiper');
const nextButton = document.querySelector('.s-button-next');
const prevButton = document.querySelector('.s-button-prev');

async function getReviews() {
  return (await axios.get(`https://portfolio-js.b.goit.study/api/reviews`))
    .data;
}

async function init() {
  try {
    const reviews = await getReviews();

    function renderImages(reviews) {
      const markup = reviews
        .map(item => {
          return `<li class="swiper-item swiper-slide">
            <p class="text-review">${item.review}</p>
            <div class="reviewer">
              <img src="${item.avatar_url}" alt="${item.author}" class="reviewer-foto" />
              <p class="reviewer-name">${item.author}</p>
            </div>
          </li>`;
        })
        .join('');
      mySwiper.insertAdjacentHTML('beforeend', markup);
    }

    renderImages(reviews);

    const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.s-button-next',
        prevEl: '.s-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
        pageUpDown: true,
      },
      mousewheel: {
        sensitivity: 3,
      },

      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
    
function updateButtons() {
  if (swiper.isEnd) {
    nextButton.classList.add('disabled');
    nextButton.setAttribute('disabled', 'true');
  } else {
    nextButton.classList.remove('disabled');
    nextButton.removeAttribute('disabled');
  }
  if (swiper.isBeginning) {
    prevButton.classList.add('disabled');
    prevButton.setAttribute('disabled', 'true');
  } else {
    prevButton.classList.remove('disabled');
    prevButton.removeAttribute('disabled');
  }
}
    updateButtons();

    swiper.on('slideChange', updateButtons);
    
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

init();


