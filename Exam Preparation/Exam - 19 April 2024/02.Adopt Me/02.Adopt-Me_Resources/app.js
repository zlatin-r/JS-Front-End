window.addEventListener("load", solve);

function solve() {
    const typeInputEl = document.querySelector('#type');
    const ageInputEl = document.querySelector('#age');
    const genderInputEl = document.querySelector('#gender');

    const adoptionInfoEl = document.querySelector('#adoption-info');

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
            editButtonEl.textContent = 'Done';

            buttonWrapperEl.appendChild(editButtonEl);
            buttonWrapperEl.appendChild(doneButtonEl);

            newArticleEl.appendChild(animalTypeParagraphEl);
            newArticleEl.appendChild(animalGenderParagraphEl);
            newArticleEl.appendChild(animalAgeParagraphEl);

            newListEl.appendChild(newArticleEl);
            newListEl.appendChild(buttonWrapperEl);

            adoptionInfoEl.appendChild(newListEl);
        }
    }

}
  