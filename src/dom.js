import { projectArray } from './info';
import down from './svg/down.png'

const projectListNode = document.querySelector('.listUI');
const content = document.querySelector('.content');

function liDisplay (item) {
  
    const projectLi = document.createElement('li')
    projectLi.textContent = item.title;
    projectListNode.appendChild(projectLi);
}

function projectListDom(array){
    projectListNode.textContent = null;

    for (let i = 0; i < array.length; i++) {
        liDisplay(array[i])
    }}




function cardMaker (item,index) {
    const card = document.createElement('div');
    card.id=item.title;
    const headerDiv =document.createElement('div');
    const buttonDiv = document.createElement('div')
    buttonDiv.className = 'buttonDiv'
    const headerTitle = document.createElement('h3');
    headerTitle.className = 'headertitlecard';
    headerTitle.textContent = 'Project Name'
    headerDiv.className = 'headerDiv'
    const viewProjectBtn = document.createElement('button');
    viewProjectBtn.textContent = 'View'
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.className = 'deleteheaderButton'
    viewProjectBtn.className = 'viewProjectButton'

    deleteProjectBtn.textContent = 'Delete';
    const header = document.createElement('h1');
    header.textContent ='\n' + item.title
    buttonDiv.appendChild(viewProjectBtn)
    
    buttonDiv.appendChild(deleteProjectBtn)
    headerDiv.appendChild(headerTitle)
    headerDiv.appendChild(header)





    const downImg = new Image();
    downImg.src = down
 
    card.className = 'projectCards'
    const descriptionDiv = document.createElement('div');
    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Description';
    const description = document.createElement('p');
    const dueDateDiv = document.createElement('div');
    descriptionDiv.appendChild(descriptionTitle)
    descriptionDiv.appendChild(description)
    const dueDate = document.createElement('p');
    const dueDateTitle = document.createElement('h3')
    dueDateTitle.textContent= 'Due Date'
    dueDateDiv.appendChild(dueDateTitle)
    dueDateDiv.appendChild(dueDate)
    const priorityDiv = document.createElement('div');
    const priorityTitle =document.createElement('h3');
    priorityTitle.textContent = 'Priority';
    const priority = document.createElement('p');
    priorityDiv.appendChild(priorityTitle)
    priorityDiv.appendChild(priority);
    
    const noteDiv = document.createElement('div');
    noteDiv.className = 'notesDiv';
    const notes = document.createElement('h3');
    notes.className = 'notesNode';
    const notesP = document.createElement('p');
    notesP.classList = ('dropdown-notes')

    description.textContent =  item.description;
    dueDate.textContent =  item.dueDate;

    notes.textContent = 'Notes ';
    notes.appendChild(downImg)

    notesP.textContent = item.notes
    priority.textContent = item.priority;
    card.appendChild(buttonDiv)
    card.appendChild(headerDiv);
    card.appendChild(descriptionDiv);
 
    card.appendChild(dueDateDiv)
 
    card.appendChild(priorityDiv);
    noteDiv.appendChild(notes)
    noteDiv.appendChild(notesP)
    card.appendChild(noteDiv)
    content.appendChild(card)
}


function projectCardDisplay(array){
    content.textContent = null;
    projectListDom(projectArray)

    for (let i = 0; i < array.length; i++){
        let index = array.indexOf(array[i])
        cardMaker(array[i], index)

    }
}

function projectDropDowns () {

  let test = document.querySelectorAll('.notesDiv')
  
  test.forEach(test  => test.addEventListener('click', event => {
    let contentP = event.target.parentNode;
    let dropdown = contentP.parentNode.lastChild ;
   dropdown.classList.toggle('displayDropDown')
  
  }))
      
}

function deleteProject (){
   let deleteBtn = document.querySelectorAll('.deleteheaderButton');

   deleteBtn.forEach(button => button.addEventListener('click', event =>{
    console.log('DeleteTest')
   const cardNumber = event.target.parentNode.parentNode.id;
   const indexObject = projectArray.findIndex(object =>{
   return  object.title === cardNumber;
   })
   projectArray.splice(indexObject,1)
   let cardRemove = event.target.parentNode.parentNode;
   content.removeChild(cardRemove)
   projectListNode.textContent = null;
   projectListDom(projectArray)

}))

}



export {projectListDom , projectCardDisplay , projectDropDowns , deleteProject }

