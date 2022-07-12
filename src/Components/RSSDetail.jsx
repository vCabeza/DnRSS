import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RSSDetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) navigate("/");
  }, [location.state, navigate]);

  const openList = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center w-screen">
      {location.state && (
        <div className="w-3/5 text-left">
          <div className="flex p-4 justify-between border-b border-red-600 rounded-t-md">
            <h5 className="text-2xl font-medium text-gray-800">
              {location.state.feedNew.title}
              {location.state.feedNew.creator && (
                <p>by: {location.state.feedNew.creator}</p>
              )}
            </h5>
            <button
              type="button"
              className="btn-close text-red-600 opacity-50 hover:opacity-80"
              aria-label="Close"
              onClick={openList}
            >
              Back
            </button>
          </div>
          <div className="modal-body  relative pl-4 pt-1 ">
            <a
              href={location.state.feedNew.link}
              target="_blank"
              className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out"
            >
              {location.state.feedNew.link}
            </a>
          </div>
          <div className="modal-body relative p-4 text-xl">
            {location.state.feedNew["content:encodedSnippet"]
              ? location.state.feedNew["content:encodedSnippet"]
              : location.state.feedNew.contentSnippet}
          </div>
        </div>
      )}
    </div>
  );
};

export default RSSDetail;
