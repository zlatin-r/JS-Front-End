function solve() {
    const namingConvention = document.querySelector('#naming-convention').value;
    let text = document.querySelector('#text').value.toLowerCase().split(' ');
    let result = "";

    function camelCase(text) {
        for (let word of text) {
            result += word.charAt(0).toUpperCase() + word.substring(1);
        }
        return result.charAt(0).toLowerCase() + result.slice(1);
    }

    function pascalCase(text) {
        for (let word of text) {
            result += word.charAt(0).toUpperCase() + word.substring(1);
        }
        return result
    }

    if (namingConvention === 'Camel Case') {
        result = camelCase(text);
    } else if (namingConvention === 'Pascal Case') {
        result = pascalCase(text);
    } else {
        result = 'Error!'
    }
    document.querySelector('#result').textContent = result;
}


// function solve() {
//     const namingConvention = document.querySelector('#naming-convention').value;
//     let text = document.querySelector('#text').value.toLowerCase();
//     let result = "";
//
//     if (namingConvention === 'Camel Case') {
//         for (let word of text.split(' ')) {
//             result += word.charAt(0).toUpperCase() + word.substring(1);
//         }
//         result = result.charAt(0).toLowerCase() + result.slice(1);
//     } else if (namingConvention === 'Pascal Case') {
//         for (let word of text.split(' ')) {
//             result += word.charAt(0).toUpperCase() + word.substring(1);
//         }
//     } else {
//         result = 'Error!'
//     }
//     document.querySelector('#result').textContent = result;
// }


// function solve() {
//
//     const input = document.querySelector('#text').value.toLowerCase().split(' ');
//     const convention = document.querySelector('#naming-convention').value.toLowerCase().trim();
//     const resultEl = document.querySelector('#result');
//
//     function capitaliseWord(word) {
//         return word[0].toUpperCase() + word.slice(1);
//     }
//
//     switch (convention) {
//         case 'camel case':
//             resultEl.textContent = input[0] + input.slice(1).map(capitaliseWord).join('');
//             break;
//         case 'pascal case':
//             resultEl.textContent = input.map(capitaliseWord).join('');
//             break;
//         default:
//             resultEl.textContent = 'Error!';
//     }
// }