const initialState={
    item:[]
    
};

export default (state=initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':{
            return {
                ...state,
                item: [
                    ...state.item,
                    action.payload
                ]
            }
        };
        case 'REMOVE_ITEM':{
            return {
                ...state,
                item: state.item.filter(n=>n.id != action.payload)
            
            }
        };
        
        default:
            return state;
    }
};