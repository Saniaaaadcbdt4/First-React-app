
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Aalert';




function App() {
  const [modeText, setModeText] = useState("Enable Dark Mode"); 
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); // clear the alert after 1.5 seconds
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setModeText('Enable Light Mode');
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setModeText("Enable Dark Mode");
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    
      <Navbar title="Textutils" aboutText="About Us"  mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
           {/*<Route
           path="/about" element={<About />}>
          </Route>*/}
          {/* <Route 
           exact path='/'element=*/}
           <TextForm heading="Enter your text here" mode={mode}
          showAlert={showAlert} />
          
           


          {/*</Routes>*/}

          
      </div>
      </>
  );
}

export default App;