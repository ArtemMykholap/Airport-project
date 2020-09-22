const initialState = {
    isFetching: false,
    userData: null,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case TASKS_LIST_RECIEVED:
        //     return {
        //         ...state,
        //         tasksList: action.payload.tasksList
        //     }
        default: return state;
    }
};