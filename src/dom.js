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



    for (let i = 0; i < array.length; i++) {
        liDisplay(array[i])
    }}


function cardMaker (item,index) {
    const card = document.createElement('div');
    card.id=index;

    const headerDiv =document.createElement('div');
    headerDiv.className = 'headerDiv'
    const viewProjectBtn = document.createElement('button');
    viewProjectBtn.textContent = 'View'
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.className = 'deleteheaderButton'
    viewProjectBtn.className = 'viewProjectButton'

    deleteProjectBtn.textContent = 'Delete';
    const header = document.createElement('h1');
    header.textContent = item.title
    headerDiv.appendChild(header)
    headerDiv.appendChild(viewProjectBtn)
    headerDiv.appendChild(deleteProjectBtn)




    const downImg = new Image();
    downImg.src = down
 
    card.className = 'projectCards'
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
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
    
    card.appendChild(headerDiv);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    noteDiv.appendChild(notes)
    noteDiv.appendChild(notesP)
    card.appendChild(noteDiv)
    content.appendChild(card)
}


function projectCardDisplay(array){

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
   const cardNumber = event.target.parentNode.parentNode.id;
   projectArray.pop(cardNumber)
   let cardRemove = event.target.parentNode.parentNode;
   content.removeChild(cardRemove)
   console.log(projectArray)
   projectListNode.textContent = null;
   projectListDom(projectArray)

}))

}

function addProject (){
    const addProject = document.querySelector('.todoheader');
    addProject.addEventListener('click', )

}

export {projectListDom , projectCardDisplay , projectDropDowns , deleteProject}
