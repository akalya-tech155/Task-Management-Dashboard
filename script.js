
// CREATE TASK FEATURE

addBtn.addEventListener("click", () => {
  const task = taskInput.value;

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
});