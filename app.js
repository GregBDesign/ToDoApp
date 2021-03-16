const submit = document.querySelector('#submitBtn');
const input = document.querySelector('input');
const addedBtns = document.querySelector('button');
const divContainer = document.createElement('div');
const newLi = document.createElement('li');
const todoList = document.querySelector('ul');
const buttonText = ['Delete', 'Done'];

submit.addEventListener('click', function(e){
    e.preventDefault();
    createTodo();
})

createTodo = () => {
    newLi.textContent = input.value;
    divContainer.append(newLi);
    for(let i = 0 ; i < buttonText.length; i++){
        const newButton = document.createElement('button');
        newButton.textContent = buttonText[i];
        newButton.classList.add('libtn');
        divContainer.append(newButton);
    }
    todoList.append(divContainer);
    input.value = "";
}

checkFunc = (e) => {
    let btnType = e.target;
    if(btnType.textContent === 'Delete'){
        this.newLi.remove();
        //Check udemy vid on .this??
    }
}

document.addEventListener('click', checkFunc);