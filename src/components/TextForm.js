import React, {useState} from "react";



export default function TextForm(props) {

  const [text, setText] = useState(``);


  const HandleUpClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success")
    document.title= "Convert into UpperCase";
  }
  const HandleLoClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success")
    document.title= "Convert into LowerCase";


  }
  
  const HandleReplaceText = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.replace("Umar","Muhammad Umar Shabbir Kiani");
    setText(newText);
    props.showAlert("Successful Replace", "Success")
    document.title= "Replace SuccessFull";


  }

  const intoTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
        let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
        return newText;
    });
    setText(newText.join(" "));

  }

  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Converted to LowerCase", "Success")

  }

  const HandleCopyText = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copy Text", "Success")
    document.title= "Copy Text";


  }

  const HandleClearClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "Success")
    document.title= "Clear Text";


  }


  const HandleOnChange = (event) => {
    // console.log("OnChange is invoked");
    setText(event.target.value);
  }

  return (
    <>


    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows={8} style={{backgroundColor: props.mode===`dark`?`#355069`:`white`, color: props.mode==="dark"?"white":"black"}} />
    </div>
    <button className="btn btn-primary" onClick={HandleUpClick}>Convert into UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={HandleLoClick}>Convert into LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={HandleReplaceText}>Replace Text</button>
    <button className="btn btn-primary mx-1" onClick={intoTitleCase}>Capatilize Text</button>
    <button className="btn btn-primary mx-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1" onClick={HandleCopyText}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={HandleClearClick}>CLear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
    <h3>{props.heading2}</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>

    <h4>{props.heading3}</h4>
    <p>{text.length>0?text : "Enter something in the text box above to preview it here"}</p>

    </div>
    </>
  );
}
