import { connect } from 'react-redux';
import Calendar from "../Components/Calendar";
import * as actionsDay from "../Actions/EventsDayActions";

const mapStateToProps = (state) => {
    return {
        isSearching: state.EventReducer.isSearching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reloadNewMonth:() => {
            dispatch(actionsDay.loadNewMonth())
        }
    }
}

const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);

export default CalendarContainer
