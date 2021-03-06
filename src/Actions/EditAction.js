import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallEditEvent(data) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbeditevent'
    //var url = 'http://localhost:3002/editEvent'

    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedEditResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedEditResponse = (obj) => ({
    type: ActionTypes.EDIT_EVENT,
    payload: {
        newValue: obj
    },
});

export const closeEditingEvent = () => ({
    type: ActionTypes.CLOSE_EDIT,

})
