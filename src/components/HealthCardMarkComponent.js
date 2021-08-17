import React from 'react';

const HealthCardMarkComponent = ({ handleChange, handleClick, status, textarea }) =>{

    return(
        <div style={{fontFamely: "PF Handbook Pro, sans-serif"}} className="my-3" id="healthId">
          <div  className="d-flex">
          <input
          type="checkbox"
          value="Health Card or Policy Copy"
          id="defaultCheck2"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          onChange = {(e) => handleChange(e)}
        ></input>
        <label className="form-check-label mx-3" htmlFor="defaultCheck2">Health Card or Policy Copy.</label>
          </div>
        {status ? 
        <div  style={{margin: "4px 20px 0px 27px"}}>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div>
            <div className="accordion accordion-flush" id="accordionFlushExampleHealth">
  <div style={{backgroundColor: "rgb(247 247 247)"}}  className="accordion-item">
   
      <button
        style={{borderRadius: "3px"}}
        className="accordion-button collapsed bg-white text-dark rounded p-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne-health"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
        id="faqId"
        
      >
        Already Submitted
      </button>
    
    <div 
      id="flush-collapseOne-health"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExampleHealth"
    >
      <div className="accordion-body" id="health-id" style={{fontSize: "15px", color: "#000000de"}}>
        {/* radio button */}
        <form>
          <div id="sub-health">
          <div className="d-flex py-1" id="sub-health-mail">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="ONE" id="health-mail-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="health-mail-id">
            Mail
          </label>
          </div>
          <div className="d-flex py-1" id="sub-health-courier">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="TWO" id="health-courier-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="health-courier-id">
          Courier
          </label>
          </div>
         
         <div className="d-flex" id="sub-health-myhand">
         <input style={{marginRight: "15px"}} type="radio" name="role" value="Three" id="health-myhand-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="health-myhand-id">
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
export default HealthCardMarkComponent;