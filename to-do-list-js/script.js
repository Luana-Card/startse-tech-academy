let taskInput = document.querySelector('#taskInput');
let taskList = document.querySelector('ul')
let addTaskButton = document.querySelector('#addTask')
let li = document.querySelector('li');

addTaskButton.addEventListener('click', function() {
    createTask();
})


function createTask() {
    if (taskInput.value != "") {
        let addLi = document.createElement('li');
        let addSpan = document.createElement('span');
        let taskDescription = taskInput.value
        
        taskInput.value = ''
        addSpan.textContent = taskDescription;
        // taskArr.push(taskInput);
        addLi.appendChild(addSpan);
        addLi.appendChild(addRemoveTaskButton());
        addLi.setAttribute('class', 'task');

        taskList.appendChild(addLi);

        addLi.addEventListener('click', function() {
            if (addLi.className != "checkedTask") {
                addLi.setAttribute('class', 'checkedTask');
            } else {
                addLi.classList.remove('checkedTask')
            }
        })

        return addLi;
    }
}

function addRemoveTaskButton() {
    let removeTaskButton = document.createElement('button');
    removeTaskButton.setAttribute('id', 'removeTask');
    removeTaskButton.textContent = 'X'
    removeTaskButton.addEventListener('click', function() {
        taskList.removeChild(this.parentNode);
    });
    return removeTaskButton;
}