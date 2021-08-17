import React from 'react';

const DocumentMarkComponent = ({ handleChange, handleClick, status }) =>{

    return (
<div style={{fontFamely: "PF Handbook Pro, sans-serif", marginBottom:"80px" }} id="docId">
  <div className="d-flex">
  <input
          type="checkbox"
          value="Document 5"
          id="defaultCheck5"
          data-toggle="collapse"
          data-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseOne"
          onChange = {(e) => handleChange(e)}
        ></input>
         <label className="form-check-label mx-3" htmlFor="defaultCheck5">Document 5</label>
  </div>
       {status ? 
        <div style={{margin: "4px 20px 0px 27px"}}>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div>

            <div className="accordion accordion-flush" id="accordionFlushExampleDoc">
  <div style={{backgroundColor: "rgb(247 247 247)"}}  className="accordion-item">
   
      <button
        style={{borderRadius: "3px"}}
        className="accordion-button collapsed bg-white text-dark p-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne-doc"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
        id="faqId"
        
      >
        Already Submitted
      </button>
    
    <div 
      id="flush-collapseOne-doc"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExampleDoc"
    >
      <div className="accordion-body" id="doc-Id" style={{fontSize: "15px", color: "#000000de"}}>
        {/* radio button */}
        <form>
          <div id="sub-doc-id">
          <div className="d-flex py-1" id="sub-doc-mail">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="ONE" id="doc-mail-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="doc-mail-id">
            Mail
          </label>
          </div>
          <div className="d-flex py-1" id="sub-doc-courier">
          <input style={{marginRight: "15px"}} type="radio" name="role" value="TWO" id="doc-courier-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="doc-courier-id">
          Courier
          </label>
          </div>
         
         <div className="d-flex" id="sub-doc-myhand">
         <input style={{marginRight: "15px"}} type="radio" name="role" value="Three" id="doc-myhand-id" onClick = {(e) => handleClick(e)} />
          <label className="role" htmlFor="doc-myhand-id">
            My Hand
          </label>
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

export default DocumentMarkComponent;