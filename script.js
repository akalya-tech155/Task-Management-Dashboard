

// UPDATE TASK FEATURE

editBtn.onclick = () => {
  const newTask = prompt("Edit Task");
  li.firstChild.textContent = newTask;
};