import { TYPES } from "../actions";



export const AddTask = (listID, text) => {
    return {
        type: TYPES.ADD_TASK,
        payload: {text, listID},
    }  
}
