export default interface PostCardProps {
    description:string;
    image:string;
    title:string
    profileImage:string
    id:string;
    liked:Array<string>
    postId?:string
}