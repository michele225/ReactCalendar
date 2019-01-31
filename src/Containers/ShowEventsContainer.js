import { connect } from 'react-redux';
import ShowEvents from "../Components/ShowEvents";

import * as actions from "../Actions/EventAction";
import * as actionsDay from "../Actions/EventsDayActions";
import * as actionsDelete from "../Actions/DeleteAction";



const mapStateToProps = (state) => {
    return {
        responseAllEvent : state.EventsDayReducer.responseAllEvent,
        isSearching: state.EventsDayReducer.isSearching,
        isShowingEvent: state.EventsDayReducer.isShowingEvent,
        isAddingEvent: state.EventsDayReducer.isAddingEvent,
        responseDelete: state.DeleteEventReducer.responseDelete

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
        deleteEvent:(id, requestBody) => {
            dispatch(actionsDelete.asyncCallDeleteEvent(id, requestBody))
        }

    }
}

const ShowEventsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowEvents);

export default ShowEventsContainer
