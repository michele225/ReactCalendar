import { connect } from 'react-redux';
import * as actions from '../Actions/EventAction';
import AddEvent from "../Components/AddEvent";

const mapStateToProps = (state) => {
    return {
        responseAddEvent : state.EventReducer.responseAddEvent,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (requestBody) => {
            dispatch(actions.AsyncCallAddEvent(requestBody));
        },
    }
}

const AddEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddEvent);

export default AddEventContainer
