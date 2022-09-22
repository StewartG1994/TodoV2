const projectListNode = document.querySelector('.projectList');

function projectListDom(array){
    for (let i = 0; i < array.length; i++) {
        let projectLi = document.createElement('li')
        projectLi.textContent = array[i].title;
        projectListNode.appendChild(projectLi);
        console.log(array[i].title);
        
    }
}

function projectCardDisplay(array){
    for (let i = 0; i < array.length; i++){

    }
}

export {projectListDom}