import { GET_APPLICATIONS } from "./Types";
import { CREATE_APPLICATION } from "./Types";


//GET JOB APPLICATIONS
export const getJobApplications = () => {
    return async (dispatch) => {

        const response = await fetch("https://bengarlock.com/api/v1/jobapps/")
        let applications = await response.json()

        dispatch({
            type: GET_APPLICATIONS,
            payload: applications
        })
    };
}

export const createJobApplication = (application) => {
    return async (dispatch) => {
        const packet = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: application.name
            })
        }
        const response = await fetch("https://bengarlock.com/api/v1/jobapps/", packet)
        const newApplication = await response.json()
        dispatch({
            type: CREATE_APPLICATION,
            payload: newApplication
        })
    }
}