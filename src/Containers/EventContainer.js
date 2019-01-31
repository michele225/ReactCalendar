import { connect } from 'react-redux';
import * as actionsDay from '../Actions/EventsDayActions';
import * as actionsDelete from '../Actions/DeleteAction';


import Calendar from '../Components/Calendar'

const mapStateToProps = (state) => {
    return {

        responseDelete: state.DeleteEventReducer.responseDelete


    };
};

const mapDispatchToProps = (dispatch) => {
    return {


        asyncCallDeleteEvents:(requestBody) => {
            dispatch(actionsDelete.asyncCallDeleteFile(requestBody))
        }
    }
}

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);

export default EventContainer
