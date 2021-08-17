const initialState={
    tires: []
    
};

export default (state=initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CARD':{
            return {
                ...state,
                tires: [
                    ...state.tires,
                    action.payload
                ]
            }
        };
        case 'REMOVE_FROM_CARD':{
            return {
                ...state,
                tires: state.tires.filter(n=>n.id != action.payload)
                }
        };
        default:
            return state;
    }
};