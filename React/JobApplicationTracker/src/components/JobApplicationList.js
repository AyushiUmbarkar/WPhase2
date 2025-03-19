import React, { useEffect, useState } from "react";
import { getJobApplications, deleteJobApplication } from "../services/jobApplicationService";

const JobApplicationList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const data = await getJobApplications();
            setJobs(data);
        } catch (error) {
            alert("Error fetching jobs: " + error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteJobApplication(id);
            alert("Job deleted!");
            fetchJobs();
        } catch (error) {
            alert("Error deleting job: " + error.message);
        }
    };

    // Function to get status-specific Bootstrap badge class
    const getStatusBadge = (status) => {
        switch (status) {
            case "Applied":
                return "bg-info"; // Blue
            case "Assignment Scheduled":
                return "bg-secondary"; // Purple
            case "Interview Scheduled":
                return "bg-warning"; // Orange
            case "Training":
                return "bg-primary"; // Teal
            case "Rejected":
                return "bg-danger"; // Red
            case "Offer Received":
                return "bg-success"; // Green
            default:
                return "bg-light text-dark"; // Default: Gray
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary">Job Applications</h2>
            {jobs.length === 0 ? (
                <p className="text-center text-muted">No job applications found.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job.id}>
                                    <td>{index + 1}</td>
                                    <td>{job.company}</td>
                                    <td>{job.position}</td>
                                    <td>
                                        <span className={`badge ${getStatusBadge(job.status)}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(job.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default JobApplicationList;
