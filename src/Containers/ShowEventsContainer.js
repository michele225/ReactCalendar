import { connect } from 'react-redux';
import ShowEvents from "../Components/ShowEvents";

import * as actions from "../Actions/EventAction";
import * as actionsDay from "../Actions/EventsDayActions";
import * as actionsDelete from "../Actions/DeleteAction";



const mapStateToProps = (state) => {
    return {
        responseAllEvent : state.EventReducer.responseAllEvent,
        isSearching: state.EventReducer.isSearching,
        isShowingEvent: state.EventsDayReducer.isShowingEvent,
        isAddingEvent: state.EventsDayReducer.isAddingEvent,
        responseDelete: state.EventReducer.responseDelete,
        isRefreshing: state.EventReducer.isRefreshing,
        responseEdit: state.EventReducer.responseEdit,
        isEditing: state.EventReducer.isEditing,
        id: state.EventReducer.id

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
        deleteEvent:(requestBody) => {
            dispatch(actionsDelete.asyncCallDeleteEvent(requestBody))
        },
        openEditEvent: (eventCalendar) => {
            dispatch(actions.openEditingEvent(eventCalendar));
        },
        saveSelectedDate: (selectedDate) => {
            dispatch(actionsDay.saveSelectedDate(selectedDate))
        }
    }
}

const ShowEventsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowEvents);

export default ShowEventsContainer
