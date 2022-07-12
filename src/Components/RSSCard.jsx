import React from "react";

const RSSCard = (props) => {
  return (
    <div
      className="w-3/5 cursor-pointer"
      onClick={() => props.openDetail(props.feedNew)}
    >
      <div className="block rounded-lg shadow-lg bg-darker-old text-center">
        <div className="p-4">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.feedNew.title}
          </h5>
        </div>
        <div className="px-6 pb-2 max-h-12 overflow-hidden">
          {props.feedNew.contentSnippet}
        </div>
        <p className="text-blue-600 htransition duration-300 ease-in-out">
          {props.feedNew.link}
        </p>
      </div>
    </div>
  );
};

export default RSSCard;
