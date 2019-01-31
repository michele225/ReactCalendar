import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAddEvent: null,
    responseAllEventBetweenDate: null,
    isLoading: true,
}

const EventReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.ADD_EVENT:
            return { ...state, responseAddEvent: action.payload.newValue};

        case ActionTypes.EVENTS_DAY_BETWEEN_DATE:
            state.responseAllEventBetweenDate = []
            return {...state, responseAllEventBetweenDate: state.responseAllEventBetweenDate.concat(action.payload.newValue), isLoading: false}




        default:
            return state;
    }
}

export default EventReducer
