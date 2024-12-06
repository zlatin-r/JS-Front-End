function lockedProfile() {
    const mainEl = document.querySelector('#main');

    const url = 'http://localhost:3030/jsonstore/advanced/profiles'

    fetch(url).then(response => response.json()).then((data) => {
        Object.values(data).forEach((profile) => {
            const userName = profile.username;
            const userEmail = profile.email;
            const userAge = profile.age;

            const newProfileDiv = createElWithTextContAndClass('div', '', 'profile')

            const profileImg = document.createElement('img');
            profileImg.setAttribute('src', './iconProfile2.png');
            profileImg.classList.add('userIcon');

            const labelLock = createElWithTextContAndClass('label', 'Lock', 'label-lock')

            const radioInputLock = document.createElement('input');
            radioInputLock.type = 'radio';
            radioInputLock.name = `${userName}Locked`;
            radioInputLock.value = 'lock';
            radioInputLock.checked = true;

            const labelUnlock = document.createElement('label');
            labelUnlock.textContent = 'Unlock';

            const radioInputUnlock = document.createElement('input');
            radioInputUnlock.type = 'radio';
            radioInputUnlock.name =  `${userName}Locked`;
            radioInputUnlock.value = 'unlock';

            const lineBreak = document.createElement('br');
            const horizontalRule = document.createElement('hr');

            const labelUserName = document.createElement('label');
            labelUserName.textContent = 'Username';

            const inputUserName = document.createElement('input');
            inputUserName.type = 'text';
            inputUserName.name = userName + 'Username';
            inputUserName.value = userName;
            inputUserName.disabled = true;
            inputUserName.readOnly = true;

            const divHiddenFields = document.createElement('div');
            divHiddenFields.id = userName + 'HiddenFields';

            // TODO append <hr>

            const labelEmail = document.createElement('label');
            labelEmail.textContent = 'Email';

            const inputEmail = document.createElement('input');
            inputEmail.type = 'email';
            inputEmail.name = userName + 'Email';
            inputEmail.value = userEmail;
            inputEmail.disabled = true;
            inputEmail.readOnly = true;

            const labelAge = document.createElement('label');
            labelAge.textContent = 'Age';

            const inputAge = document.createElement('input');
            inputAge.type = 'number';
            inputAge.name = userName + 'Age';
            inputAge.value = userAge;
            inputAge.disabled = true;
            inputAge.readOnly = true;

            const btnShowMore = document.createElement('button');
            btnShowMore.textContent = 'Show More';

            divHiddenFields.appendChild(horizontalRule);
            divHiddenFields.appendChild(labelEmail);
            divHiddenFields.appendChild(inputEmail);
            divHiddenFields.appendChild(labelAge);
            divHiddenFields.appendChild(inputAge);

            newProfileDiv.appendChild(profileImg);
            newProfileDiv.appendChild(labelLock);
            newProfileDiv.appendChild(radioInputLock);
            newProfileDiv.appendChild(labelUnlock);

            radioInputUnlock.appendChild(lineBreak);

            newProfileDiv.appendChild(radioInputUnlock);
            newProfileDiv.appendChild(horizontalRule);

            newProfileDiv.appendChild(labelUserName);
            newProfileDiv.appendChild(inputUserName);
            newProfileDiv.appendChild(divHiddenFields);

            newProfileDiv.appendChild(btnShowMore);

            mainEl.appendChild(newProfileDiv);

        });


    });

    function createElWithTextContAndClass(element, text, className) {
        const item = document.createElement(element);
        item.textContent = text;
        item.classList.add(className);
        return item
    }

}