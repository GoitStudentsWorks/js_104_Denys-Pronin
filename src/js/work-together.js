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

document.getElementById('close-modal').addEventListener('click', () => {
  closeModal();
});

function showModal() {
  document.querySelector('').style.display = 'block';
}

function closeModal() {
  document.querySelector('').style.display = 'block';
}

function showErrorNotification(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('error-notification').style.display = 'block';
}
