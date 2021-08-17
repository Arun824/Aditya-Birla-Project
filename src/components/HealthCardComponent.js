import React, { useState } from 'react';

const HealthCardComponent = () => {
    const [helthCardFile, setHelthCardFile] = useState([]);
    const [healthCardId, setHelthCardId] = useState('');
    const [display, setDisplay] = useState('none')
    const [count, setCount] = useState(0);

     const hiddenFileInput = React.useRef(null);
     
     const handleClick = event => {
       hiddenFileInput.current.click();
      
     };
     const handleChange = event => {
       const fileUploaded = event.target.files[0];
       setHelthCardId(fileUploaded.lastModified);
       setHelthCardFile([...helthCardFile ,fileUploaded.name.split(' ')[0]]);
       setDisplay('block');
       event.target.value = null;
     };

     const fileDelete = event =>{
      const index =  helthCardFile.indexOf(event.target.className);
      helthCardFile.splice(index, 1);
      setHelthCardFile(helthCardFile);
      setCount(count+1);
      setDisplay('none');
     }

    return (
        <div style={{fontFamily: "PF Handbook Pro, sans-serif", fontSize: "14px", fontWeight: "700"}} className="mb-3">
        <p  className="px-3">2. Health card or Policy copy.</p>
        <div id={count} className="px-3 pb-2">
          <button onClick={handleClick} className="upload-btn fs-6 p-3 w-100"> 
        Upload Now
        <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
        </button></div>
        {helthCardFile.map(item =>{
          return (
            <div id={healthCardId} className="mx-3 mb-2 p-2 rounded border border-1 border-secondary w-94 d-flex justify-content-between" style={{display}}>
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

export default HealthCardComponent;