import React, { useEffect, useState } from "react";
import API from "./api";

const Dashboard = () => {
    const [message, setMessage] = useState("");

    const getDashboard = async () => {
        try {
            const res = await API.get("https://localhost:7264/api/admin/dashboard");
            setMessage(res.data);
        } catch (err) {
            console.error(err);
            setMessage("Unauthorized");
        }
    };

    useEffect(() => {
        getDashboard();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
        </div>
    );
}

export default Dashboard;