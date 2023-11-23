import React from "react";

export default interface DropdownProps {
    open:boolean;
    children:React.ReactNode;
    setOpen:(e:boolean) => void;
    values:React.ReactNode
}