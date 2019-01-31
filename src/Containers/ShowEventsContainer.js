import { connect } from 'react-redux';
import ShowEvents from "../Components/ShowEvents";

import * as actions from "../Actions/EventAction";
import * as actionsDay from "../Actions/EventsDayActions";


const mapStateToProps = (state) => {
    return {
        responseAllEvent : state.EventsDayReducer.responseAllEvent,
        isSearching: state.EventsDayReducer.isSearching,
        isShowingEvent: state.EventsDayReducer.isShowingEvent,
        isAddingEvent: state.EventsDayReducer.isAddingEvent,

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
        openAddingEvent: ( ) => {
            dispatch(actions.openAddingEvent());
        },

    }
}

const ShowEventsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowEvents);

export default ShowEventsContainer
