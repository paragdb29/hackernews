import hackerNewApi from '../../services/hackerNewsApi'

export const actionTypes = {
    FETCH_STORIES_REQUEST : 'FETCH_STORIES_REQUEST',
    FETCH_STORIES_SUCCESS : 'FETCH_STORIES_SUCCESS',
    FETCH_STORIES_FAILURE : 'FETCH_STORIES_FAILURE',
    FETCH_STORY_REQUEST : 'FETCH_STORY_REQUEST',
    FETCH_STORY_SUCCESS : 'FETCH_STORY_SUCCESS',
    FETCH_STORY_FAILURE : 'FETCH_STORY_FAILURE'
}

const action = (type,payload) => ({type,payload});


const actions = {
    fetchStories: (payload={}) => {
        return dispath => {
            dispath(action(actionTypes.FETCH_STORIES_REQUEST, payload));
            return hackerNewApi.fetchStories()
                    .then(storyIds => {
                        dispath(action(actionTypes.FETCH_STORIES_SUCCESS,{storyIds}));
                        dispath(actions.fetchTopStories({storyIds,noOfStories:10}));
                        return storyIds;
                    })
                    .catch(err => dispath(action(actionTypes.FETCH_STORIES_FAILURE,err)));
        }
    },

    fetchTopStories: (payload={}) => {
        return dispath => {
            const {storyIds,noOfStories} = payload;
            dispath(action(actionTypes.FETCH_STORY_REQUEST, payload));
            return hackerNewApi.getTopStories(storyIds,noOfStories)
                    .then(stories => dispath(action(actionTypes.FETCH_STORY_SUCCESS,{stories})))
                    .catch(err => dispath(action(actionTypes.FETCH_STORY_FAILURE,err)))
        }
    }
}

export default actions;