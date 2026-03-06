/**
 * @callback ActivateCallback
 * @returns {void}
 */

import {hide, show} from "./gomszab.min.js"

class ViewElement{
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @type {ActivateCallback}
     */
    #activeCallback

    get div(){
        return this.#div;
    }

    get id(){
        return this.#id;
    }

    /**
     * @param {ActivateCallback} void
     */
    set activateCallback(value){
        this.#activeCallback = value;
    }

    constructor(id){
        this.#id = id;
        this.#div = document.createElement('div');
        this.#div.id = id;
    }

    /**
     * @param {HTMLElement} parent
     * @returns {void} 
     */
    appendTo(parent){
        parent.appendChild(this.#div);
    }


    /**
     * 
     * @param {string} id
     * @returns {void} 
     */
    activate(id){
        if(this.#id === id){
            show(this.#div);
            if(this.#activeCallback){
                this.#activeCallback();
            }
        }else{
            hide(this.#div);
        }
    }
}

export {ViewElement};