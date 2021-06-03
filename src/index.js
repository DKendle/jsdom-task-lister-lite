document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
//stop form from posting
//capture the input from the input field
//create li with input value
//append li to existing ul

let ul = document.getElementById("tasks")
let form = document.getElementById("create-task-form")
form.addEventListener("submit", function(event){
  let li = ul.appendChild(document.createElement("li"))
  let text = document.getElementById("new-task-description").value
  li.innerHTML = text
  event.preventDefault()

})
