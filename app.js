function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
     event.preventDefault();

  // get the text
  let title = newToDoText.value;
  // create a new li
  let newLi = document.createElement('li');
  // create a new input
  let checkbox = document.createElement('input');
  //add create delte deletebutton
  let deletebtn = document.createElement('button');
  //create text node
  let deleteText = document.createTextNode('delete');
  // set the input's type to checkbox
  checkbox.type = "checkbox";
  // set the titlel
  newLi.textContent = title;
  // attach the checkbox to the li
  newLi.appendChild(checkbox);
  //attach deletebutton to li
  newLi.appendChild(deletebtn);
  //attach text to deletebutton
  newLi.appendChild(deleteText);
  // attach the li to the ul
  toDoList.appendChild(newLi);
  //empty the input
  newToDoText.value = '';

  deletebtn.addEventListener('click', function() {
         toDoList.removeChild(newLi);
     });
  });
 }

 window.onload = function() {
  onReady();
 };
