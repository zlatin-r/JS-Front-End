function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    const mainEl = document.querySelector('#main');

    let counter = 1;

    fetch(baseUrl)
        .then(res => res.json())
        .then((res) => {
            mainEl.innerHTML = '';
            Object.values(res).forEach((profile) => {
                const userCount = 'user' + counter;

                const newProfile = document.createElement('div');
                newProfile.className = 'profile';

                const profileImage = document.createElement('img');
                profileImage.className = 'userIcon';
                profileImage.src = './iconProfile2.png';

                const labelLock = document.createElement('label');
                labelLock.textContent = 'Lock';

                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = `${userCount}Locked`;
                radioInput.value = `lock`;
                radioInput.checked = true;

                const labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'Unlock';


                const radioInput2 = document.createElement('input');
                radioInput2.type = 'radio';
                radioInput2.name = `${userCount}Locked`;
                radioInput2.value = 'unlock';

                const brElement = document.createElement('br');
                const hrElement = document.createElement('hr');

                const labelUserName = document.createElement('label');
                labelUserName.textContent = 'Username';

                const userNameInput = document.createElement('input');
                userNameInput.type = 'text';
                userNameInput.name = `${userCount}Username`;
                userNameInput.value = `${profile.username}`;
                userNameInput.disabled = true;
                userNameInput.readOnly = true;

                const container = document.createElement('div');
                container.className = `${userCount}HiddenFields hiddenInfo`;

                const hr2Element = document.createElement('hr');

                const labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email';

                const emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.name = `${userCount}Email`;
                emailInput.value = `${profile.email}`;
                emailInput.disabled = true;
                emailInput.readOnly = true;

                const labelAge = document.createElement('label');
                labelAge.textContent = 'Age';

                const ageInput = document.createElement('input');
                ageInput.type = 'number';
                ageInput.name = `${userCount}Age`;
                ageInput.value = `${profile.age}`;
                ageInput.disabled = true;
                ageInput.readOnly = true;

                const showMoreButton = document.createElement('button');
                showMoreButton.textContent = 'Show more';

                newProfile.appendChild(profileImage);
                newProfile.appendChild(labelLock);
                newProfile.appendChild(radioInput);
                newProfile.appendChild(labelUnlock);
                newProfile.appendChild(radioInput2);
                newProfile.appendChild(brElement);
                newProfile.appendChild(hrElement);
                newProfile.appendChild(labelUserName);
                newProfile.appendChild(userNameInput);

                container.appendChild(hr2Element);
                container.appendChild(labelEmail);
                container.appendChild(emailInput);
                container.appendChild(labelAge);
                container.appendChild(ageInput);

                newProfile.appendChild(container);
                newProfile.appendChild(showMoreButton);

                mainEl.appendChild(newProfile);

                counter++;
            });
            const showMoreButtons = mainEl.querySelectorAll('button');

            showMoreButtons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    const currProfile = e.target.closest('.profile');
                    const hiddenFields = currProfile.querySelector('div');
                    const lockBtn = currProfile.querySelector('input[value="lock"]');

                    if (!lockBtn.checked) {
                        if (hiddenFields.classList.contains('hiddenInfo')) {
                            hiddenFields.classList.remove('hiddenInfo');
                            button.textContent = 'Hide it';
                        } else {
                            hiddenFields.classList.add('hiddenInfo');
                            button.textContent = 'Show more';
                        }
                    }
                });
            });
        });
}
