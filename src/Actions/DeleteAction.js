import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallDeleteEvent(data) {
    // var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilebyid'
    var url = 'http://localhost:3002/deleteEvent'

    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                console.log(response)
                dispatch(receivedDeleteResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
    console.log(data)
    return function (dispatch) {
        dispatch(receivedDeleteResponse("ok"))
    }
}

export const receivedDeleteResponse = (obj) => ({
    type: ActionTypes.DELETE_FILE,
    payload: {
        newValue: obj
    },
});
