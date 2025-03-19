import axios from "axios";

const API_URL = "http://localhost:5264/api/auth"; // ✅ Corrected API Base URL

// ✅ Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        
        console.error("Registration Error:", error);
        throw error.response?.data?.message || "Registration failed";
    }
};

// ✅ Login User
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            return response.data;
        } else {
            throw new Error("Login failed. No token received.");
        }
    } catch (error) {
        console.error("Login Error:", error);
        throw error.response?.data?.message || "Login failed";
    }
};

// ✅ Logout User
export const logoutUser = () => {
    localStorage.removeItem("token");
};

// ✅ Get Auth Token
export const getToken = () => localStorage.getItem("token");

// ✅ Check Authentication Status
export const isAuthenticated = () => !!getToken();
