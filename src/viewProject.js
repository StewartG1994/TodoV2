import { projectCardDisplay ,projectDropDowns, deleteProject} from "./dom";
import { projectArray, projectModalNodeEdit } from "./info";

let currentArray= null;
const backHeader = document.createElement('button');

const todoFactory = (task, description,dueDate, priority) =>
{  return{ task, description,dueDate, priority}}

function taskModalNodeEdit(){
    const headerBtn = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitProject')
    const taskSubmit = document.querySelector('.submitTask')
    const projectName =document.getElementById('projectNameLabel')
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
        taskModalNodeEdit()

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
        console.log(array[i])
     liDisplay(array[i].task)
    }}

function taskCardDisplay(array){

    
    for (let i = 0; i < array.length; i++){
        let index = array.indexOf(array[i])
        displayTasks(array[i])

    }
}

function viewProject(){
    const viewButton = document.querySelectorAll('.viewProjectButton');
    const projectList = document.querySelector('.projectList')
    const content = document.querySelector('.content');
    const headerBtn = document.querySelector('.todoheader')
    const projectTitle = document.querySelector('.projectHeader')


   viewButton.forEach(element => {
    element.addEventListener('click', event =>{
        console.log('test')
    headerBtn.textContent = '+ Task';
        content.textContent = null;
        backHeader.style.display = 'flex';
        const backHeaderH1 = document.createElement('h1');
        backHeader.appendChild(backHeaderH1)
        backHeader.className = 'backHeader';
        backHeaderH1.textContent = '< Back to projects'
        console.log(projectTitle)
        projectList.insertBefore(backHeader, projectTitle)
    
        
          
        const cardNumber = event.target.parentNode.parentNode.id;
        let indexObject = projectArray.findIndex(object =>{
        return  object.title === cardNumber;})

         currentArray = (projectArray[indexObject])
         projectTitle.textContent = 'List of tasks for ' + currentArray.title;
         console.log(currentArray.todoArray)
         projectListDom(currentArray.todoArray)
         taskModalNodeEdit()
         taskCardDisplay(currentArray.todoArray)
    })

    
   });




}

function returnBtn (){

const headerBtn = document.querySelector('.todoheader')
const projectLI = document.querySelector('.projectList')
const projectTitle = document.querySelector('.projectHeader')


backHeader.addEventListener('click', () =>{
    projectCardDisplay(projectArray)
    projectModalNodeEdit()
    backHeader.style.display = 'none';
    projectLI.style.display = 'block'
    projectTitle.textContent = 'List of projects'
    
    backHeader.textContent = null;
    headerBtn.textContent = '+ Project'
    console.log(projectArray)
    viewProject()
    deleteProject()
    projectDropDowns()
    console.log(projectArray)
   })
}

export {viewProject, pushModalTask,returnBtn}