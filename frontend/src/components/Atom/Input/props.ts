export default interface InputProps {
    placeholder?:string;
    name:string;
    type:"text" | "email" | "password"
    register:any
    errors:any
    required:boolean
   // id:string
}