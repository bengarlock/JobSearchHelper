import { TOGGLE_MENU } from "../Actions/Types";

const initialState = {
    menu: 'home'
}

export default function (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menu: action.payload,
            }

        default:
            return state
    }
}