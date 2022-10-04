import { projectCardDisplay, deleteProject, projectListDom, projectDropDowns } from "./dom";
import { viewProject } from './viewProject';


const projectArray = [];
const projectFactory = (title, description, dueDate, priority, notes, checklist, todoArray) =>{
    todoArray = []

    return {title, description, dueDate, priority ,notes , checklist, todoArray}
}

function projectAddition (item) {
    projectArray.push(item);    
}

function projectModalNodeEdit(){
    const editSubmitButton = document.querySelector('.submitEdit')

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
    editSubmitButton.style.display = 'none';
    projectName.textContent = 'Project Name';
    notes.style.display = 'block';
    notesLabel.style.display = 'block';
    submitButton.style.display = 'block'
    taskSubmit.textContent= 'Submit Task'
    taskSubmit.style.display = 'none'
    modal.style.display = 'block'
   } )

}

function closeProject ()
{
    const modal = document.querySelector('.projectModal');

    const close = document.querySelector('.close')
    close.addEventListener('click', () =>{
        modal.style.display = 'none'
       projectModalNodeEdit()})
}

function clearModal (){
    const projectName =document.getElementById('projectName')
    const description =document.getElementById('description')
    const dueDate =document.getElementById('dueDate')
    const notes = document.getElementById('notes')
    notes.value= ''
    dueDate.value = ''
    description.value = ''
    projectName.value = ''
}
function openModal (){
    const addProject = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const close = document.querySelector('.close')

    addProject.addEventListener('click', () => {
        const editSubmitButton = document.querySelector('.submitEdit')
        editSubmitButton.style.display = 'none';
        projectModalNodeEdit()
        modal.style.display = 'block';

        closeProject()
        clearModal()
        
        
    })


}

function submitProject(){
    const modal = document.querySelector('.projectModal');
    

    const submitButton = document.querySelector('.submitProject')
    const projectName =document.getElementById('projectName')
    const description =document.getElementById('description')
    const dueDate =document.getElementById('dueDate')
    const priority = document.getElementById('priority')
    const notes = document.getElementById('notes')
  

    submitButton.addEventListener('click', () => {




        projectAddition(projectFactory(projectName.value, description.value, dueDate.value, priority.value, notes.value))
        projectCardDisplay(projectArray)
        modal.style.display = 'none'
        deleteProject()
        clearModal()
        viewProject()
        projectDropDowns()
        projectListDom(projectArray)

    })
    
}


projectAddition(projectFactory('Default Project', 'Use the description box to create a brief outline of the project and tasks', '26/02/2023', 'High', 'Noootes notes wonderful notes'))



export {projectArray, openModal , submitProject , projectModalNodeEdit}
