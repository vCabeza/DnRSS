import React from "react";

const RSSDetail = (props) => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/5">
        <div className="flex p-4 justify-between border-b border-red-600 rounded-t-md">
          <h5 className="text-2xl font-medium text-gray-800">
            {props.feedNew.title}
          </h5>
          <button
            type="button"
            className="btn-close text-red-600 opacity-50 hover:opacity-80"
            aria-label="Close"
            onClick={props.openDetail}
          >
            Volver
          </button>
        </div>
        <div className="modal-body relative p-4 text-xl">
          {props.feedNew["content:encodedSnippet"]}
        </div>
      </div>
    </div>
  );
};

export default RSSDetail;
