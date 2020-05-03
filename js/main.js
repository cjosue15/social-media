const checkbox = document.querySelector('#checkbox');

// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     checkbox.setAttribute('checked', true);
// } else {
//     checkbox.setAttribute('checked', false);
// }

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.remove('is-light-mode');
        document.body.classList.add('is-dark-mode');
        localStorage.setItem('dark', 'true');
    } else {
        document.body.classList.remove('is-dark-mode');
        document.body.classList.add('is-light-mode');
        localStorage.setItem('dark', 'false');
    }
});

function saveDarkMode() {
    if (localStorage.getItem('dark')) {
        const dark = localStorage.getItem('dark');

        if (dark === 'true') {
            document.body.classList.add('is-dark-mode');
            document.body.classList.remove('is-light-mode');
            checkbox.setAttribute('checked', true);
        } else {
            document.body.classList.remove('is-dark-mode');
            document.body.classList.add('is-light-mode');
        }
    }
}

saveDarkMode();
