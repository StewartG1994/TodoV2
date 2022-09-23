const projectListNode = document.querySelector('.projectList');
const content = document.querySelector('.content')

function projectListDom(array){
    for (let i = 0; i < array.length; i++) {
        let projectLi = document.createElement('li')
        projectLi.textContent = array[i].title;
        projectListNode.appendChild(projectLi);
        console.log(array[i].title);
        
    }
}

function cardMaker (item,index) {
    const card = document.createElement('div');
    card.className = 'projectCards'
    const header = document.createElement('h1');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const noteDiv = document.createElement('div');
    noteDiv.className = 'notesDiv';
    const notes = document.createElement('h3');
    notes.className = 'notesNode';
    const notesP = document.createElement('p');
    notesP.classList = ('dropdown-notes')


    header.textContent = item.title
    description.textContent = item.description;
    dueDate.textContent = item.dueDate;
    notes.textContent = 'Notes';
    notesP.textContent = item.notes
  
    const checkboxdiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkboxId';
    checkbox.name = 'checklist';
    checkbox.value = 'checklist';
    const checkboxLabel = document.createElement('label')
    checkboxLabel.htmlFor = 'checkbox'
    checkboxLabel.textContent = item.checklist;
    
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    noteDiv.appendChild(notes)
    noteDiv.appendChild(notesP)
    card.appendChild(noteDiv)
    card.appendChild(checkboxLabel)
    checkboxdiv.appendChild(checkbox)
    checkboxdiv.appendChild(checkboxLabel);
    card.appendChild(checkboxdiv)
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
    let dropDown = contentP.lastChild;

    dropDown.classList.toggle('displayDropDown')
  
  }))


        
        
}

export {projectListDom , projectCardDisplay , projectDropDowns}

//title, description, dueDate, priority, notes, checklist, todoArray