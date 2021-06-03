document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let ul = document.getElementById("tasks")
let li = document.createElement("li")
let form = document.getElementById("create-task-form")
let inputValue = document.getElementById("new-task-description").value

form.addEventListener("submit", function(event){
  event.preventDefault()
  li.innerHTML = inputValue
  ul.appendChild(li)
})
