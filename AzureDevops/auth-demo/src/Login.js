import React, { useState } from "react";
import API from "./api";

const Login = ({ setLoggedIn }) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [ctoken, setToken] = useState("");
    const handleLogin = async () => {
        try {
            const response = await fetch("https://localhost:7264/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {

                setToken("Login failed");
                return;
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            setToken(data.token);

            //setLoggedIn(true);

        } catch (error) {

        }
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                name="username"
                placeholder="username"
                value={credentials.username}
                onChange={handleChange}
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
            />
            {ctoken && <p>Token: {ctoken}</p>}

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;