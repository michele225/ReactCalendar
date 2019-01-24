import { connect } from 'react-redux';
import * as actions from '../Actions/EventAction';
import Calendar from '../Components/Calendar'

const mapStateToProps = (state) => {
    return {
        responseAddEvent : state.EventReducer.responseAddEvent
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (requestBody) => {
            dispatch(actions.AsyncCallAddEvent(requestBody));
        }
    }
}

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);

export default EventContainer
