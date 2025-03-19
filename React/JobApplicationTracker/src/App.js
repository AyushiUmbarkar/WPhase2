import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import JobApplicationList from "./components/JobApplicationList";
import JobApplicationForm from "./components/JobApplicationForm";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import PredefinedJobs from "./Pages/PredefinedJobs"; // ✅ Ensure this import exists
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/job-applications" element={<JobApplicationList />} />
                        <Route path="/add-job" element={<JobApplicationForm />} />
                        <Route path="/predefined-jobs" element={<PredefinedJobs />} /> {/* ✅ Added missing route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
