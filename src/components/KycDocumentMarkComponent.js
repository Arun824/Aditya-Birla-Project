import React from 'react';

const KycDocumentMarkComponent = ({ handleChange, handleClick, status, textarea }) =>{

    return (
<div style={{fontFamely: "PF Handbook Pro, sans-serif"}} className="my-3" id="kycId">
        <div className="d-flex">
        <input
          type="checkbox"
          value="KYC documnets (Photo ID, Address and age proof)"
          id="defaultCheck3"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseOne"
          onChange = {(e) => handleChange(e)}
        ></input>
         <label className="form-check-label mx-3" htmlFor="defaultCheck3">KYC documnets (Photo ID, Address and age proof)</label>
        </div>
        {status ? 
        <div style={{margin: "4px 20px 0px 27px"}}>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div>
            
            <div className="accordion accordion-flush" id="accordionFlushExampleKyc">
  <div style={{backgroundColor: "rgb(247 247 247)"}}  className="accordion-item">
   
      <button
        style={{borderRadius: "3px"}}
        className="accordion-button collapsed bg-white text-dark rounded p-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne-kyc"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
        id="faqId"
        
      >
        Already Submitted
      </button>
    
    <div 
      id="flush-collapseOne-kyc"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExampleKyc"
    >
      <div className="accordion-body" id="kycId" style={{fontSize: "15px", color: "#000000de"}}>
        {/* radio button */}
        <form>
           <div id="sub-kyc-id">
          <div className="d-flex py-1" id="sub-kyc-mail-id">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="ONE" id="kyc-mail-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="kyc-mail-id">
            Mail
          </label>
          </div>
          <div className="d-flex py-1" id="sub-kyc-courier-id">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="TWO" id="kyc-courier-id"  onClick = {(e) => handleClick(e)}/>
          <label className="role" htmlFor="kyc-courier-id">
          Courier
          </label>
          </div>
         
         <div className="d-flex" id="sub-kyc-myhand-id">
         <input style={{marginRight: "15px"}} type="radio" name="role" value="Three" id="kyc-myhand-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="kyc-myhand-id">
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
        </div>
        : null }
      </div>
    )
}

export default KycDocumentMarkComponent;