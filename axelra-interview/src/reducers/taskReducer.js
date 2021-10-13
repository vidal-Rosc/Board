import {
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR,
    DELETE_TASK,
    SHOW_TASKS
} from '../types';

//Every reducer has its own state :)
const initialState = [
    {
        id: 0,
        title: "First Task",
        cards: [
            {
                id: 0,
                deal: "Creating a board now :)"
            },
            {
                id: 1,
                deal: "Trying to make this shit work"
            },
        ],
    },

    {
        id: 1,
        title: "Second Task",
        cards: [
            {
                id: 0,
                deal: "Creating the In progress Board"
            },
            {
                id: 1,
                deal: "Adding some css"
            },
            {
                id: 2,
                deal: "Getting fucking tired of thinking"
            },
        ],
    }

]

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}