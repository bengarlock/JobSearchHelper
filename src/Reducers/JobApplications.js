import {CREATE_APPLICATION, DELETE_APPLICATION, GET_APPLICATIONS} from "../Actions/Types";
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

        case CREATE_APPLICATION:
            let newApplications = [...state.applications, action.payload]
            return {
                ...state,
                applications: newApplications
            }

        case CHANGE_CURRENT_APPLICATION:
            return {
                ...state,
                currentApplication: action.payload,
            }

        case DELETE_APPLICATION:
            let updatedApplications = [...state.applications]
            updatedApplications = updatedApplications.filter(app => app.id !== action.payload.id)
            return {
                ...state,
                applications: updatedApplications,
                currentApplication: [],
            }

        default:
            return state
    }
}