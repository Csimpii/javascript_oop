/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from './functions.js'
 */

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * @type {Manager}
     */
    #manager

    constructor(HeaderArray, manager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        const tr = document.createElement('tr')
        thead.body.appendChild(tr)

        for(let e of HeaderArray){
            const th = document.createElement("th")

            th.colSpan = e.ColspanType
            this.innerText = 
            tr.appendChild(th)
        }

        const tbody = document.createElement("tbody")
        table.appendChild(tbody)

    }
}

export {Table}