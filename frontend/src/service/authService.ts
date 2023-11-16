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

export default {
    registerService,
    loginService
}