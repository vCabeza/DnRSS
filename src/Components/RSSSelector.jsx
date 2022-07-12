import React from "react";

const RSSSelector = (props) => {
  const activeClass =
    "btn-close text-2xl px-4 text-red-800 opacity-90 hover:opacity-100";
  const notActiveClass =
    "btn-close text-2xl px-4 text-red-600 opacity-80 hover:opacity-100";

  return (
    <div className="px-2">
      <p className="text-gray-900 text-xl font-medium">Select a source</p>
      <div className="pb-2">
        <button
          type="button"
          className={
            props.source === "https://www.dndbeyond.com/posts.rss"
              ? activeClass
              : notActiveClass
          }
          aria-label="D&D Beyond"
          onClick={() => props.setSource("https://www.dndbeyond.com/posts.rss")}
        >
          D&D Beyond
        </button>
        <button
          type="button"
          className={
            props.source === "https://slyflourish.com/index.xml"
              ? activeClass
              : notActiveClass
          }
          aria-label="Sly Flourish"
          onClick={() => props.setSource("https://slyflourish.com/index.xml")}
        >
          Sly Flourish
        </button>
        <button
          type="button"
          className={
            props.source === "https://thedndgeek.co.uk/feed"
              ? activeClass
              : notActiveClass
          }
          aria-label="The DnD Geek"
          onClick={() => props.setSource("https://thedndgeek.co.uk/feed")}
        >
          The DnD Geek
        </button>
        <button
          type="button"
          className={
            props.source === "https://dmdavid.com/feed/"
              ? activeClass
              : notActiveClass
          }
          aria-label="DMDavid Blog"
          onClick={() => props.setSource("https://dmdavid.com/feed/")}
        >
          DMDavid Blog
        </button>
        <button
          type="button"
          className={
            props.source === "https://www.themonstersknow.com/feed/"
              ? activeClass
              : notActiveClass
          }
          aria-label="Monsters Know"
          onClick={() =>
            props.setSource("https://www.themonstersknow.com/feed/")
          }
        >
          The Monsters Know What They're Doing
        </button>
      </div>
    </div>
  );
};

export default RSSSelector;
