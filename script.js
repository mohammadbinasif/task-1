const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

menuToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

primaryNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

let tasks = JSON.parse(localStorage.getItem('dayflow-tasks')) || [];

function saveTasks() {
  localStorage.setItem('dayflow-tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  emptyMsg.style.display = tasks.length ? 'none' : 'block';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class="toggle-btn" aria-label="Mark task complete">${task.done ? '↺' : '✓'}</button>
      <button class="delete-btn" aria-label="Delete task">✕</button>
    `;

    li.querySelector('.toggle-btn').addEventListener('click', () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();

  taskInput.value = '';
  taskInput.focus();
});

renderTasks();
