
import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
   // new state variable
    // new state variable

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClicktoUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        console.log("uppercase was clicked " + newText);
        props.showAlert("Converted to UpperCase: ","Success");
    }
    const handleClicktoLo=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to UpperCase: ","Primary");
    }

   
   
    
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        id="mybox"
                        rows="8"
                        onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',border:"1px solid black",color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleClicktoUp} >
                    Convert to Uppercase
                </button>
                <button className="btn btn-success mx-2" onClick={handleClicktoLo} >
                    Convert to LowerCase
                </button>
                
                
               

            </div>
            <div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.trim().split(/\s+/).filter(Boolean).length} <i>words</i> and {text.replace(/\s+/g, '').length} <i>characters</i></p>
                <h3>Roughly Estimate!</h3>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Write something to preview it here!"}</p>
             
            </div>
        </>
    );
}