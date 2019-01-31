import { combineReducers } from 'redux';
import EventReducer from './EventReducer'
import EventsDayReducer from './EventsDayReducer'
import DeleteEventReducer from './DeleteEventReducer'



const RootReducer = combineReducers({
    EventReducer,
    EventsDayReducer,
    DeleteEventReducer
});
export default RootReducer
