import React from 'react';

const ImplantStrikeMarkComponent = ({ handleChange, handleClick, status, textarea }) =>{

    return (
       <div style={{fontFamely: "PF Handbook Pro, sans-serif"}} className="my-3" id="implantId">
         <div className="d-flex">
           <div className="">
           <input
          type="checkbox"
          value="Implant stickers stamp; invoice for all implants used during the surgeries"
          id="defaultCheck4"
          data-toggle="collapse"
          data-target="#collapseFour"
          aria-expanded="true"
          aria-controls="collapseOne"
          onChange = {(e) => handleChange(e)}
        ></input>
           </div>
         <label className="form-check-label mx-3" htmlFor="defaultCheck4">Implant stickers stamp; invoice for all implants used during the surgeries.</label>
         </div>        
        {status ? 
        <div style={{margin: "4px 20px 0px 27px"}}>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          > 
          <div>

          <div className="accordion accordion-flush" id="accordionFlushExampleImplant">
  <div style={{backgroundColor: "rgb(247 247 247)"}}  className="accordion-item">
   
      <button
        style={{borderRadius: "3px"}}
        className="accordion-button collapsed bg-white text-dark rounded p-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne-implant"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
        id="faqId"
        
      >
        Already Submitted
      </button>
    
    <div 
      id="flush-collapseOne-implant"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExampleImplant"
    >
      <div className="accordion-body" id="implant-Id" style={{fontSize: "15px", color: "#000000de"}}>
        {/* radio button */}
        <form>
          <div id="sub-implant-id">
          <div className="d-flex py-1" id="sub-implant-mail">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="ONE" id="implant-mail-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="implant-mail-id">
            Mail
          </label>
          </div>
          <div className="d-flex py-1" id="sub-implant-courier">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="TWO" id="implant-courier-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="implant-courier-id">
          Courier
          </label>
          </div>
         
         <div className="d-flex" id="sub-implant-myhand">
         <input style={{marginRight: "15px"}} type="radio" name="role" value="Three" id="implant-myhand-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="implant-myhand-id">
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
        : null}
      </div>
    )
}

export default ImplantStrikeMarkComponent;