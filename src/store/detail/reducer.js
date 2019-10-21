import  {actionTypes} from './actions'

const getInitialState = () => ({
    comments: [],
    isFetching: false,
    error: ''
});

const details = (state = getInitialState(),{type,payload}) => {
    switch(type){
        case actionTypes.FETCH_COMMENTS_REQUEST:
            return{
                ...state,
                isFetching: true
            };
        case actionTypes.FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                comments: [...payload.comments],
                isFetching: false
            };
        default:
            return state;
    }
}

export default details;