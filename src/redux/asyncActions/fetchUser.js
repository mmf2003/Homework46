import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    "app/fetchUser",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`,
            );

            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
