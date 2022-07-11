import React from "react";
import RSSCard from "./RSSCard";

const RSSList = (props) => {
  return (
    <div className="px-2">
      <div className="flex flex-wrap">
        {props.feed &&
          props.feed.length > 0 &&
          props.feed.map((rss, key) => (
            <div
              key={key}
              className="flex justify-center my-1.5 w-screen cursor-pointer"
            >
              <RSSCard feedNew={rss} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RSSList;
