document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    const formEmailInput = document.getElementById('newsletterFormEmail');
    const formControl = formEmailInput.closest('.form-control');
    const modalSuccess = document.getElementById('modalSuccess');
    const modalSuccessBtn = document.getElementById('modalSuccessBtn');
    const modalEmail = document.getElementById('modalSuccessEmail');

    formEmailInput.addEventListener('input', () => {
        formControl.classList.remove('form-control--error');
        formEmailInput.classList.remove('error');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValue = formEmailInput.value.trim();

        if (!validateEmail(emailValue)) {
            formControl.classList.add('form-control--error');
            formEmailInput.classList.add('error');
            return;
        }

        modalEmail.textContent = emailValue;

        form.classList.add('fade-out');
        setTimeout(() => {
            form.style.display = 'none';
            modalSuccess.style.display = 'flex';
            setTimeout(() => {
                modalSuccess.classList.add('fade-in');
                modalSuccessBtn.focus();
            }, 10);
        }, 400);
    });

    modalSuccessBtn.addEventListener('click', () => {
        modalSuccess.classList.remove('fade-in');
        setTimeout(() => {
            modalSuccess.style.display = 'none';
            form.style.display = '';
            setTimeout(() => {
                form.classList.remove('fade-out');
            }, 10);
        }, 400);
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});