const projectArray = [];
const projectFactory = (title, description, dueDate, priority, notes, checklist) =>{
    return {title, description, dueDate, priority ,notes , checklist}
}

const todoFactory = (task, description,dueDate, priority, completed) =>{
     return task, description,dueDate, priority, completed}


function projectAddition (item) {
    projectArray.push(item); 
   
}




projectAddition(projectFactory('Create new logo', 'Create a new logo design to be used throughout new business launch', '26/02/2023', 'High', 'To be updated', 'test'))


export {projectArray, }