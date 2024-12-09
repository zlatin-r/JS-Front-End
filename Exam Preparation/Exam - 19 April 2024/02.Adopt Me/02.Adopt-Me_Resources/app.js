window.addEventListener("load", solve);

function solve() {
    const typeInputEl = document.querySelector('#type');
    const ageInputEl = document.querySelector('#age');
    const genderInputEl = document.querySelector('#gender');

    const adoptionInfoEl = document.querySelector('#adoption-info');
    const adoptedListEl = document.querySelector('#adopted-list');

    const adoptBtnEl = document.querySelector('#adopt-btn');

    adoptBtnEl.addEventListener('click', adoptBtnHandler);

    function adoptBtnHandler(e) {
        e.preventDefault();

        if (typeInputEl.value !== '' && ageInputEl.value !== '' && genderInputEl.value !== '') {

            const newListEl = document.createElement('li');
            const newArticleEl = document.createElement('article');

            const animalTypeParagraphEl = document.createElement('p');
            animalTypeParagraphEl.textContent = typeInputEl.value;

            const animalGenderParagraphEl = document.createElement('p');
            animalGenderParagraphEl.textContent = genderInputEl.value;

            const animalAgeParagraphEl = document.createElement('p');
            animalAgeParagraphEl.textContent = ageInputEl.value;

            const buttonWrapperEl = document.createElement('div');
            buttonWrapperEl.className = 'buttons'

            const editButtonEl = document.createElement('button');
            editButtonEl.className = 'edit-btn';
            editButtonEl.textContent = 'Edit';

            const doneButtonEl = document.createElement('button');
            doneButtonEl.className = 'done-btn';
            doneButtonEl.textContent = 'Done';

            buttonWrapperEl.appendChild(editButtonEl);
            buttonWrapperEl.appendChild(doneButtonEl);

            newArticleEl.appendChild(animalTypeParagraphEl);
            newArticleEl.appendChild(animalGenderParagraphEl);
            newArticleEl.appendChild(animalAgeParagraphEl);

            newListEl.appendChild(newArticleEl);
            newListEl.appendChild(buttonWrapperEl);

            adoptionInfoEl.appendChild(newListEl);

            editButtonEl.addEventListener('click', () => {
                typeInputEl.value = animalTypeParagraphEl.textContent;
                ageInputEl.value = animalAgeParagraphEl.textContent;
                genderInputEl.value = animalGenderParagraphEl.textContent;

                adoptionInfoEl.removeChild(newListEl);
            });

            doneButtonEl.addEventListener('click', () => {
                adoptionInfoEl.removeChild(newListEl);
                newListEl.removeChild(buttonWrapperEl);

                const clearButtonEl = document.createElement('button');
                clearButtonEl.className = 'clear-btn';
                clearButtonEl.textContent = 'Clear';

                newListEl.appendChild(clearButtonEl);
                adoptedListEl.appendChild(newListEl);

                clearButtonEl.addEventListener('click', (e) => {
                    const record = e.target.parentElement;
                    adoptedListEl.removeChild(record);
                });
            });
        }

        typeInputEl.value = '';
        ageInputEl.value = '';
        genderInputEl.value = '';
    }
}
  