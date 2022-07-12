import React from "react";

const RSSCard = (props) => {
  return (
    <div
      className="w-3/5 cursor-pointer"
      onClick={() => props.openDetail(props.feedNew)}
    >
      <div className="block rounded-lg shadow-lg bg-darker-old text-center">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.feedNew.title}
          </h5>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p>{props.feedNew.contentSnippet}</p>
        </div>
        <a
          href={props.feedNew.link}
          className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          {props.feedNew.link}
        </a>
      </div>
    </div>
  );
};

export default RSSCard;
