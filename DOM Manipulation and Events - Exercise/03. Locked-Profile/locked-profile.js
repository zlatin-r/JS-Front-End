document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const allButtons = document.querySelectorAll('button');

    allButtons.forEach(button => {
        button.addEventListener('click', event => {

            const parent = event.target.parentElement;
            const radioButton = parent.querySelector('input[type=radio]');

            if (!radioButton.checked) {
                const field = parent.querySelector('.hidden-fields');

                field.classList.remove('active');
            }
        });
    });
}