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

function cardMaker (item) {
    const card = document.createElement('div');
    card.className = 'projectCards'
    const header = document.createElement('h1');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const notes = document.createElement('p');

    header.textContent = item.title
    description.textContent = item.description;
    dueDate.textContent = item.dueDate;
    notes.textContent = item.notes;

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
    card.appendChild(notes);
    card.appendChild(checkboxLabel)
    checkboxdiv.appendChild(checkbox)
    checkboxdiv.appendChild(checkboxLabel);
    card.appendChild(checkboxdiv)
    content.appendChild(card)
}


function projectCardDisplay(array){
    for (let i = 0; i < array.length; i++){
        cardMaker(array[i])

    }
}

export {projectListDom , projectCardDisplay}

//title, description, dueDate, priority, notes, checklist, todoArray