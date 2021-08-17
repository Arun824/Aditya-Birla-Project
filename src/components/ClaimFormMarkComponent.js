import React from "react";

const ClaimFormMarkComponent = ({ handleChange, handleClick, status, textarea }) => {

 


  return (
    <div style={{fontFamely: "PF Handbook Pro, sans-serif"}} className="my-3" id="claimId">
      <div className="d-flex ">
        <input
          type="checkbox"
          value="Claim form Part A (Duly completed by Insured)"
          id="check"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
          onChange={(e) => handleChange(e)}
        ></input>
        <label id="labelId" className="form-check-label mx-3" htmlFor="check">
          Claim form Part A (Duly completed by Insured)
        </label>
      </div>
      {status ? 
      <div style={{margin: "4px 20px 0px 27px"}}>
        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
       
       <div className="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor: "rgb(247 247 247)"}}  className="accordion-item">
   
      <button
         style={{fontWeight: "bold", fontSize: "14px"}}
        className="accordion-button collapsed bg-white text-dark rounded p-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
        id="faqId"
        
      >
        Already Submitted
      </button>
    
    <div 
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body" id="claim-id" style={{fontSize: "15px", color: "#000000de"}}>
        {/* radio button */}
        <form>
           <div id="sub-claim">
          <div className="d-flex py-1" id="sub-claim-mail">
          <input  style={{marginRight: "15px"}} type="radio" name="role" value="ONE" id="claim-mail-id" onClick = {(e) => handleClick(e)}/>
          <label className="role" htmlFor="claim-mail-id">
            Mail
          </label>
          </div>
          <div className="d-flex py-1" id="sub-claim-courier">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="TWO" id="claim-courier-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="claim-courier-id">
          Courier
          </label>
          </div>
         
         <div className="d-flex" id="sub-claim-myhand">
         <input style={{marginRight: "15px"}} type="radio" name="role" value="Three" id="claim-myhand-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="claim-myhand-id">
            My Hand
          </label>
         </div>
         <div style={{display: textarea}} className="p-2">
           <textarea rows="4" className="w-100 form-control"></textarea>
           </div>
         </div>
         </form>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
      : null }
    </div>
  );
};
export default ClaimFormMarkComponent;
