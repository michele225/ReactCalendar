import { connect } from 'react-redux';
import Cells from '../Components/Cells'
import * as actionsDay from "../Actions/EventsDayActions";


const mapStateToProps = (state) => {
    return {
        isLoading: state.EventReducer.isLoading,
        responseAllEventBetweenDate: state.EventReducer.responseAllEventBetweenDate,
        responseAllEvent : state.EventsDayReducer.responseAllEvent,
        isSearching: state.EventsDayReducer.isSearching,
        isShowingEvent: state.EventsDayReducer.isShowingEvent,
        isLoadingAfterDelete: state.EventReducer.isLoadingAfterDelete,


    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallGetAllevents:(requestBody) => {
            dispatch(actionsDay.asyncCallGetAllevents(requestBody))
        },
        showEventDay: (day ) => {
            dispatch(actionsDay.AsyncCallAllEventsDay(day));
        },
        openEvent: ( ) => {
            dispatch(actionsDay.openEvent());
        },
    }
}

const CellsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cells);

export default CellsContainer
