export default interface UserCardProps {
    item:ItemProp
}
interface ItemProp {
    _id: string
  userName: string
  email: string
  password: string
  profilePicture: string
  followers: string[]
  following:string[]
  liked: string[]
  __v: number
}