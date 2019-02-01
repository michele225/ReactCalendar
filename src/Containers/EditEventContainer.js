import { connect } from 'react-redux';
import * as actions from '../Actions/EditAction';
import EditEvent from "../Components/EditEvent";

const mapStateToProps = (state) => {
    return {
        responseUpdatePost : state.EventReducer.responseEdit,
        isEditing : state.EventReducer.isEditing

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editEvent:(requestBody) => {
            dispatch(actions.asyncCallEditEvent(requestBody))
        },
        closeEditingEvent:() => {
            dispatch(actions.closeEditingEvent())
        }

    }
}

const EditEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditEvent);

export default EditEventContainer
