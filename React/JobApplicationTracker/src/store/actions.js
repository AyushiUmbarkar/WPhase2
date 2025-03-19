
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_JOBS = "SET_JOBS";
export const ADD_JOB = "ADD_JOB";
export const UPDATE_JOB = "UPDATE_JOB";
export const DELETE_JOB = "DELETE_JOB";

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const setJobs = (jobs) => ({
    type: SET_JOBS,
    payload: jobs,
});

export const addJob = (job) => ({
    type: ADD_JOB,
    payload: job,
});

export const updateJob = (job) => ({
    type: UPDATE_JOB,
    payload: job,
});

export const deleteJob = (jobId) => ({
    type: DELETE_JOB,
    payload: jobId,
});
