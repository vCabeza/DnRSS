import React, { useState } from "react";
import RSSCard from "./RSSCard";
import RSSDetail from "./RSSDetail";

const RSSList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNew, setSelectedNew] = useState({});

  const openDetail = (rss) => {
    setShowModal(!showModal);
    rss && setSelectedNew(rss);
  };

  return (
    <div className="px-2">
      {!showModal && (
        <div className="flex flex-wrap">
          {props.feed &&
            props.feed.length > 0 &&
            props.feed.map((rss, key) => (
              <div key={key} className="flex justify-center my-1.5 w-screen">
                <RSSCard feedNew={rss} openDetail={openDetail} />
              </div>
            ))}
        </div>
      )}

      {showModal && <RSSDetail openDetail={openDetail} feedNew={selectedNew} />}
    </div>
  );
};

export default RSSList;
