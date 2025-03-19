import React from "react";
import { Link } from "react-router-dom";
import JobApplicationForm from "../components/JobApplicationForm";
import JobApplicationList from "../components/JobApplicationList";

const Dashboard = () => {
    return (
        <div className="container mt-4">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-dark fw-bold">📊 Dashboard</h1>
                <Link to="/" className="btn btn-outline-primary px-4 py-2 shadow-sm">
                    🏠 Home
                </Link>
            </div>

            {/* Job Application Sections */}
            <div className="row g-4">
                {/* Job Form Section */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm p-4">
                        <h5 className="text-center text-success fw-bold">➕ Add a New Job</h5>
                        <hr />
                        <JobApplicationForm />
                    </div>
                </div>

                {/* Job List Section */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm p-4">
                        <h5 className="text-center text-info fw-bold">📋 Your Job Applications</h5>
                        <hr />
                        <JobApplicationList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
