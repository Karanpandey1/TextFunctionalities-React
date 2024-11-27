
import './App.css';

import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
  
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode=()=>{
    if(mode==='light'){setMode('dark');
    document.body.style.backgroundColor='blue';
    showAlert("Dark mode has been enabled","success");
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
{/* <Router>   */}
<Navbar title="textutiles" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<Alert alert={alert}/>
{/* <Routes> 
    <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
 </Routes> */}

{/* <button className="btn btm-primary" >Convert to uppercase</button> */}

</div>
{/* </Router> */}

<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
    
    </>
  );
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default App;
