const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('btn');

function addTask(taskText) {
    if (taskText) {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        inputBox.focus();
        saveData();
    }
}

function validateInput () {
    if (inputBox.value.length > 3) {
        addTask(inputBox.value);
    } else {
        alert('You must write valid text!');
    }
    inputBox.value = '';
}

inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validateInput();
    }
});

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

addButton.addEventListener('click', validateInput);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
