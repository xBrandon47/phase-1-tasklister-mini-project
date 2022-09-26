document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_todo.value)
    })
});

function buildToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#create-task-form').apprendChild(p)

}

function handleDelete(e) {
  e.target.parentNode.remove()
}
