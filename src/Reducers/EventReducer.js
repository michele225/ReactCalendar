import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAddEvent: null,
    responseAllEventBetweenDate: null,
    isLoading: true,
    responseDelete: null,
    isLoadingAfterDelete: false
}

const EventReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.ADD_EVENT:
            return { ...state, responseAddEvent: action.payload.newValue, isLoading: true};

        case ActionTypes.EVENTS_DAY_BETWEEN_DATE:
            state.responseAllEventBetweenDate = []
            return {...state, responseAllEventBetweenDate: state.responseAllEventBetweenDate.concat(action.payload.newValue), isLoading: false, isLoadingAfterDelete:false}

        case ActionTypes.DELETE_FILE:
            return { ...state, responseDelete: action.payload.newValue, isLoadingAfterDelete: true};


        default:
            return state;
    }
}

export default EventReducer
