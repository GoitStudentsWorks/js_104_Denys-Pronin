import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const emailInput = document.querySelector('.work-together-email');
const emailErrorText = document.querySelector('.email-error-text');
const iconSuccess = document.querySelector('.icon-success-filled');
const form = document.querySelector('.work-together-form');
const modal = document.querySelector('.backdrop');
const modalCloseButton = document.querySelector('.modal-close');
const localStorageKey = 'work-together-form-state';

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  const isValidEmail = emailInput.checkValidity();

  if (isValidEmail) {
    iconSuccess.style.display = 'block';
    emailInput.classList.remove('invalid');
    emailErrorText.style.display = 'none';
  } else if (emailInput.value === '') {
    emailErrorText.style.display = 'none';
    emailInput.classList.remove('invalid');
  } else iconSuccess.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
  }
});

emailInput.addEventListener('blur', () => {
  validateEmail();
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

  if (!validateEmail()) {
    iziToast.error({
      title: 'Error',
      message: 'Invalid email, try again.',
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
      localStorage.removeItem(localStorageKey);
      iconSuccess.style.display = 'none';
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Error: ${response.data.message}',
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

function validateEmail() {
  const isValidEmail = emailInput.checkValidity();

  if (isValidEmail) {
    emailInput.classList.remove('invalid');
    iconSuccess.style.display = 'block';
    emailErrorText.style.display = 'none';
  } else if (emailInput.value === '') {
    emailErrorText.style.display = 'none';
    emailInput.classList.remove('invalid');
  } else {
    emailInput.classList.add('invalid');
    iconSuccess.style.display = 'none';
    emailErrorText.style.display = 'block';
    emailErrorText.textContent = 'Invalid email, try again';
  }

  return isValidEmail;
}

function showModal() {
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = 'auto';
}
