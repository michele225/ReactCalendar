import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallAddEvent(requestBody) {
    // var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilebyid'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetimagebyid'
    //var url = 'http://localhost:3002/getFileById'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dblistimage'
    //'http://172.18.50.67:8065/plugins/com.mattermost.server-dblistimage'
    //http://localhost:3001/getImage

    return function (dispatch) {

                dispatch(receivedEvent(requestBody))
            }
}

export const receivedEvent = (obj) => ({
    type: ActionTypes.ADD_EVENT,
    payload: {
        newValue: obj
    },
});
