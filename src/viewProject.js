import { projectCardDisplay } from "./dom";
import { projectArray } from "./info";

let currentArray= null;
const backHeader = document.createElement('button');

const test = ['test']

const todoFactory = (task, description,dueDate, priority) =>
{  return{ task, description,dueDate, priority}}

function taskModalNodeEdit(){
    const headerBtn = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitProject')
    const taskSubmit = document.querySelector('.submitTask')
    const projectName =document.getElementById('projectNameLabel')
    const description =document.getElementById('descriptionLabel')
    const dueDate =document.getElementById('dueDateLabel')
    const priority = document.getElementById('priority')
    const notes = document.getElementById('notes')
    const notesLabel = document.getElementById('notesLabel')

    headerBtn.addEventListener('click', () =>
   {
    projectName.textContent = 'Task Name';
    notes.style.display = 'none';
    notesLabel.style.display = 'none';
    submitButton.style.display = 'none'
    taskSubmit.textContent= 'Submit Task'
    taskSubmit.style.display = 'block'
    modal.style.display = 'block'
   } )

}

function pushModalTask(){
    const projectName =document.getElementById('projectName')
    const description =document.getElementById('description')
    const dueDate =document.getElementById('dueDate')
    const priority = document.getElementById('priority')
    const taskSubmit = document.querySelector('.submitTask')
    const modal = document.querySelector('.projectModal');


    taskSubmit.addEventListener('click', () =>{
        const content = document.querySelector('.content');

        console.log(currentArray.todoArray)
        let newTask = todoFactory(projectName.value, description.value, dueDate.value, priority.value)
        currentArray.todoArray.push(newTask)
        console.log(currentArray.todoArray)
        modal.style.display = 'none';
        content.textContent = null;
        taskCardDisplay(currentArray.todoArray)
        projectListDom(currentArray.todoArray)
    } )

    
}

function displayTasks (item){
    const content = document.querySelector('.content');
    let taskDivCard = document.createElement('div')
    taskDivCard.className= 'projectCards';
    let taskTitle = document.createElement('h1');
    let taskDescription = document.createElement('p');
    let dueDate = document.createElement('p');
    let priority =document.createElement('p')
    let inputDiv = document.createElement('div')
    let completedP = document.createElement('p')
    let completed = document.createElement('input')
    completed.setAttribute("type", "checkbox");

    completedP.textContent = 'Completed?'
    inputDiv.appendChild(completedP)
    inputDiv.appendChild(completed)

    taskTitle.textContent = item.task;
    taskDescription.textContent = item.title
    dueDate.textContent = item.dueDate
    priority.textContent = item.priority
    console.log(item)

    taskDivCard.appendChild(taskTitle)
    taskDivCard.appendChild(taskDescription)
    taskDivCard.appendChild(dueDate)
    taskDivCard.appendChild(priority)
    taskDivCard.appendChild(inputDiv)
    content.appendChild(taskDivCard)

}

function liDisplay (item) {
    const projectListNode = document.querySelector('.listUI');
    const projectLi = document.createElement('li')
    projectLi.textContent = item
    projectListNode.appendChild(projectLi);
}

function projectListDom(array){
    const projectListNode = document.querySelector('.listUI');
    projectListNode.textContent = null;
 

    for (let i = 0; i < array.length; i++) {
       liDisplay(array[i].task)
    }}

function taskCardDisplay(array){

    
    for (let i = 0; i < array.length; i++){
        let index = array.indexOf(array[i])
        displayTasks(array[i])

    }
}

function viewProject(){
    const viewButton = document.querySelector('.viewProjectButton');
    const projectList = document.querySelector('.projectList')
    const content = document.querySelector('.content');
    const headerBtn = document.querySelector('.todoheader')
    const projectTitle = document.querySelector('.projectHeader')

   
    viewButton.addEventListener('click', event =>{
    headerBtn.textContent = '+ Task';
        content.textContent = null;
        backHeader.style.display = 'block';
        const backHeaderH1 = document.createElement('h1');
        backHeader.appendChild(backHeaderH1)
        backHeader.className = 'backHeader';
        backHeaderH1.textContent = '< Back to projects'
        projectList.insertBefore(backHeader, projectTitle)
    
        
          
        const cardNumber = event.target.parentNode.parentNode.id;
        let indexObject = projectArray.findIndex(object =>{
        return  object.title === cardNumber;})

         currentArray = (projectArray[indexObject])
         projectTitle.textContent = currentArray.title;
        console.log(currentArray.todoArray)
         projectListDom(currentArray.todoArray)
         taskModalNodeEdit()
    })



}

function returnBtn (){

const headerBtn = document.querySelector('.todoheader')

backHeader.addEventListener('click', () =>{
    projectCardDisplay(projectArray)
    backHeader.style.display = 'none';
    backHeader.textContent = null;
    headerBtn.textContent = '+ Project'
    projectListDom(projectArray)
    viewProject()
   })
}

export {viewProject, pushModalTask}