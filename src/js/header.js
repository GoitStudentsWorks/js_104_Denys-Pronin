
    const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            console.log('Dark theme');
            document.body.classList.add('dark');
        } else {
            console.log('Light theme');
            document.body.classList.remove('dark');
        }
    });
