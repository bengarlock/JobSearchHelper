import { combineReducers } from 'redux';
import applications from "./JobApplications";
import menu from "./Menu"

export default combineReducers({
    applications,
    menu
})