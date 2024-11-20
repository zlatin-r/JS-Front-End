function toggle() {
    let buttonTextElement = document.getElementsByClassName('button')[0].textContent;

    if (buttonTextElement === "More") {
        document.querySelector("#extra").style.display = "block";
        document.getElementsByClassName('button')[0].textContent = "Less";
    } else {
        document.querySelector("#extra").style.display = "none";
        document.getElementsByClassName('button')[0].textContent = "More";
    }
}


// function toggle() {
//     const buttonEl = document.querySelector('#accordion .button');
//     const contentEl = document.querySelector('#extra');
//
//     if ( contentEl.style.display == 'block' ) {
//         contentEl.style.display = 'none';
//         buttonEl.textContent = 'More';
//     } else {
//         contentEl.style.display = 'block';
//         buttonEl.textContent = 'Less';
//     }
// }
