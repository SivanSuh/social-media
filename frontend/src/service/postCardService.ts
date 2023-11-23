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
const postCardService = {
    getCard,
    getAllPost
}

export default postCardService