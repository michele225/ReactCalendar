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
    responseEdit: null,
    isEditing: false,
    id: null,
    editFileClicked: false,
    event: null,
    selectedDate: null
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
            return { ...state, responseEdit: action.payload.newValue, isEditing: false, isRefreshing: false, editFileClicked: false};

        case ActionTypes.LOAD_NEW_MONTH:
            return { ...state, isLoading: true};

        case ActionTypes.CLOSE_EDIT:
            return { ...state, isEditing: false, editFileClicked: false};

        case ActionTypes.OPEN_EDIT:
            return { ...state, isEditing: true, event: action.payload.newValue, editFileClicked: true};

        case ActionTypes.SAVE_SELECTED_DATE:
            return { ...state, selectedDate: action.payload.newValue };

        default:
            return state;
    }
}

export default EventReducer
