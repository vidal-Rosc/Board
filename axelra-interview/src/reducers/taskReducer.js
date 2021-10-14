import {TYPES} from "../actions";



//static ID ( this will come from BBD) if I get time :(
let hardID = 2;
let taskID = 4;

const initialState = [
    {
        id: 0,
        title: "In Progress",
        cards: [
            {
                id: 0,
                deal: "bla bla bla"
            },
            {
                id: 1,
                deal: "conditional button"
            },
            {
                id: 3,
                deal: "Styling main buttons"
            },
        ],
    },

    {
        id: 1,
        title: "Done",
        cards: [
            {
                id: 0,
                deal: "Creating the In-progress Board"
            },
            {
                id: 1,
                deal: "Adding some css"
            },
            {
                id: 3,
                deal: "Not done :("
            },
        ],
    }

]

export default function(state = initialState, action) {
    switch(action.type) {
        case  TYPES.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: hardID,
            }
            hardID += 1;
            return [...state, newList];

        case TYPES.ADD_TASK:
            const newTask = {
                deal: action.payload.deal,
                id: taskID
            }
            taskID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards,  newTask]
                    };    
                }else {
                    return list;
                }
            });
            return newState
        default:
            return state;
    }
}