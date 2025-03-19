import { SET_USER, LOGOUT_USER, SET_JOBS, ADD_JOB, UPDATE_JOB, DELETE_JOB } from "./actions";

const initialState = {
    user: null,
    jobs: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };

        case LOGOUT_USER:
            return { ...state, user: null };

        case SET_JOBS:
            return { ...state, jobs: action.payload };

        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] };

        case UPDATE_JOB:
            return {
                ...state,
                jobs: state.jobs.map((job) =>
                    job.id === action.payload.id ? action.payload : job
                ),
            };

        case DELETE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter((job) => job.id !== action.payload),
            };

        default:
            return state;
    }
};

export default rootReducer;
