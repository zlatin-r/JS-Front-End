document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailEl = document.querySelector('#email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    emailEl.addEventListener('change', (e) => {
        if (!pattern.test(e.currentTarget.value)) {
            return e.currentTarget.classList.add('error');
        }
        return e.currentTarget.classList.remove('error');
    });
}
