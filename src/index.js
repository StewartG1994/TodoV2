import './style.css'
import { projectArray,openModal, submitProject} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns, deleteProject} from './dom'


projectListDom(projectArray)
projectCardDisplay(projectArray)
projectDropDowns()

openModal()
submitProject()
deleteProject()

