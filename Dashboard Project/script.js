let allElems = document.querySelectorAll(".elem");
let fullElemPage = document.querySelectorAll(".fullElem");
let closeButtons = document.querySelectorAll(".close-btn");
let containerSection = document.querySelector(".container");

let checkbox = document.querySelector("#checkbox");

allElems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    containerSection.style.display = "none";
    fullElemPage[elem.id].style.display = "flex";
  });
});

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    this.closest(".fullElem").style.display = "none";
    containerSection.style.display = "flex";
  });
});

let taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let taskInput = document.querySelector("#taskInput");
  let allTask = document.querySelector("#allTask");

  if (taskInput.value.trim() === "") return;

  let div = document.createElement("div");
  div.classList.add("task-item");

  let p = document.createElement("p");
  p.textContent = taskInput.value;

  if (checkbox.checked) {
    div.classList.add("important-task");
    p.classList.add("important-text");

    let badge = document.createElement("span");
    badge.textContent = "IMPORTANT";
    badge.classList.add("badge");

    div.appendChild(badge);
  }

  let markBtn = document.createElement("button");
  markBtn.classList.add("mark-btn");
  markBtn.textContent = "Mark as Completed";

  markBtn.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
    markBtn.disabled = true;
  });

  div.appendChild(p);
  div.appendChild(markBtn);
  allTask.appendChild(div);
  taskInput.value = "";
  checkbox.checked = false;
});
