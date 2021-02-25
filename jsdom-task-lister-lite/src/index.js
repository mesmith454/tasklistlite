document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')

  //takes input
  const input = document.getElementById('new-task-description')

  const taskUl = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.dir(input.value)
    const li = document.createElement("li")  
    li.innerText = input.value
    taskUl.appendChild(li)
    // const button = document.createElement('button')
    // // input.inputContent = input.value + " "
    // // button.inputContent = "Delete"

  });

  // taskUl.addEventListener("click", (e) => {
  //   if (e.target.nodeName === "BUTTON") {
  //     taskList.deleteTask(e.target.parentNode.description);
  //   }
  // });

});

