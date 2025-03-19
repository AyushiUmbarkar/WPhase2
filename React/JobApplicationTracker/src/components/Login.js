import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 

        if (!email.trim() || !password.trim()) {
            setError("⚠️ Email and Password are required.");
            return;
        }

        try {
            const response = await loginUser({ email, password });

            if (response.token) {
                alert("✅ Login successful!");
                navigate("/dashboard");
            } else {
                setError("⚠️ Login failed. Please try again.");
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError(err || "❌ Invalid email or password");
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row w-100">
                <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h2 className="text-center text-primary fw-bold mb-4">🔑 Login</h2>

                            {error && <div className="alert alert-danger text-center py-2 mb-3">{error}</div>}

                            <form onSubmit={handleSubmit}>
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
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 rounded-3 fw-bold">Login</button>
                            </form>

                            <div className="text-center mt-3">
                                <a href="/register" className="text-decoration-none text-primary fw-semibold">Don't have an account? Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
