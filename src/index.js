const tasks = document.getElementById('tasks');
const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const add = (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const remove = document.createElement('button');
    remove.textContent="X"
  
    li.textContent = input.value;
    li.appendChild(remove)
    tasks.append(li)
    remove.addEventListener("click", function(e){
      this.parentNode.parentNode.remove();
  })}
  form.addEventListener('submit', add)
});
