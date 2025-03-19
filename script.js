// Отримуємо елементи з HTML
const addTaskButton = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');

// Функція для додавання нового завдання
function addTask() {
    const taskText = newTaskInput.value.trim(); // Отримуємо текст з поля вводу
    
    if (taskText !== "") {
        const newTask = document.createElement('li'); // Створюємо новий елемент списку
        newTask.classList.add('list');
        
        // Створюємо кнопку для видалення завдання
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Видалити";
        deleteButton.classList.add('deleteBtn');
        
        // Додаємо текст завдання до елемента списку
        newTask.textContent = taskText;
        
        // Додаємо кнопку до елемента списку
        newTask.appendChild(deleteButton);

        // Додаємо нове завдання в список
        taskList.appendChild(newTask);
        
        // Очищаємо поле вводу
        newTaskInput.value = ""; 

        // Додаємо функцію для видалення завдання
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask); // Видаляємо завдання з списку
        });
    } else {
        alert("Будь ласка, введіть завдання!"); // Якщо поле вводу порожнє
    }
}

// Додаємо обробник події для кнопки "Додати Завдання"
addTaskButton.addEventListener('click', addTask);

// Додаємо можливість додавати завдання через Enter
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); // Додаємо завдання при натисканні Enter
    }
});
