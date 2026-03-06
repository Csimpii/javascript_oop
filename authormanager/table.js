import { createTableHeader } from "./gomszab.min.js";
import { ViewElement } from "./viewelement.js";

class Table extends ViewElement{


    #tbody;
    #manager;

    /**
     * 
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {*} manager 
     */
    constructor(id, headerArray, manager){
        super(id);
        this.#manager = manager;
        const table = document.createElement('table');
        this.div.appendChild(table);
        const thead = createTableHeader(headerArray);
        table.appendChild(thead);
    }
}

export {Table};