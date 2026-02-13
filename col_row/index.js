import data from "./data.json" with {type:"json"}
import { Manager } from "./manage.js"
import {Table} from "./table.js"

const renderColspanBody = (tbody, elem) => {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const th = document.createElement("th")
    table.appendChild(th)
}

const manager = new Manager();
manager.addCallback = (element) => { //ezzel hivjuk me a settert
    console.log(element)  
}

const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow(renderColspanBody)

for (let elem of data.colspanDataArr){
    manager.addElement(elem)
}
