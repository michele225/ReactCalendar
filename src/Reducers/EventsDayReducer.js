import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAllEvent: [],
    isSearching: false,
    isShowingEvent: false,
    isAddingEvent: false

}

const EventDayReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.EVENTS_DAY:

            return { ...state, responseAllEvent: action.payload.newValue, isSearching: true};

        case ActionTypes.OPEN_EVENTS:
            return { ...state, isShowingEvent: true};

        case ActionTypes.CLOSE_EVENTS:
            return { ...state, isShowingEvent: false};

        case ActionTypes.SHOW_ADDING_EVENT:
            return { ...state, isAddingEvent: true};

        case ActionTypes.NO_SHOW_ADDING_EVENT:
            return { ...state, isAddingEvent: false};

        default:
            return state;
    }
}

export default EventDayReducer
