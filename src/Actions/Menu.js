import { TOGGLE_MENU } from "./Types";


export const toggleMenu = (menu) => {

    return (dispatch) => {
        dispatch({
            type: TOGGLE_MENU,
            payload: menu
        })
    }

}