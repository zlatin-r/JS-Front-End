function editElement(el, match, replace) {
    const htmlElement = el.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = htmlElement.replace(matcher, replace);
    el.textContent = edited;
}