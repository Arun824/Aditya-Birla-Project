import React from "react";
import AlreadySubmittedComponent from "./AlreadySubmittedComponent";

const FooterButtonComponent = () => {
  return (
    <>
    <div
      style={{ fontFamily: "PF Handbook, sans-serif" }}
      className="container bg-white pt-2 fixed-bottom"
    >
      <AlreadySubmittedComponent />
      <div className="row justify-content-center my-2">
        <button className="col-5 m-2 py-2 submit-later-btn">
          Submit Later
        </button>

        <button
          className="col-5 m-2 border border-1 border-danger py-2  text-white bg-danger rounded"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Submit Now
        </button>
        </div>
    </div>
        <div
          style={{ fontFamily: "PF Handbook, sans-serif" }} 
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog submit-now-btn-model">
            <div className="modal-content px-3 pt-3 pb-4">
              <div className="modal-body p-0">
                <div>
                  <svg
                    className="checkmark"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>

                  <div className="popup-heading-text text-center">
                  Your documents in this Query have been submitted.
                  </div>

                  <div
                    className="my-3 d-flex justify-content-center p-3 rounded"
                    style={{ background: "rgb(222 222 222)" }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "400", color: "#00000080" }} className="text-center">Policy Number </div>
                      <div style={{ fontWeight: "700",color: "#000000DE" }}>13-25-0137778-00</div>
                    </div>
                  </div>
                  <div
                    className="my-3 d-flex justify-content-center p-3 br-2 rounded"
                    style={{ background: "rgb(222 222 222)" }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "400", color: "#00000080" }} className="text-center">Claim Number</div>
                      <div style={{ fontWeight: "700",color: "#000000DE" }} >44-33-2893338-45</div>
                    </div>
                  </div>
                  <button
                    style={{
                      fontSize: "18px",
                      backgroundColor: "#c7222a",
                      color: "white",
                      fontWeight: "700",
                    }}
                    type="button"
                    className="btn p-3 w-100 border border-rounded"
                    data-dismiss="modal"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
      
  );
};

export default FooterButtonComponent;
