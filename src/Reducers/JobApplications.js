import { GET_APPLICATIONS } from "../Actions/Types";
export const CHANGE_CURRENT_APPLICATION = "CHANGE_CURRENT_APPLICATION"


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

        case CHANGE_CURRENT_APPLICATION:
            return {
                ...state,
                currentApplication: action.payload,
            }

        default:
            return state
    }
}