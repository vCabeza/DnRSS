import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RSSDetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const openList = (rss) => {
    navigate("/");
  };

  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/5">
        <div className="flex p-4 justify-between border-b border-red-600 rounded-t-md">
          <h5 className="text-2xl font-medium text-gray-800">
            {location.state.feedNew.title}
          </h5>
          <button
            type="button"
            className="btn-close text-red-600 opacity-50 hover:opacity-80"
            aria-label="Close"
            onClick={openList}
          >
            Volver
          </button>
        </div>
        <div className="modal-body relative p-4 text-xl">
          {location.state.feedNew["content:encodedSnippet"]}
        </div>
      </div>
    </div>
  );
};

export default RSSDetail;
