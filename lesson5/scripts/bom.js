const input = document.querySelector('#favchap');
const button = document.querySelector('#submitbutton');
const list = document.querySelector('.list'); 
console.log(input);

button.addEventListener('click', chapterAdd);

function chapterAdd() {
    if (input.value != "") {
        /* Get content from input box */
        inputContent = input.value;
        
        /* Create new elements */
        li = document.createElement('li'); 
        deleteButton = document.createElement('button');

        /* Populate elements with text content */
        li.textContent = inputContent;
        deleteButton.textContent = "❌";

        /* Append new elements */
        li.appendChild(deleteButton)
        list.appendChild(li);

        /* Add delete button event listener, empty input box and focus */
        deleteButton.addEventListener('click', test1 => {
            document.querySelector('.list li').remove();
            input.focus();
        });

        input.value = '';
        input.focus();
    }
    
}