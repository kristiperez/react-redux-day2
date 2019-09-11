const initialState = {
    counter: 99
}

const reducer = (state = initialState, action) => {

    //can you switch instead of if/else. you should use this when you know all the possibilities. For example a with a compass, you know there are only 4 options.

    // switch(action.type) {
    //     case 'INC_COUNTER':
    //         return {
    //             ...state,
    //             counter: state.counter + 1
    //         }
    // }

    if(action.type == 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type == 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else if(action.type == 'DEC_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if(action.type == 'SUB_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    return state
}

export default reducer;