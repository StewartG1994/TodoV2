import './style.css'
import { projectArray, todoArrayAddition,todoFactory } from './info'
todoArrayAddition(projectArray[0].todoArray,todoFactory('test','test','test','test','test'))
todoArrayAddition(projectArray[0].todoArray,todoFactory('test2','test2','test2','test2','test2'))

console.log(projectArray)
