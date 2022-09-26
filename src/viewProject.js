import { projectArray } from "./info";

const todoFactory = (task, description,dueDate, priority, completed) =>
{  return{ task, description,dueDate, priority, completed}}


function todoArrayAddition (array, item) {
   array.push(item)
}

function displayTasks (){
    
}

function viewProject(){
    const viewButton = document.querySelector('.viewProjectButton');
    const content = document.querySelector('.content');

    viewButton.addEventListener('click', event =>{

        content.textContent = null;
          
        const cardNumber = event.target.parentNode.parentNode.id;
        console.log(cardNumber);
        const indexObject = projectArray.findIndex(object =>{
        return  object.title === cardNumber;})

        let currentArray = (projectArray[indexObject])
         console.log(currentArray.todoArray)


    })
}

export {viewProject}