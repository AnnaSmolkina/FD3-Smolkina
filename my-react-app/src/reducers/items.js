const initialState={
    isReady:false,
    tires: null,   
};

export default (state=initialState, action) => {

    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                tires: action.payload,
                isReady:true
            };
        
        case 'SET_IS_READY':{
            return {
                ...state,
                isReady:action.payload
            }
        };
        
        default:
            return state;
    }
};

