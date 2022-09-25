import './style.css'
import { projectArray} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns, deleteProject, addProject} from './dom'


projectListDom(projectArray)
projectCardDisplay(projectArray)
projectDropDowns()
deleteProject()
addProject()

