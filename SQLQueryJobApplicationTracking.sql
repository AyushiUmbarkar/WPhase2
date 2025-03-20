
create database JobApplicationTracking ;
use JobApplicationsTracking
CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    Password NVARCHAR(255) NOT NULL
);
INSERT INTO Users (FullName, Email, Password) VALUES
('Ayushi', 'Ayushi@example.com', 'Ayushi392#'),
('Piyush', 'piyush@example.com', 'piu89'),
('Piyush', 'piu@example.com', 'piu89'),
('String', 'user@example.com', 'string'),
('Ayushi Nandkishor Umbarkar', 'ayushi@gmail.com', 'nml'),
('Qwe', 'divyank@gmail.com', '678'),
('Jkll', 'naidu@gmail.com', 'ghj'),
('Yui', 'yvi@gmail.com', 'yui'),
('Pratik', 'pratik@gmail.com', 'pratik123'),
('Abc', 'abc@gmail.com', 'abc123'),
('Xyz', 'xyz@gmail.com', 'xyz123'),
('Rio', 'rio@gmail.com', 'rio789'),
('Abhi', 'abhi@gmai.com', 'abhi123'),
('Pri', 'pri@example.com', 'pri123'),
('Priyal', 'priyal@example.com', 'priyal456'),
('Dear', 'dear@gmail.com', 'dear123');

CREATE TABLE JobApplications (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Company NVARCHAR(255) NOT NULL,
    Position NVARCHAR(255) NOT NULL,
    Status NVARCHAR(100) NOT NULL,
    AppliedDate DATETIME NOT NULL,
    UserId INT NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE
);
INSERT INTO JobApplications (Company, Position, Status, AppliedDate, UserId) VALUES
('Wipro', 'SE', 'Offer Received', '2025-02-26 00:00:00', 14),
('Infosys', 'Web Developer', 'Offer Received', '2025-03-20 00:00:00', 16),
('Microsoft', 'Trainee', 'Applied', '2025-03-05 00:00:00', 16),
('Google', 'SE', 'Interview Scheduled', '2025-03-13 00:00:00', 16),
('LinkedIn', 'Software Developer', 'Training', '2025-03-13 00:00:00', 16),
('Tecas', 'Web Developer', 'Assignment Scheduled', '2025-03-13 00:00:00', 16);

