import PostCardModel from "@/models/PostCardModel";
import authService from "@/service/authService";
import postCardService from "@/service/postCardService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PostSliceProps {
    posts:PostCardModel[] | null | any;
    error:boolean;
    userPost:any
    liked:any
}

const initialState:PostSliceProps = {
    posts:null,
    error:false,
    userPost:[],
    liked:{}
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

export const likeButton = createAsyncThunk("like",async (data:any,{rejectWithValue}) => {
    try {
        const response = await postCardService.like(data);
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getAllPosts = createAsyncThunk("get-all-post",async () => {
    try {
        const response = await postCardService.getAllPost();
        return response
    } catch (error) {
        console.log(error)
    }
})

export const deletePostId = createAsyncThunk("delete-post", async (data:string) => {
    try {
        const response = await postCardService.deletePost(data);
        return response
    } catch (error) {
        console.log(error)
    }
}) 

const postCardSlice = createSlice({
    name:"PostCard",
    initialState,
    reducers:{
      
    },
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
            console.log("casca",action.payload?.data)
            state.posts.push(action.payload?.data)
        })
        builder.addCase(createNewPosts.rejected,(state,action) => {
            state.error = true
        })

        // like 
        builder.addCase(likeButton.fulfilled,(state,action) => {
            state.liked = action.payload
        })

        // get All Post
        builder.addCase(getAllPosts.fulfilled,(state,action) => {
            state.posts = action.payload?.data
        })

        // delete post 
        builder.addCase(deletePostId.fulfilled,(state,action) => {
           state.posts = state.posts?.filter((val:any) => val?._id  !== action.payload?.data?._id)
        })

    }
})

export default postCardSlice.reducer