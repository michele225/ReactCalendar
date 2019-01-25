import { connect } from 'react-redux';
import * as actions from '../Actions/EventAction';
import * as actionsDay from '../Actions/EventsDayActions';

import Calendar from '../Components/Calendar'

const mapStateToProps = (state) => {
    return {
        responseAddEvent : state.EventReducer.responseAddEvent,
        responseAllEvent : state.EventsDayReducer.responseAllEvent,
        isSearching: state.EventsDayReducer.isSearching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (requestBody) => {
            dispatch(actions.AsyncCallAddEvent(requestBody));
        },
        showEventDay: (day ) => {
            dispatch(actionsDay.AsyncCallAllEventsDay(day));
        }
    }
}

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);

export default EventContainer
