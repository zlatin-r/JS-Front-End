document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const allButtons = document.querySelectorAll('input[type="submit"]');
    const daysEl = document.querySelector('#days-input');
    const hoursEl = document.querySelector('#hours-input');
    const minutesEl = document.querySelector('#minutes-input');
    const secondsEl = document.querySelector('#seconds-input');

    allButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const parentElement = event.target.parentElement;
            const timeType = event.target.parentElement.id;
            const timeValueEl = parentElement.querySelector('input[type="number"]');
            const timeValue = parseFloat(timeValueEl.value).toFixed(2);


            switch (timeType) {
                case 'days':
                    hoursEl.value = `${(timeValue * 24).toFixed(2)}`;
                    minutesEl.value = `${(timeValue * 1440).toFixed(2)}`;
                    secondsEl.value = `${(timeValue * 86400).toFixed(2)}`;
                    break;
                case 'hours':
                    daysEl.value = `${(timeValue / 24).toFixed(2)}`;
                    minutesEl.value = `${(timeValue * 60).toFixed(2)}`;
                    secondsEl.value = `${(timeValue * 3600).toFixed(2)}`;
                    break;
                case 'minutes':
                    daysEl.value = `${(timeValue / 1440).toFixed(2)}`;
                    hoursEl.value = `${(timeValue / 60).toFixed(2)}`;
                    secondsEl.value = `${(timeValue * 60).toFixed(2)}`;
                    break;
                case 'seconds':
                    daysEl.value = `${(timeValue / 86400).toFixed(2)}`;
                    hoursEl.value = `${(timeValue / 3600).toFixed(2)}`;
                    minutesEl.value = `${(timeValue / 60).toFixed(2)}`;
            }
        });
    });
}