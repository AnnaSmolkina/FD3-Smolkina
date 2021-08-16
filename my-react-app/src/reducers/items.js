const initialState={
    isReady:false,
    cnt: null,
    
};

export default (state=initialState, action) => {

    switch (action.type) {
        case 'SET_ITEM':{
            return {
                ...state,
                cnt: action.payload,
                isReady:true,
                
            }
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

