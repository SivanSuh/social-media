import React, { useEffect } from "react";
import FollowerdCardProps from "./props";

const FollowersCard: React.FC<FollowerdCardProps> = ({ item }) => {
  return <div className="w-20 flex items-center gap-3">{item}</div>;
};
export default FollowersCard;
