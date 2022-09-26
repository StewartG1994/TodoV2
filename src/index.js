import './style.css'
import { projectArray,openModal, submitProject} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns, deleteProject} from './dom'
import {viewProject} from './viewProject'


projectListDom(projectArray)
projectCardDisplay(projectArray)
projectDropDowns()

openModal()
submitProject()
deleteProject()
viewProject()

