document
  .querySelector('.work-together-form')
  .addEventListener('submit', async event => {
    event.preventDefault();

    const emailInput = document.querySelector('.work-together-email');
    const commentInput = document.querySelector('.work-together-comment');

    const requestData = {
      email: emailInput.value,
      comment: commentInput.value,
    };

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        showModal();
        document.querySelector('.work-together-form').reset();
      } else {
        const errorData = await response.json();
        showErrorNotification(`Помилка: ${errorData.message}`);
      }
    } catch (error) {
      showErrorNotification(
        'Виникла помилка при відправці запиту. Спробуйте ще раз.'
      );
    }
  });

document.querySelector('#close-modal').addEventListener('click', () => {
  closeModal();
});

function showModal(message) {
  const modalMessage = document.querySelector('#modal-message');
  modalMessage.textContent = message;
  document.querySelector('#modal').style.display = 'block';
}

function closeModal() {
  document.querySelector('#modal').style.display = 'none';
}

function showErrorNotification(message) {
  const errorMessage = document.querySelector('#error-message');
  errorMessage.textContent = message;
  document.querySelector('#error-notification').style.display = 'block';
}
