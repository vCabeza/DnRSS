import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Parser from "rss-parser";
import RSSCard from "./RSSCard";

const RSSList = (props) => {
  const navigate = useNavigate();
  const [feed, setFeed] = useState([]);
  const parser = new Parser();

  // CORS PROXY for getting feeds
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      const rss = await parser.parseURL(
        CORS_PROXY + "https://www.themonstersknow.com/feed/"
      );
      console.log("rss", rss);
      setFeed(rss);
    };

    fetchData();
  }, []);

  const openDetail = (rss) => {
    navigate("/details", { state: { feedNew: rss } });
  };

  return (
    <div className="px-2">
      <div className="flex flex-wrap justify-center">
        <div className="px-2">
          <div className="flex flex-wrap">
            {feed &&
              feed.items &&
              feed.items.length > 0 &&
              feed.items.map((rss, key) => (
                <div key={key} className="flex justify-center my-1.5 w-screen">
                  <RSSCard feedNew={rss} openDetail={openDetail} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSSList;
