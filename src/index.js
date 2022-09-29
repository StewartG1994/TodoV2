import './style.css'
import { projectArray,openModal, submitProject} from './info'
import {projectListDom, projectCardDisplay, projectDropDowns, deleteProject} from './dom'
import {viewProject, pushModalTask, returnBtn} from './viewProject'


projectListDom(projectArray)
projectCardDisplay(projectArray)
projectDropDowns()
openModal()
viewProject()
submitProject()
deleteProject()
pushModalTask()


