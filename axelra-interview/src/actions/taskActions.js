import {
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR,
    DELETE_TASK,
    SHOW_TASKS
} from '../types';

//Create new Tasks
export function createNewTask() {
    return (dispatch) => {
        dispatch( createTask() );
    }
}

const createTask = () => ({
    type: ADD_TASK_SUCCESS,
});