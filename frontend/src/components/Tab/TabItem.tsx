import React from "react";
import TabItemProps from "./props";
import Style from "./style.module.css";

const TabItem: React.FC<TabItemProps> = ({
  title,
  children,
  isActive,
  setTab,
}) => {
  return (
    <div onClick={() => setTab(title)} className={` w-full`}>
      <p className={`${isActive === title && Style.active} my-4 p3-2`}>
        {title}
      </p>
      {isActive === title && <main className="visible">{children}</main>}
    </div>
  );
};
export default TabItem;
