import { connect } from 'react-redux';
import * as actionsDelete from "../Actions/DeleteAction";
import * as actions from "../Actions/EventAction";
import Event from "../Components/Event";


const mapStateToProps = (state) => {
    return {
        responseDelete: state.EventReducer.responseDelete,
        isRefreshing: state.EventReducer.isRefreshing,
        isEditing : state.EventReducer.isEditing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent:(requestBody) => {
            dispatch(actionsDelete.asyncCallDeleteEvent(requestBody))
        },
        openEditEvent: ( ) => {
            dispatch(actions.openEditingEvent());
        },

    }
}

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Event);

export default EventContainer
