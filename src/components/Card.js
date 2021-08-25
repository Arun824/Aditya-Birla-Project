import React from "react";

const Card = ( {data} ) => {
  return (
    <div
      style={{ fontFamily: "PF Handbook Pro, sans-serif" }}
      className="card-container py-3 px-3 mx-3 my-4 bg-white"
      id="cardId"
    >
      <span
        style={{ fontSize: "20px", fontWeight: "700", lineHeight: "20px" }}
        className="text-dark"
        id="nameHeading"
      >
        Hi, {data.policy_holder_name}
      </span>

      <br />
      
      <span style={{ fontSize: "14px", fontWeight: "400", color: "#00000080" }}>
        We have a query regarding the following documents for the below
        mentioned Claim details.
      </span>

      <div
        className="w-18 card-box-container"
      >
        <div className="d-flex align-items-center py-1 border-2 border-bottom justify-content-between">
          <div style={{ color: "gray" }} className="flex-fill px-2 py-2">
            Claim Number:
          </div>
          <div className="flex-fill py-2 text-end text-dark px-2">
            44-33-2893338-45
          </div>
        </div>

        <div id="patientNameId" className="d-flex align-items-center py-1 border-2 border-bottom justify-content-between">
          <div style={{ color: "gray" }} className="flex-fill px-2 py-2">
            Patient’s Name:
          </div>
          <div className="flex-fill text-end text-dark px-2 ">
            Mrs. SANGEETA SINGH
          </div>
        </div>

        <div className=" d-flex align-items-center py-1 border-2 border-bottom justify-content-between">
          <div style={{ color: "gray" }} className="py-2 px-2 flex-fill">
            Policy Name:
          </div>
          <div className=" text-end text-dark flex-fill px-2">
            Aditya Birla Health Gain+
          </div>
        </div>

        <div className="d-flex align-items-center py-1 border-2  justify-content-between">
          <div style={{ color: "gray" }} className="flex-fill px-2">
            Policy Number:
          </div>
          <div className="flex-fill align-items-center py-2 border-2 justify-content-between text-end text-dark px-2">
            13-25-0137778-00
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
