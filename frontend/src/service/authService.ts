import RegisterModel from "@/models/RegisterModel"
import { api } from "./api"
import LoginModel from "@/models/LoginModel"


const loginService = async (data:LoginModel) => {
    return api({
        url:"/auth/login",
        method:"POST",
        data
    })
}

const registerService = async (data:RegisterModel) => {
    return api({
        url:"/auth/register",
        method:"POST",
        data
    })
}
const otherUser = async () => {
    return api({
        url:"/auth/otherUser",
        method:"GET",
    })
}
const getUser = async (id:string) => {
    return api({
    url:`/auth/getUser/${id}`,
    method:"GET"
})
}
const authService = {
    registerService,
    loginService,
    otherUser,
    getUser
}
export default authService