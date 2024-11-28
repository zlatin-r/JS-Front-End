document.addEventListener('DOMContentLoaded', () => {
    const textEl = document.querySelector('.text');

    textEl.textContent.trim().split(' ').forEach(word => {

        const wordEl = document.createElement('span');
        wordEl.classList.add('word');

        const spaceEl = document.createElement('span');
        spaceEl.classList.add('space');

        word.split(' ').forEach(letter => {
            const letterEl = document.createElement('span');
            letterEl.classList.add('letter');

            const charactersEl = document.createElement('span');
            charactersEl.classList.add('character');
        })

        textEl.append(wordEl, spaceEl)
    })
})