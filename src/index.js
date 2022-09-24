import './style.css'
import { projectArray} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns, deleteProject} from './dom'
console.log(projectArray)

projectListDom(projectArray)
projectCardDisplay(projectArray)
projectDropDowns()
deleteProject()

const projectListNode = document.querySelector('.projectList');




console.log(projectListNode)
