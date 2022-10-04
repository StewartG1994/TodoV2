import { projectCardDisplay ,projectDropDowns, deleteProject} from "./dom";
import { projectArray, projectModalNodeEdit } from "./info";

let currentArray= null;
const backHeader = document.createElement('button');

const todoFactory = (task, description,dueDate, priority) =>
{  return{ task, description,dueDate, priority}}

function closeBtn (){
    const close = document.querySelector('.close')
    const modal = document.querySelector('.projectModal');

    close.addEventListener('click', () =>{
        
        modal.style.display = 'none'
        taskModalNodeEdit()})
      

}

function taskModalNodeEdit(){
    const editSubmitButton = document.querySelector('.submitEdit')
    const close = document.querySelector('.close')

    const headerBtn = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitProject')
    const taskSubmit = document.querySelector('.submitTask')


    const projectName =document.getElementById('projectNameLabel')
    const notes = document.getElementById('notes')
    const notesLabel = document.getElementById('notesLabel')

    headerBtn.addEventListener('click', () =>
   {

    editSubmitButton.style.display = 'none'
    projectName.textContent = 'Task Name';
    notes.style.display = 'none';
    notesLabel.style.display = 'none';
    submitButton.style.display = 'none'
    taskSubmit.textContent= 'Submit Task'
    taskSubmit.style.display = 'block'
    modal.style.display = 'block'
    closeBtn()
   


   } )

}



function editModalNodeEdit(index){

    let item = currentArray.todoArray[index]
    
    
    const editSubmitButton = document.querySelector('.submitEdit')
    
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitTask')
    const projectName =document.getElementById('projectNameLabel')

    const descriptionLabel = document.getElementById('descriptionLabel');
    const descriptionContent = document.getElementById('description');

    const dueDatelabel  = document.getElementById('dueDateLabel')
    const dueDateContent = document.getElementById('dueDate')

    const projectNameContent = document.getElementById('projectName')
    const notes = document.getElementById('notes')
    const notesLabel = document.getElementById('notesLabel')
    projectNameContent.textContent = null;
    projectName.textContent = 'Edit Task Name';
    projectNameContent.value = item.task 

    descriptionLabel.textContent  = 'Edit Description';
    descriptionContent.value = item.description;

    dueDatelabel.textContent = 'Edit Due Date';
    dueDateContent.value = item.dueDate

    notes.style.display = 'none';
    notesLabel.style.display = 'none';
    submitButton.style.display = 'none';
    modal.style.display = 'block'
    editSubmitButton.style.display = 'block';
}

function pushEdit (index) {
    const modal = document.querySelector('.projectModal');

    const submitEdit = document.querySelector('.submitEdit')
    const projectContent = document.getElementById('projectName');
    const descriptionContent = document.getElementById('description');
    const dueDateContent = document.getElementById('dueDate')
    const priorit= document.getElementById('priority')
    console.log(submitEdit)
    console.log(currentArray)
    let current = currentArray.todoArray[index]
    console.log(current)


    submitEdit.addEventListener('click', () =>{
        let projectName = projectContent.value;
        let description = descriptionContent.value;
        let dueDateInfo = dueDateContent.value;
        let priorityInfo = priorit.value
        console.log(projectName)
        current.task = projectName
     //   index.description = description;
       // index.dueDate = dueDateInfo;
      //  index.priority = priorityInfo;
        modal.style.display = 'none';
        taskCardDisplay(currentArray.todoArray)
        projectListDom(currentArray.todoArray)
        deleteTask()
        editTask()
        current = currentArray
  

        console.log(currentArray)})
       
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
        let newTask = todoFactory(projectName.value, description.value, dueDate.value, priority.value)
        currentArray.todoArray.push(newTask)
        modal.style.display = 'none';
        content.textContent = null;
        taskCardDisplay(currentArray.todoArray)
        projectListDom(currentArray.todoArray)
        editTask()

        deleteTask()
    } )

    
}

