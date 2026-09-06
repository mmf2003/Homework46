import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../asyncActions/fetchUser";

const initialState = {
    user: {
        name: "Oleksandr Sidelnikov",
        email: "alex@example.com",
        role: "Frontend Developer",
    },
    theme: "light",

    loading: false,
    error: null,
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

    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;

                state.user = {
                    name: action.payload.name,
                    email: action.payload.email,
                    role: "API User",
                };
            })

            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});

export const { toggleTheme, changeRole } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectTheme = (state) => state.app.theme;
export const selectLoading = (state) => state.app.loading;
export const selectError = (state) => state.app.error;

export default appSlice.reducer;
