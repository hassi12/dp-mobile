import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./../services/base_url";
import axios from "axios";

const initialState = {
    user: '',
    token: '',
    loading: false,
    message: '',
    error: false,
    isAuthenticated: false,
}

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const SignUpUrl =`${BASE_URL}api/v1/auth/register/`;
    const res = await fetch(SignUpUrl, {
        method: "post",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    });
    const data = await res.json()
    return data
});

export const signInUser = createAsyncThunk('signinuser', async ({ username, password },thunkAPI) => {
    let LoginURL = `${BASE_URL}api/v1/auth/login/`
    const res = await fetch(LoginURL, {
        method: "post",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    const data = await res.json()
    return data
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInUser.fulfilled, (state, { payload: { message, token, user } }) => {
                state.loading = false;
                if (user) {
                    state.isAuthenticated = true;
                    state.message = message;
                    state.token = token;
                    state.user = user;
                }
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = true;
                state.error = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, { payload: { message, token, user } }) => {
                state.loading = false;
                if (user) {
                    // state.isAuthenticated = true;
                    state.message = message;
                    state.token = token;
                    state.user = user;
                }
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = true;
                state.error = true;
                state.message = action.payload;
                state.user = null;
            });
    }
});

export const { logout } = authSlice.actions;
export const selectUser = (state) => state.user.isAuthenticated;
export default authSlice.reducer