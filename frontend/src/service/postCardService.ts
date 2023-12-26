import PostCardModel from "@/models/PostCardModel"
import { api } from "./api"

const getCard = async (dataId:string) => {
    return api({
        url:`/posts/getPost/${dataId}`,
        method:"GET",
    })
}

const getAllPost = async () => {
    return api({
        url:"/posts/getAllPost",
        method:"GET"
    })
} 
const createNewPost = async (data:PostCardModel) => {
    return api({
        url:`/posts/createPost`,
        method:"POST",
        data
    })
}
const like = async (data:any) => {
    return api({
        url:`/posts/likes/${data.postId}`,
        method:"PUT",
        data
    })
}

const deletePost = async (data:string) => {
    return api({
        url:`/posts/deletePost/${data}`,
        method:"DELETE",
    })
}

const postCardService = {
    getCard,
    getAllPost,
    createNewPost,
    like,
    deletePost
}

export default postCardService