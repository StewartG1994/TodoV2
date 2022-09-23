import './style.css'
import { projectArray} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns} from './dom'
console.log(projectArray)
const notesNodes = document.querySelectorAll('.notesNode')


projectListDom(projectArray)
projectCardDisplay(projectArray)
projectDropDowns()

const projectListNode = document.querySelector('.projectList');




console.log(projectListNode)
