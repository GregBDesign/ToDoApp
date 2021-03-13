const form = document.querySelector('form');
const input = document.querySelector('input');
const listItems = document.querySelector('#listItems');

const holdDiv = document.createElement('div');
const newItem = document.createElement('p');
const doneButton = document.createElement('button');
const delButton = document.createElement('button');

form.addEventListener('submit', function(e){
    newTodoAdd(e);
});

delButton.addEventListener('click', function(e){
    listItems.remove();
})

function newTodoAdd(evt){
    evt.preventDefault();
    newItem.innerText = input.value;
    newItem.className = 'toDoItem';
    doneButton.className = 'button';
    delButton.className = 'button';
    delButton.innerText = 'Delete';
    doneButton.innerText = 'Done!';
    holdDiv.append(newItem);
    holdDiv.append(delButton);
    holdDiv.append(doneButton);
    listItems.append(holdDiv);
    input.value = "";
}

//add more todos instead of just one - may need to go back to LIs
//to do class functionality on button



