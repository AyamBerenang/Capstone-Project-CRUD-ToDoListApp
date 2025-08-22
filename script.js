const STORAGE_KEY = "tasks_v2";
const FILTER_KEY = "activeFilter_v2";

let tasks = loadTasks();
let activeFilter = loadFilter();

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadFilter() {
  const f = localStorage.getItem(FILTER_KEY);
  return f || "all";
}

function saveFilter(value) {
  activeFilter = value;
  localStorage.setItem(FILTER_KEY, value);
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function render() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === activeFilter);
  });

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const filtered = tasks.filter((t) => {
    if (activeFilter === "done") return t.done;
    if (activeFilter === "pending") return !t.done;
    return true; // all
  });

  filtered.forEach((task) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const btns = document.createElement("div");
    btns.className = "task-buttons";

    const doneBtn = document.createElement("button");
    doneBtn.className = "action done";
    doneBtn.textContent = task.done ? "Undo" : "Done";
    doneBtn.addEventListener("click", () => toggleTask(task.id));

    const editBtn = document.createElement("button");
    editBtn.className = "action edit";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(task.id));

    const delBtn = document.createElement("button");
    delBtn.className = "action delete";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    btns.append(doneBtn, editBtn, delBtn);
    li.append(text, btns);
    list.appendChild(li);
  });
}

function addTask(e) {
  e?.preventDefault();
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  tasks.push({
    id: uid(),
    text,
    done: false,
    createdAt: Date.now(),
  });
  saveTasks();
  input.value = "";
  render();
}

function toggleTask(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  t.done = !t.done;
  saveTasks();
  render();
}

function editTask(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  const newText = prompt("Edit task:", t.text);
  if (newText !== null && newText.trim() !== "") {
    t.text = newText.trim();
    saveTasks();
    render();
  }
}

function deleteTask(id) {
  if (!confirm("Delete this task?")) return;
  tasks = tasks.filter((x) => x.id !== id);
  saveTasks();
  render();
}

document.getElementById("taskForm").addEventListener("submit", addTask);

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    saveFilter(btn.dataset.filter);
    render();
  });
});

render();
