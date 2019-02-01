import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAllEvent: [],
    isRefreshing: false,
    isSearching: false,
    responseAddEvent: null,
    responseAllEventBetweenDate: null,
    isLoading: true,
    responseDelete: null,
    isLoadingAfterDelete: false,
    responseEdit: null
}

const EventReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.EVENTS_DAY:
            return { ...state, responseAllEvent: action.payload.newValue, isSearching: true, isRefreshing:true};

        case ActionTypes.ADD_EVENT:
            return { ...state, responseAddEvent: action.payload.newValue, isLoading: true, isRefreshing: false};

        case ActionTypes.EVENTS_DAY_BETWEEN_DATE:
            state.responseAllEventBetweenDate = []
            return {...state, responseAllEventBetweenDate: state.responseAllEventBetweenDate.concat(action.payload.newValue), isLoading: false, isLoadingAfterDelete:false}

        case ActionTypes.DELETE_FILE:
            return { ...state, responseDelete: action.payload.newValue, isLoadingAfterDelete: true, isRefreshing: false};

        case ActionTypes.OPEN_EVENTS:
            return { ...state, isRefreshing: false};

        case ActionTypes.EDIT_EVENT:
            return { ...state, responseEdit: action.payload.newValue};

        case ActionTypes.LOAD_NEW_MONTH:
            return { ...state, isLoading: true};


        default:
            return state;
    }
}

export default EventReducer
