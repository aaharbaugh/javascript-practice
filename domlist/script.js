//dom elements selected
let addNew = document.getElementById('add-new'); // addNew = addNew image dom
let inputSpan = document.getElementById('input-field'); //inputSpan = span with input and submit button (default display:none)
let userInput = document.getElementById('user-input'); //user input is the input field for adding a new To Do. 
let addNewBtn = document.getElementById('add-new-btn'); //addNewBtn is the button that is attached to input field. 
let ul = document.getElementById('main-list'); //ul is the list of To Do's

//event listener to addNew image to toggle display of input field
addNew.addEventListener('click', (event) => displayToggle(inputSpan, 'display toggled')); 

//event listeners for pressing enter. 
userInput.addEventListener('keypress', function(e){
    var key = e.which || e.keyCode;
    if(key === 13){
        console.log('enter pressed in input field')
        addNewTodo();
    }
});

//event listener for clicking Add New
addNewBtn.addEventListener('click', function(e){
    addNewTodo();
});

//function that will toggle display:none for domElement passed into it. 
function displayToggle(domElement, message){ //toggles the display of input Span
    domElement.classList.toggle('display-class');
    console.log(message);
}

function completeToggle(domElement, message){ //toggles the display of input Span
    domElement.classList.toggle('display-complete');
    console.log(message);
}

//function that will add a new To Do Element to the UL
function addNewTodo(){
    const newTodo = document.createElement('li');
    const newTodoText = document.createElement('span');
    const checkBox = document.createElement('input')
    
    //this is the span that contains the on click event
    newTodoText.textContent = userInput.value;

    //this edit Todo input element is display: none by default
    const editTodo = document.createElement('input');
    editTodo.type = 'text';
    editTodo.value = userInput.value; //has value of userInput
    displayToggle(editTodo, 'hiding editTodo')

    //event listeners for clicking on ToDo item. turns one off and the other on. 
    newTodoText.addEventListener('click', (event) => displayToggle(editTodo, 'display toggled')); 
    newTodoText.addEventListener('click', (event) => displayToggle(newTodoText, 'display toggled')); 

    //this event listener waits for enter key to be pressed within the Edit To Do input. 
    editTodo.addEventListener('keypress', function(e){
        var key = e.which || e.keyCode;
        if(key === 13){
            console.log('enter pressed in input field')
            //value of todo replacced on enter. 
            newTodoText.textContent = editTodo.value;
            //elements toggled back to original state. 
            displayToggle(editTodo, editTodo.value);     
            displayToggle(newTodoText, 'display toggled'); 
        }
    });

    //this checkbox will trigger todo to be strike throughed. 
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', (event) => completeToggle(newTodo, 'To Do Complete')); 

    //all elements added to the UL at this point. 
    newTodo.appendChild(newTodoText);
    newTodo.appendChild(editTodo);
    newTodo.appendChild(checkBox);
    ul.appendChild(newTodo);
    console.log('added new todo');
}