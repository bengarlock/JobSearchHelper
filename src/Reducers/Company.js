import { TOGGLE_COMPANY } from "../Actions/Types";

const initialState = {
    company: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_COMPANY:
            return {
                ...state,
                company: action.payload,
            }

        default:
            return state
    }
}