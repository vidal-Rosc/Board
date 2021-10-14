import { TYPES } from "../actions";



export const AddListTask = (title) => {
    return {
        type: TYPES.ADD_LIST,
        payload: title,
    }  
}