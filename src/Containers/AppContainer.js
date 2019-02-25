import { connect } from 'react-redux';
import App from '../Components/App'

const mapStateToProps = (state) => {
    return {
        editFileClicked: state.EventReducer.editFileClicked,
        event: state.EventReducer.event,
        selectedDate: state.EventReducer.selectedDate
    }
};

//const mapDispatchToProps = (dispatch) => {}

const AppContainer = connect(
    mapStateToProps,
    null,
)(App);

export default AppContainer
