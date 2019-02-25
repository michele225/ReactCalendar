import { connect } from 'react-redux';
import carosello from "../Components/carosello";
import * as actions from "../Actions/EventAction";

const mapStateToProps = () => {
    return {
    };
};


const mapDispatchToProps = () => {
    return {

    }
}


const caroselloContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(carosello);

export default caroselloContainer
