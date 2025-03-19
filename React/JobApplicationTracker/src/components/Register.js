import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token"); // ✅ Check if user is already logged in
        if (isAuthenticated) {
            alert("🚨 You are already logged in. Please logout first!");
            navigate("/dashboard"); // ✅ Redirect to Dashboard if already logged in
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ fullName, email, password });
            alert("🎉 Registration successful! Please login.");
            navigate("/login");
        } catch (error) {
            alert("❌ Registration failed: " + error.message);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row w-100">
                <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h2 className="text-center text-success fw-bold mb-4">📝 Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control rounded-3" 
                                        value={fullName} 
                                        onChange={(e) => setFullName(e.target.value)} 
                                        required 
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control rounded-3" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control rounded-3" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                        placeholder="Create a strong password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 rounded-3 fw-bold">Register</button>
                            </form>
                            <div className="text-center mt-3">
                                <a href="/login" className="text-decoration-none text-success fw-semibold">Already have an account? Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
