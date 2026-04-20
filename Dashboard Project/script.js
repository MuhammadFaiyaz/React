let allElems = document.querySelectorAll(".elem");
let fullElemPage = document.querySelectorAll(".fullElem");
let closeButtons = document.querySelectorAll(".close-btn");
let containerSection = document.querySelector(".container");

allElems.forEach(function(elem) {
  elem.addEventListener("click", function() {
    containerSection.style.display = "none";
    fullElemPage[elem.id].style.display = "flex";
  });
});

closeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    button.parentElement.style.display = "none";
    containerSection.style.display = "flex";
  });
});

let taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
});