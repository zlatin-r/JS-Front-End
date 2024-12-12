window.addEventListener("load", solve);

function solve() {

    function createElement(tag, properties, container) {
        const element = document.createElement(tag);

        Object.keys(properties).forEach(key => {
            if (typeof properties[key] === "object") {
                Object.assign(element[key], properties[key]);
            } else {
                element[key] = properties[key];
            }
        });

        if (container) {
            container.appendChild(element);
        }

        return element;
    }

    const field = document.querySelectorAll('#student, #university, #score');

}
  