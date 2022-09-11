import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Parser from "rss-parser";
import RSSCard from "./RSSCard";
import RSSSelector from "./RSSSelector";

const RSSList = (props) => {
  const navigate = useNavigate();
  const [feed, setFeed] = useState([]);
  const [source, setSource] = useState("https://www.dndbeyond.com/posts.rss");
  const [nameFilter, setFilterName] = useState("");
  const parser = new Parser();

  // CORS PROXY for getting feeds
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      const rss = await parser.parseURL(CORS_PROXY + source);

      const sortedItems = rss.items.sort(function (a, b) {
        return ("" + a.title).localeCompare(b.title);
      });

      setFeed(sortedItems);
    };

    setFeed([]);
    fetchData();
  }, [source]);

  const openDetail = (rss) => {
    navigate("/details", { state: { feedNew: rss } });
    window.scrollTo(0, 0);
  };

  const filterFeed = (feed) => {
    if (nameFilter !== "") {
      return RegExp(nameFilter).test(feed.title);
    }
    return true;
  };

  return (
    <div className="px-2">
      <div className="flex flex-wrap justify-center">
        <RSSSelector source={source} setSource={setSource} />
        <div className="px-2 w-full">
          <label className="mb-2 text-gray-700 text-xl">Filter By Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="px-3 py-1.5 border border-solid border-gray-300 rounded ease-in-out focus:text-gray-700 transition focus:bg-white focus:border-blue-600 focus:outline-none"
            value={nameFilter}
            placeholder="Filter By Name"
            onChange={(e) => {
              setFilterName(e.target.value);
            }}
          />
        </div>
        <div className="px-2">
          <div className="flex flex-wrap">
            {feed && feed.length > 0 ? (
              feed
                .filter((feed) => filterFeed(feed))
                .map((rss, key) => (
                  <div
                    key={key}
                    className="flex justify-center my-1.5 w-screen"
                  >
                    <RSSCard feedNew={rss} openDetail={openDetail} />
                  </div>
                ))
            ) : (
              <div className="flex justify-center my-1.5 w-screen">
                <p className="font-semibold tracking-tight text-4xl p-4 text-red-600">
                  Loading...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSSList;
