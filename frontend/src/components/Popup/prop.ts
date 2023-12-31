import React from "react";

export default interface PopupProps {
    open:boolean;
    close:(e:any) => void;
    children:React.ReactNode;
    title?:string
}