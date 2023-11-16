import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
        auth:authSlice
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch :() => typeof store.dispatch = useDispatch