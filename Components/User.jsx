import React from "react"; // 'useState' has been removed as it was not used
import './User.css';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            {/* Corrected class name from "user-heder" to "user-header" */}
            <div className="user-header">
                <h2>User info</h2>
            </div>
            <div className="user-content">
                <div className="user-details">
                    {/* Using <strong> for labels for better semantics */}
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Occupation:</strong> {user.occupation}</p>
                    {/* Corrected prop name from "user.lastlogin" to "user.lastLogin" */}
                    <p><strong>Last Login:</strong> {user.lastLogin}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;