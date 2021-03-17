const submit = document.querySelector('#submitBtn');
const input = document.querySelector('input');
const addedBtns = document.querySelector('button');
const ulList = document.querySelector('#listItems');

// Button names
const buttonText = ['Delete', 'Done'];

// Listen for a new todo
submit.addEventListener('click', function(e){
    e.preventDefault();
    createTodo();
})

//Function for creating the todo
createTodo = () => {
    const divContainer = document.createElement('div');
    const newLi = document.createElement('li');
    const todoList = document.querySelector('ul');
    newLi.textContent = input.value;
    divContainer.append(newLi);
    for(let i = 0; i < buttonText.length; i++){
        var newButton = document.createElement('button');
        newButton.textContent = buttonText[i];
        newButton.classList.add('libtn');
        divContainer.append(newButton);
    }
    todoList.append(divContainer);
    input.value = "";
}

//Listen for the button actions
ulList.addEventListener('click', function(e){
    if(e.target.textContent === 'Delete'){
        e.target.parentNode.remove();
    } else {
        e.target.parentNode.classList.add('done');
    }
})