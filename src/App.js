import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import "./App.css";

function App() {
  const [feed, setFeed] = useState([]);
  const parser = new Parser();

  // CORS PROXY for getting feeds
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      const rss = await parser.parseURL(
        CORS_PROXY + "https://www.dndbeyond.com/posts.rss"
      );
      console.log("rss", rss);
      setFeed(rss);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>D&RSS</h1>
      {feed &&
        feed.items &&
        feed.items.map((feedNew, key) => (
          <div
            key={key}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
          >
            <h1>
              {feedNew.title} - {feedNew.pubDate}
            </h1>
            <p>{feedNew.contentSnippet}</p>
            <p>{feedNew.link}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
