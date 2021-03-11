const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    newItem.className = 'toDoItem';
    list.append(newItem);
    input.value = "";
})

//put it all in a div and add buttons
