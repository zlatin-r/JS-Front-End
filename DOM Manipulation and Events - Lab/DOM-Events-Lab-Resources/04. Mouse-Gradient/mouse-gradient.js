function attachGradientEvents() {
    const resultEl = document.querySelector('#result');
    const gradientEl = document.querySelector('#gradient');

    gradientEl.addEventListener('mousemove', (e) => {
        const currentPosition = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth;

        const percentage = Math.floor((currentPosition / elementWidth) * 100);

        resultEl.textContent = `${percentage}%`;
    });
}
