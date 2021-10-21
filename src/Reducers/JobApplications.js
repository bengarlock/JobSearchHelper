//reducers evaluate actions and return state based off that action.

import { GET_APPLICATIONS } from "../Actions/Types";

const initialState = {
    applications: [],
    currentApplication: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_APPLICATIONS:
            return {
                ...state,
                applications: action.payload,
            }

        default:
            return state
    }
}