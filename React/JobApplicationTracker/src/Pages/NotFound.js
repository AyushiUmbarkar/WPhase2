import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <div className="alert alert-danger p-4 shadow">
                <h1 className="display-4">404</h1>
                <p className="lead">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
