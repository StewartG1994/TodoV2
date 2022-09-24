import './style.css'
import { projectArray} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns, deleteProject} from './dom'
console.log(projectArray)
const notesNodes = document.querySelectorAll('.notesNode')


projectCardDisplay(projectArray)
projectListDom(projectArray)
projectDropDowns()
deleteProject()

const projectListNode = document.querySelector('.projectList');




console.log(projectListNode)
