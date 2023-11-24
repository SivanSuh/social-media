import React from "react";

export default interface TabProps { 
    children:React.ReactNode;
    //tab:string;
    setTab?:(val:any) => void;
    isActive?:string
}
export default interface TabItemProps {
    title?:string;
    children:React.ReactNode
    setTab?:(val:any) => void;
    isActive?:string
}