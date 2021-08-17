import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClaimFormMarkComponent from "./ClaimFormMarkComponent";
import HealthCardMarkComponent from "./HealthCardMarkComponent";
import KycDocumentMarkComponent from "./KycDocumentMarkComponent";
import ImplantStrikeMarkComponent from "./ImplantStrikeMarkComponent";
import DocumentMarkComponent from "./DocumentMarkComponent";

const Sub = () => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("");
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setStatus(e.target.checked);
    setValue(e.target.value);
    setId("");
  };

  const handleClick = (e) => {
    setId(e.target.id);
  };

  const example = `exampleModel`;

  return (
    <>
      <div
        style={{ fontFamily: "PF Handbook Pro, sans-serif", fontSize: "12px" }}
        className="p-3 text-secondary"
      >
        Please mark which documnets are already submitted.
        <div className="m-1">
          <section>
            <ClaimFormMarkComponent
              status={status}
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <HealthCardMarkComponent
              status={status}
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <KycDocumentMarkComponent
              status={status}
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <ImplantStrikeMarkComponent
              status={status}
              handleChange={handleChange}
              handleClick={handleClick}
            />
            <DocumentMarkComponent
              status={status}
              handleChange={handleChange}
              handleClick={handleClick}
            />
          </section>
        </div>
      </div>
      <div className="container bg-white fixed-bottom">
        <div className="row justify-content-center my-2 ">
          <Link
            style={{ textDecoration: "none" }}
            className="col-5 m-2 border border-1 border-danger py-2 rounded text-danger text-center"
            to="/"
          >
            Cancel
          </Link>
            <button
              type="button"
              className={`col-5  m-2  py-2 ${
                status ? `active-color ` : `unactive-color`
              } rounded`}
              data-toggle="modal"
              data-target={`#${example}${id}`}
              disabled={!status}
            >
              proceed
            </button>
            </div>
            </div>

            <div
              className="modal fade "
              id={example}
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    Please select the mode in ({value})
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id={`${example}${id}`}
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel1"
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
                      <div className="popup-heading-text text-center ">
                        Your documents in this Query have been submitted.{" "}
                      </div>

                      <div
                        className="my-3 d-flex justify-content-center p-3 rounded"
                        style={{ background: "rgb(222 222 222)" }}
                      >
                        <div style={{ fontSize: "12px" }}>
                          <div style={{ fontWeight: "400", color: "#00000080" }} className="text-center">Policy Number </div>
                          <div style={{ fontWeight: "700",color: "#000000DE" }} >
                            13-25-0137778-00
                          </div>
                        </div>
                      </div>
                      <div
                        className="my-3 d-flex justify-content-center p-3 br-2 rounded"
                        style={{ background: "rgb(222 222 222)" }}
                      >
                        <div style={{ fontSize: "12px" }}>
                          <div style={{ fontWeight: "400", color: "#00000080" }} className="text-center">Claim Number</div>
                          <div style={{ fontWeight: "700",color: "#000000DE" }}>
                            44-33-2893338-45
                          </div>
                        </div>
                      </div>
                      <button
                        style={{
                          backgroundColor: "#c7222a",
                          color: "white",
                          fontWeight: "900",
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

export default Sub;
