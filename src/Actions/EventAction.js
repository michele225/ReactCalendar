import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallAddEvent(requestBody) {
    // var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilebyid'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetimagebyid'
    var url = 'http://localhost:3002/saveCalendarEvent'


    console.log(JSON.stringify(requestBody))
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedEvent(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}




export const receivedEvent = (obj) => ({
    type: ActionTypes.ADD_EVENT,
    payload: {
        newValue: obj
    },
});

export const openAddingEvent = () => ({
    type: ActionTypes.SHOW_ADDING_EVENT,

})

export const closeAddingEvent = () => ({
    type: ActionTypes.NO_SHOW_ADDING_EVENT,
})

export const openEditingEvent = (id) => ({
    type: ActionTypes.OPEN_EDIT,
    payload: {
        newValue: id
    },

})