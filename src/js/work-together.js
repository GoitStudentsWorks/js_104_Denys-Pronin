import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const emailInput = document.querySelector('.work-together-email');
const emailErrorText = document.querySelector('.email-error-text');
const iconSuccess = document.querySelector('.icon-success-filled');
const form = document.querySelector('.work-together-form');
const modal = document.querySelector('.backdrop');
const modalCloseButton = document.querySelector('.modal-close');

form.addEventListener('input', () => {
  const isValidEmail = emailInput.checkValidity();

  if (isValidEmail) {
    emailInput.classList.remove('invalid');
    iconSuccess.style.display = 'block';
    emailErrorText.style.display = 'none';
  } else {
    emailInput.classList.add('invalid');
    iconSuccess.style.display = 'none';
    emailErrorText.style.display = 'block';
  }
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const commentValue = document.querySelector('.work-together-comment').value;

  if (!emailValue || !commentValue) {
    iziToast.error({
      title: 'Error',
      message: 'All fields are required.',
    });
    return;
  }

  const requestData = {
    email: emailValue,
    comment: commentValue,
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
      form.reset();
      iconSuccess.style.display = 'none';
    } else {
      iziToast.error({
        title: 'Error',
        message: `Error: ${response.data.message}`,
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'There was an error sending the request. Please try again.',
    });
  }
});

modalCloseButton.addEventListener('click', () => {
  closeModal();
});

function showModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
}
