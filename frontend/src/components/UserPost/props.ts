export default interface UserPostProps{
    items:UserItems
}

interface UserItems {
    _id:string;
    description:string;
    image:string;
    liked:Array<string>
    user:any
}