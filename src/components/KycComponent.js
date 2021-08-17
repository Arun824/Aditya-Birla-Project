import React, { useState } from 'react';

const KycComponent = () => {
    const [kycFile, setKycFile] = useState([]);
    const [kycFileId, setKycFileId] = useState('');
    const [display, setDisplay] = useState('none')
    const [count, setCount] = useState(0);
   
     const hiddenFileInput = React.useRef(null);
     
     const handleClick = event => {
       hiddenFileInput.current.click();
      
     };
     const handleChange = event => {
       const fileUploaded = event.target.files[0];
       setKycFileId(fileUploaded.lastModified);
       setKycFile([...kycFile ,fileUploaded.name.split(' ')[0]])
       setDisplay('block');
       event.target.value = null;
     };

     const fileDelete = event =>{
      const index =  kycFile.indexOf(event.target.className);
      kycFile.splice(index, 1);
      setKycFile(kycFile);
      setCount(count+1);
      setDisplay('none')
     }

    return (
        <div style={{fontFamily: "PF Handbook Pro, sans-serif", fontSize: "14px", fontWeight: "700"}} className="mb-3">
        <p className="px-3">3. KYC documents (Photo ID, Address and age proof).</p>
        <div id={count+1} className="px-3 pb-2">
          <button  onClick={handleClick} className="upload-btn fs-6 p-3 w-100"> 
        Upload Now
        <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
        </button></div>
        {kycFile.map(item =>{
          return (
            <div id={kycFileId} className="mx-3 mb-2 p-2 rounded border border-1 border-secondary w-94 d-flex justify-content-between" style={{display}}>
            <div className="doc-name">
              {item}
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-2">278 kb</div>
               <spna className={item} onClick={fileDelete}>x</spna>
            </div>
          </div>
          )
        })}
        </div>
        
    )
}

export default KycComponent;