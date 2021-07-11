import {ADD_ITEM,DELETE_ITEM} from './todoTypes';

const initialState = {
    value:[]
}


const todoReducer = (state = initialState, action) => {
    console.log({state});
    console.log(action.payload);
    switch(action.type) {
        case ADD_ITEM:return {
            ...state,
            value:[...state.value,action.payload]
        }
        case DELETE_ITEM:
            return {
                ...state,
                value: [...state.value.slice(0, action.payload), ...state.value.slice(action.payload + 1)]
              }
        default:return state
    }
}

export default todoReducer