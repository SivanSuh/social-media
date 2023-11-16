import LoginModel from "@/models/LoginModel";
import RegisterModel from "@/models/RegisterModel";
import authService from "@/service/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie"

interface AuthProps {
    authData:RegisterModel | null | unknown 
    error:boolean
}

const initialState:AuthProps = {
    authData:null,
    error:false
}

export const login = createAsyncThunk("login", async (body:LoginModel, {rejectWithValue}) => {
    try {
        const response = await authService.loginService(body)
        Cookie.set("login",JSON.stringify(body))
        return response
    } catch (error) {
        return rejectWithValue(error?.response?.data?.hata)
    }
}) 
export const register = createAsyncThunk("register", async (body:RegisterModel, {rejectWithValue}) => {
    try {
        const response = await authService.registerService(body)
        return response.data
    } catch (error) {
        return rejectWithValue(error?.response?.data?.hata)
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(login.fulfilled,(state,action) => {
            state.authData = action.payload?.data
            console.log("action.payload?.data",action.payload?.data)
        })
        builder.addCase(login.rejected,(state) => {
            state.error = true
        })
    },
})


export default authSlice.reducer