function lockedProfile() {
    const mainEl = document.querySelector('#main');

    const url = 'http://localhost:3030/jsonstore/advanced/profiles'

    fetch(url).then(response => response.json()).then((data) => {
        Object.values(data).forEach((profile) => {
            const userName = profile.username;
            const userEmail = profile.email;
            const userAge = profile.age;

            const newProfileDiv = createEl('div');
            newProfileDiv.classList.add('profile');


            const profileImg = createEl('img');
            profileImg.src = './iconProfile2.png';
            profileImg.classList.add('userIcon');

            const labelLock = createEl('label');
            labelLock.textContent = 'Lock';

            const radioInputLock = createEl('input');
            radioInputLock.type = 'radio';
            radioInputLock.name = `${userName}Locked`;
            radioInputLock.value = 'lock';
            radioInputLock.checked = true;

            const labelUnlock = createEl('label');
            labelUnlock.textContent = 'Unlock';

            const radioInputUnlock = createEl('input');
            radioInputUnlock.type = 'radio';
            radioInputUnlock.name = `${userName}Locked`;
            radioInputUnlock.value = 'unlock';

            const lineBreak = createEl('br');
            const horizontalRule = createEl('hr');

            const labelUserName = createEl('label');
            labelUserName.textContent = 'Username';

            const inputUserName = createEl('input');
            inputUserName.type = 'text';
            inputUserName.name = userName + 'Username';
            inputUserName.value = userName;
            inputUserName.disabled = true;
            inputUserName.readOnly = true;

            const divHiddenFields = createEl('div');
            divHiddenFields.classList.add(userName + 'HiddenFields');

            const labelEmail = createEl('label');
            labelEmail.textContent = 'Email';

            const inputEmail = createEl('input');
            inputEmail.type = 'email';
            inputEmail.name = userName + 'Email';
            inputEmail.value = userEmail;
            inputEmail.disabled = true;
            inputEmail.readOnly = true;

            const labelAge = createEl('label');
            labelAge.textContent = 'Age';

            const inputAge = createEl('input');
            inputAge.type = 'number';
            inputAge.name = userName + 'Age';
            inputAge.value = userAge;
            inputAge.disabled = true;
            inputAge.readOnly = true;

            const btnShowMore = createEl('button');
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
            newProfileDiv.appendChild(radioInputUnlock);

            newProfileDiv.appendChild(lineBreak);
            newProfileDiv.appendChild(horizontalRule);

            newProfileDiv.appendChild(labelUserName);
            newProfileDiv.appendChild(inputUserName);
            newProfileDiv.appendChild(divHiddenFields);

            newProfileDiv.appendChild(btnShowMore);

            mainEl.appendChild(newProfileDiv);

            btnShowMore.addEventListener('click', () => {
                // Toggle visibility of the hidden fields
                divHiddenFields.style.display = divHiddenFields.style.display === 'none' ? 'block' : 'none';
                btnShowMore.textContent = btnShowMore.textContent === 'Show More' ? 'Show Less' : 'Show More';
            });

        });


    });

    function createEl(tag) {
        return document.createElement(tag);
    }

}