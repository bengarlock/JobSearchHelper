import {TOGGLE_COMPANY} from './Types'

export const toggleCompany = (company) => {

    return (dispatch) => {
        dispatch({
            type: TOGGLE_COMPANY,
            payload: company
        })
    }
}