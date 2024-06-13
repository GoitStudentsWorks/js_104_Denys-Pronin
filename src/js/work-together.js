document
  .querySelector('.work-together-form')
  .addEventListener('submit', async event => {
    event.preventDefault();
    const email = document.querySelector('.work-together-email').value;
    const message = document.querySelector('.work-together-comment').value;

    const requestData = {
      email: email,
      message: message,
    };

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        showModal('Вашу заявку успішно створено!');
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

document.getElementById('close-modal').addEventListener('click', () => {
  closeModal();
});

function showModal(message) {
  document.getElementById('modal-message').textContent = message;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function showErrorNotification(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('error-notification').style.display = 'block';
}
