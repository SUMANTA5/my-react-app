import React, {useState} from 'react'
export default function TextForm(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convertted to upper case!","success")


  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convertted to lower case!","success")

  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Clear!","success")
  }
  const handleCopyClick = () =>{
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copy!","success")
  }
  const handleRemovExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remov extra spaces!","success")
  }
const handleOnChange = (event) =>{
   setText(event.target.value)
  }
const[text, setText] = useState('');
 return (
   <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode === 'dark'? '#154360':'white',
      color: props.mode === 'dark'? 'white':'black'}}  id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleRemovExtraSpaces}>Remov extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h2>
        Your text summary
      </h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
   )
}
