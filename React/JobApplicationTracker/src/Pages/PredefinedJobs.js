import React from "react";
import "../Pages/PredefinedJobs.css"; 

const PredefinedJobs = () => {
    const jobs = [
        // 🏢 Wipro Jobs
        { id: 1, title: "Software Engineer", company: "Wipro", location: "Bangalore, India", applyLink: "https://careers.wipro.com" },
        { id: 2, title: "Full Stack Developer", company: "Wipro", location: "Hyderabad, India", applyLink: "https://careers.wipro.com" },
        { id: 3, title: "Data Analyst", company: "Wipro", location: "Pune, India", applyLink: "https://careers.wipro.com" },
        { id: 4, title: "Cloud Engineer", company: "Wipro", location: "Remote", applyLink: "https://careers.wipro.com" },
        { id: 5, title: "Cyber Security Analyst", company: "Wipro", location: "Chennai, India", applyLink: "https://careers.wipro.com" },

        // 🌎 Other Tech Jobs
        { id: 6, title: "Software Engineer", company: "Google", location: "Remote", applyLink: "https://careers.google.com" },
        { id: 7, title: "Frontend Developer", company: "Microsoft", location: "Bangalore, India", applyLink: "https://careers.microsoft.com" },
        { id: 8, title: "Backend Developer", company: "Amazon", location: "Hyderabad, India", applyLink: "https://amazon.jobs" },
        { id: 9, title: "AI Engineer", company: "OpenAI", location: "San Francisco, USA", applyLink: "https://openai.com/careers" },
        { id: 10, title: "Data Scientist", company: "Facebook", location: "London, UK", applyLink: "https://www.metacareers.com" },
        { id: 11, title: "DevOps Engineer", company: "Tesla", location: "California, USA", applyLink: "https://www.tesla.com/careers" },
        { id: 12, title: "Cloud Architect", company: "IBM", location: "Remote", applyLink: "https://www.ibm.com/careers" },
        { id: 13, title: "ML Engineer", company: "NVIDIA", location: "Bangalore, India", applyLink: "https://nvidia.com/careers" },
        { id: 14, title: "React Developer", company: "Adobe", location: "Hyderabad, India", applyLink: "https://adobe.com/careers" },
        { id: 15, title: "Python Developer", company: "Infosys", location: "Pune, India", applyLink: "https://careers.infosys.com" },
        { id: 16, title: "Big Data Engineer", company: "Accenture", location: "Delhi, India", applyLink: "https://accenture.com/careers" },
        { id: 17, title: "Blockchain Developer", company: "Ripple", location: "Singapore", applyLink: "https://ripple.com/careers" },
        { id: 18, title: "iOS Developer", company: "Apple", location: "California, USA", applyLink: "https://apple.com/careers" },
        { id: 19, title: "Android Developer", company: "Samsung", location: "Seoul, South Korea", applyLink: "https://samsung.com/careers" },
        { id: 20, title: "UI/UX Designer", company: "LinkedIn", location: "San Francisco, USA", applyLink: "https://linkedin.com/careers" },
        { id: 21, title: "Automation Tester", company: "Cognizant", location: "Chennai, India", applyLink: "https://careers.cognizant.com" },
        { id: 22, title: "Network Engineer", company: "Cisco", location: "San Jose, USA", applyLink: "https://careers.cisco.com" },
        { id: 23, title: "IT Support Engineer", company: "TCS", location: "Mumbai, India", applyLink: "https://tcs.com/careers" },
        { id: 24, title: "Full Stack Developer", company: "Deloitte", location: "New York, USA", applyLink: "https://deloitte.com/careers" },
        { id: 25, title: "Security Analyst", company: "EY", location: "Toronto, Canada", applyLink: "https://ey.com/careers" },
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary my-4">📌 Apply Jobs through JobTrackingApplication</h1>
            <div className="row">
                {jobs.map((job) => (
                    <div key={job.id} className="col-md-4 mb-4">
                        <div className="card p-3 shadow-sm">
                            <h5 className="text-primary">{job.title}</h5>
                            <p><strong>🏢 Company:</strong> {job.company}</p>
                            <p><strong>📍 Location:</strong> {job.location}</p>
                            <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-success">Apply Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PredefinedJobs;
