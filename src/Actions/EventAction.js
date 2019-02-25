import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallAddEvent(requestBody) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbsavecalendarevent'
    //var url = 'http://localhost:3002/saveCalendarEvent'
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

export const openEditingEvent = (eventCalendar) => ({
    type: ActionTypes.OPEN_EDIT,
    payload: {
        newValue: eventCalendar
    },

})
