const projectArray = [];
const projectFactory = (title, description, dueDate, priority, notes, checklist, todoArray) =>{
    todoArray = []

    return {title, description, dueDate, priority ,notes , checklist, todoArray}
}

const todoFactory = (task, description,dueDate, priority, completed) =>
 {  return{ task, description,dueDate, priority, completed}}


function projectAddition (item) {
    projectArray.push(item);    
}

function todoArrayAddition (array, item) {
    array.push(item)
}


projectAddition(projectFactory('Create new logo', 'Create a new logo design to be used throughout new business launch', '26/02/2023', 'High', 'To be updated'))
projectAddition(projectFactory('Test project', 'Create a new logo design to be used throughout new business launch', '26/02/2023', 'High', 'To be updated 2'))
projectAddition(projectFactory('Test thrice', 'Create a new logo design to be used throughout new business launch', '26/02/2023', 'High', ' To be updated 3 To be updated 3 To be updated 3 To be updated 3 To be updated 3 To be updated 3'))


export {projectArray,todoArrayAddition, todoFactory }
