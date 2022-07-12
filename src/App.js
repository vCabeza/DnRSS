import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import "./App.css";
import RSSList from "./Components/RSSList";

function App() {
  const [feed, setFeed] = useState([]);
  const parser = new Parser();

  // CORS PROXY for getting feeds
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      const rss = await parser.parseURL(
        CORS_PROXY + "https://www.themonstersknow.com/feed/"
      );
      setFeed(rss);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="font-semibold tracking-tight text-4xl p-4">D&RSS</h1>

      {feed && (
        <div className="px-2">
          <div className="flex flex-wrap justify-center">
            <RSSList feed={feed.items} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
