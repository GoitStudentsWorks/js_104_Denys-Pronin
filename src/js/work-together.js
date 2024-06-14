import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
document
  .querySelector('.work-together-form')
  .addEventListener('submit', async event => {
    event.preventDefault();

    const emailInput = document.querySelector('.work-together-email');
    const commentInput = document.querySelector('.work-together-comment');

    const isValidEmail = emailInput.checkValidity();

    if (!isValidEmail) {
      emailInput.classList.add('invalid');
      return;
    } else {
      emailInput.classList.remove('invalid');
    }

    const requestData = {
      email: emailInput.value,
      comment: commentInput.value,
    };

    try {
      const response = await axios.post(
        'https://portfolio-js.b.goit.study/api/requests',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      if (response.status === 201) {
        showModal();
        document.querySelector('.work-together-form').reset();
      } else {
        iziToast.error({
          title: 'Error',
          message: `Помилка: ${response.data.message}`,
        });
      }
    } catch (error) {
      if (error.response) {
        iziToast.error({
          title: 'Error',
          message: `Помилка: ${error.response.data.message}`,
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Виникла помилка при відправці запиту. Спробуйте ще раз.',
        });
      }
    }
  });

document.querySelector('.modal-close').addEventListener('click', () => {
  closeModal();
});

function showModal() {
  document.querySelector('.backdrop').classList.add('is-open');
}

function closeModal() {
  document.querySelector('.backdrop').classList.remove('is-open');
}
