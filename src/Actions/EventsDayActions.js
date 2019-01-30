import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallAllEventsDay(day) {
    // var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilebyid'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetimagebyid'
    var url = 'http://localhost:3002/getAEventsDay'

    console.log(JSON.stringify(day))
    return function (dispatch) {
        axios.post(url, JSON.stringify(day))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedAllEvent(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedAllEvent = (obj) => ({
    type: ActionTypes.EVENTS_DAY,
    payload: {
        newValue: obj
    },
});

export function asyncCallGetAllevents(requestBody) {
    var url = 'http://localhost:3002/getAllAEvents'

    //console.log(JSON.stringify(requestBody))
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedEventBetweenDate(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receivedEventBetweenDate = (obj) => ({
    type: ActionTypes.EVENTS_DAY_BETWEEN_DATE,
    payload: {
        newValue: obj
    },
})
