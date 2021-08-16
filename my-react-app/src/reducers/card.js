const initialState={
    tires:[]
    
};

export default (state=initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':{
            return {
                ...state,
                tires: [
                    ...state.tires,
                    action.payload
                ]
            }
        };
        case 'REMOVE_ITEM':{
            return {
                ...state,
                tires: state.tires.filter(n=>n.id != action.payload)
                }
        };
        default:
            return state;
    }
};