window.addEventListener("load", solve);

function solve() {

    const nameInputEl = document.querySelector('#student');
    const uniInputEl = document.querySelector('#university');
    const scoreInputEl = document.querySelector('#score');

    const nextBtnEl = document.querySelector('#next-btn');
    nextBtnEl.addEventListener('click', publish);

    function publish() {
        if (nameInputEl.value === '' || uniInputEl.value === '' || scoreInputEl.value === '') return;

        const previewListEl = document.querySelector('#preview-list');
        const candidatesListEl = document.querySelector('#candidates-list');

        const application = document.createElement('li');
        application.className = 'application';

        const articleEl = document.createElement('article');

        const studentNameEl = document.createElement('h4');
        let name = nameInputEl.value;
        studentNameEl.textContent = name;

        const universityEl = document.createElement('p');
        let uni = uniInputEl.value;
        universityEl.textContent = `University: ${uni}`;

        const scoreEl = document.createElement('p');
        let score = scoreInputEl.value;
        scoreEl.textContent = `Score: ${score}`;

        const editBtnEl = document.createElement('button');
        editBtnEl.className = 'action-btn edit';
        editBtnEl.textContent = 'edit';
        editBtnEl.addEventListener('click', editBtnHandler);

        const applyBtnEl = document.createElement('button');
        applyBtnEl.className = 'action-btn apply';
        applyBtnEl.textContent = 'apply';
        applyBtnEl.addEventListener('click', applyBtnHandler);

        articleEl.appendChild(studentNameEl);
        articleEl.appendChild(universityEl);
        articleEl.appendChild(scoreEl);

        application.append(articleEl);
        application.append(editBtnEl);
        application.append(applyBtnEl);

        previewListEl.appendChild(application);

        nextBtnEl.disabled = true;

        nameInputEl.value = '';
        uniInputEl.value = '';
        scoreInputEl.value = '';

        function editBtnHandler() {
            nameInputEl.value = name;
            uniInputEl.value = uni;
            scoreInputEl.value = score;

            previewListEl.removeChild(application);

            nextBtnEl.disabled = false;
        }

        function applyBtnHandler() {
            previewListEl.removeChild(application);

            application.removeChild(editBtnEl);
            application.removeChild(applyBtnEl);

            candidatesListEl.appendChild(application);

            nextBtnEl.disabled = false;
        }
    }
}