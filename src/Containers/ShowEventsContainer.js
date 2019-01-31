import { connect } from 'react-redux';
import ShowEvents from "../Components/ShowEvents";
import * as actionsDay from "../Actions/EventsDayActions";

const mapStateToProps = (state) => {
    return {
        responseAllEvent : state.EventsDayReducer.responseAllEvent,
        isSearching: state.EventsDayReducer.isSearching,
        isShowingEvent: state.EventsDayReducer.isShowingEvent
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showEventDay: (day ) => {
            dispatch(actionsDay.AsyncCallAllEventsDay(day));
        },

        closeEvent: ( ) => {
            dispatch(actionsDay.closeEvent());
        },
    }
}

const ShowEventsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowEvents);

export default ShowEventsContainer
