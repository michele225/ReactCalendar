import { connect } from 'react-redux';
import * as actionsDelete from '../Actions/DeleteAction';
import ShowEvents from "../Components/ShowEvents";
import Calendar from "../Components/Calendar";

const mapStateToProps = (state) => {
    return {

        responseDelete: state.DeleteEventReducer.responseDelete

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);

export default EventContainer
