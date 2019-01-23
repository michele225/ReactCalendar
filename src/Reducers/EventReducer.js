import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAddEvent: null
}

const EventReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.ADD_EVENT:

            return { ...state, responseAddEvent: action.payload.newValue};

        default:
            return state;
    }
}

export default EventReducer
