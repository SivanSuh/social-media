export default  interface RegisterModel {
    user: User ;
  }
  
  export interface User {
    _id: string
    userName: string
    profilPicture: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
  }
  