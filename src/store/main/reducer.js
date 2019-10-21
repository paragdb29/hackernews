import  {actionTypes} from './actions'

const getInitialState = () => ({
    storyIds: [],
    stories: [],
    noOfStories: 10,
    isFetching: false,
    error: ''
});

const main = (state = getInitialState(),{type,payload}) => {
    switch(type){
        case actionTypes.FETCH_STORIES_REQUEST:
        case actionTypes.FETCH_STORY_REQUEST:
            return{
                ...state,
                isFetching: true
            };
        case actionTypes.FETCH_STORIES_SUCCESS:
            return{
                ...state,
                ...payload
            };
        case actionTypes.FETCH_STORY_SUCCESS:
            return{
                ...state,
                stories: [...state.stories, ...payload.stories],
                noOfStories: 10,
                isFetching: false
            };
        default:
            return state;
    }
}

export default main;