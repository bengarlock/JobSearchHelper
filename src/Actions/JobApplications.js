import {DELETE_APPLICATION, GET_APPLICATIONS} from "./Types";
import { CREATE_APPLICATION } from "./Types";
import { CHANGE_CURRENT_APPLICATION } from "./Types"

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
                company_name: application.company_name,
                job_title: application.job_title,
                url: application.url,
                status: application.status,
                contact: application.contact,
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

export const deleteJobApplication = (application) => {
    return async (dispatch) => {
        const packet = {
            method: "DELETE"
        }

        await fetch("https://bengarlock.com/api/v1/jobapps/" + application.id + "/", packet)
        dispatch({
            type: DELETE_APPLICATION,
            payload: application
        })
    }
}

export const changeCurrentApplication = (application) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_CURRENT_APPLICATION,
            payload: [application]
        })
    }
}