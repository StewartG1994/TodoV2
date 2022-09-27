import { projectCardDisplay, deleteProject, projectListDom, projectDropDowns } from "./dom";

const projectArray = [];
const projectFactory = (title, description, dueDate, priority, notes, checklist, todoArray) =>{
    todoArray = []

    return {title, description, dueDate, priority ,notes , checklist, todoArray}
}

function projectAddition (item) {
    projectArray.push(item);    
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
        modal.style.display = 'block';
        clearModal()
    })

    close.addEventListener('click', () =>{modal.style.display = 'none'})

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
        projectListDom(projectArray)
        deleteProject()
        clearModal()
        projectDropDowns()


    })
    
}


projectAddition(projectFactory('Default Project', 'Use the description box to create a brief outline of the project and tasks', '26/02/2023', 'High', 'Noootes notes wonderful notes'))



export {projectArray, openModal , submitProject }
