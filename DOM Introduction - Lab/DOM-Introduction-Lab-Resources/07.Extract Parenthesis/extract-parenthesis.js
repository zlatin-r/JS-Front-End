function extract(content) {
    const text = document.querySelector('#' + content).textContent;
    const pattern = /\(([^()]+)\)/g;

    return ([...text.matchAll(pattern)].map(el => el[1]).join('; '));
}