import { combineReducers } from 'redux';
import applications from "./JobApplications";
import menu from "./Menu"
import company from "./Company"

export default combineReducers({
    applications,
    menu,
    company
})