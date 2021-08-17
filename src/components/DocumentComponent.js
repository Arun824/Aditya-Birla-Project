import React, { useState } from 'react';

const DocumentComponent = () => {
    const [docFile, setDocFile] = useState([]);
    const [docFileId, setDocFileId] = useState('')
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState('none')
   
     const hiddenFileInput = React.useRef(null);
     
     const handleClick = event => {
       hiddenFileInput.current.click();
      
     };
     const handleChange = event => {
       const fileUploaded = event.target.files[0];
       if(docFile.length <= 2 && fileUploaded.size/1000 <= 2000) {
        setDocFileId(fileUploaded.lastModified);
        setDocFile([...docFile ,fileUploaded]);
        setDisplay('block');
        event.target.value = null;
       }
     };

     const fileDelete = event =>{
      const index =  docFile.indexOf(event.target.className);
      docFile.splice(index, 1);
      setDocFile(docFile);
      setCount(count+1);
      setDisplay('none')
     }

    return (
        <div style={{fontFamily: "PF Handbook Pro, sans-serif", fontSize: "14px", fontWeight: "700"}} className="mb-3">
        <p className="px-3 ">5. Document 5</p>
        <div id={count} className="px-3 pb-2">
        <button onClick={handleClick} className="upload-btn fs-6 p-3 w-100"> 
        Upload Now
        <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
        </button></div>
       
        {docFile.map(item =>{
          return (
            <div id={docFileId} className="mx-3 mb-2 p-2 rounded border border-1 border-secondary w-94 d-flex justify-content-between" style={{display}}>
            <div className="doc-name">
              {item.name.split(' ')[0]}
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-2">{item.size/1000 >= 1000 ? `${Math.round(item.size/1000000)} mb` : `${Math.round(item.size/1000)} kb`}</div>
               <spna className={item.name.split(' ')[0]} onClick={fileDelete}>x</spna>
            </div>
          </div>
          )
        })}

        </div>
        
    )
}

export default DocumentComponent;