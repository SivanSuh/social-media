import LoginModel from "@/models/LoginModel";
import RegisterModel from "@/models/RegisterModel";
import authService from "@/service/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie"

interface AuthProps {
    authData:RegisterModel | null | unknown 
    error:any
}

const initialState:AuthProps = {
    authData:null,
    error:null
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
export const registerRequest = createAsyncThunk("register", async (body:RegisterModel, {rejectWithValue}) => {
    try {
        const response = await authService.registerService(body)
        console.log("reposn",response)
        return response
    } catch (error) {
        console.log("errr",error)
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
        })
        builder.addCase(login.rejected,(state,action) => {
            console.log("errr",action.payload)
            state.error = action.payload
        })
        // register

        builder.addCase(registerRequest.fulfilled,(state,action) => {
            state.authData = action.payload?.data
        })
        builder.addCase(registerRequest.rejected,(state,action) => {
            state.error = action.payload
        })
    },
})


export default authSlice.reducer