import React from "react";

import Photos from "./tabs/Photos.jsx";
import QAndA from "./tabs/QAndA.jsx";
import RoomTips from "./tabs/RoomTips.jsx";
import Reviews from "./tabs/Reviews.jsx";

const TabLoader = ({ tab }) => {
  switch (tab) {
    case "photos":
      return <Photos />;
    case "qa":
      return <QAndA />;
    case "room_tips":
      return <RoomTips />;
    case "reviews":
    default:
      return <Reviews />;
  }
};

export default TabLoader;
