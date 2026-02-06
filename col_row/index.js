import data from "./data.json" with {type:"json"}
import { Manager } from "./manage.js"
import {Table} from "./table.js"


const manager = new Manager
manager.addCallback = (element) => { //ezzel hivjuk me a settert
    console.log(element)  //callback implementalas
}

for (let a of data.colspanDataArr){
    manager.addElement(a)
}