import React from "react";

import { Link } from "react-router-dom";

const Query = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "PF Handbook Pro, sans-serif",
          fontSize: "17px",
          lineHeight: "20px",
        }}
        className=" d-flex justify-content-between align-items-center w-100 px-3 pb-4 flex-nowrap"
      >
        <div className=" d-flex flex-nowrap">Query Documents</div>
        <div
          className="d-flex flex-grow-1"
          style={{
            height: "1px",
            backgroundColor: "#6c7174",
            opacity: "70%",
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
            marginBottom: "0",
          }}
        ></div>

        <div>
          <Link to="/query" style={{ textDecoration: "none" }}>
            <div className="d-flex col justify-content-end align-items-center" style={{ color: "#c7222a" }}>
              <span style={{ fontSize: "18px" }}>FAQ</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Query;
