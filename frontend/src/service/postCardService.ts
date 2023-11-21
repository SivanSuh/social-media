import { api } from "./api"

const getCard = async (dataId:string) => {
    return api({
        url:`/posts/getPost/${dataId}`,
        method:"GET",
    })
}

const postCardService = {
    getCard
}

export default postCardService