function displayTasks (item ,index){

    const content = document.querySelector('.content');
    const buttonDiv = document.createElement('div');
    const editButton  = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editButton.className = 'editButton';
    deleteBtn.className = 'taskDeleteButton'
    buttonDiv.className = 'buttonDiv'
    editButton.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    buttonDiv.appendChild(editButton)
    buttonDiv.appendChild(deleteBtn)

    let taskDivCard = document.createElement('div')
    taskDivCard.id = item.task
    taskDivCard.setAttribute('array',index)
    taskDivCard.className= 'projectCards';
    const taskDiv = document.createElement('div');
    const taskheader = document.createElement('h3')
    taskheader.textContent = 'Task Name';
    let taskTitle = document.createElement('h1');

    const descriptionDiv =document.createElement('div')
    const descriptionheader =document.createElement('h3')
    descriptionheader.textContent = 'Task Description';
    let taskDescription = document.createElement('p');

    const dueDateDiv =document.createElement('div')
    const dueDateHeader = document.createElement('h3');
    dueDateHeader.textContent = 'Due Date'
    let dueDate = document.createElement('p');

    const priorityDiv = document.createElement('div');
    const priorityheader = document.createElement('h3');
    priorityheader.textContent = 'Priority';
    let priority =document.createElement('p')
    let inputDiv = document.createElement('div')
    let completedP = document.createElement('p')
    let completed = document.createElement('input')
    completed.setAttribute("type", "checkbox");

    completedP.textContent = 'Completed?'
    inputDiv.appendChild(completedP)
    inputDiv.appendChild(completed)

    taskDiv.appendChild(taskheader)
    taskDiv.appendChild(taskTitle)
    descriptionDiv.appendChild(descriptionheader)
    descriptionDiv.appendChild(taskDescription)
    dueDateDiv.appendChild(dueDateHeader)
    dueDateDiv.appendChild(dueDate)
    priorityDiv.appendChild(priorityheader)
    priorityDiv.appendChild(priority);


    taskTitle.textContent = item.task;
    taskDescription.textContent = item.description
    dueDate.textContent = item.dueDate
    priority.textContent = item.priority

    taskDivCard.appendChild(buttonDiv)
    taskDivCard.appendChild(taskDiv)
    taskDivCard.appendChild(descriptionDiv)
    taskDivCard.appendChild(dueDateDiv)
    taskDivCard.appendChild(priorityDiv)

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

    const content = document.querySelector('.content');
    content.textContent = null;

    
    for (let i = 0; i < array.length; i++){
        
        let index = array.indexOf(array[i])
        displayTasks(array[i], index)
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
 
    headerBtn.textContent = '+ Task';
        content.textContent = null;
        backHeader.style.display = 'flex';
        const backHeaderH1 = document.createElement('h1');
        backHeader.appendChild(backHeaderH1)
        backHeader.className = 'backHeader';
        backHeaderH1.textContent = '< Back to projects'
     
        projectList.insertBefore(backHeader, projectTitle)
    
        
          
        const cardNumber = event.target.parentNode.parentNode.id;
        let indexObject = projectArray.findIndex(object =>{
        return  object.title === cardNumber;})

         currentArray = (projectArray[indexObject])
         projectTitle.textContent = 'List of tasks for ' + currentArray.title;
         projectListDom(currentArray.todoArray)
         taskModalNodeEdit()
         taskCardDisplay(currentArray.todoArray)
         editTask()
         deleteTask()
     
     
  

  
 
       

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
    viewProject()
    deleteProject()
    projectDropDowns()

   })
}

function editTask (){
    let editButton = document.querySelectorAll('.editButton');
    const modal = document.querySelector('.projectModal');


    editButton.forEach(elem => elem.addEventListener('click', event =>{

        let editObject = null;
        const submitButton = document.querySelector('.submitTask')
        submitButton.style.display = 'none';

        const cardNumber = event.target.parentNode.parentNode

    let index = cardNumber.getAttribute('array')
    console.log(index)


    editModalNodeEdit(index)
    pushEdit(index)

    })
    
    )

}

function deleteTask (){
    const content = document.querySelector('.content');
    let deleteBtn = document.querySelectorAll('.taskDeleteButton');
    deleteBtn.forEach(button => button.addEventListener('click', event =>{
    const cardNumber = event.target.parentNode.parentNode.id

    const indexObject = currentArray.todoArray.findIndex(object =>{
        return  object.task === cardNumber;
        })

    currentArray.todoArray.splice(indexObject,1)
    let cardRemove = event.target.parentNode.parentNode;
    content.removeChild(cardRemove)
    projectListDom(currentArray.todoArray)
 }))
 
 }

export {viewProject, pushModalTask,returnBtn,editTask}