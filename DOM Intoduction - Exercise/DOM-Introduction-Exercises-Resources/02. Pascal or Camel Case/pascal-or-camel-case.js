function solve() {
    const namingConvention = document.querySelector('#naming-convention').value;
    let text = document.querySelector('#text').value.toLowerCase();
    let result = "";

    if (namingConvention === 'Camel Case') {
        for (let word of text.split(' ')) {
            word = word.charAt(0).toUpperCase() + word.substring(1);
            result += word;
        }
        result = result.charAt(0).toLowerCase() + result.slice(1);
    } else if (namingConvention === 'Pascal Case') {
        for (let word of text.split(' ')) {
            word = word.charAt(0).toUpperCase() + word.substring(1);
            result += word;
        }
    } else {
        result = 'Error!';
    }

    document.querySelector('#result').textContent = result;
}
