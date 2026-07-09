import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    
    signup: async (userData) => {
        if (!userData.name || !userData.email || !userData.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        });
        const data = await res.json();
        if (!data.success) {
            return { success: false, message: data.message };
        }
        localStorage.setItem("user", JSON.stringify(data.data));
        set({ user: data.data });
        return { success: true, message: "Account created successfully" };
    },

    login: async (credentials) => {
        if (!credentials.email || !credentials.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials),
        });
        const data = await res.json();
        if (!data.success) {
            return { success: false, message: data.message };
        }
        localStorage.setItem("user", JSON.stringify(data.data));
        set({ user: data.data });
        return { success: true, message: "Logged in successfully" };
    },

    logout: () => {
        localStorage.removeItem("user");
        set({ user: null });
    }
}));
