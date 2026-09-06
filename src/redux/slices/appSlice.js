import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: "Oleksandr Sidelnikov",
        email: "alex@example.com",
        role: "Frontend Developer",
    },
    theme: "light",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },

        changeRole: (state) => {
            state.user.role =
                state.user.role === "Frontend Developer"
                    ? "React Developer"
                    : "Frontend Developer";
        },
    },
});

export const { toggleTheme, changeRole } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectTheme = (state) => state.app.theme;

export default appSlice.reducer;
