import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    <Navbar title ="TextUtils" abutText="Abut us" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading = "Enter the text" mode = {mode}/> 
    </div>
    </>
  );
}

export default App;
