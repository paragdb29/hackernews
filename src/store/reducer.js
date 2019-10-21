import { combineReducers } from 'redux'
import main from './main/reducer'
import details from './detail/reducer'

const rootReducer = combineReducers({
    main,
    details
});

export default rootReducer;