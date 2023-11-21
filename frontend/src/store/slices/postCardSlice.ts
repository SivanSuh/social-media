import PostCardModel from "@/models/PostCardModel";
import postCardService from "@/service/postCardService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PostSliceProps {
    posts:PostCardModel | null;
    error:boolean
}

const initialState:PostSliceProps = {
    posts:null,
    error:false
}

export const getUserPost = createAsyncThunk("getPost", async (data:string, {rejectWithValue}) => {
    try {
        const response = await postCardService.getCard(data)
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

const postCardSlice = createSlice({
    name:"PostCard",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getUserPost.fulfilled,(state,action) => {
            state.posts = action.payload?.data
        })
        builder.addCase(getUserPost.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default postCardSlice.reducer