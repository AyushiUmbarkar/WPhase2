import React, { useState } from "react";
import { addJobApplication } from "../services/jobApplicationService";

const JobApplicationForm = ({ onJobAdded }) => {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState(""); 
    const [appliedDate, setAppliedDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!status) {
            alert("Please select a valid status before submitting.");
            return;
        }

        const finalDate = appliedDate || new Date().toISOString().split("T")[0];

        try {
            await addJobApplication({ company, position, status, appliedDate: finalDate });
            alert("Job application added!");
            setCompany("");
            setPosition("");
            setStatus("");
            setAppliedDate("");
            onJobAdded();
        } catch (error) {
            alert("Refresh the Page ");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-lg">
                        <h2 className="text-center text-primary">Add Job Application</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Company Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={company} 
                                    onChange={(e) => setCompany(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Position</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={position} 
                                    onChange={(e) => setPosition(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Application Status</label>
                                <select 
                                    className="form-select" 
                                    value={status} 
                                    onChange={(e) => setStatus(e.target.value)} 
                                    required
                                >
                                    <option value="" disabled>Select Status</option>
                                    <option value="Applied">Applied</option>
                                    <option value="Assignment Scheduled">Assignment Scheduled</option>
                                    <option value="Interview Scheduled">Interview Scheduled</option>
                                    <option value="Training">Training</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Offer Received">Offer Received</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Applied Date</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    value={appliedDate} 
                                    onChange={(e) => setAppliedDate(e.target.value)} 
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100">Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationForm;
