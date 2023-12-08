import PostCardModel from "@/models/PostCardModel";
import authService from "@/service/authService";
import postCardService from "@/service/postCardService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PostSliceProps {
    posts:PostCardModel | null;
    error:boolean;
    userPost:any
}

const initialState:PostSliceProps = {
    posts:null,
    error:false,
    userPost:[]
}

export const getUserPost = createAsyncThunk("getPost", async (data:string, {rejectWithValue}) => {
    try {
        const response = await postCardService.getCard(data)
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getAllUserPost = createAsyncThunk("get-user-post", async (id:string) => {
    try {
        const response = await authService.getUserPost(id)
        return response
    } catch (error) {
        console.log(error)
    }
})

export const createNewPosts = createAsyncThunk("new-post",async (data:PostCardModel) => {
    try {
        const response = await postCardService.createNewPost(data);
        return response
    } catch (error) {
        console.log(error)
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

        // get user post
        builder.addCase(getAllUserPost.fulfilled,(state,action) => {
            state.userPost = action.payload?.data
        })

        // create post 
        builder.addCase(createNewPosts.fulfilled,(state,action) => {
            state.userPost.push(action.payload)
        })
        builder.addCase(createNewPosts.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default postCardSlice.reducer