import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import axios from "axios";

// import TokenService from "../../services/token";
import { api } from "../../services/api"
import { appUrls } from "../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const loginUser = createAsyncThunk(
    "user/loginUser", 
    async (data, { rejectWithValue }) => {
        try {
            const headType = {
                headers: {'Content-Type': 'application/json'}
            };
            const res = await axios.post("https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login", data, headType)
            if (res?.status === 200) {
                const { token } = res?.data?.data;
                const { user } = res?.data?.data;
                sessionStorage.setItem("token", token);
                // console.log(user, "pop");
                sessionStorage.setItem("userObj", JSON.stringify(user));
                toast(`${res?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                })
            }
            return res?.data
        }
        catch (err) {
            toast("Wrong Email or Password", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });
            return rejectWithValue(err.data.message)
        }
    }
)


const loginSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default loginSlice.reducer