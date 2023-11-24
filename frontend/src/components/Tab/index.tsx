import React, { useState } from "react";
import TabProps from "./props";
import Style from "./style.module.css";

const Tab: React.FC<TabProps> = ({
  children,
  //title = "Followers",
  //tab,
  setTab,
  isActive = 1,
}) => {
  return <div className={Style.tab}>{children}</div>;
};

export default Tab;
