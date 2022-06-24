import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import About from './components/About'
import Alert from './components/Alert';

import React, {useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`)
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  const toggleMood = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = `#192d40`;
      showAlert("Dark mode has been enabled", "Success");
      document.title = `TextUtls - Dark Mood`;

      // setInterval(() => {
      //   document.title  = "TextUtil is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Insatll TextUtil Now";
      // }, 1500);
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor= `white`;
      showAlert("Light mode has been enabled", "Success");
      document.title = `TextUtls - Light Mood`;
      
    }
  }


  return (
    <>
        {/* <Router> */}
          <Navbar title = "TextUtils2" About_Us = "About" mode = {mode} toggleMood={toggleMood}/>
          <Alert alert ={alert}/>

        <div className="container my-3">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" heading2 = "Your text Summery" heading3 = "Preview" mode = {mode}/>
        </div>

        {/* <About heading1 = "About Us"/> */}

        {/* <Routes>
          <Route exact path="/about" element = {<About heading1 = "About Us"/>} />

          <Route exact path="/"  element = {<div className="container my-3">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" heading2 = "Your text Summery" heading3 = "Preview" mode = {mode}/>
        </div>}/>
          
        </Routes> */}
        
        {/* </Router> */}



    </>
  );
}

export default App;
