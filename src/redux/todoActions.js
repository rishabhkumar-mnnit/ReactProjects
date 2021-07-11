import {ADD_ITEM,DELETE_ITEM} from './todoTypes'

export const addItem = (val) => {
    return {
        type:ADD_ITEM,
        info:'addItem',
        payload:val
    }
}

export const deleteItem = (index) => {
    return {
        type:DELETE_ITEM,
        info:'deleteItem',
        payload:index
    }
}