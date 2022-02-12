import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setmode] = useState('light')
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
   setAlert({
     msg : message,
     type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.background = '#154360'
      showAlert("Dark mode has been enabled","success")
    }else{
      setmode ('light') 
      document.body.style.background = 'white'
      showAlert("Light mode has been enabled","success")
    }
    
  }
  return (
    <>
    <Router>
    <Navbar title ="TextUtils" abutText="Abut us" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
    <Switch>
          <Route exact path="/about">
          <About mode = {mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text" mode = {mode}/> 
          </Route>
    </Switch>    
    </div>
    </Router>
    </>
  );
}

export default App;
