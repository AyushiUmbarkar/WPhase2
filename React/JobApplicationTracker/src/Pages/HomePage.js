import React from "react";
import { Link } from "react-router-dom";
// ✅ Import CSS for background styling

const HomePage = () => {
    return (
        <div className="homepage container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
            {/* Hero Section */}
            <div className="card text-center shadow-lg p-5 border-0 bg-light bg-opacity-75">
                <h1 className="display-4 text-primary fw-bold"> 💼 Job Application Tracker</h1>
                <p className="lead text-muted">Manage and track your job applications efficiently.</p>
                <hr className="my-4" />
                <p className="fs-5">Get started by logging in or signing up today!</p>

                <div className="mt-4">
                    <Link to="/login" className="btn btn-lg btn-primary me-3 px-4">🔑 Login</Link>
                    <Link to="/register" className="btn btn-lg btn-success px-4">📝 Register</Link>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-5 text-center">
                <p className="text-muted mb-1"> <strong>Developed by</strong></p>
                <p className="small text-muted">📧 Email: <a href="mailto:201fa04074@gmail.com" className="text-decoration-none">201fa04074@gmail.com</a></p>
                <p className="small text-muted">🔒 Security Contact: <a href="mailto:udayreddyvari7081@gmail.com" className="text-decoration-none">udayreddyvari7081@gmail.com</a></p>
            </div>
        </div>
    );
};

export default HomePage;
