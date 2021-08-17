import React from "react";
import { Link } from "react-router-dom";

const SubQueryComponent = () => {
  return (
    <div
      style={{ fontFamily: "PF Handbook Pro, sans-serif" }}
      className="p-3"
    >
      <div className="query-container1 my-2">
        <Link exact to="/" style={{ textDecoration: "none" }}>
          <div className="d-flex ">
            <span style={{ color: "gray" }} clasName="text-start">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </span>
            <div
              style={{ color: "black", fontSize: "20px", fontWeight: "700" }}
            >
              FAQ
            </div>
          </div>
        </Link>
      </div>

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <button
            className="accordion-button collapsed btn-faq"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            id="faqId"
          >
            <span style={{ fontsize: "14px"}}>
              Where to download required documents?
            </span>
          </button>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{ backgroundColor: "rgb(247 247 247)" }}
              class="accordion-body"
            >
              <span style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum Bundles
              </span>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s when 
                unknown printer.
              </p>
              <span style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum2 Bundles
              </span>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s when an
                unknown printer.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              style={{ fontWeight: "bold" }}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              id="faqId"
            >
              What is an Implant Striker Stamp
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{ backgroundColor: "rgb(247 247 247)" }}
              class="accordion-body"
            >
              <span style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum Bundles
              </span>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since 1500s when an
                unknown printer.
              </p>
              <span style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum2 Bundles
              </span>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s when an
                unknown printer.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <button
            style={{ fontWeight: "bold" }}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
            id="faqId"
          >
            What Documents belong to which plan
          </button>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{ backgroundColor: "rgb(247 247 247)" }}
              class="accordion-body"
            >
              <div style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum Bundles
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s when an
                unknown printer.
              </p>
              <div style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum2 Bundles
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s when an
                unknown printer.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <button
            style={{ fontWeight: "bold" }}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
            id="faqId"
          >
            Are Form A and Form B the same?
          </button>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{ backgroundColor: "rgb(247 247 247)" }}
              class="accordion-body"
            >
              <div style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum Bundles
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s when an
                unknown printer.
              </p>
              <div style={{ fontSize: "14px", fontWeight: "900" }}>
                Lorem Ipsum2 Bundles
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#6b6b6b",
                }}
              >
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s when an
                unknown printer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubQueryComponent;
