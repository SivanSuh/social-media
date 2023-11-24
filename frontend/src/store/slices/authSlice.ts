import LoginModel from "@/models/LoginModel";
import OtherUserModels from "@/models/OtherUserModel";
import RegisterModel from "@/models/RegisterModel";
import authService from "@/service/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie"

interface AuthProps {
    authData:RegisterModel | null | unknown 
    error:any
    OtherUser:OtherUserModels | []
    selectUser:OtherUserModels | null
}

const initialState:AuthProps = {
    authData:null,
    error:null,
    OtherUser:[],
    selectUser:null
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

export const otherUsers = createAsyncThunk("other-user", async () => {
    try {
        const response = await authService.otherUser()
        console.log("reposn",response)
        return response
    } catch (error) {
        console.log("errr",error)
        
    }
})

export const selectedUser = createAsyncThunk("select-user", async (id:string) => {
    try {
        const response = await authService.getUser(id)
        return response
    } catch (error) {
        console.log(error)
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
        builder.addCase(otherUsers.fulfilled,(state,action) => {
            state.OtherUser = action.payload?.data
        })
        builder.addCase(otherUsers.rejected, (state,action) => {
            state.error = action.payload
        }) 

        builder.addCase(selectedUser.fulfilled,(state,action) => {
            state.selectUser = action.payload?.data
        })
        builder.addCase(selectedUser.rejected,(state,action) => {
            state.error = action.payload
        })
    },
})


export default authSlice.reducer