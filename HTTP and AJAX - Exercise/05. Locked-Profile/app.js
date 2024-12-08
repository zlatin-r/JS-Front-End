function lockedProfile() {
    const mainEl = document.querySelector('#main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles'

    let counter = 0;

    mainEl.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then((profiles) => {
            Object.values(profiles).forEach((profile) => {
                const newProfileDivEl = document.createElement('div');
                newProfileDivEl.className = 'profile';
                counter++;

                newProfileDivEl.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${counter}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${counter}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${counter}Username" value="${profile.username}" disabled readonly />
                <div class="user${counter}HiddenFields hiddenInfo">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${counter}Email" value="${profile.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user${counter}Age" value="${profile.age}" disabled readonly />
                </div>
                
                <button>Show more</button>
                `
                mainEl.appendChild(newProfileDivEl);
            });

            const showMoreButtons = mainEl.querySelectorAll('button');

            showMoreButtons.forEach((button) => {
                button.addEventListener('click', () => {

                    const profileDivEl = button.parentElement;
                    const hiddenFields = profileDivEl.querySelector('.hiddenInfo');
                    const lockRadioBtn = profileDivEl.querySelector(`input[value="lock"]`);

                    if (!lockRadioBtn.checked) {
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
        }).catch(error => {
            console.log(error);
    });
}
