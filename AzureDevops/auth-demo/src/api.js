const BASE_URL = "https://localhost:7264/api";

const API = {
    get: async (endpoint) => {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` })
            }
        });
        console.log('test');
        return response.json();
    },

    post: async (endpoint, data) => {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` })
            },
            body: JSON.stringify(data)
        });

        return response.json();
    }
};

export default API;