import { combineReducers } from 'redux';
import EventReducer from './EventReducer'
import EventsDayReducer from './EventsDayReducer'


const RootReducer = combineReducers({
    EventReducer,
    EventsDayReducer
});
export default RootReducer
