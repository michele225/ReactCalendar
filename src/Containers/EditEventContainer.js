import { connect } from 'react-redux';
import * as actions from '../Actions/EditAction';
import EditEvent from "../Components/EditEvent";

const mapStateToProps = (state) => {
    return {
        responseUpdatePost : state.EventReducer.responseEdit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editEvent:(id, requestBody) => {
            dispatch(actions.asyncCallEditEvent(id, requestBody))
        }
    }
}

const EditEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditEvent);

export default EditEventContainer
