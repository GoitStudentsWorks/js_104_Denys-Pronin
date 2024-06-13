import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const mySwiper = document.querySelector('.mySwiper');

async function getReviews() {
  return (await axios.get(
    `https://portfolio-js.b.goit.study/api/reviews`
  )).data;
}

async function init() {
  try {
    const reviews = await getReviews(); 

    function renderImages(reviews) {
      const markup = reviews
        .map(item => {
          console.log(item);
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

  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}


init(); 
 const swiper = new Swiper('.swiper', {
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });