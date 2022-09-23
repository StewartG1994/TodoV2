import './style.css'
import { projectArray} from './info'
import {projectListDom, projectCardDisplay} from './dom'
console.log(projectArray)
projectListDom(projectArray)
projectCardDisplay(projectArray)
const projectListNode = document.querySelector('.projectList');


console.log(projectListNode)
