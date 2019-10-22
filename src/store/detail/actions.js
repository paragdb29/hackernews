import hackerNewApi from '../../services/hackerNewsApi'

export const actionTypes = {
    FETCH_COMMENTS_REQUEST : 'FETCH_COMMENTS_REQUEST',
    FETCH_COMMENTS_SUCCESS : 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_FAILURE : 'FETCH_COMMENTS_FAILURE'
}

const action = (type,payload) => ({type,payload});


const actions = {

    fetchTopComments: (payload) => {
        return dispath => {
            const commentIds = payload;
            dispath(action(actionTypes.FETCH_COMMENTS_REQUEST, payload));
            return hackerNewApi.getTopComments(commentIds)
                    .then(comments => dispath(action(actionTypes.FETCH_COMMENTS_SUCCESS,{comments})))
                    .catch(err => dispath(action(actionTypes.FETCH_COMMENTS_FAILURE,err)))
        }
    }
}

export default actions;