import React from 'react';

const InstructionComponent = () =>{

    return (
       <div style={{fontFamily: "PF Handbook Pro, sans-serif", fontSize: "14px", fontWeight: "700", height: "362px"}}>
                
      <p style={{fontWeight: "400"}} className="m-3">Documents to be couriered to the branch address:</p>

      <div>
        <p  className="m-3">6. Original Hospital Registration Certificate.</p>
        <div  style={{fontWeight: "400", fontSize: "12px"}}  className="m-3 py-2 rounded-pill  w-50 text-center mb-2 certificate" >
        Original Document Required
        </div>
      </div>

      <div>
        <p  className="m-3">7. Original discharge card / day care summary / transfer    summary or death summary.</p>
        <div   style={{fontWeight: "400", fontSize: "12px"}} className="m-3 py-2 rounded-pill  w-50 text-center mb-3 certificate" >
        Original Document Required
        </div>
      </div>
      
       </div>
    )
}

export default InstructionComponent;