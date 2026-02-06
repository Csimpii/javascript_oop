/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from './functions.js'
 */
 

class Manager
{
    /**
     * @type {RowspanType[] | ColspanType[]}
     *
     */
    #dataArray
    /**
     * @callback addCallback
     * @param {RowspanType | ColspanType} element
     * @returns {void}
     */
 
    #addCallback
    set addCallback(element)
    {
        this.#addCallback = element
    }
    constructor()
    {
        this.#dataArray = []
    }
    /**
     * @param {ColspanType | RowspanType} param
     */
    addElement(param)
    {
        this.#dataArray.push(param)
        if (this.#addCallback)
        {
            this.#addCallback(param)
        }
    }
 
 
}
 
export {Manager}
