const initialState = { 
    currentValue: 0,
    futureValues: [],
    previousValues: [] };

// The uppercase for constants has become a standard.    
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";
// our reducer is called counter. action is just an object that redux knows what to do. 
// Below is an increment type. 
export default function counter( state = initialState, action ){
    switch ( action.type ){
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount,
                futureValues: [],
                previousValues: [ state.currentValue, ...state.previousValues ]
            };
        case DECREMENT:
            return {
                currentValue: state.currentValue - action.amount,
                futureValues: [],
                previousValues: [ state.currentValue, ...state.previousValues ] 
            };
        case UNDO: 
            return {
                currentValue: state.previousValues[ 0 ],
                futureValues: [ state.currentValue, ...state.futureValues ],
                previousValues: state.previousValues.slice( 1, state.previousValues.length )
            };
        case REDO: 
            return {
                currentValue: state.futureValues[ 0 ],
                futureValues: state.futureValues.slice( 1, state.futureValues.length ),
                previousValues: [ state.currentValue, ...state.previousValues ]
            };
        default:
            return state;
    }
}

// the return section of these functions are passed in to the reducer functions.
export function increment( amount ) {
    return { amount, type: INCREMENT };
}

export function decrement( amount ) {
    return { amount, type: DECREMENT };
}

export function undo(){
    return { type: UNDO };
}

export function redo(){
    return { type: REDO };
}