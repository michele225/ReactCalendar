import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAllEvent: [],
    isSearching: false
}

const EventDayReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.EVENTS_DAY:

            return { ...state, responseAllEvent: action.payload.newValue, isSearching: true};

        default:
            return state;
    }
}

export default EventDayReducer
