import axios from "axios";
import { getToken } from "./authService";

const API_URL = "http://localhost:5264/api/jobapplications";

export const getJobApplications = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error fetching jobs";
    }
};


export const addJobApplication = async (jobData) => {
    try {
        const response = await axios.post(API_URL, jobData, {
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error adding job";
    }
};


export const updateJobApplication = async (id, jobData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, jobData, {
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error updating job";
    }
};

export const deleteJobApplication = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error deleting job";
    }
};
