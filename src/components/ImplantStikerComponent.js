import React, { useState } from 'react';

const ImplantStikerComponent = () => {
    const [implementFile, setImplemetFile] = useState([]);
    const [implementFileId, setImplementFileId] = useState('')
    const [display, setDisplay] = useState('none')
    const [count, setCount] = useState(0);

     const hiddenFileInput = React.useRef(null);
     
     const handleClick = event => {
       hiddenFileInput.current.click();
      
     };
     const handleChange = event => {
       const fileUploaded = event.target.files[0];
       if(implementFile.length <= 2 && fileUploaded.size/1000 <= 2000)
      {
        setImplementFileId(fileUploaded.lastModified);
        setImplemetFile([...implementFile ,fileUploaded]);
        setDisplay('block');
        event.target.value = null;
      }
     };

     const fileDelete = event =>{
      const index =  implementFile.indexOf(event.target.className);
      implementFile.splice(index, 1);
      setImplemetFile(implementFile);
      setCount(count+1);
      setDisplay('none')
     }

    return (
        <div style={{fontFamily: "PF Handbook Pro, sans-serif", fontSize: "14px", fontWeight: "700"}} className="mb-3">
        <p className="px-3">4. Implant stickers stamp; invoice for all implants used during the surgeries.</p>
        <div id={count+1} className="px-3 pb-2">
          <button onClick={handleClick}  className="upload-btn fs-6 p-3 w-100"> 
        Upload Now
        <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
        </button></div> 
        {implementFile.map(item =>{
          return (
            <div id={implementFileId} className="mx-3 mb-2 p-2 rounded border border-1 border-secondary w-94 d-flex justify-content-between" style={{display}}>
            <div className="doc-name">
              {item.name.split(' ')[0]}
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-2">{item.size/1000 >= 1000 ? `${Math.round(item.size/1000000)} mb` : `${Math.round(item.size/1000)} kb`}</div>
               <spna className= {item.name.split(' ')[0]} onClick={fileDelete}>x</spna>
            </div>
          </div>
          )
        })}
        </div>
        
    )
}

export default ImplantStikerComponent;